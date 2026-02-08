/* app.js
   Exam logic: randomized set, no-repeat pool per exam type using localStorage,
   timer, scoring, category breakdown, and review.
   UPDATED: matches real CSE subject distribution.
*/

const EXAM_COUNTS = { PRO: 170, SUB: 165 };

// Subject distribution blueprints (typical CSC distribution)
const BLUEPRINT = {
  PRO: [
    { name: "English", count: 50, cats: ["ENG","VOC","RC"] },
    { name: "Math", count: 40, cats: ["MATH"] },
    { name: "Logic & Reasoning", count: 40, cats: ["LOG","ANA"] },
    { name: "General Information", count: 40, cats: ["GEN"] },
  ],
  SUB: [
    { name: "English", count: 50, cats: ["ENG","VOC","RC"] },
    { name: "Math", count: 40, cats: ["MATH"] },
    // Clerical ability is commonly spelling/word usage/following instructions.
    // Our bank maps this best to Spelling + Analogy.
    { name: "Clerical Ability", count: 35, cats: ["SPL","ANA"] },
    { name: "General Information", count: 40, cats: ["GEN"] },
  ]
};

const LS_KEY = "cse_used_question_ids_v2";

function getUsedMap() {
  try { return JSON.parse(localStorage.getItem(LS_KEY) || "{}"); }
  catch { return {}; }
}
function setUsedMap(map) {
  localStorage.setItem(LS_KEY, JSON.stringify(map));
}

function resetUsedPool() {
  localStorage.removeItem(LS_KEY);
}

function secondsToHMS(sec) {
  const s = Math.max(0, Math.floor(sec));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const r = s % 60;
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(r)}`;
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

let currentSet = [];
let timerId = null;
let timeLeftSec = 0;

function sampleWithoutReplacement(list, n) {
  const arr = list.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, n);
}

/**
 * Picks questions to match the blueprint counts.
 * Prevents repeats across attempts on same browser until pool is exhausted.
 */
function pickQuestionsByBlueprint(examType) {
  const blueprint = BLUEPRINT[examType];
  const usedMap = getUsedMap();
  const used = new Set(usedMap[examType] || []);

  const totalPool = window.QUESTION_BANK.length;

  const availableForCats = (cats) =>
    window.QUESTION_BANK.filter(q => cats.includes(q.cat) && !used.has(q.id));

  // If any section can't be filled, refresh used list for this exam type
  let canSatisfy = true;
  for (const sec of blueprint) {
    if (availableForCats(sec.cats).length < sec.count) {
      canSatisfy = false;
      break;
    }
  }
  if (!canSatisfy) {
    usedMap[examType] = [];
    setUsedMap(usedMap);
    used.clear();
  }

  const chosen = [];
  for (const sec of blueprint) {
    const pool = availableForCats(sec.cats);
    const picked = sampleWithoutReplacement(pool, sec.count);
    chosen.push(...picked);
    picked.forEach(q => used.add(q.id)); // avoid overlaps between sections
  }

  // Shuffle final set
  const finalSet = sampleWithoutReplacement(chosen, chosen.length);

  // Save used ids
  const newUsed = new Set([...(usedMap[examType] || []), ...finalSet.map(q => q.id)]);
  usedMap[examType] = Array.from(newUsed);
  setUsedMap(usedMap);

  const remaining = totalPool - (usedMap[examType]?.length || 0);
  return { chosen: finalSet, poolRemaining: Math.max(0, remaining), poolTotal: totalPool, blueprint };
}

function renderExam(examType) {
  const count = EXAM_COUNTS[examType];
  const { chosen, poolRemaining, poolTotal, blueprint } = pickQuestionsByBlueprint(examType);
  currentSet = chosen;

  document.getElementById("pillType").textContent = examType === "PRO" ? "Professional" : "Subprofessional";
  document.getElementById("pillCount").textContent = `Items: ${count}`;

  const blueprintText = blueprint.map(b => `${b.name} ${b.count}`).join(" • ");
  document.getElementById("pillPool").textContent = `${blueprintText} • Pool remaining: ${poolRemaining} / ${poolTotal}`;

  const form = document.getElementById("examForm");
  form.innerHTML = "";

  chosen.forEach((q, idx) => {
    const qDiv = document.createElement("div");
    qDiv.className = "question";

    const meta = `<div class="qhead">
      <div>
        <div class="qmeta">#${idx+1} • ${escapeHtml(q.cat)} • ID: ${escapeHtml(q.id)}</div>
        <div class="qtext">${escapeHtml(q.q).replaceAll("\n","<br>")}</div>
      </div>
    </div>`;

    let choicesHtml = `<div class="choices">`;
    q.c.forEach((choice, ci) => {
      choicesHtml += `
        <label class="choice">
          <input type="radio" name="q${idx}" value="${ci}" />
          <span>${escapeHtml(choice)}</span>
        </label>`;
    });
    choicesHtml += `</div>`;

    qDiv.innerHTML = meta + choicesHtml;
    form.appendChild(qDiv);
  });

  document.getElementById("results").classList.add("hidden");
  document.getElementById("examArea").classList.remove("hidden");
  document.getElementById("status").classList.remove("hidden");
}

function startTimer(minutes) {
  if (timerId) clearInterval(timerId);
  timeLeftSec = Math.max(0, Math.floor(minutes * 60));
  document.getElementById("timeLeft").textContent = secondsToHMS(timeLeftSec);

  if (timeLeftSec === 0) return;

  timerId = setInterval(() => {
    timeLeftSec -= 1;
    document.getElementById("timeLeft").textContent = secondsToHMS(timeLeftSec);
    if (timeLeftSec <= 0) {
      clearInterval(timerId);
      timerId = null;
      submitExam(true);
    }
  }, 1000);
}

function computeResults() {
  const form = document.getElementById("examForm");
  let correct = 0;
  const byCat = {};
  const review = [];

  currentSet.forEach((q, idx) => {
    const picked = form.querySelector(`input[name="q${idx}"]:checked`);
    const pickedIndex = picked ? parseInt(picked.value, 10) : null;

    const ok = pickedIndex === q.a;
    if (ok) correct += 1;

    byCat[q.cat] = byCat[q.cat] || { total: 0, correct: 0 };
    byCat[q.cat].total += 1;
    if (ok) byCat[q.cat].correct += 1;

    review.push({
      n: idx + 1,
      cat: q.cat,
      q: q.q,
      choices: q.c,
      picked: pickedIndex,
      answer: q.a,
      ok,
      expl: q.expl || ""
    });
  });

  return { correct, total: currentSet.length, byCat, review };
}

function renderResults(res) {
  const pct = Math.round((res.correct / res.total) * 100);
  document.getElementById("scoreLine").innerHTML =
    `Score: <strong>${res.correct}</strong> / ${res.total} (<strong>${pct}%</strong>)`;

  const breakdown = document.getElementById("breakdown");
  breakdown.innerHTML = "";
  Object.entries(res.byCat).sort().forEach(([cat, v]) => {
    const p = Math.round((v.correct / v.total) * 100);
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h4>${cat}</h4>
      <div><span class="${p>=70?'good':'bad'}">${v.correct}/${v.total}</span> • ${p}%</div>`;
    breakdown.appendChild(card);
  });

  const reviewList = document.getElementById("reviewList");
  reviewList.innerHTML = "";
  res.review.forEach(r => {
    const div = document.createElement("div");
    div.className = "reviewItem";
    const pickedText = r.picked === null ? "<em>Unanswered</em>" : escapeHtml(r.choices[r.picked]);
    const ansText = escapeHtml(r.choices[r.answer]);
    div.innerHTML = `
      <div class="small">#${r.n} • ${escapeHtml(r.cat)} • ${r.ok ? '<span class="good">Correct</span>' : '<span class="bad">Incorrect</span>'}</div>
      <div class="qtext">${escapeHtml(r.q).replaceAll("\n","<br>")}</div>
      <div class="small">Your answer: ${pickedText}</div>
      <div class="small">Correct answer: <strong>${ansText}</strong></div>
      ${r.expl ? `<div class="small">Explanation: ${escapeHtml(r.expl)}</div>` : ""}
    `;
    reviewList.appendChild(div);
  });

  document.getElementById("examArea").classList.add("hidden");
  document.getElementById("results").classList.remove("hidden");
}

function submitExam(fromTimer=false) {
  if (timerId) { clearInterval(timerId); timerId = null; }
  const res = computeResults();
  renderResults(res);
  if (fromTimer) alert("Time is up! Your exam was submitted automatically.");
}

// ---------- UI wiring ----------
document.getElementById("startBtn").addEventListener("click", () => {
  const examType = document.getElementById("examType").value;
  const minutes = parseInt(document.getElementById("timerMinutes").value || "0", 10);
  renderExam(examType);
  startTimer(isNaN(minutes) ? 0 : minutes);
});

document.getElementById("submitBtn").addEventListener("click", () => submitExam(false));

document.getElementById("newSetBtn").addEventListener("click", () => {
  const examType = document.getElementById("examType").value;
  renderExam(examType);
});

document.getElementById("againBtn").addEventListener("click", () => {
  const examType = document.getElementById("examType").value;
  const minutes = parseInt(document.getElementById("timerMinutes").value || "0", 10);
  renderExam(examType);
  startTimer(isNaN(minutes) ? 0 : minutes);
});

document.getElementById("resetPoolBtn").addEventListener("click", () => {
  resetUsedPool();
  alert("Used-question pool cleared on this browser. Next exam can reuse any question.");
});
