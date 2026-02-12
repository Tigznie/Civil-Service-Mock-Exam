/**
 * CSC CSE Practice + Mock Exam (1 question at a time)
 * - Practice: choose subject, submit -> shows correct answer + explanation, next random question
 * - Mock: Professional (170, 3h10m) / Subprofessional (165, 2h40m), one question at a time, timer, results
 *
 * Question bank extracted from your reviewer PDFs (plus a few clearly-marked extra practice items where a PDF had fewer items).
 * Performance tracking is saved in your browser (localStorage).
 */

const SUBJECTS = [
  "Vocabulary",
  "Grammar",
  "Word Analogy",
  "Spelling",
  "Homophones",
  "Reading Comprehension",
  "Logical Reasoning",
  "Math (Basic Concepts)",
  "Problem Solving",
  "Finding Errors",
  "General Information"
];

const QUESTION_BANK = [
  {
    "id": "VOC-1",
    "subject": "Vocabulary",
    "prompt": "Teenagers are easily susceptible to peers influence.",
    "choices": [
      "Flexible",
      "Inspired",
      "Dependable",
      "Inclined"
    ],
    "answer": 3,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-2",
    "subject": "Vocabulary",
    "prompt": "The lotto winners will be selected at random.",
    "choices": [
      "By chance",
      "By competition",
      "By testing",
      "By interviewing"
    ],
    "answer": 0,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-3",
    "subject": "Vocabulary",
    "prompt": "If you are ambivalent with the answers, analyze the given problem.",
    "choices": [
      "Confusion",
      "Innocent",
      "Uncertain",
      "Unaware"
    ],
    "answer": 2,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-4",
    "subject": "Vocabulary",
    "prompt": "Cleanliness is still at a discount in many parts of the country.",
    "choices": [
      "Valued fully",
      "Not to be valued fully",
      "Attended to",
      "Believed"
    ],
    "answer": 1,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-5",
    "subject": "Vocabulary",
    "prompt": "My mother is always adamant in eating breakfast before leaving the house.",
    "choices": [
      "Resolute",
      "Uncertain",
      "Forgetful",
      "Clueless"
    ],
    "answer": 0,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-6",
    "subject": "Vocabulary",
    "prompt": "He left the country because of the ominous experiences he had in the past.",
    "choices": [
      "Unforgettable",
      "Threatening",
      "Ugly",
      "Remarkable"
    ],
    "answer": 1,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-7",
    "subject": "Vocabulary",
    "prompt": "Reading words without understanding their meaning is futile.",
    "choices": [
      "Helpless",
      "Useless",
      "Unnecessary",
      "Avoidable"
    ],
    "answer": 1,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-8",
    "subject": "Vocabulary",
    "prompt": "Mr.Henry Sy is now rolling in money.",
    "choices": [
      "Very rich",
      "Famous",
      "Losing money",
      "Successful in business"
    ],
    "answer": 0,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-9",
    "subject": "Vocabulary",
    "prompt": "Carry on with your work.",
    "choices": [
      "Continue",
      "Carry the work",
      "Stop",
      "Be on time"
    ],
    "answer": 0,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-10",
    "subject": "Vocabulary",
    "prompt": "She wears gold but people knows how ostentatious she can be.",
    "choices": [
      "Pretentious",
      "Ambitious",
      "Gorgeous",
      "Rebellious"
    ],
    "answer": 0,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-11",
    "subject": "Vocabulary",
    "prompt": "Jek is the apple of his mother's eye",
    "choices": [
      "Adored",
      "Dearly loved",
      "Always watched",
      "Pride"
    ],
    "answer": 1,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-12",
    "subject": "Vocabulary",
    "prompt": "He got the money to fund his checks in the bank at the eleventh hour.",
    "choices": [
      "11:00 am",
      "11:00 pm",
      "Just in time",
      "11th hour of the day"
    ],
    "answer": 2,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-13",
    "subject": "Vocabulary",
    "prompt": "He submitted a grotesque artwork that nobody in the class could relate to.",
    "choices": [
      "Different",
      "Weird",
      "Beautiful",
      "Colorful"
    ],
    "answer": 1,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-14",
    "subject": "Vocabulary",
    "prompt": "She is generous to a fault.",
    "choices": [
      "Excessively",
      "Seldom",
      "Rarely",
      "Infrequent"
    ],
    "answer": 0,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-15",
    "subject": "Vocabulary",
    "prompt": "Their clandestine affair remained unknown for three years.",
    "choices": [
      "Forbidden",
      "Surprise",
      "Secret",
      "Unacceptable"
    ],
    "answer": 2,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-16",
    "subject": "Vocabulary",
    "prompt": "The marketing officers were asked to go over the figures in their reports before the conference.",
    "choices": [
      "Compute",
      "Calculate",
      "Revise",
      "Review"
    ],
    "answer": 3,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-17",
    "subject": "Vocabulary",
    "prompt": "Business, like life, is much too extensive and lequescent to be wholly contained by any checklist, formula or theory. a,Structured",
    "choices": [
      "Changeable",
      "Complicated",
      "Shapeless"
    ],
    "answer": 2,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-18",
    "subject": "Vocabulary",
    "prompt": "They say love is like a firework, a fleeting moment.",
    "choices": [
      "Brief",
      "Unforgettable",
      "Shinny",
      "Remarkable"
    ],
    "answer": 0,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-19",
    "subject": "Vocabulary",
    "prompt": "We were forced to postpone the meeting.",
    "choices": [
      "Call off",
      "Put off",
      "Delay",
      "Do without"
    ],
    "answer": 0,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-20",
    "subject": "Vocabulary",
    "prompt": "Cara is repulsive and rebellious. She always speaks sordid words.",
    "choices": [
      "Dirty",
      "Vulgar",
      "Weird",
      "Bizarre"
    ],
    "answer": 1,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-21",
    "subject": "Vocabulary",
    "prompt": "Punctuality is imposed in this office.",
    "choices": [
      "Being cheerful",
      "Being courteous",
      "Being on time",
      "Being efficient"
    ],
    "answer": 2,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-22",
    "subject": "Vocabulary",
    "prompt": "Every time I see Cathy looking at me, I feel Euphoria in my bones.",
    "choices": [
      "Gravity",
      "Ecstasy",
      "Erotic",
      "Numb"
    ],
    "answer": 1,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-23",
    "subject": "Vocabulary",
    "prompt": "Recklessness always entails jeopardy.",
    "choices": [
      "Danger",
      "Crisis",
      "Apprehension",
      "Control"
    ],
    "answer": 0,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-24",
    "subject": "Vocabulary",
    "prompt": "Jomar resolved to act more wisely next time.",
    "choices": [
      "Promised",
      "Hoped",
      "Decided",
      "Consented"
    ],
    "answer": 2,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-25",
    "subject": "Vocabulary",
    "prompt": "I bought this book because when I read the blurb at the back, I fell in love with it.",
    "choices": [
      "Summary",
      "Teaser",
      "Blog",
      "Plot"
    ],
    "answer": 1,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-26",
    "subject": "Vocabulary",
    "prompt": "The woman reported that the diamonds snatched from here were genuine.",
    "choices": [
      "Valuable",
      "Real",
      "Imitations",
      "Synthetic"
    ],
    "answer": 1,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-27",
    "subject": "Vocabulary",
    "prompt": "Sanctuaries for wildlife have dwindle dalarmingly in the last decade.",
    "choices": [
      "Disappeared",
      "Changed",
      "Decreased",
      "Multiplied"
    ],
    "answer": 2,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-28",
    "subject": "Vocabulary",
    "prompt": "Finding a way out of the labyrinth 13thlast challenge of the competition.",
    "choices": [
      "Castle",
      "Forest",
      "Maze",
      "Box"
    ],
    "answer": 2,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-29",
    "subject": "Vocabulary",
    "prompt": "Myla loves to eat a prodigious amount of home-made bread.",
    "choices": [
      "Tiny",
      "Moderate",
      "Huge",
      "Slight"
    ],
    "answer": 2,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-30",
    "subject": "Vocabulary",
    "prompt": "There is still love in our hearts amidst our seemingly mundane existence.",
    "choices": [
      "Complicated",
      "Modern",
      "Worldly",
      "Wealthy"
    ],
    "answer": 2,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-31",
    "subject": "Vocabulary",
    "prompt": "Northstar Review Center and Crimzone Printing are going to merge by the middle the year.",
    "choices": [
      "Change owners",
      "Become one",
      "Expand",
      "Divide into two"
    ],
    "answer": 1,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-32",
    "subject": "Vocabulary",
    "prompt": "Cassy has a strong penchant in collecting cars.",
    "choices": [
      "Belief",
      "Fondness",
      "Hobby",
      "Route"
    ],
    "answer": 1,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-33",
    "subject": "Vocabulary",
    "prompt": "The recommendation of the wage council is repugnant to the employers.",
    "choices": [
      "Acceptable",
      "objectionable",
      "Beneficial",
      "Degrading"
    ],
    "answer": 1,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-34",
    "subject": "Vocabulary",
    "prompt": "It is futile to argue with the boss once he has made up his mind.",
    "choices": [
      "Useful",
      "Useless",
      "Hopeful",
      "Encouraging"
    ],
    "answer": 1,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-35",
    "subject": "Vocabulary",
    "prompt": "Diskettes and CDs are going obsolete.",
    "choices": [
      "Recycled",
      "Refurbished",
      "Updated",
      "Outdated"
    ],
    "answer": 3,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-36",
    "subject": "Vocabulary",
    "prompt": "One symptom of H-fever is nose-bleeding.",
    "choices": [
      "Symbol",
      "Caused",
      "sign",
      "Pain"
    ],
    "answer": 2,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-37",
    "subject": "Vocabulary",
    "prompt": "The Queen of the Night dances vivaciously.",
    "choices": [
      "Lively",
      "Awkward",
      "Kindly",
      "Sweetly"
    ],
    "answer": 0,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-38",
    "subject": "Vocabulary",
    "prompt": "The baffled owner acquiesced to the worker's demands.",
    "choices": [
      "Opposed",
      "Reacted",
      "Agreed",
      "Resisted"
    ],
    "answer": 2,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-39",
    "subject": "Vocabulary",
    "prompt": "The post is titled; please straighten it.",
    "choices": [
      "Sloping",
      "High",
      "Adjustable",
      "Level"
    ],
    "answer": 0,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-40",
    "subject": "Vocabulary",
    "prompt": "The court released a dogmatic statement that made people more hopeful.",
    "choices": [
      "Naive",
      "Unbelievable",
      "Assertive",
      "Unclear"
    ],
    "answer": 2,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-41",
    "subject": "Vocabulary",
    "prompt": "The union's grievance committee met with the school directors to protest the teacher's dismissal.",
    "choices": [
      "Retirement",
      "Personnel",
      "Scholarship",
      "Complaint"
    ],
    "answer": 3,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-42",
    "subject": "Vocabulary",
    "prompt": "This generation is prone to plethoric use of mobile gadgets.",
    "choices": [
      "Essential",
      "Crucial",
      "Important",
      "Excessive"
    ],
    "answer": 3,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-43",
    "subject": "Vocabulary",
    "prompt": "Pilo's insensitivity has created animosity to the worker's demands.",
    "choices": [
      "Distrust",
      "Hostilit",
      "Fear",
      "Distance"
    ],
    "answer": 1,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-44",
    "subject": "Vocabulary",
    "prompt": "A conscientious teacher spends hours preparing lesson plans and computing student's grades.",
    "choices": [
      "Creative",
      "Careful",
      "Proficient",
      "Efficient"
    ],
    "answer": 1,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-45",
    "subject": "Vocabulary",
    "prompt": "I am usually haphazard in composing my poetry but they turn out so well anyway,",
    "choices": [
      "Disorganized",
      "Blank",
      "Puzzled",
      "Strategic"
    ],
    "answer": 0,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-46",
    "subject": "Vocabulary",
    "prompt": "His boss appeared to be in an affable mood that Albert decided to ask for a raise.",
    "choices": [
      "Agreeable",
      "Cheerful",
      "Courteous",
      "Uncertain"
    ],
    "answer": 2,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-47",
    "subject": "Vocabulary",
    "prompt": "Three authors collaborated in preparing this book.",
    "choices": [
      "Work together",
      "Collate",
      "Communal",
      "Contribute"
    ],
    "answer": 0,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-48",
    "subject": "Vocabulary",
    "prompt": "The DPWH secretary obeyed the president's order in a complaisant manner.",
    "choices": [
      "Obliging",
      "Make perfect",
      "Complaint",
      "Making up for"
    ],
    "answer": 0,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-49",
    "subject": "Vocabulary",
    "prompt": "Ang mga magbubukid ay nabihasa sa paggamit ng kalabaw bilang katulong nila sa pagsasaka.",
    "choices": [
      "Nagsawa",
      "Nagtiwala",
      "Nasanay",
      "Natuto"
    ],
    "answer": 2,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-50",
    "subject": "Vocabulary",
    "prompt": "Mrs. Leny Ngo cannot keep her complicity in this affair secret very long.",
    "choices": [
      "Complication",
      "Involvement",
      "Comprise",
      "Conspiracy"
    ],
    "answer": 1,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-51",
    "subject": "Vocabulary",
    "prompt": "The search for a consort for the heiress of the throne ended happily.",
    "choices": [
      "Escort de",
      "Body guard",
      "Husband",
      "Prince"
    ],
    "answer": 2,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-52",
    "subject": "Vocabulary",
    "prompt": "Miss Sabina's employer offered to defray the cost of her trip to Hong Kong.",
    "choices": [
      "Provide for the payment of",
      "Charge",
      "Turn side",
      "Reduce"
    ],
    "answer": 0,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-53",
    "subject": "Vocabulary",
    "prompt": "The Defense presented its case to the jury in a trenchant manner.",
    "choices": [
      "Legalistic",
      "Dignified",
      "Vague",
      "Cautious"
    ],
    "answer": 3,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-54",
    "subject": "Vocabulary",
    "prompt": "The Saudi Arabian Government decapitated three criminals in March, 1996.",
    "choices": [
      "Hang",
      "Imprisoned",
      "Beheaded",
      "Release"
    ],
    "answer": 2,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-55",
    "subject": "Vocabulary",
    "prompt": "Japanese cuisine is now famous in Manila.",
    "choices": [
      "Fast food",
      "Chefs",
      "Restaurant",
      "Style of cooking"
    ],
    "answer": 3,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-56",
    "subject": "Vocabulary",
    "prompt": "A special group in the police force is believed to be engaged in furtive activities.",
    "choices": [
      "Illegal",
      "Suspicious",
      "Unusual",
      "Secret"
    ],
    "answer": 3,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-57",
    "subject": "Vocabulary",
    "prompt": "Her exemplary performance was mentioned in the meeting.",
    "choices": [
      "Effort",
      "Effective",
      "Outstanding",
      "Ineffective"
    ],
    "answer": 2,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-58",
    "subject": "Vocabulary",
    "prompt": "Dr. Antonio prescribes massive doses of antibiotics for his patients with tuberculosis.",
    "choices": [
      "Daily",
      "Double",
      "Heavy",
      "Encourage"
    ],
    "answer": 2,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-59",
    "subject": "Vocabulary",
    "prompt": "Ang pagal na guro ay sandaling tumigil bago muling nagpatuloy sa pagsasalita.",
    "choices": [
      "Pagod",
      "Galit",
      "Pihikan",
      "Mabagal beb"
    ],
    "answer": 0,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "VOC-60",
    "subject": "Vocabulary",
    "prompt": "When Lea was asked to sing, she did not falter.",
    "choices": [
      "Hesitate",
      "Pretend",
      "Give-in",
      "Go-on"
    ],
    "answer": 0,
    "explanation": "Choose the option closest in meaning to the target word in the sentence."
  },
  {
    "id": "GR-1",
    "subject": "Grammar",
    "prompt": "a. Plumbers who work efficiently from the point of view of a homemaker are worthy of their wages.",
    "choices": [
      "Plumbers are worthy of their wages who work efficiently from the point of view off a homemaker.",
      "Plumbers, from the point of view of a homemaker, who work efficiently, are worthy of their wages.",
      "From the point of view of a homemaker, plumbers who work efficiently are worthy of their wages.",
      "Worthy of their wages are plumbers who work efficiently from the point of view of a homemaker."
    ],
    "answer": 3,
    "explanation": "Choose the sentence that is grammatically correct and most clearly expressed."
  },
  {
    "id": "GR-2",
    "subject": "Grammar",
    "prompt": "a. The time for most people has come to change their attitudes and lifestyles.",
    "choices": [
      "The time has come when people must change their attitudes and lifestyles.",
      "The time when the attitudes and lifestyles of the people has come to change.",
      "The people must change their attitudes and lifestyles and the time had come to change.",
      "People must change their attitudes and lifestyles, and it is because the time has come to change."
    ],
    "answer": 0,
    "explanation": "Choose the sentence that is grammatically correct and most clearly expressed."
  },
  {
    "id": "GR-4",
    "subject": "Grammar",
    "prompt": "a. The fisher folks decided to go to the nearby hut finally drenched with rain.",
    "choices": [
      "The fisher folks finally decided to go to the nearby hut drenched with rain.",
      "Drenched with rain, the fisher folks finally decided to go the nearby hut.",
      "Finally drenched with rain, the fisher folks decided to go the nearby hut.",
      "Finally deciding to go to the nearby hut, the fisher folks were drenched with rain."
    ],
    "answer": 0,
    "explanation": "Choose the sentence that is grammatically correct and most clearly expressed."
  },
  {
    "id": "GR-5",
    "subject": "Grammar",
    "prompt": "a. The Filipino people have regained their respect and trust in their government.",
    "choices": [
      "The Filipino people have regained their respect and trust for their government.",
      "The Filipino people have regained their respect for their government and even their trust in it.",
      "The Filipino people have regained their respect for and trust in their government.",
      "The Filipino people have regained, for their government their respect and trust in it."
    ],
    "answer": 0,
    "explanation": "Choose the sentence that is grammatically correct and most clearly expressed."
  },
  {
    "id": "GR-6",
    "subject": "Grammar",
    "prompt": "a. The education of his children is most paramount in his plans.",
    "choices": [
      "The education of his children is more paramount in his plans.",
      "The education of his children is paramount in his plans.",
      "The most paramount of all his plans is how to educate his children.",
      "Paramount in his plans more than any other things is the education of his children."
    ],
    "answer": 2,
    "explanation": "Choose the sentence that is grammatically correct and most clearly expressed."
  },
  {
    "id": "GR-7",
    "subject": "Grammar",
    "prompt": "a. As soon as the tabulation of the figures have been completed, someone should check the accuracy.",
    "choices": [
      "As soon as tabulated, someone should check on the accuracy of those figures.",
      "As soon as the tabulation is finished, someone was to check its accuracy.",
      "Once the tabulation was completed, the accuracy of the figures should be checked.",
      "Someone had ought to check the accuracy of those figures when they have been tabulated."
    ],
    "answer": 2,
    "explanation": "Choose the sentence that is grammatically correct and most clearly expressed."
  },
  {
    "id": "GR-8",
    "subject": "Grammar",
    "prompt": "a. Sa pamamagitan ng kasaysayan ay natutunghayan muli ang makukulay na lumipas ng magigiting na tao.",
    "choices": [
      "Sa pamamagitan ng kasaysayan, ang lumipas na makukulay ng magigiting na tao ay muling natutunghayan.",
      "Ang makukulay na lumipas ay natutunghayan muli ng magigiting na tao sa pamamagitan ng kasaysayan.",
      "Muli ang makukulay na lumipas ng mga taong magigiting ay natutunghayan sa pamamagitan ng kasaysayan.",
      "Natutunghayan muli ang lumipas ng magigiting na tao na makukulay sa pamamagitan ng kasaysayan."
    ],
    "answer": 0,
    "explanation": "Choose the sentence that is grammatically correct and most clearly expressed."
  },
  {
    "id": "GR-9",
    "subject": "Grammar",
    "prompt": "a. One has to be either 65 or blind to claim an extra personal exemption.",
    "choices": [
      "One has either to be 65 or blind to claim an extra personal exemption.",
      "One either has to be 65 or blind to claim an extra personal exemption.",
      "Either one has to be 65 or blind to claim an extra personal exemption.",
      "To claim an extra personal exemption, one either has to be 65 or blind."
    ],
    "answer": 0,
    "explanation": "Choose the sentence that is grammatically correct and most clearly expressed."
  },
  {
    "id": "GR-10",
    "subject": "Grammar",
    "prompt": "a. I will never, unless he apologizes first, work with him again.",
    "choices": [
      "I will never, unless he apologized first, work with him again.",
      "I will never work with him again, unless he asks for an apology.",
      "I will never work with him again, unless he apologizes first.",
      "Unless he asks for an apology, I will never work with him again."
    ],
    "answer": 3,
    "explanation": "Choose the sentence that is grammatically correct and most clearly expressed."
  },
  {
    "id": "GR-12",
    "subject": "Grammar",
    "prompt": "\"Freedom and human rights without food are like freeing a prisoner and then not giving the prisoner the key to get out of the cell. The 450 million people who today live in the shadow of hunger and death from malnutrition can never be free men and women, however entrenched their freedom may be. These freedoms are only prospects held out and not realized.\" The paragraph best supports the statement that-",
    "choices": [
      "At times people have to work as one nation to address the problem of malnutrition",
      "Most of the poor countries in the world rich today still depend on \"super\" countries for support",
      "The satisfaction of one's basic needs is a prerequisite to the enjoyment of freedom",
      "A country which cannot feed its people with its own resources could never be free"
    ],
    "answer": 2,
    "explanation": "Choose the sentence that is grammatically correct and most clearly expressed."
  },
  {
    "id": "GR-18",
    "subject": "Grammar",
    "prompt": "\"No matter how strong and dedicated leaders may be, they must find root and strength among the people. Alone, they cannot save a nation. They may guide, they may set the tone, they may dedicate themselves and risk their lives, but ultimately national survival lies in the people.\" The paragraph best supports the statement that saw teds",
    "choices": [
      "Dedication and the right sense of direction enable a leader to guide the people",
      "Good leadership is essential to effective public administration",
      "It is the leader who determines the fate of a nation",
      "The people of a nation shape their own destiny with the guidance of a leader.",
      "The strength of the people comes from a dynamic and forceful leader"
    ],
    "answer": 1,
    "explanation": "Choose the sentence that is grammatically correct and most clearly expressed."
  },
  {
    "id": "GR-19",
    "subject": "Grammar",
    "prompt": "\"Ang pagbaba ng halaga ng piso lumikha ng maraming industriya ng bansa. Kasunod nito ang pagtitipid at problema sa kawalan ng mapasukang trabaho. Lumikha rin ito ng pagtataas ng presyo ng mga bilihin na labis nakaapekto sa kita ng mga manggagawa.\" Ayon sa talata –",
    "choices": [
      "Ang kasalukuyang krisis ay bunga ng mga mahal na bilihin at kawalan ng mapasukang trabaho",
      "Ang krisis ay nakaapekto sa hangarin ng maraming industriya na makapagbigay ng karagdagang sahod kanilang mga manggagawa",
      "Dumarami ang ang mga walang hanapbuhay at tumataas ang halaga ng mga bilihin dahil sa krisis",
      "Maraming industriya ang nalulugi dahil sa krisis kaya itinataas din nila ang presyo ng kanilang mga produkto",
      "Dahil sa krisis, maraming industriya ang napilitang magsara"
    ],
    "answer": 2,
    "explanation": "Choose the sentence that is grammatically correct and most clearly expressed."
  },
  {
    "id": "GR-20",
    "subject": "Grammar",
    "prompt": "\"The gregariousness of people is mostly due to a fear of remaining alone. It feels safer to be with a group, talk like a group, act like a group. The ramparts of group solidarity give the members security.\" The paragraph best supports the statement that",
    "choices": [
      "People who belong to a group react to situations in the same manner",
      "Some people are more gregarious than others",
      "People who are gregarious are afraid to be alone",
      "People find safety in numbers e. Gregarious people have many fears"
    ],
    "answer": 3,
    "explanation": "Choose the sentence that is grammatically correct and most clearly expressed."
  },
  {
    "id": "GR-21",
    "subject": "Grammar",
    "prompt": "\"Most researchers in needy countries are based on the thinking and approach of the highly developed Western world, and seldom have they been directed toward meeting the countries; own development needs.\" The sentence best supports the statement that –",
    "choices": [
      "Highly developed countries offer the best development of needy guide for the countries",
      "Most researchers done in needy countries are missing their objectives",
      "Most researchers have universal application d. Needy countries need researchers to help them reach the status of the western world",
      "Needy countries spend so much time for conducting researchers"
    ],
    "answer": 3,
    "explanation": "Choose the sentence that is grammatically correct and most clearly expressed."
  },
  {
    "id": "GR-22",
    "subject": "Grammar",
    "prompt": "\"In a modern economy, the results of long- range planning frequently depend upon the future value of money. The ability then to predict the value of money is a key to economic progress.\" The paragraph best supports the statement that",
    "choices": [
      "The value of money is unpredictable at times",
      "The unpredictability of money is an obstacle to a nation's prosperity",
      "Economic progress is facilitated by properly controlling budgetary expenses",
      "Long-range planning is is unheard of in traditional economies",
      "Financial planning is indispensable in modern economy"
    ],
    "answer": 1,
    "explanation": "Choose the sentence that is grammatically correct and most clearly expressed."
  },
  {
    "id": "GR-23",
    "subject": "Grammar",
    "prompt": "\"Sixty years ago, I know everything; now I know nothing; education is a progressive discovery of our own ignorance.\" The sentence best supports the statement that –",
    "choices": [
      "The older we get, the more we forget what we have learned",
      "The older we get, the more knowledgeable get the more we become",
      "The more we learn, the more we realize that there's more we need to know",
      "We learn more as we grow old",
      "Ignorance is a lifelong experience"
    ],
    "answer": 0,
    "explanation": "Choose the sentence that is grammatically correct and most clearly expressed."
  },
  {
    "id": "GR-24",
    "subject": "Grammar",
    "prompt": "\"Nagawang mabago ng mga kasalukuyang awitin ang kamalayan ng Pilipino upang kantahin ang sarili niyang mga awit sa tanging wikang nakapagsasatinig sa kanyang kaluluwa.\" Isinasaad ng pangungusap na",
    "choices": [
      "Madamdamin at makabuluhan ang mga awiting isinulat sa wikang Pilipino",
      "Tagumpay ang mga awiting Pilipino na mabago ang kaugalian ng mga tao Pilipino",
      "Madaling matutuhan ang mga awiting Pilipino dahil ang mga ito ay ito ay nasusulat sa katutubong wika",
      "Natututuhan nang tangkilikin ng mga Pilipino ang kanilang mga sariling awitin",
      "Nagkakaroon na ng kamalayan ang mga lahat ng mga awitin Pilipino tungkol sa ngayon"
    ],
    "answer": 3,
    "explanation": "Choose the sentence that is grammatically correct and most clearly expressed."
  },
  {
    "id": "AN-1",
    "subject": "Word Analogy",
    "prompt": "______ Highway: Net: Court",
    "choices": [
      "Road",
      "Radar",
      "Ticket",
      "Median"
    ],
    "answer": 3,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-2",
    "subject": "Word Analogy",
    "prompt": "Crumb : Bread ::_______Molecule",
    "choices": [
      "Shard",
      "Atom",
      "Trail",
      "Ion"
    ],
    "answer": 1,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-3",
    "subject": "Word Analogy",
    "prompt": "________:Launch :: Breakfast: Lunch",
    "choices": [
      "Sandwich",
      "Dinner",
      "Eggs",
      "Countdown"
    ],
    "answer": 3,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-4",
    "subject": "Word Analogy",
    "prompt": "Churn :______ :: Press: Wine",
    "choices": [
      "Paddle",
      "Creamin",
      "Butter",
      "Stomach"
    ],
    "answer": 2,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-5",
    "subject": "Word Analogy",
    "prompt": "Collar: Shirt ::______ : Hat",
    "choices": [
      "Button",
      "Visors",
      "Pullover",
      "Hood"
    ],
    "answer": 1,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-6",
    "subject": "Word Analogy",
    "prompt": "Dough: Bread ::_______ : Pancake",
    "choices": [
      "Griddle",
      "Cake",
      "Batter",
      "Oven"
    ],
    "answer": 2,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-7",
    "subject": "Word Analogy",
    "prompt": "______:Skid :: Obstacle : Swerve",
    "choices": [
      "Bike",
      "Ice",
      "Wheel",
      "Roadway"
    ],
    "answer": 1,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-8",
    "subject": "Word Analogy",
    "prompt": "Wheat Chaff :: Quality: ______",
    "choices": [
      "Thresh",
      "Whole",
      "Inadequacy",
      "Worth"
    ],
    "answer": 2,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-9",
    "subject": "Word Analogy",
    "prompt": "______ : Forgiveness :: Bribe : Influence",
    "choices": [
      "Quarrel",
      "Lie",
      "Apology",
      "Perjury"
    ],
    "answer": 2,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-10",
    "subject": "Word Analogy",
    "prompt": "Follow: Chase :: Nudge :____",
    "choices": [
      "Thrust",
      "Pursue",
      "Catch",
      "Precede"
    ],
    "answer": 0,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-11",
    "subject": "Word Analogy",
    "prompt": "Cancel: Delay :: Surrender : ______",
    "choices": [
      "Anticipate",
      "Yield",
      "Fire",
      "Army"
    ],
    "answer": 1,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-12",
    "subject": "Word Analogy",
    "prompt": "Holster : Pistol ::______ : Knife",
    "choices": [
      "Weapon",
      "Rifle",
      "Sheath",
      "Club"
    ],
    "answer": 2,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-13",
    "subject": "Word Analogy",
    "prompt": "Thicket: Shrubs ::_____:stars",
    "choices": [
      "Sun",
      "Cluster",
      "Orbit",
      "Moon"
    ],
    "answer": 1,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-14",
    "subject": "Word Analogy",
    "prompt": "Postmortem :_______ :: Rainbow : Downpour",
    "choices": [
      "Address",
      "Forecast",
      "Morning",
      "Death"
    ],
    "answer": 3,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-15",
    "subject": "Word Analogy",
    "prompt": "______: Tradition :: Hedonist : Pleasure",
    "choices": [
      "Purist",
      "Eden",
      "Displeasure",
      "Agnostic"
    ],
    "answer": 2,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-16",
    "subject": "Word Analogy",
    "prompt": "______ : Trail :: Grain: Grail",
    "choices": [
      "Train",
      "Path",
      "Wheat",
      "Holy"
    ],
    "answer": 0,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-18",
    "subject": "Word Analogy",
    "prompt": "Particular : Fussy :: ______:subservient",
    "choices": [
      "Meek",
      "Above",
      "Cranky",
      "Uptight"
    ],
    "answer": 0,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-19",
    "subject": "Word Analogy",
    "prompt": "_______: Horse :: Board : Train",
    "choices": [
      "Stable",
      "Shoe",
      "Ride",
      "Mount"
    ],
    "answer": 3,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-20",
    "subject": "Word Analogy",
    "prompt": "Tureen :_______ :: Goblet : Wine",
    "choices": [
      "Napkin",
      "Soup",
      "Spoon",
      "Pilsner"
    ],
    "answer": 1,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-21",
    "subject": "Word Analogy",
    "prompt": "4: 6 :: _____ : 16",
    "choices": [
      "2",
      "14",
      "8",
      "10"
    ],
    "answer": 1,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-22",
    "subject": "Word Analogy",
    "prompt": "Son: Nuclear ::______ : Extended",
    "choices": [
      "Father",
      "Mother",
      "Cousin",
      "Daughters"
    ],
    "answer": 2,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-23",
    "subject": "Word Analogy",
    "prompt": "Coif: Hair ::______ : Musical",
    "choices": [
      "Shower",
      "Close",
      "Praise",
      "Score"
    ],
    "answer": 3,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-24",
    "subject": "Word Analogy",
    "prompt": "Feta: Greek :: Provolone :______",
    "choices": [
      "Salad",
      "Swiss",
      "Blue",
      "Italian"
    ],
    "answer": 3,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-25",
    "subject": "Word Analogy",
    "prompt": "Moccasin : Snake ::Shoe:________",
    "choices": [
      "Alligator",
      "Waders",
      "Asp",
      "Loafer"
    ],
    "answer": 3,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-26",
    "subject": "Word Analogy",
    "prompt": "______: Zenith Fear: Composure",
    "choices": [
      "Apex",
      "Heaven",
      "Heights",
      "Nadir"
    ],
    "answer": 3,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-27",
    "subject": "Word Analogy",
    "prompt": "Pill: Bore :: Core :______",
    "choices": [
      "Center",
      "Mug",
      "Bar",
      "Placebo"
    ],
    "answer": 0,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-28",
    "subject": "Word Analogy",
    "prompt": "Pilfer: Steal :: _____ : Equip",
    "choices": [
      "Return",
      "Damage",
      "Exercise",
      "Furnish"
    ],
    "answer": 3,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-29",
    "subject": "Word Analogy",
    "prompt": "Native: Aboriginal :: Naïve : ______",
    "choices": [
      "Learned",
      "Arid",
      "Unsophisticated",
      "Tribe"
    ],
    "answer": 2,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-30",
    "subject": "Word Analogy",
    "prompt": "Junket:______ :: Junk: Trash",
    "choices": [
      "Trounce",
      "Trip",
      "Refuse",
      "Trinket"
    ],
    "answer": 1,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-32",
    "subject": "Word Analogy",
    "prompt": "Fetish: Fixation :: Slight :_____",
    "choices": [
      "Flirt",
      "Sloth",
      "Insult",
      "Confuse"
    ],
    "answer": 2,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-33",
    "subject": "Word Analogy",
    "prompt": "Hovel : Dirty :: Hub :_______",
    "choices": [
      "Unseen b. Prideful",
      "busy",
      "Shovel"
    ],
    "answer": 2,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-34",
    "subject": "Word Analogy",
    "prompt": "Bog :______ :: Slumber : Sleep",
    "choices": [
      "Dream",
      "Foray",
      "Marsh",
      "Night"
    ],
    "answer": 2,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-35",
    "subject": "Word Analogy",
    "prompt": "______: Segue: Throng : Mass",
    "choices": [
      "Subway",
      "Church",
      "Transition",
      "Line"
    ],
    "answer": 2,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-36",
    "subject": "Word Analogy",
    "prompt": "Ragtime: United States :: Raga :_______",
    "choices": [
      "Cloth",
      "Country",
      "Piano",
      "India"
    ],
    "answer": 3,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-37",
    "subject": "Word Analogy",
    "prompt": "Miserly: Cheap :: Homogeneous : ______",
    "choices": [
      "Extravagant",
      "Unkind",
      "Alike",
      "Friendly"
    ],
    "answer": 2,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-38",
    "subject": "Word Analogy",
    "prompt": "Skew Gloomy :: Slant :________",
    "choices": [
      "Glee",
      "Foible",
      "Desperate",
      "Gloaming"
    ],
    "answer": 2,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-39",
    "subject": "Word Analogy",
    "prompt": "Eider :________ :: Cedar :Tree",
    "choices": [
      "Snow",
      "Plant",
      "Duck",
      "Pine"
    ],
    "answer": 2,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-40",
    "subject": "Word Analogy",
    "prompt": "Gerrymander : Divide :: Filibuster : ______",
    "choices": [
      "Bend",
      "Punish",
      "Delay",
      "Rush"
    ],
    "answer": 2,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-41",
    "subject": "Word Analogy",
    "prompt": "Vapid :_____ :: Rapid: Swift",
    "choices": [
      "Inspired",
      "Turgid",
      "Wet",
      "Insipid"
    ],
    "answer": 3,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-42",
    "subject": "Word Analogy",
    "prompt": "Denim : Cotton ::______ : Flax",
    "choices": [
      "Sheep",
      "Uniform",
      "Sweater",
      "Linen"
    ],
    "answer": 3,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-43",
    "subject": "Word Analogy",
    "prompt": "Obscene: Coarse :: Obtuse :______",
    "choices": [
      "Subject",
      "Obstinate",
      "Obscure",
      "Stupid"
    ],
    "answer": 3,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-44",
    "subject": "Word Analogy",
    "prompt": "Diamond: Baseball :: Court :_______",
    "choices": [
      "Poker",
      "Jury",
      "Grass",
      "Squash"
    ],
    "answer": 3,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-45",
    "subject": "Word Analogy",
    "prompt": "Quixotic: Pragmatic :: Murky :_______",
    "choices": [
      "Rapid",
      "Cloudy",
      "Clear",
      "Friendly"
    ],
    "answer": 2,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-46",
    "subject": "Word Analogy",
    "prompt": "Smear: Libel :: Heed :______",
    "choices": [
      "Represent",
      "Doubt",
      "Consider",
      "Need"
    ],
    "answer": 2,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-47",
    "subject": "Word Analogy",
    "prompt": "Nymph : ______ :: Seraphim: Angel",
    "choices": [
      "maiden",
      "Sinner",
      "Candle",
      "Priest"
    ],
    "answer": 0,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-48",
    "subject": "Word Analogy",
    "prompt": "Poetry: Rhyme :: Philosophy :________",
    "choices": [
      "Imagery",
      "Music",
      "Bi-Law",
      "Theory"
    ],
    "answer": 3,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-49",
    "subject": "Word Analogy",
    "prompt": "Jibe: Praise :_______ : Enlighten",
    "choices": [
      "Jib",
      "Delude",
      "Worship",
      "Wed"
    ],
    "answer": 1,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "AN-50",
    "subject": "Word Analogy",
    "prompt": "Marshal : Prisoner :: Principal : _______",
    "choices": [
      "Teacher",
      "President",
      "Doctrine",
      "Student"
    ],
    "answer": 3,
    "explanation": "Identify the relationship in the first pair, then choose the option that matches the same relationship."
  },
  {
    "id": "SP-1",
    "subject": "Spelling",
    "prompt": "It is my _____that municipal employees handle their jobs with great professionalism.",
    "choices": [
      "beleif",
      "bilief",
      "belief",
      "beleaf"
    ],
    "answer": 2,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-2",
    "subject": "Spelling",
    "prompt": "My sister is going to be on the cover of Seventeen______",
    "choices": [
      "magizine",
      "magazene",
      "magezine",
      "magazine"
    ],
    "answer": 3,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-3",
    "subject": "Spelling",
    "prompt": "The sounding alarm signaled a_____ security.",
    "choices": [
      "breach",
      "breche",
      "broach",
      "briech"
    ],
    "answer": 0,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-4",
    "subject": "Spelling",
    "prompt": "For some reason, I ______change in her attitude.",
    "choices": [
      "percieved",
      "preceived",
      "perceived",
      "precieved"
    ],
    "answer": 2,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-5",
    "subject": "Spelling",
    "prompt": "I just don't know what I would do in her______.",
    "choices": [
      "sittuation",
      "situation",
      "situashun",
      "sitiation"
    ],
    "answer": 1,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-6",
    "subject": "Spelling",
    "prompt": "The first time Wendy drove her new car into town, all of her friends were_____",
    "choices": [
      "jellous",
      "jealous",
      "jealuse",
      "jealous"
    ],
    "answer": 1,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-7",
    "subject": "Spelling",
    "prompt": "The opening night performance was so_____ that the cast was given many extra curtain calls.",
    "choices": [
      "teriffic",
      "terrific",
      "terriffic",
      "terrific"
    ],
    "answer": 1,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-8",
    "subject": "Spelling",
    "prompt": "To be elected ____,candidates must have a solid background in law enforcement.",
    "choices": [
      "sherrif",
      "sherriff",
      "sherif",
      "sheriff"
    ],
    "answer": 3,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-9",
    "subject": "Spelling",
    "prompt": "Learning the words to all of Robert Frost's poetry has become an______for Jonathan.",
    "choices": [
      "obssession",
      "obsessian",
      "obsession",
      "obsessiun"
    ],
    "answer": 2,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-10",
    "subject": "Spelling",
    "prompt": "Driving on icy roads can place you in ______",
    "choices": [
      "jeoperdy",
      "jepardy",
      "jeapardy",
      "jeopardy"
    ],
    "answer": 3,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-11",
    "subject": "Spelling",
    "prompt": "Nora was awestruck by the _____ mountain range in the national park.",
    "choices": [
      "magnifisint",
      "magnifisent",
      "magnificent",
      "magnifficent"
    ],
    "answer": 2,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-12",
    "subject": "Spelling",
    "prompt": "From inside the box came a strange ________sound.",
    "choices": [
      "mechinical",
      "mehcanical",
      "mechenical",
      "machanical"
    ],
    "answer": 1,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-13",
    "subject": "Spelling",
    "prompt": "The agents were searching for ______cargo on the airplane.",
    "choices": [
      "elicitt",
      "ellicit",
      "illicet",
      "illicit"
    ],
    "answer": 3,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-14",
    "subject": "Spelling",
    "prompt": "There will be an immediate _____cause of the accident.",
    "choices": [
      "inquiry",
      "inquirry",
      "enquirry",
      "enquiry"
    ],
    "answer": 0,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-15",
    "subject": "Spelling",
    "prompt": "The contract for the teachers' union could not be________ before the school year ended.",
    "choices": [
      "terminated",
      "termenated",
      "terrminated",
      "terminated"
    ],
    "answer": 0,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-16",
    "subject": "Spelling",
    "prompt": "Some people say that______is not a true science.",
    "choices": [
      "psycology",
      "psycholigy",
      "psychology",
      "psychology"
    ],
    "answer": 3,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-17",
    "subject": "Spelling",
    "prompt": "Getting a driver's_____is a rite of passage for most teenagers.",
    "choices": [
      "lisense",
      "lisence",
      "lycence",
      "license"
    ],
    "answer": 3,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-18",
    "subject": "Spelling",
    "prompt": "The reporter gave a______and accurate account of the events.",
    "choices": [
      "concise",
      "concise",
      "consise",
      "cuncise"
    ],
    "answer": 0,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-19",
    "subject": "Spelling",
    "prompt": "My next-door_____planted some beautiful flowers near his sidewalk.",
    "choices": [
      "nieghbor",
      "neihbor",
      "niehbor",
      "neighbor"
    ],
    "answer": 3,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-20",
    "subject": "Spelling",
    "prompt": "The paramedics attempted to_____the victim.",
    "choices": [
      "stabilize",
      "stablize",
      "stableize",
      "stabilize"
    ],
    "answer": 0,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-21",
    "subject": "Spelling",
    "prompt": "The attorney asked a question that was______to the case; the judge overruled it.",
    "choices": [
      "irelevent",
      "irelevant",
      "irrelevant",
      "irrelevent"
    ],
    "answer": 2,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-22",
    "subject": "Spelling",
    "prompt": "The mayor highlighted the_______ during her campaign speech.",
    "choices": [
      "encouredging",
      "encouraging",
      "incurraging",
      "incouraging ."
    ],
    "answer": 1,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-23",
    "subject": "Spelling",
    "prompt": "The journalist made a ______to finish the article by Friday.",
    "choices": [
      "commitment",
      "committent",
      "comittment",
      "comitment"
    ],
    "answer": 0,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-24",
    "subject": "Spelling",
    "prompt": "Dad thinks it is______to stay up late on a school night.",
    "choices": [
      "rediculous",
      "rediculus",
      "ridiculous",
      "ridiculus"
    ],
    "answer": 2,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-25",
    "subject": "Spelling",
    "prompt": "The large donation came from an________source.",
    "choices": [
      "anynonimous",
      "anonimous",
      "anounymous",
      "anonymous ."
    ],
    "answer": 3,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-26",
    "subject": "Spelling",
    "prompt": "The scientists had to do an________amount of research on the project.",
    "choices": [
      "extraordinary",
      "extraordinery",
      "extrordinary",
      "ecstraordinary"
    ],
    "answer": 0,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-27",
    "subject": "Spelling",
    "prompt": "The customer service representative gave his ______that the refund would be made within two weeks.",
    "choices": [
      "asurrance",
      "assurance",
      "assurence",
      "assureance"
    ],
    "answer": 1,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-28",
    "subject": "Spelling",
    "prompt": "The purpose of the new city ordinance was debated_____.",
    "choices": [
      "frequently",
      "frequintly",
      "frequentlly",
      "frequentley"
    ],
    "answer": 0,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-29",
    "subject": "Spelling",
    "prompt": "Throughout the trial, the_____was placed on scientific evidence.",
    "choices": [
      "enphasis",
      "emphisis",
      "emphasis",
      "emfasis"
    ],
    "answer": 2,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-30",
    "subject": "Spelling",
    "prompt": "the presidential candidate refused to______ the election until every vote was counted.",
    "choices": [
      "concede",
      "conceed",
      "consede",
      "conseed"
    ],
    "answer": 0,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-31",
    "subject": "Spelling",
    "prompt": "Each of the new employees had similar____",
    "choices": [
      "asspirations",
      "asparations",
      "aspirrations",
      "aspirations"
    ],
    "answer": 3,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-32",
    "subject": "Spelling",
    "prompt": "The young man wished to_______his right to speak freely.",
    "choices": [
      "excercise",
      "exercise",
      "exersize",
      "exercize"
    ],
    "answer": 1,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-33",
    "subject": "Spelling",
    "prompt": "The president and the vice president were a______ pair.",
    "choices": [
      "compatibel",
      "compatable",
      "compatible",
      "commpatible"
    ],
    "answer": 2,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-34",
    "subject": "Spelling",
    "prompt": "I was_______ of the claims made by the loquacious salesman.",
    "choices": [
      "skeptical",
      "skeptikal",
      "skepticle",
      "skepticil"
    ],
    "answer": 0,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-35",
    "subject": "Spelling",
    "prompt": "The valedictorian will give the______address.",
    "choices": [
      "comencement",
      "commencement",
      "commencment",
      "comencment"
    ],
    "answer": 1,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-36",
    "subject": "Spelling",
    "prompt": "Who is your immediate_____?",
    "choices": [
      "superviser",
      "supervizer",
      "supervisor",
      "supervisor"
    ],
    "answer": 3,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-37",
    "subject": "Spelling",
    "prompt": "There are two types of_____viral and bacterial.",
    "choices": [
      "neumonia",
      "pneumonia",
      "pnumonia",
      "newmonia"
    ],
    "answer": 1,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-38",
    "subject": "Spelling",
    "prompt": "All of the____is set up for the gymnastic tournament.",
    "choices": [
      "apperatus",
      "aparatus",
      "apparatus",
      "aparratus"
    ],
    "answer": 2,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-39",
    "subject": "Spelling",
    "prompt": "With such huge debt, he was forced to file for_____",
    "choices": [
      "bankruptsy",
      "bankruptcy",
      "bankropcy",
      "bankrupcy"
    ],
    "answer": 1,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-40",
    "subject": "Spelling",
    "prompt": "The auto repair shop specialized in rebuilding____",
    "choices": [
      "carbueretors",
      "carburetors",
      "carboretors",
      "carborators"
    ],
    "answer": 1,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-41",
    "subject": "Spelling",
    "prompt": "All of a sudden they found themselves facing a terrible______",
    "choices": [
      "delemma",
      "dilemma",
      "dilema",
      "dilemma"
    ],
    "answer": 1,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-42",
    "subject": "Spelling",
    "prompt": "That method is the most________way to get the job done.",
    "choices": [
      "eficient",
      "eficeint",
      "efficient",
      "efficience"
    ],
    "answer": 2,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-43",
    "subject": "Spelling",
    "prompt": "The pilot was a_____in the Air Force.",
    "choices": [
      "leutenant",
      "lieutenant",
      "leutienant",
      "lutenant"
    ],
    "answer": 1,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-44",
    "subject": "Spelling",
    "prompt": "Please try to_____me on the trip.",
    "choices": [
      "accompany",
      "acommpany.",
      "accompeny",
      "accompany"
    ],
    "answer": 3,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-45",
    "subject": "Spelling",
    "prompt": "The editor's_____ can only be expressed on the Op-Ed page.",
    "choices": [
      "viewpoint",
      "veiwpoint",
      "viewpointe",
      "veiupoint"
    ],
    "answer": 0,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-46",
    "subject": "Spelling",
    "prompt": "The lights of the Aurora Borealis are a natural _______",
    "choices": [
      "phenominon",
      "phenominnon",
      "phenomenon",
      "phinominon"
    ],
    "answer": 2,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-47",
    "subject": "Spelling",
    "prompt": "Since it was a formal affair, he had to wear a_____",
    "choices": [
      "tuxcedo",
      "tuxedo",
      "tucxedo",
      "tucedo"
    ],
    "answer": 1,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-48",
    "subject": "Spelling",
    "prompt": "The dentist took care of her_____tooth.",
    "choices": [
      "abscessed",
      "absessed",
      "abscesed",
      "abcessed"
    ],
    "answer": 0,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-49",
    "subject": "Spelling",
    "prompt": "Over four-hundred applicants entered the beauty_____",
    "choices": [
      "pagiant.",
      "pajiant",
      "pageant",
      "pajeant"
    ],
    "answer": 2,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "SP-50",
    "subject": "Spelling",
    "prompt": "In many states, passing a road test requires drivers to_____ park",
    "choices": [
      "paralel",
      "paralell",
      "parallal",
      "parallel"
    ],
    "answer": 3,
    "explanation": "Pick the correctly spelled word/phrase; the others contain common spelling errors."
  },
  {
    "id": "HOM-1",
    "subject": "Homophones",
    "prompt": "My favorite_____ is peach pie with vanilla ice cream.",
    "choices": [
      "desert",
      "dessert"
    ],
    "answer": 1,
    "explanation": "Choose the word that fits the meaning in context; the other options are sound-alike words with different meanings."
  },
  {
    "id": "HOM-2",
    "subject": "Homophones",
    "prompt": "Do you think I should run for a seat on the city_____?",
    "choices": [
      "counsel",
      "council"
    ],
    "answer": 1,
    "explanation": "Choose the word that fits the meaning in context; the other options are sound-alike words with different meanings."
  },
  {
    "id": "HOM-3",
    "subject": "Homophones",
    "prompt": "The amount for the carpet was a_____ price.",
    "choices": [
      "fair",
      "fare"
    ],
    "answer": 0,
    "explanation": "Choose the word that fits the meaning in context; the other options are sound-alike words with different meanings."
  },
  {
    "id": "HOM-4",
    "subject": "Homophones",
    "prompt": "This is the_____ of the new art museum.",
    "choices": [
      "sight",
      "cite",
      "site"
    ],
    "answer": 2,
    "explanation": "Choose the word that fits the meaning in context; the other options are sound-alike words with different meanings."
  },
  {
    "id": "HOM-5",
    "subject": "Homophones",
    "prompt": "Come ______. the park later this evening to see the sunset.",
    "choices": [
      "buy",
      "bye",
      "by"
    ],
    "answer": 2,
    "explanation": "Choose the word that fits the meaning in context; the other options are sound-alike words with different meanings."
  },
  {
    "id": "HOM-6",
    "subject": "Homophones",
    "prompt": "This is the______book George has read",
    "choices": [
      "fourth",
      "forth"
    ],
    "answer": 0,
    "explanation": "Choose the word that fits the meaning in context; the other options are sound-alike words with different meanings."
  },
  {
    "id": "HOM-7",
    "subject": "Homophones",
    "prompt": "When the driver slammed on the_____car slid into the ditch.",
    "choices": [
      "breaks",
      "brakes"
    ],
    "answer": 1,
    "explanation": "Choose the word that fits the meaning in context; the other options are sound-alike words with different meanings."
  },
  {
    "id": "HOM-8",
    "subject": "Homophones",
    "prompt": "A very experienced guide______on a hike into the wilderness.",
    "choices": [
      "lead",
      "led"
    ],
    "answer": 1,
    "explanation": "Choose the word that fits the meaning in context; the other options are sound-alike words with different meanings."
  },
  {
    "id": "HOM-9",
    "subject": "Homophones",
    "prompt": "Have dinner with us at the restaurant; we'll meet you______",
    "choices": [
      "they're",
      "their",
      "there"
    ],
    "answer": 2,
    "explanation": "Choose the word that fits the meaning in context; the other options are sound-alike words with different meanings."
  },
  {
    "id": "HOM-10",
    "subject": "Homophones",
    "prompt": "May I have a____of cheese?",
    "choices": [
      "piece",
      "peace"
    ],
    "answer": 0,
    "explanation": "Choose the word that fits the meaning in context; the other options are sound-alike words with different meanings."
  },
  {
    "id": "HOM-11",
    "subject": "Homophones",
    "prompt": "All children have the ____ to an education.",
    "choices": [
      "write",
      "rite",
      "right moo"
    ],
    "answer": 2,
    "explanation": "Choose the word that fits the meaning in context; the other options are sound-alike words with different meanings."
  },
  {
    "id": "HOM-12",
    "subject": "Homophones",
    "prompt": "It is a good idea to exercise on _______a d bicycle during inclement weather.",
    "choices": [
      "stationery",
      "stationary"
    ],
    "answer": 1,
    "explanation": "Choose the word that fits the meaning in context; the other options are sound-alike words with different meanings."
  },
  {
    "id": "HOM-13",
    "subject": "Homophones",
    "prompt": "At the beach, we went digging for clams and",
    "choices": [
      "mussels",
      "muscles"
    ],
    "answer": 0,
    "explanation": "Choose the word that fits the meaning in context; the other options are sound-alike words with different meanings."
  },
  {
    "id": "HOM-14",
    "subject": "Homophones",
    "prompt": "We_____the exit and had to turn around,",
    "choices": [
      "past",
      "passed"
    ],
    "answer": 1,
    "explanation": "Choose the word that fits the meaning in context; the other options are sound-alike words with different meanings."
  },
  {
    "id": "HOM-15",
    "subject": "Homophones",
    "prompt": "The French Revolution was known as the______of Terror.\"",
    "choices": [
      "Rain",
      "Reign",
      "Rein"
    ],
    "answer": 1,
    "explanation": "Choose the word that fits the meaning in context; the other options are sound-alike words with different meanings."
  },
  {
    "id": "HOM-16",
    "subject": "Homophones",
    "prompt": "I don't understand today's math_____",
    "choices": [
      "lesson",
      "lessen"
    ],
    "answer": 0,
    "explanation": "Choose the word that fits the meaning in context; the other options are sound-alike words with different meanings."
  },
  {
    "id": "HOM-17",
    "subject": "Homophones",
    "prompt": "While nuclear energy is efficient, storing nuclear______is always a problem.",
    "choices": [
      "waste",
      "waist"
    ],
    "answer": 0,
    "explanation": "Choose the word that fits the meaning in context; the other options are sound-alike words with different meanings."
  },
  {
    "id": "HOM-18",
    "subject": "Homophones",
    "prompt": ". The acoustics in the auditorium made it easy for the audience to_______the melodic sounds of the soloist.",
    "choices": [
      "here",
      "hear"
    ],
    "answer": 1,
    "explanation": "Choose the word that fits the meaning in context; the other options are sound-alike words with different meanings."
  },
  {
    "id": "HOM-19",
    "subject": "Homophones",
    "prompt": "This problem is_____ complex.",
    "choices": [
      "two",
      "to",
      "too"
    ],
    "answer": 2,
    "explanation": "Choose the word that fits the meaning in context; the other options are sound-alike words with different meanings."
  },
  {
    "id": "HOM-20",
    "subject": "Homophones",
    "prompt": "My grandmother is an______historian.",
    "choices": [
      "imminent",
      "immanent",
      "eminent"
    ],
    "answer": 2,
    "explanation": "Choose the word that fits the meaning in context; the other options are sound-alike words with different meanings."
  },
  {
    "id": "RC-5",
    "subject": "Reading Comprehension",
    "prompt": "What word can be used in place of \"alter\" as used in this passage?",
    "choices": [
      "Reject",
      "Accept",
      "Change",
      "Educate"
    ],
    "answer": 2,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "RC-6",
    "subject": "Reading Comprehension",
    "prompt": "From this passage, one could conclude that -",
    "choices": [
      "The ability to make fruitful, relationships with other people on equal terms is the most important attribute of maturity",
      "The rate of maturation is different from individual to individual",
      "The ability to make fruitful, loving relationships with other people on equal terms can be taught.",
      "The ability to make fruitful, loving relationships with other people on equal terms is the only attribute of maturity Enzymes are organic compounds. These compounds contain the element carbon. Enzymes are made in the cell and functions as catalysts. A catalyst speeds up a chemical reaction without taking past in the reaction. It is neither changed in any way nor destroyed by the reaction taking place. Each enzyme may take care of only one reaction. There are many enzymes in a living cell because there are many chemical reactions taking place all the time. Without enzymes, the cell would not be able to work."
    ],
    "answer": 0,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "RC-7",
    "subject": "Reading Comprehension",
    "prompt": "According to the author, all of the following are true about enzymes, EXCEPT;",
    "choices": [
      "Enzymes are organic compounds.",
      "Enzymes are made in the cell",
      "Enzymes speed up s chemical reaction",
      "The cell would be able to work without enzymes"
    ],
    "answer": 3,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "RC-8",
    "subject": "Reading Comprehension",
    "prompt": "From the passage, one could conclude that –",
    "choices": [
      "Enzymes are important in inheritance",
      "Enzymes are made of protein",
      "Enzymes are indispensable for the cell to do its work",
      "Enzymes can slow down chemical reaction An argument has gone on for years that focuses on the question of how much monetary or other help should be given to the poor. The argument on one side stresses the deprivation and misfortunes those of low income must carry through and appeals to the moral instincts of those in government positions to use compassion in their judgments. On the other side, people speak about the role that laziness has played in developing poverty and how public assistance progress vitiate incentives to work and to save."
    ],
    "answer": 2,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "RC-9",
    "subject": "Reading Comprehension",
    "prompt": "Which of the following would be a good title for the ideas in this passage?",
    "choices": [
      "How Much Should be Granted to the Poor?",
      "Government Assistance",
      "Poverty and the Poor",
      "The Poverty Problem"
    ],
    "answer": 0,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "RC-10",
    "subject": "Reading Comprehension",
    "prompt": "According to the above passage, providing assistance for the poor is –",
    "choices": [
      "An important ingredient of a democracy",
      "A debatable question",
      "Not a good choice",
      "Just perpetuating poverty No, your autobiography is not a marketable subject, unless you are a movie star, politician, or other type of celebrity. A book concerning your travels abroad is not a likely candidate either. A marketable subject is one that is of interest to the general public or at least appeals to a sizeable specialty group, and that has not been adequately covered elsewhere. Remember the six magic words: \"Find a need and fill it.\""
    ],
    "answer": 1,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "RC-11",
    "subject": "Reading Comprehension",
    "prompt": "According to the author, all of the following are true about a marketable subject for a book, EXCEPT;.",
    "choices": [
      "One that is of interest to the general public",
      "appeals to a sizeable specialty group",
      "Tackles a topic that has not been adequately covered elsewhere",
      "A book concerning your travels abroad"
    ],
    "answer": 3,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "RC-12",
    "subject": "Reading Comprehension",
    "prompt": "What would be a good title for this selection?",
    "choices": [
      "My Autobiography",
      "Have You Chosen a Marketable Subject?",
      "How to Write a Book",
      "How to Write an Autobiography Boracay, the most famous beach in the Philippines,, is also known as a blessed island. I have never met anyone enthralled and fascinated Boracay. The first time you set foot on powder-like sand, you'll surely feel lucky to be in a paradise island. The moment you see its crystal pristine water, you'll be so thankful you're alive. Many locals and foreigners go there again not only because of the breathtaking view but also because to celebrate life and its blessings."
    ],
    "answer": 1,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "RC-13",
    "subject": "Reading Comprehension",
    "prompt": "What is the best title for the above article?",
    "choices": [
      "Famous Beach in the Philippines",
      "The Beach of Boracay",
      "Boracay, a Blessed Island",
      "Why People Go to Boracay Malaysia Airline Flight MH370's disappearance is still under investigation. Many countries joined in the search for what really happened and where the aircraft is now. The flight lost contact with air traffic controllers about an hour after its take off. The weather was fine when the aircraft was flying so it adds more theories about other possible reasons of the aircraft's fate. The oil slick spotted off Vietnam's coast turned out to be fuel oil used in cargo ships so it has nothing to do with the aircraft. Interpol also says the disappearance of the jet plane has nothing to do with terrorist attack. More questions are adding to this quest and no specific answer is given and proven yet."
    ],
    "answer": 2,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "RC-15",
    "subject": "Reading Comprehension",
    "prompt": "What is the best title for the above article?",
    "choices": [
      "Most Downloaded Game",
      "The Demand of Flappy Bird Game",
      "Flappy Bird App",
      "The Rise of Game Apps According to NASA, effects that scientists had predicted in the past would result from global climate change are now occurring like loss of sea ice, accelerated sea level rise and longer, more intense heat waves. Even our Earth's average temperature has increased about 1 degree in Fahrenheit in the 20th century. Many experts and scientists believe that global temperature will continue to rise from"
    ],
    "answer": 1,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "RC-16",
    "subject": "Reading Comprehension",
    "prompt": "Which of the following conclusions best summarizes the selection above?",
    "choices": [
      "Climate change will continue to get worse until humanity takes serious actions to stop it",
      "Global climate change is happening on earth now",
      "The effects of climate change are getting extremely dangerous",
      "Global climate change and its effects are occurring and are likely to increase over time Mark Zuckerberg, Co-Founder and CEO of Facebook spoke with President Barack Obama to discuss about internet privacy impositions by the U.S. government. Zuckerberg said, -The Internet works because most people and companies do the same. We work together to create this secure environment and make our shared space even better for the world. This is why I've been so confused and frustrated by the repeated reports of the behavior of the U.S. government. When engineers work tirelessly to improve security, we imagine we're protecting you against criminals, not our own government. The U.S. government should be the champion for the Internet, not a threat. It needs to be much more transparent about what it's doing, or people will believe the worst. I've called President Obama to express my frustration over the damage the government is creating for all of our future. Unfortunately, it seems like it will take a very long time for true full reform. So it's up to us all of us – to build the Internet we want. Together, we can build a space that is greater and a more important part of the world than anything we have today, but is also safe and secure. I'm committed to seeing this happen, and you can count on Facebook to do our part."
    ],
    "answer": 3,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "RC-17",
    "subject": "Reading Comprehension",
    "prompt": "Why is Internet Privacy very important to all of us?",
    "choices": [
      "Because it is not safe to trust anyone with our online accounts",
      "Because nobody really owns the internet.",
      "Because it protects and secures not only online accounts but also our online Our activities",
      "Because the government's protection is not enough Search Engine Optimization a.k.a. SEO is vital for a website to stay successful for a long time. The world of internet continues to evolve so website owners must stay in the game by making updates while practicing effective SEO. Great content and correct SEO are the blood of a website because without them, a site could die."
    ],
    "answer": 2,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "RC-18",
    "subject": "Reading Comprehension",
    "prompt": "The paragraph is mainly about –",
    "choices": [
      "The importance of Search Engine Optimization",
      "The life of a successful website",
      "The secrets of making a website successful",
      "How to apply Search Engine Optimization There are around 2 million Filipinos without jobs today. That includes graduates and undergraduates. According to survey, there will be another half-million to graduate this year be another half-million to graduate this year without possible job placements. Unemployed people complain about job shortage. Many go to the cities to apply to some companies but end up with nothing. Unemployment rate increases each year even though there are many job fairs. going home"
    ],
    "answer": 0,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "RC-19",
    "subject": "Reading Comprehension",
    "prompt": "The paragraph states that -",
    "choices": [
      "Unemployment in the Philippines is common",
      "Unemployment rate in the Philippines is seriously increasing",
      "Unemployment in the Philippines must be solved",
      "Unemployment solutions for Filipinos \"In the Olympic Peninsula of northwest Washington State, a small town named Forks exists under a near-constant cover of clouds. It rains on this inconsequential town more than any other place in the United States of America. It was from this town and its gloomy, omnipresent shade that my mother escaped with me when I was only a few months old. It was in this town that I'd been compelled to spend a month every summer until I was fourteen. That was the year I finally put my my dad, foot down; these past three summers, Charlie, vacationed with me in California for two weeks instead. It was to Forks that I now exiled myself - an action that I took with great horror. I detested Forks. I loved Phoenix. I loved the sun and the blistering heat. I loved the vigorous, sprawling city.' - Stephenie Meyer, \"The Twilight Saga\""
    ],
    "answer": 1,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "RC-20",
    "subject": "Reading Comprehension",
    "prompt": "Provide the specific setting of the story.",
    "choices": [
      "Phoenix",
      "Rainy day",
      "Forks, Washington",
      "Twilight \"It's twenty-five after six and the sky still has shades of purple and orange...oh well just like me, I am standing here, in this secretive rooftop, overjoyed...yet there are still some fragments of fear and haze... I wonder if the sky is glad and excited about the night or if it is crying over the bright day that passed.\" - Fehl Dungo - \"Higher than the Rooftop\""
    ],
    "answer": 2,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "RC-21",
    "subject": "Reading Comprehension",
    "prompt": "What is the mood of the story?",
    "choices": [
      "Happiness",
      "Sorrow",
      "Confusion",
      "Grief Investing has been a hot topic Many people especially entrepreneurs don't rely on time deposits and regular savings account to save and earn interests. The most common investments in the Philippines are through real estates, mutual funds and trust funds. Although few people also join trading in the stock market, more and more Filipinos are not reluctant to invest their money and diversify them to different money making wheels."
    ],
    "answer": 2,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "RC-22",
    "subject": "Reading Comprehension",
    "prompt": "What does the article try to convey?",
    "choices": [
      "Filipinos are now willing to open different investments",
      "Filipinos are wise in saving their money",
      "Filipinos rely mainly on savings an deposit account",
      "Filipinos invest in real estates, mutual funds and trust funds If legislation is to change social attitudes and values, it must come with adequate enforcement and machinery, which should include efforts to educate people on these laws. Otherwise, legal provision not only remain dead letters, but actually promote lack of respect for the law."
    ],
    "answer": 0,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "RC-23",
    "subject": "Reading Comprehension",
    "prompt": "The paragraph best supports the statement that",
    "choices": [
      "People should respect laws because laws protect them",
      "The effectiveness of laws lies in adequate education of the people about them and their proper enforcement",
      "Laws lose their effectiveness if people do not respect them",
      "Ignorance of the law does not excuse anyone Two person look out through the same bars; one sees mud and the other, the stars."
    ],
    "answer": 1,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "RC-24",
    "subject": "Reading Comprehension",
    "prompt": "The sentence best supports the statement that",
    "choices": [
      "Some people are more blind than others",
      "People see things differently depending on their own perspective",
      "People have varied ways of looking at different things",
      "People have different tastes and interests An education really suited to the rural environment can become both acceptable and genuinely functional only when the environment begins to offer real opportunities and to require skills and knowledge on a large scale. As long as opportunities lie only in the urban economy, education will remain in servitude to that small section of society."
    ],
    "answer": 2,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "RC-25",
    "subject": "Reading Comprehension",
    "prompt": "The paragraph best supports the statement that",
    "choices": [
      "Migration to the cities result from the lack of real opportunities in the rural areas",
      "The rural environment has opportunities that need to be develop",
      "We have a concentration of educational opportunities in the urban areas",
      "Rural Occupational as opportunities meaning to rural education No matter how strong and dedicated leaders may be, they must find root and strength among the people. Alone, they cannot save a nation. They may guide, they may set the tone, they may dedicate themselves and risk their lives, but ultimately national survival lies in the people."
    ],
    "answer": 1,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "RC-26",
    "subject": "Reading Comprehension",
    "prompt": "The paragraph best supports the statement that",
    "choices": [
      "Dedication and the right sense of direction enable a leader to guide the people",
      "Good leadership is essential to effective public administration",
      "It is the leader who determines the fate of a nation",
      "The people of a nation shape their own La destiny with the guidance of a leader Ang pagbaba ng halaga ng piso lumikha ng krisis sa maraming industriya ng bansa. Kasunod nito ang pagtitipid at problema sa kawalan ng mapasukang trabaho. Lumikha rin ito ng pagtataas ng presyo ng mga bilihin na labis nakaapekto sa kita ng mga manggagawa."
    ],
    "answer": 1,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "RC-27",
    "subject": "Reading Comprehension",
    "prompt": "Ayon sa talata,",
    "choices": [
      "Ang kasalukuyang krisis ay bunga ng mga mahal na bilihin at kawalan ng mapasukang trabaho",
      "Ang krisis ay nakaapekto sa hangarin ng maraming industriya na makapagbigay ng karagdagang sahod sa kanilang mga manggagawa",
      "Dumarami ang mga walang hanapbuhay at tumataas ang halaga ng mga bilihin dahil sa krisis",
      "Maraming industriya ang nalulugi dahil sa krisis kaya itinataas din nila ang presyo ng kanilang mga produkto The gregariousness of people is mostly due to a fear of remaining alone. It feels safer to be with a group, talk like a group, act like a group. The ramparts of group solidarity give the members security."
    ],
    "answer": 2,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "RC-28",
    "subject": "Reading Comprehension",
    "prompt": "The paragraph best supports the statement that",
    "choices": [
      "People who belong to a group react to situations in the same manner",
      "Some people are more gregarious than others",
      "People who are gregarious are afraid to be alone",
      "People find safety in numbers Most researchers in needy countries are based on the thinking and approach of the highly developed Western world, and seldom have they been directed toward meeting the countries; own development needs."
    ],
    "answer": 3,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "RC-29",
    "subject": "Reading Comprehension",
    "prompt": "The sentence best supports the statement that",
    "choices": [
      "Highly developed countries offer the best the development of needy guide for countries",
      "Most researchers done in needy countries are missing their objectives",
      "Most researchers have universal application",
      "Needy countries need researchers to help them reach the status of the western world In a modern economy, the results of long-range planning frequently depend upon the future value of money. The ability then to predict the value of money is a key to economic progress."
    ],
    "answer": 3,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "RC-30",
    "subject": "Reading Comprehension",
    "prompt": "The paragraph best supports the statement that",
    "choices": [
      "The value of money is unpredictable at times",
      "The unpredictability of money is an obstacle to a nation's prosperity",
      "Economic progress is facilitated by properly controlling budgetary expenses",
      "Long-range planning is unheard of in traditional economies Sixty years ago I know everything; now I know nothing; education is a progressive discovery of our own ignorance."
    ],
    "answer": 1,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "RC-31",
    "subject": "Reading Comprehension",
    "prompt": "The sentence best supports the statement that",
    "choices": [
      "The older we get, the more we forget what we have learned",
      "The older we get, the more knowledgeable we become",
      "The more we learn, the more we realize that there's more we need to know",
      "We learn more as we grow old Nagawang mabago ng mga kasalukuyang awitin ang kamalayan ng Pilipino upang kantahin ang sarili tanging wikang niyang mga awit sa nakapagsasatinig sa kanyang kaluluwa."
    ],
    "answer": 0,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "RC-32",
    "subject": "Reading Comprehension",
    "prompt": "Isinasaad ng pangungusap na",
    "choices": [
      "Madamdamin at makabuluhan ang mga awiting isinulat sa wikang Pilipino",
      "Tagumpay ang mga awiting Pilipino na mabago ang kaugalian ng mga tao Pilipino",
      "Madaling matutuhan ang mga awiting Pilipino dahil ang mga ito ay nasusulat sa katutubong wika",
      "Natututuhan nang tangkilikin ng mga Pilipino ang kanilang mga sariling awitin With the end of Cold War, the real challenge facing mankind is how to retain the belicate balance between Man and Nature. The word \"biosphere\" is relatively new. It was introduced only in the late 60's. It means \"the thin layer of air, water and land on our Planet Earth, where life exists.\" This thin layer is now endangered because of a head on collision between industrial civilization and earth's ecology ."
    ],
    "answer": 3,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "RC-33",
    "subject": "Reading Comprehension",
    "prompt": "According to passage, the problem is -",
    "choices": [
      "The effect of Cold war in Mother Nature",
      "Massive production of industrial factories",
      "Maintain the balance of nature between man and nature",
      "Pollution in Air, Water and Land in what so called biosphere Culture is never frozen, never fixed once and for all, never pinned to an borrowing ornithologist's collection like all the assorted butterflies of Lepidoptera. A nation advances as its culture advances. But this culture can only be advance by from the rest of the world. Civilization comes and civilization goes on the strength of their cultural richness and fiber. Once this culture can no longer resonate, a civilization dies."
    ],
    "answer": 1,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "RC-34",
    "subject": "Reading Comprehension",
    "prompt": "According to the passage –",
    "choices": [
      "Culture is never stop, never dies, but it advances over and over again.",
      "Once the culture does no longer exist in a particular civilization, the civilization dies.",
      "Culture is a big factor for a nations improvement",
      "Culture can improve by borrowing some from another culture Writing does not only make thoughts real, it does not only make truth real. It makes you real; it makes you flesh and blood, mind and spirit, body and soul. That is why they call it integrity. The man who has integrity is integrated. Writing is not merely which you do. It is what you are. You do not merely say: \"This is how I see things. This is how things should be.\" You say: \"This is what I am. This is how I must be.\""
    ],
    "answer": 0,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "RC-35",
    "subject": "Reading Comprehension",
    "prompt": "According to the passage, writing",
    "choices": [
      "Can express one's opinion and idea for something happen",
      "Is a freedom of expression or feeling of oneself",
      "Can reflect the attitudes and personalities of an individual",
      "Reveals the whole self of an individual, his whole being of an individual"
    ],
    "answer": 3,
    "explanation": "Answer based on the passage’s meaning. Choose what is directly supported by the text."
  },
  {
    "id": "LR-1",
    "subject": "Logical Reasoning",
    "prompt": "Mitch is probably a pianist. She can really stretch her hand and fingers.",
    "choices": [
      "Only people with big hands and long fingers can be pianist.",
      "Playing the piano helps Mitch stretch her hands and fingers",
      "Stretched fingers is an edge of a pianist",
      "Stretching helps pianist perform",
      "A long stretch enables to read more, keep in the piano"
    ],
    "answer": 1,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-2",
    "subject": "Logical Reasoning",
    "prompt": "Chris is a responsible man, he takes good care of his family.",
    "choices": [
      "Taking good care of the family is the responsibility of men",
      "Responsible men take good care of their families",
      "The family is responsible for taking care of men",
      "A good family produces responsible men",
      "A responsible person has a good family"
    ],
    "answer": 1,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-3",
    "subject": "Logical Reasoning",
    "prompt": "All flowers are fragrant. Some flowers are brightly colored. The gumamela is a kind of flower, the sabila is not a kind of flower.",
    "choices": [
      "Some brightly colored flowers are fragrant",
      "The sabila is not brightly colored",
      "The sabila is not fragrant",
      "The gumamela is brightly colored",
      "The gumamela is fragrant"
    ],
    "answer": 0,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-4",
    "subject": "Logical Reasoning",
    "prompt": "If fishes cannot breed, they will die. Coral reefs are the only breeding places of fishes. All coral reefs will be destroyed by 20 years from now.",
    "choices": [
      "Now species of fishes will appear",
      "A coral reefs will form in the deepest sea",
      "Seas and oceans will have higher contact",
      "Fishes will be very expensive",
      "Fishes will cease to exist"
    ],
    "answer": 4,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-5",
    "subject": "Logical Reasoning",
    "prompt": "\"If you're smart, then why aren't you rich?\"",
    "choices": [
      "To become rich requires intelligence",
      "To become rich is difficult",
      "Only the rich are smart",
      "Only smart are rich",
      "All rich people are smart"
    ],
    "answer": 1,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-6",
    "subject": "Logical Reasoning",
    "prompt": "Classical opera is not for me. I am not the old fashion type.",
    "choices": [
      "I have never listened to classical opera",
      "Old-fashioned types are too limited in their tastes",
      "Classical opera appeals to old-fashioned type",
      "Classical opera is old-fashioned",
      "Classical opera is not stimulating enough"
    ],
    "answer": 2,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-7",
    "subject": "Logical Reasoning",
    "prompt": "In order to improve our administration process and get better students, we have decided to include an interview of the applicants as an admission criterion.",
    "choices": [
      "An interview of the applicants will ensure the student's success in school",
      "An interview of the applicants will draw better students",
      "An interview of the applicants will be too time consuming",
      "Current admission procedures are greatly inadequate",
      "Current admission updated criteria need to be"
    ],
    "answer": 1,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-8",
    "subject": "Logical Reasoning",
    "prompt": "Four competing basketball teams play at the town plaza every Saturday from 2 pm to 8pm. The games are scheduled in such a way that only the winning teams continue to play until the champion is proclaimed after the final game. Many avid basketball fans stay throughout the four games.",
    "choices": [
      "The winning team could have not continued playing throughout the four games",
      "The four games are not played one after the other",
      "The total number of games is not four",
      "Basketball does not have avid fans",
      "The champion is not proclaimed right away"
    ],
    "answer": 4,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-9",
    "subject": "Logical Reasoning",
    "prompt": "Narcotics are dangerous since their effects include extensive brain damage.",
    "choices": [
      "Brain damage is a cause of narcotics",
      "All substance abuse lead to brain damage",
      "Extensive brain damage is a sign of drug abuse",
      "Anything that causes extensive brain damage is dangerous",
      "Narcotics should be banned"
    ],
    "answer": 4,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-10",
    "subject": "Logical Reasoning",
    "prompt": "Going beyond the speed limit is foolhardy since it puts people's lives at risk",
    "choices": [
      "Foolhardy people should not be allowed to drive",
      "Only the foolhardy put the lives of people at risk",
      "The lives of people are precious",
      "Putting the lives of people at risk is necessary at times",
      "Putting the lives of people at risk is foolhardy"
    ],
    "answer": 0,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-11",
    "subject": "Logical Reasoning",
    "prompt": "John is not qualified to run for public office. He is an honest person.",
    "choices": [
      "Running for public office is an easy task",
      "Only dishonest people are qualified to run for public office",
      "The qualifications for running for public office are unreasonable",
      "Unqualified honest persons run for public office",
      "Not enough honest persons run for public office"
    ],
    "answer": 4,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-12",
    "subject": "Logical Reasoning",
    "prompt": "Nuclear power must be forbidden because wastes from nuclear reactors are highly fatal to life and unfriendly to the environment.",
    "choices": [
      "Nuclear scientist have not exerted enough effort to control and safely dispose of wastes from nuclear reactors",
      "Wastes from nuclear reactors can be disposed of safely and efficiently",
      "Measures taken to control and dispose of wastes from nuclear reactors have been fruitless",
      "Today's technology cannot effectively reduce the harmful effects of nuclear waste disposal",
      "Anything that has ill-effects on the ecosystem must be prohibited"
    ],
    "answer": 4,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-13",
    "subject": "Logical Reasoning",
    "prompt": "If Mark seems stronger than Luis, then Luis must really be very weak.",
    "choices": [
      "Mark is weak",
      "Mark is strong",
      "Both Mark and Luis competed in a contest of strength",
      "Luis is pretending to be weak",
      "Luis considers himself strong"
    ],
    "answer": 3,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-14",
    "subject": "Logical Reasoning",
    "prompt": "\"Wise men learn by other men's mistakes; fools by their own.\" What does this quotation imply?",
    "choices": [
      "Mistakes can never be avoided",
      "Experience is a dear teacher",
      "Fools commit more mistakes than the wise",
      "We learn to do by doing",
      "All men make mistakes"
    ],
    "answer": 0,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-15",
    "subject": "Logical Reasoning",
    "prompt": "All games of chance are prohibited. Lotto is a game of chance. Poker is not a game of 93 chance.",
    "choices": [
      "Game cards are prohibited",
      "Game cards are not game of chance",
      "Lotto is prohibited",
      "Jueteng is a game of chance",
      "Jueteng is not prohibited"
    ],
    "answer": 2,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-16",
    "subject": "Logical Reasoning",
    "prompt": "All flowers are fragant. Some flowers are brightly colored. Gumamela is a kind of flower. Sabila is not a kind of flower.",
    "choices": [
      "Some brightly-colored flowers are fragrant",
      "Sabila is not brightly-colored",
      "Sabila is not fragrant",
      "Gumamela is brightly-colored",
      "Gumamela is fragrant"
    ],
    "answer": 0,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-17",
    "subject": "Logical Reasoning",
    "prompt": "Artists are never ham-handed. All artists are inquisitive. Joey is not ham-handed. Judith is not inquisitive?",
    "choices": [
      "Joey is an artist",
      "Joey is not an artist",
      "Judith is an artist",
      "Judith is not an artist",
      "Inquisitive people are not ham-handed"
    ],
    "answer": 3,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-18",
    "subject": "Logical Reasoning",
    "prompt": "Cross-country marathon is a popular event. Popular sports events are not televised. Triathlon is a popular sports event. Some are not properly cross-country supervised",
    "choices": [
      "Some cross-country marathons are televised",
      "Triathlon is televised",
      "Triathlon is not televised",
      "Triathlon is properly supervised",
      "Triathlon is not properly supervised"
    ],
    "answer": 2,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-19",
    "subject": "Logical Reasoning",
    "prompt": "There are fewer juvenile delinquents in communities where the youth participate actively in different socio-civic and religious clubs. Barangay Trece has a number of youth clubs.",
    "choices": [
      "Barangay Trece has fewer juvenile delinquents than other barangays out",
      "Parents in Barangay Trece exert great efforts to prevent juvenile delinquency",
      "Municipal officials encourage organization of youth clubs",
      "All young people in Barangay Trece are members of at least two youth clubs",
      "Community development workers in Barangay Trece give training in organizing youth clubs"
    ],
    "answer": 0,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-20",
    "subject": "Logical Reasoning",
    "prompt": "Styrofoam releases a chemical that destroys the ozone layer. The container that Alou uses is not harmful to the ozone layer.",
    "choices": [
      "Alou has found a way to prevent Styrofoam from releasing chemicals into the air",
      "Alou uses containers that are not made of Styrofoam",
      "Alou uses a high-quality Styrofoam as a container",
      "Styrofoam, when used as a container, does not release harmful chemicals into the air",
      "Styrofoam can be used in making durable container"
    ],
    "answer": 1,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-21",
    "subject": "Logical Reasoning",
    "prompt": "Foods rich in fat are rich in cholesterol. Some types of cholesterol are bad for the heart. Chicken skin in rich in fat.",
    "choices": [
      "Foods rich in cholesterol are rich in fat",
      "Foods rich in fat are bad for the heart",
      "Chicken skin is not bad for the heart",
      "Chicken skin is bad for the heart",
      "Chicken skin is rich in cholesterol"
    ],
    "answer": 3,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-22",
    "subject": "Logical Reasoning",
    "prompt": "People who love the Philippines believe that their children must be taught everything by the Filipino language. School administrators mandate that English be the language of instruction for Science and Math.",
    "choices": [
      "School administrators believe we can learn Science and Math better in English",
      "School administrators do not love the Philippines",
      "School administrators are pressured by the parent to teach in English",
      "Children understand Science and Math better in English",
      "Children do not love the Philippines"
    ],
    "answer": 1,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-23",
    "subject": "Logical Reasoning",
    "prompt": "People need guns for security. Students in the police while on campus. Alex is a student of university are protected by the university",
    "choices": [
      "Alex wants to carry a gun on campus but it is prohibited",
      "Alex does not need to carry a gun on campus",
      "Alex need a gun to protect him",
      "Alex had a gun but discarded it when he entered the university",
      "Guns cause violence on campus"
    ],
    "answer": 1,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-24",
    "subject": "Logical Reasoning",
    "prompt": "All of my friends believe in marriage. Brenda is a new friend. She lives with an officemate in an apartment downtown.",
    "choices": [
      "Her housemates are most likely a good friend",
      "Brenda believes in marriage",
      "Brenda is not married yet",
      "She is living-in with her boyfriend",
      "She need a companion in the city"
    ],
    "answer": 1,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-25",
    "subject": "Logical Reasoning",
    "prompt": "All illusions and deceptions are believable. This news report is not believable. This annual report is believable. Some illusions and deceptions are amusing.",
    "choices": [
      "This annual report is amusing",
      "This annual report is an illusion and deception",
      "This news report is not true",
      "This news report is amusing",
      "This news report is not an illusion or a deception"
    ],
    "answer": 2,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-26",
    "subject": "Logical Reasoning",
    "prompt": "All diamonds are elegant. Some pearls are not elegant. The Black Heart is a pearl. The heart of the Deep is not elegant.",
    "choices": [
      "The Black Heart is elegant",
      "The Black Heart is not elegant",
      "The Heart of the Deep is a pearl",
      "The Heart of the Deep is not a diamond",
      "Diamonds are more expensive than pearls"
    ],
    "answer": 3,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-27",
    "subject": "Logical Reasoning",
    "prompt": "Some computer programmers are people are nearsighted. All nearsighted people are inefficient worker. workers. Veronica is an Lourdes is a computer programmer.",
    "choices": [
      "Veronica is nearsighted",
      "Lourdes is an inefficient worker",
      "Some computer programmers are inefficient workers",
      "All computer programmers are inefficient workers",
      "All inefficient workers are nearsighted"
    ],
    "answer": 2,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-28",
    "subject": "Logical Reasoning",
    "prompt": "Some managers are not analytical. All managers are ruthless. David is ruthless.",
    "choices": [
      "All ruthless people are analytical",
      "Not all analytical managers are ruthless",
      "Some ruthless managers are not analytical",
      "David is analytical but is not a manager",
      "David is a manager but is not analytical"
    ],
    "answer": 2,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-29",
    "subject": "Logical Reasoning",
    "prompt": "Submitting a good term paper is a necessary condition for passing the course.",
    "choices": [
      "Mariel did not pass the course, hence, she had not submitted a good term paper",
      "Mariel had submitted a good term paper, hence, she passed the course",
      "Mariel passed the course, hence, she had submitted a good term paper",
      "Either Mariel does not submit a good term paper or she passed the course",
      "Either Mariel submits a good term paper or she does not pass the course"
    ],
    "answer": 1,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-30",
    "subject": "Logical Reasoning",
    "prompt": "If fishes cannot breed, they will die. Coral reefs are the only breeding places of fishes. All coral reefs will be destroyed by humans twenty years from now.",
    "choices": [
      "New species of fishes will appear",
      "Coral reefs will form in the deepest sea",
      "Seas and oceans will have higher content",
      "Fishes will be very expensive",
      "Fishes will cease to exist"
    ],
    "answer": 3,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-31",
    "subject": "Logical Reasoning",
    "prompt": "From the extensive data gathered in the Philippines for the period 1990-1995, there are indications that some rivers are still relatively clean, particularly in Mindanao.",
    "choices": [
      "Not all rivers in the Philippines are polluted",
      "The overall deteriorated",
      "Rivers in the Philippines are polluted",
      "Rivers in Luzon and Visayas are unsafe for fishery and recreational purposes",
      "Philippine rivers could no longer sustain life"
    ],
    "answer": 0,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-32",
    "subject": "Logical Reasoning",
    "prompt": "All detectives are scientific persons. All inventors are creative persons. Farrel is a scientific person. Christopher is not a creative person.",
    "choices": [
      "Farrel is not a detective",
      "Farrel is a detective",
      "Christopher is not an inventor",
      "Christian is an inventor",
      "Christian is also a scientific person"
    ],
    "answer": 2,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-33",
    "subject": "Logical Reasoning",
    "prompt": "Claudia will go to the party if her mother will permit her. Tony will go to the party if Claudia will go to the party. Claudia is permitted by her mother to go to the party.",
    "choices": [
      "Tony will go to the party if Claudia's mother will not permit him to accompany Claudia to the party",
      "Tony will go to the party",
      "Claudia will not go to the party",
      "Claudia will go to the party if Tony will go to the party",
      "All of the above"
    ],
    "answer": 1,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-34",
    "subject": "Logical Reasoning",
    "prompt": "If all fruit-bearing plants are flowering plants, and all flowering plants attract insects.",
    "choices": [
      "Some fruit-bearing plants do not attract insects",
      "All flowering plants are fruit-bearing",
      "Some flowering plants are fruit-bearing",
      "If a plant attracts insects, then it is fruit bearing",
      "All fruit-bearing plants attract insects"
    ],
    "answer": 4,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-35",
    "subject": "Logical Reasoning",
    "prompt": "If you pay your taxes, then more roads are built. If more roads are built, then all farmers will be self- reliant.",
    "choices": [
      "Roads are built for the farmers",
      "If you pay your taxes, then more farmers will be self-reliant",
      "If Mang Nardo is a farmer, then he is self-reliant",
      "If more farmers are self-reliant, then you pay your taxes",
      "If taxes collected are below target, then infrastructure projects will be lesser."
    ],
    "answer": 1,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-36",
    "subject": "Logical Reasoning",
    "prompt": "Subscribing to Cable TV is luxury. All luxuries are needles expenditures. Having a cellular phone is not a luxury. Dining in a five-star hotel is a needless expenditure.",
    "choices": [
      "Having a cellular phone is not a needles expenditure",
      "Subscribing a Cable TV is not a needles expenditure",
      "Subscribing a Cable TV is a needles expenditure",
      "Dining in a five-star hotel is not a luxury",
      "Dining in a five-star hotel is a luxury"
    ],
    "answer": 2,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-37",
    "subject": "Logical Reasoning",
    "prompt": "Viron is taller than Xaphron but shorter than Yael and Zach. Walter is shorter than Yael but taller than Zach. Arrange all five in a row according to height with the shortest at the left and tallest at the right. What is the correct order of their arrangement from left to right?",
    "choices": [
      "Yael, Zach, Viron, Walter, Xaphron",
      "Walter, Yael, Zach, Xaphron, Viron",
      "Xaphron, Zach, Viron, Walter, Yael",
      "Xaphron, Viron, Zach, Walter, Yael",
      "Walter, Yael, Zach, Viron, Xaphrony"
    ],
    "answer": 3,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-38",
    "subject": "Logical Reasoning",
    "prompt": "Aldrine has more experience in personnel work than Erik, Oscar less than Ivan but more than Aldrine, and Erik more than Ulysses but less than Oscar. Among the five, who has the most experience in personnel work?",
    "choices": [
      "Aldrine",
      "Erik",
      "Ivan",
      "Oscar",
      "Ulysses"
    ],
    "answer": 2,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-39",
    "subject": "Logical Reasoning",
    "prompt": "A to H are persons compared according to their age and speed at which they finished a certain job. A is older than B and faster than C. D is younger than E, older than C, and slower than F. G is older than H, younger than C, slower than H, and faster than F. H is older than A, slower than C. Based on the preceding statements, which of the following is true?",
    "choices": [
      "H is older than B and faster than A",
      "G is older than E and slower than A",
      "D is the eldest and slowest",
      "C is younger than D and faster than H is the second oldest and the third",
      "A is the second oldest and the third fastest"
    ],
    "answer": 3,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-40",
    "subject": "Logical Reasoning",
    "prompt": "Anthony is older than Bernie. younger than Bernie. Chan's age is between that of Dolores and Bernie. Anthony is younger than Eric. Who is the youngest among the five?",
    "choices": [
      "Bernie",
      "Anthony",
      "Eric",
      "Dolores",
      "Chan"
    ],
    "answer": 3,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-41",
    "subject": "Logical Reasoning",
    "prompt": "Mark, Ben, Alex, and Alex, and Carlo have surnames Frias, Moreno, Pacis, and Reyes but not respectively. Mark is taller than Alex and Carlo. Mr. Moreno is the tallest of the four. Mr. Frias is taller than Mr. Reyes but shorter than Mr. Pacis. Also, Carlo is taller than Alex and Ben. What is the full name of the second tallest man?",
    "choices": [
      "Mark Pacis",
      "Alex Moreno",
      "Ben Reyes",
      "Carlo Frias",
      "Carlo Pacis"
    ],
    "answer": 4,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-42",
    "subject": "Logical Reasoning",
    "prompt": "Points A, B, C, and D are arranged in a line in such a way that B is between C and D, and A is between B and D. If A precedes C, in what order are they?",
    "choices": [
      "A-D-C-B",
      "B-D-C-A",
      "D-B-C-A",
      "D-A-B-C",
      "A-B-C-D"
    ],
    "answer": 3,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-43",
    "subject": "Logical Reasoning",
    "prompt": "Points E, F, G, and I are arranged in a line in such a way that F is between G and I, and E is between F and I. If E precedes G, in what order are they?",
    "choices": [
      "E-F-G-I",
      "I-G-F-E",
      "F-I-G-E.",
      "I-E-F-G",
      "E-I-G-F"
    ],
    "answer": 3,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-44",
    "subject": "Logical Reasoning",
    "prompt": "If all the odd numbered letters in the English alphabet were to be crossed out, what is the 10th letter NOT crossed out?",
    "choices": [
      "U",
      "S",
      "R",
      "Q",
      "T"
    ],
    "answer": 4,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-45",
    "subject": "Logical Reasoning",
    "prompt": "If the first and fourteenth letters of the English alphabet were interchanged, also, the second and fifteenth, the third and sixteenth, and so on until all letters have been interchanged once. What letter would be the eighteenth letter of the series?",
    "choices": [
      "F",
      "S",
      "D",
      "E",
      "H"
    ],
    "answer": 3,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-46",
    "subject": "Logical Reasoning",
    "prompt": "An employment agency has 50 prospective employees to hire for various jobs. Of these 50, seven are considered to be poor employment risks, since, among the seven, five are lazy while four have poor health. At least how many are both lazy and have poor health?",
    "choices": [
      "Two",
      "Four",
      "Five,",
      "Six",
      "Seven"
    ],
    "answer": 0,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-47",
    "subject": "Logical Reasoning",
    "prompt": "In an election, three candidates A, B, and C vied for the same office. The final counting showed that A garnered 1/3 of the votes while B received more votes than C. Everyone voted for exactly one candidate. What is their branking from first to last?",
    "choices": [
      "A-B-C",
      "B-A-C",
      "B-C-A",
      "A-C-B",
      "C-B-A"
    ],
    "answer": 1,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-48",
    "subject": "Logical Reasoning",
    "prompt": "Lita, Joy, and Hermes are standing in a line. Lita and Joy are 8 ft. away from each other while Lita and Hermes are 12 ft. away. If Joy and Hermes are 20 ft. away from each other. Which of the following statement is true?",
    "choices": [
      "Hermes is 5 ft. away from Lita and Joy",
      "Hermes is between Joy and Lita",
      "Lita is between Joy and Hermes",
      "Joy is between Lita and Hermes",
      "The information is insufficient to describe their arrangement"
    ],
    "answer": 2,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-49",
    "subject": "Logical Reasoning",
    "prompt": "Of the three brother; Emil, Bobby and Ed, one is a lawyer, an engineer, and a doctor, not necessarily in that order. Emil does not know the meaning of the word \"litigant\". Bobby has not seen a \"drawing board\" while Ed does not know how to use a \"stethoscope\". Their neighbor, Mr. Santos, is a patient of Bobby. Who is the engineer?",
    "choices": [
      "Bobby",
      "Either Bobby or Ed",
      "Either Emil or Ed",
      "Emil",
      "Ed"
    ],
    "answer": 3,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-50",
    "subject": "Logical Reasoning",
    "prompt": "A, B, C, D, and E are kinds of insects that destroy the crops of crops of a particular region. Insect A destroys C, D, and E. Insect B destroys C, D, and E. Insect C destroys A and B. Insects D and E destroy each other. Of the five kinds of insects, which one is the most useful in exterminating the other insects?",
    "choices": [
      "B",
      "E",
      "A",
      "C",
      "D"
    ],
    "answer": 3,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-51",
    "subject": "Logical Reasoning",
    "prompt": "Three neighborhood dogs A, B, and C barked consistently last night. They all began barking at 11:00 p.m. Then A barked every 4 minutes, B every 2 minutes, and C every 5 minutes. Mr. Santos was suddenly awakened at 11:30 p.m. Which dogs were barking?",
    "choices": [
      "A, B, and C",
      "A and B",
      "A and C",
      "B and C",
      "None"
    ],
    "answer": 3,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-52",
    "subject": "Logical Reasoning",
    "prompt": "There are ten students in a room. In how many ways can they shake hands each other once?",
    "choices": [
      "100",
      "9",
      "10",
      "90",
      "45"
    ],
    "answer": 4,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-53",
    "subject": "Logical Reasoning",
    "prompt": "A farmer planted four rows of citrus according to height. The middle row averaged 2 feet in height. The second statement is wrong because",
    "choices": [
      "Citrus plants are less than 2 feet",
      "There is no middle row",
      "The plants are not of the same height",
      "The average height of any row cannot be determined",
      "The number of plants in each row is not given"
    ],
    "answer": 1,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-54",
    "subject": "Logical Reasoning",
    "prompt": "A young man replanted a dozen of grape seedlings in seven by twenty feet plot under a newly constructed trellis. Not knowing that his seedlings were of the high-breed high yielding variety, he was surprised to see the trees teeming with grapes ready for harvesting year after he replanted them. The final statement is invalid because",
    "choices": [
      "Trees bear fruits every year",
      "Seedlings of trees do not bear fruits",
      "Grapes do not grow on trees",
      "Grapes do not have high yielding varieties",
      "There are no high-breed varieties of grapes"
    ],
    "answer": 2,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "LR-55",
    "subject": "Logical Reasoning",
    "prompt": "In a survey of 20 laundry women, 18 of them used Brand X detergent soap while 12of them used Brand Y soap. Which of the following is true?",
    "choices": [
      "Eight laundry women used both brands",
      "A laundry woman uses one and only brand of detergent soap",
      "Ten laundry women used both brands",
      "Brand X is better than Brand Y",
      "The data given is erroneous since 18 and 12 is not equal to 20"
    ],
    "answer": 4,
    "explanation": "Use the given statements to determine what must be true. Avoid conclusions not supported by the premises."
  },
  {
    "id": "MATH-1",
    "subject": "Math (Basic Concepts)",
    "prompt": "32 is to 9 as 92 is to____",
    "choices": [
      "18",
      "27",
      "72",
      "81"
    ],
    "answer": 3,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-2",
    "subject": "Math (Basic Concepts)",
    "prompt": "30% is to 3/5 as 60% is to___",
    "choices": [
      "1 and 1/4",
      "3 and 1/2",
      "2",
      "2 and ¾"
    ],
    "answer": 3,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-3",
    "subject": "Math (Basic Concepts)",
    "prompt": "0.25 is to 0.125 as 1.25 is to____",
    "choices": [
      "1.250",
      "0.625",
      "1.625",
      "1.125"
    ],
    "answer": 1,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-4",
    "subject": "Math (Basic Concepts)",
    "prompt": "12.5 is to 1/8 as 20 is to_____",
    "choices": [
      "1/6",
      "1/3",
      "1/4",
      "½"
    ],
    "answer": 2,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-5",
    "subject": "Math (Basic Concepts)",
    "prompt": "6 is to 15 as 36 is to_____",
    "choices": [
      "60",
      "90",
      "75",
      "72 INSTRUCTION: Each item section contains a series of numbers arranged according to a certain rule or order. Study the series and determine which number is next."
    ],
    "answer": 0,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-6",
    "subject": "Math (Basic Concepts)",
    "prompt": "9.12 18.13 16.15 13.18 9.22",
    "choices": [
      "3.25",
      "4.27",
      "5.23",
      "6.29"
    ],
    "answer": 1,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-7",
    "subject": "Math (Basic Concepts)",
    "prompt": "1 4 13 40 121 364",
    "choices": [
      "623",
      "719",
      "997",
      "1093"
    ],
    "answer": 3,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-8",
    "subject": "Math (Basic Concepts)",
    "prompt": "5 17 19 6 14 16 7 10 12 8 38.06",
    "choices": [
      "15",
      "11",
      "9",
      "5"
    ],
    "answer": 3,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-9",
    "subject": "Math (Basic Concepts)",
    "prompt": "795 2611 684 2722 573 2833",
    "choices": [
      "543",
      "484",
      "462",
      "446"
    ],
    "answer": 2,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-10",
    "subject": "Math (Basic Concepts)",
    "prompt": "-6 30 -150 750",
    "choices": [
      "2250",
      "-1500",
      "-2250",
      "-3750"
    ],
    "answer": 3,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-11",
    "subject": "Math (Basic Concepts)",
    "prompt": "1/3 3/9 5/15 7/21 9/27____",
    "choices": [
      "11/35",
      "11/33",
      "9/29",
      "8/25"
    ],
    "answer": 1,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-12",
    "subject": "Math (Basic Concepts)",
    "prompt": "4 16 8 40 20 120 60 420____",
    "choices": [
      "480",
      "360",
      "210",
      "140"
    ],
    "answer": 2,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-13",
    "subject": "Math (Basic Concepts)",
    "prompt": "2 5 8 10 4 17 5 26 6___",
    "choices": [
      "40",
      "38",
      "37",
      "35"
    ],
    "answer": 2,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-14",
    "subject": "Math (Basic Concepts)",
    "prompt": ".02 .06 .12 .20 .30_____",
    "choices": [
      "0.36",
      "0.42",
      "0.46",
      "0.48"
    ],
    "answer": 1,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-15",
    "subject": "Math (Basic Concepts)",
    "prompt": "2 5 12.5 31.25____",
    "choices": [
      "33.75",
      "43.25",
      "78.125",
      "82.125 INSTRUCTION: Answer the following questions by observation or computation."
    ],
    "answer": 2,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-16",
    "subject": "Math (Basic Concepts)",
    "prompt": "16 + 4 x (7 + 8) - 3 =_____?",
    "choices": [
      "117",
      "145",
      "73",
      "65"
    ],
    "answer": 2,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-17",
    "subject": "Math (Basic Concepts)",
    "prompt": "(18 + 17) (12+ 9) - (7 x 16) (4 + 2) =____?",
    "choices": [
      "53",
      "63",
      "321",
      "323"
    ],
    "answer": 1,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-18",
    "subject": "Math (Basic Concepts)",
    "prompt": "The sum of 73, 2891, 406 and 98 is____?",
    "choices": [
      "3468",
      "3486",
      "3648",
      "4648"
    ],
    "answer": 0,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-19",
    "subject": "Math (Basic Concepts)",
    "prompt": "Which of the following numbers is divisible by 24?",
    "choices": [
      "192",
      "268",
      "248",
      "596"
    ],
    "answer": 0,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-20",
    "subject": "Math (Basic Concepts)",
    "prompt": "Which of the following is a prime number?",
    "choices": [
      "57",
      "87",
      "89",
      "91"
    ],
    "answer": 2,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-21",
    "subject": "Math (Basic Concepts)",
    "prompt": "The product of 18 and 73 is___?",
    "choices": [
      "1304",
      "1324",
      "1314",
      "1342"
    ],
    "answer": 2,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-22",
    "subject": "Math (Basic Concepts)",
    "prompt": "The difference of 476 and 182 is____?",
    "choices": [
      "654",
      "86632",
      "314",
      "294"
    ],
    "answer": 3,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-23",
    "subject": "Math (Basic Concepts)",
    "prompt": "Evaluate 1/100 + 2/1000 + 3/10=____?",
    "choices": [
      "0.213",
      "0.312",
      "0.123",
      "0.231"
    ],
    "answer": 1,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-24",
    "subject": "Math (Basic Concepts)",
    "prompt": "Evaluate 1/2 + 1/4 + 1/8 =___?",
    "choices": [
      "3/14",
      "3/16",
      "3/12",
      "7/8"
    ],
    "answer": 3,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-25",
    "subject": "Math (Basic Concepts)",
    "prompt": "Seventy-one and twenty-one ten thousandths is written in standard form as:",
    "choices": [
      "71.2100",
      "71.0021",
      "71.210000",
      "71,2100"
    ],
    "answer": 1,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-26",
    "subject": "Math (Basic Concepts)",
    "prompt": "One thousand forty two and seven thousandths in written form is",
    "choices": [
      "1042.7000",
      "10,427,000",
      "1,042.007",
      "1,042.0007"
    ],
    "answer": 2,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-27",
    "subject": "Math (Basic Concepts)",
    "prompt": "1/3 + 5/6 + 1/2 =____?",
    "choices": [
      "1 and 2/3",
      "7/11",
      "1 and 1/3",
      "3/5"
    ],
    "answer": 0,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-28",
    "subject": "Math (Basic Concepts)",
    "prompt": "3 1/2-1 2/3 =____?",
    "choices": [
      "1 and 1/6",
      "5 and 1/6",
      "6 and 1/5",
      "1 and 5/6"
    ],
    "answer": 3,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-29",
    "subject": "Math (Basic Concepts)",
    "prompt": "900 x 0.09 =___?",
    "choices": [
      "0.81",
      "8.1",
      "81",
      "810"
    ],
    "answer": 2,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-30",
    "subject": "Math (Basic Concepts)",
    "prompt": "7/8 ÷ 21/4 =___?",
    "choices": [
      "1/6",
      "1/3",
      "1 and 1/2",
      "2/3"
    ],
    "answer": 0,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-31",
    "subject": "Math (Basic Concepts)",
    "prompt": "27, 499 round to the nearest hundred is_____?",
    "choices": [
      "27, 400",
      "27, 500",
      "27, 000",
      "28, 000"
    ],
    "answer": 1,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-32",
    "subject": "Math (Basic Concepts)",
    "prompt": "Twenty-four weeks is how many days?",
    "choices": [
      "140",
      "168",
      "176",
      "196"
    ],
    "answer": 1,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-33",
    "subject": "Math (Basic Concepts)",
    "prompt": "Five hundred ninety-five days is how many weeks?",
    "choices": [
      "119",
      "95",
      "85",
      "75"
    ],
    "answer": 2,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-34",
    "subject": "Math (Basic Concepts)",
    "prompt": "If the following quantities were arrange from the least to the greatest, which one would have the second greatest value?",
    "choices": [
      "6/12",
      "5/12",
      "4/10",
      "2/6"
    ],
    "answer": 0,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-35",
    "subject": "Math (Basic Concepts)",
    "prompt": "Suppose that the time now is 9:30 A.M. What will be the time 16 hours from now?",
    "choices": [
      "12:30 A.M.",
      "1:30 A.M.",
      "2:30 A.M.",
      "11:30 P.M."
    ],
    "answer": 1,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-36",
    "subject": "Math (Basic Concepts)",
    "prompt": "What number when increased by 90% of itself equals 133?",
    "choices": [
      "30",
      "43",
      "70",
      "119"
    ],
    "answer": 2,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-37",
    "subject": "Math (Basic Concepts)",
    "prompt": "Which of the following has the least numerical value?",
    "choices": [
      "6+3x4",
      "4+3x6",
      "4x6+3",
      "3x6+4"
    ],
    "answer": 0,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-38",
    "subject": "Math (Basic Concepts)",
    "prompt": "A trader bought a watch and sold it at 30% more than its original cost. How much did the trader earn if the original cost of the watch was P?",
    "choices": [
      "P + 30%",
      "P - 30%",
      "30% x P",
      "30% / P"
    ],
    "answer": 2,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-39",
    "subject": "Math (Basic Concepts)",
    "prompt": "What is the standard numerical value for 3.54 x 105?",
    "choices": [
      "0.000354",
      "0.00354",
      "35, 400",
      "354, 000"
    ],
    "answer": 3,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-40",
    "subject": "Math (Basic Concepts)",
    "prompt": "What is the smallest positive number that will give a remainder of 3 when it is divided by 4, 5, or 10? 218",
    "choices": [
      "63",
      "53",
      "33",
      "23"
    ],
    "answer": 3,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-41",
    "subject": "Math (Basic Concepts)",
    "prompt": "What time will it be 3 and 1/2 hours after 7:15 P.M.?",
    "choices": [
      "3:45 A.M.",
      "10:45 A.M.",
      "3:45 P.M.",
      "10:45 P.M."
    ],
    "answer": 3,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-42",
    "subject": "Math (Basic Concepts)",
    "prompt": "What time was it 3 and 1/2 hours before 7:15 A.M.?",
    "choices": [
      "3:45 A.M.",
      "10:45 A.M.",
      "3:45 P.M.",
      "10:45 P.M."
    ],
    "answer": 2,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-43",
    "subject": "Math (Basic Concepts)",
    "prompt": "The fraction 52/91 expressed in lowest term is___?",
    "choices": [
      "4/7",
      "2/3",
      "3/7",
      "7/13"
    ],
    "answer": 0,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-44",
    "subject": "Math (Basic Concepts)",
    "prompt": "Change 31/17 to a mixed number.",
    "choices": [
      "14 and 1/17",
      "4 and 1/17",
      "2 and 3/7",
      "1 and 14/17"
    ],
    "answer": 3,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-45",
    "subject": "Math (Basic Concepts)",
    "prompt": "40 is what part of 64?",
    "choices": [
      "7/8",
      "3/8",
      "5/8",
      "1 and 3/5"
    ],
    "answer": 2,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-46",
    "subject": "Math (Basic Concepts)",
    "prompt": "Change 13 3/7 to an improper fraction.",
    "choices": [
      "91/7",
      "39/7",
      "273/7",
      "94/7"
    ],
    "answer": 3,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-47",
    "subject": "Math (Basic Concepts)",
    "prompt": "What is the average speed in kph of a car travelling 160 kilometers in 5 hours?",
    "choices": [
      "32",
      "40",
      "80",
      "90"
    ],
    "answer": 0,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-48",
    "subject": "Math (Basic Concepts)",
    "prompt": "3/4 + 1/6 + 1/8 =____?",
    "choices": [
      "5/8",
      "1 and 1/24.",
      "1/16",
      "3/8"
    ],
    "answer": 1,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-49",
    "subject": "Math (Basic Concepts)",
    "prompt": "15 1/3 - 8 3/4 =_____?",
    "choices": [
      "6 and 7/12",
      "7 and 2/3",
      "8 and 2/7",
      "7 and 2/7"
    ],
    "answer": 0,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-50",
    "subject": "Math (Basic Concepts)",
    "prompt": "8 inches is what part of a foot?",
    "choices": [
      "2/3",
      "7/12",
      "4/5",
      "5/6"
    ],
    "answer": 0,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-51",
    "subject": "Math (Basic Concepts)",
    "prompt": "13 and 1/3 ounces is what part of a pound? Whereas: 16 ounces is equal to 1 pound",
    "choices": [
      "2/3",
      "5/6",
      "3/4",
      "7/8 9𝑥−7"
    ],
    "answer": 1,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-52",
    "subject": "Math (Basic Concepts)",
    "prompt": "If 9x - 7 = 18y then =____? 6",
    "choices": [
      "2y",
      "3y",
      "6y",
      "y + 6"
    ],
    "answer": 1,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-53",
    "subject": "Math (Basic Concepts)",
    "prompt": "What single discount is successive discounts if 5% and 10%? discount is equivalent to",
    "choices": [
      "10.5%",
      "12.5%",
      "14.5%",
      "15%"
    ],
    "answer": 2,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-54",
    "subject": "Math (Basic Concepts)",
    "prompt": "How many miles are there in 40 kilometers?",
    "choices": [
      "25",
      "64",
      "32",
      "60"
    ],
    "answer": 0,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "MATH-55",
    "subject": "Math (Basic Concepts)",
    "prompt": "If water tank can be filled 1 and 3/4 hours. What part of the tank can be filled in exactly 1 hour?",
    "choices": [
      "1/2",
      "3/4",
      "4/7",
      "1"
    ],
    "answer": 2,
    "explanation": "Apply the correct rule/order of operations or identify the pattern, then compute the correct result."
  },
  {
    "id": "PS-1",
    "subject": "Problem Solving",
    "prompt": "If 45 feet of uniform wire weigh 5 kilograms, what is the weight of 30 yards of the wire?",
    "choices": [
      "5 kg",
      "10 kg",
      "15 kg",
      "20 kg"
    ],
    "answer": 1,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "PS-2",
    "subject": "Problem Solving",
    "prompt": "A school has enough oatmeal to feed 15 children in 4 days. If 5 more children are added, how many days will the oatmeal last?",
    "choices": [
      "3",
      "12",
      "1 and 1/3",
      "5 and 1/3"
    ],
    "answer": 0,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "PS-3",
    "subject": "Problem Solving",
    "prompt": "If a car can travel 60 km on 12 liters of gasoline, how many liters will be needed in a 210 km trip?",
    "choices": [
      "30",
      "42",
      "45",
      "50"
    ],
    "answer": 1,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "PS-4",
    "subject": "Problem Solving",
    "prompt": "If 10 parts of alcohol is mixed with 15 parts of water, what part of the mixture is alcohol?",
    "choices": [
      "2/3",
      "2/5",
      "1/3",
      "3/5"
    ],
    "answer": 1,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "PS-5",
    "subject": "Problem Solving",
    "prompt": "If 2/5 of the workers in a factory go on vacation is September and 1/3 of the remainder takes their vacation in October, what fraction of the workers take their vacation in some other time?",
    "choices": [
      "2/5",
      "1/3",
      "1/15",
      "4/15"
    ],
    "answer": 0,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "PS-6",
    "subject": "Problem Solving",
    "prompt": "A bill was passed by a vote of 7: 5. What part of the vote counts were in favor of the bill?",
    "choices": [
      "5/7",
      "7/12",
      "5/12",
      "7/5"
    ],
    "answer": 1,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "PS-7",
    "subject": "Problem Solving",
    "prompt": "If a man travels for half of an hour at 60 km/hr, and for quarter of an hour for 120 km/hr, what is his average speed?",
    "choices": [
      "80 kph",
      "90 kph",
      "100 kph",
      "120 kph"
    ],
    "answer": 0,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "PS-8",
    "subject": "Problem Solving",
    "prompt": "In a group of 8, 000 applicants for a national police examination, 1600 failed to take the first part of the test. What percent of the total applicants took the first part of the test?",
    "choices": [
      "20%",
      "30%",
      "40%",
      "80%"
    ],
    "answer": 3,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "PS-9",
    "subject": "Problem Solving",
    "prompt": "If 4 men can paint a fence in 2 days, what part of the job can be completed by one man in 8 days?",
    "choices": [
      "1/4",
      "1/2",
      "3/4",
      "1 whole job"
    ],
    "answer": 3,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "PS-10",
    "subject": "Problem Solving",
    "prompt": "Of John's salary, 1/10 is spent for clothing, and 1/4 for board and lodging. What part of the salary is left for other expenditures and savings?",
    "choices": [
      "3/5",
      "13/20",
      "7/10",
      "2/5"
    ],
    "answer": 1,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "PS-11",
    "subject": "Problem Solving",
    "prompt": "A student buys an ESC Reviewer Book for P175 after receiving a discount of 12.5%. What was the marked price?",
    "choices": [
      "P187.50",
      "P200",
      "P225",
      "P250"
    ],
    "answer": 1,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "PS-12",
    "subject": "Problem Solving",
    "prompt": "A town house unit was sold for P2.50 M, yielding a 25% profit. For how much would it be sold to yield only a 10% profit on the cost?",
    "choices": [
      "P2M",
      "P2.25M",
      "P2.2M",
      "P2.45M"
    ],
    "answer": 2,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "PS-13",
    "subject": "Problem Solving",
    "prompt": "If 4 workers can complete 8 identical jobs in 4 days, how long will it take 6 workers to complete 12 such jobs?",
    "choices": [
      "3 days",
      "4 days",
      "5 days",
      "6 days"
    ],
    "answer": 1,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "PS-14",
    "subject": "Problem Solving",
    "prompt": "A bookstore sells two kinds of ESC Reviewer Books (NAPOLCOM and Criminology). If it sells the NAPOLCOM book which yield a profit of P62.00 per book, and it can sell 300 books in a month. It sells the Criminology book at a profit of P50.50 per book and it can sell 350 books in one month. Which type of book will yield more profit per month, and by how much?",
    "choices": [
      "The Criminology book will yield a greater profit by P925.",
      "The NAPOLCOM will yield a greater profit by P925.",
      "Both books will yield exactly the same profit",
      "The NAPOLCOM will yield a greater profit by P1150."
    ],
    "answer": 1,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "PS-15",
    "subject": "Problem Solving",
    "prompt": "Mr. Jose Suobiron inherited 5/8 of his father's estate. He sold 2/5 of his share. What part of the entire estate did he sell?",
    "choices": [
      "1/2",
      "1/4",
      "2/5",
      "3/8"
    ],
    "answer": 1,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "PS-16",
    "subject": "Problem Solving",
    "prompt": "Car A averages 8 km per liter of fuel. Car B averages 12 km per liter of fuel. If the price of fuel is P10 per liter. How much less would a 600km. trip cost for Car A than for Car B?",
    "choices": [
      "250",
      "500",
      "600",
      "750"
    ],
    "answer": 0,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "PS-17",
    "subject": "Problem Solving",
    "prompt": "Eighteen busloads of 56 students each went to join the Independence Day Celebration. One hundred seventy-four did not go. How many students are there in all?",
    "choices": [
      "160",
      "1282",
      "180",
      "1182"
    ],
    "answer": 3,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "PS-18",
    "subject": "Problem Solving",
    "prompt": "Richard bowled 3 games and got scores of 139, 153, and 128. What was his average score for the three games?",
    "choices": [
      "130",
      "140",
      "150",
      "160"
    ],
    "answer": 1,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "PS-19",
    "subject": "Problem Solving",
    "prompt": "There are 36 reams of bond paper in a drawer. If 1 1/4 dozens of reams of paper were to be used in printing, how many reams should be left in the drawer?",
    "choices": [
      "15",
      "20",
      "21",
      "22"
    ],
    "answer": 2,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "PS-20",
    "subject": "Problem Solving",
    "prompt": "If a poster, which is 3 inches wide and 5 inches long, is enlarged such that the ratio of the width to the length is maintained, how many inches long will it be if the new width is 9 inches?",
    "choices": [
      "11",
      "13",
      "15",
      "25"
    ],
    "answer": 2,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "PS-21",
    "subject": "Problem Solving",
    "prompt": "If a worker can wash all the glass windows building in 9 days, what part of the job can the workers finish in 6 days?",
    "choices": [
      "1/4",
      "1/3",
      "2/3",
      "3/5"
    ],
    "answer": 2,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "PS-22",
    "subject": "Problem Solving",
    "prompt": "Ms. Cortez bought 20 blouses for P2,400 and marked them to sell at P145 each. After selling 16 pieces at this rate, she decided to sell the remaining blouses at a lower what price may she sell each price. At remaining blouse and still realize a profit of P480 on the 20 blouses?",
    "choices": [
      "a. P143",
      "b. P140",
      "c. P135",
      "d. P133"
    ],
    "answer": 1,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "PS-23",
    "subject": "Problem Solving",
    "prompt": "In a room of ten people, how many handshakes will there be if every person shakes hands with everyone else exactly once?",
    "choices": [
      "10",
      "45",
      "54",
      "60"
    ],
    "answer": 1,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "PS-24",
    "subject": "Problem Solving",
    "prompt": "The numerator of a fraction is 4 less than its denominator. If 3 added to both the numerator and the denominator the resulting number is 3/4. What is the original fraction?",
    "choices": [
      "8/14",
      "9/12",
      "9/13",
      "10/13"
    ],
    "answer": 2,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "PS-25",
    "subject": "Problem Solving",
    "prompt": "Mang Gustin can climb a coconut tree at the rate of 10 ft. per minute and return at 20 ft. per minute. If it took him 3 minutes to climb and return, what is the height of the coconut tree?",
    "choices": [
      "20 ft.",
      "18 ft.",
      "13 ft.",
      "15 ft."
    ],
    "answer": 0,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "PS-26",
    "subject": "Problem Solving",
    "prompt": "A fence is to be on posts 8 meters apart around a rectangular lot that measures 40 meters long and 16 meters wide. How many posts are needed, including the ones placed at each corner, to fence the entire lot?",
    "choices": [
      "20",
      "14",
      "12",
      "18"
    ],
    "answer": 1,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "PS-27",
    "subject": "Problem Solving",
    "prompt": "How many degrees are there in the angle made by the hands of a clock at 4 o'clock?",
    "choices": [
      "150°",
      "120°",
      "95°",
      "80°"
    ],
    "answer": 1,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "PS-28",
    "subject": "Problem Solving",
    "prompt": "The co-operative trust fund is P500,000. Part of the fund is invested at an annual interest rate of 6% and the rest is invested at an annual interest rate of 8%. If the income from both investments is P39,000, how much is invested at each rate?",
    "choices": [
      "a. P100,000 at 6%; P400,000 at 8%",
      "b. P80,000 at 6%; P420,000 at 8%",
      "c. P75,000 at 6%; P425,000 at 8%",
      "d. P50,000 at 6%; P450,000 at 8%"
    ],
    "answer": 3,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "PS-29",
    "subject": "Problem Solving",
    "prompt": "The entrance fee in a carnival is P50 for an adult and P25 for a child. Ferdie pays P225 for the entrance fee of his family. If his family has equal number of adults and children, how many are they in the family?",
    "choices": [
      "12",
      "10",
      "6",
      "4"
    ],
    "answer": 2,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "PS-30",
    "subject": "Problem Solving",
    "prompt": "The area of a rectangular field is 9,000 square meters. If the ratio of the width to do the length is 5 is to 8, what is the length of the rectangular field in meters?",
    "choices": [
      "112",
      "120",
      "150",
      "225"
    ],
    "answer": 1,
    "explanation": "Translate the word problem into math steps (percent, ratio, distance-rate-time, etc.) and compute the answer."
  },
  {
    "id": "FE-1",
    "subject": "Finding Errors",
    "prompt": "a. We were disatisfied with the results of the experiment.",
    "choices": [
      "Our office has a plentiful supply of staples.",
      "Stringent controls were county's budget.",
      "no mistakes placed on the"
    ],
    "answer": 0,
    "explanation": "Find the part of the sentence that violates grammar/usage rules (agreement, tense, pronoun case, modifiers, etc.)."
  },
  {
    "id": "FE-2",
    "subject": "Finding Errors",
    "prompt": "a. Curt will probibly stay home tonight.",
    "choices": [
      "The coach praised the team for last night's game.",
      "It was a relief to learn that Brad had arrived safely.",
      "no mistakes"
    ],
    "answer": 0,
    "explanation": "Find the part of the sentence that violates grammar/usage rules (agreement, tense, pronoun case, modifiers, etc.)."
  },
  {
    "id": "FE-4",
    "subject": "Finding Errors",
    "prompt": "a. William is the most sensable person I know.",
    "choices": [
      "The festival is held at a different time every year.",
      "It is customary for the members to arrive fashionably late.",
      "no mistakes"
    ],
    "answer": 0,
    "explanation": "Find the part of the sentence that violates grammar/usage rules (agreement, tense, pronoun case, modifiers, etc.)."
  },
  {
    "id": "FE-5",
    "subject": "Finding Errors",
    "prompt": "a. Her father is a captin in the navy.",
    "choices": [
      "The weather here changes frequently.",
      "We adopted a new policy.",
      "no mistakes"
    ],
    "answer": 0,
    "explanation": "Find the part of the sentence that violates grammar/usage rules (agreement, tense, pronoun case, modifiers, etc.)."
  },
  {
    "id": "FE-8",
    "subject": "Finding Errors",
    "prompt": "a. The welfare of the community depends on this decision.",
    "choices": [
      "He is undecided about which job to accept.",
      "Unfortunatly, we do not have this sweater in another color.",
      "no mistakes"
    ],
    "answer": 2,
    "explanation": "Find the part of the sentence that violates grammar/usage rules (agreement, tense, pronoun case, modifiers, etc.)."
  },
  {
    "id": "FE-10",
    "subject": "Finding Errors",
    "prompt": "a. I am going to wear my velvit skirt on New year's Eve.",
    "choices": [
      "The sentences in the second paragraph are too vague.",
      "George wrapped the birthday present for me.",
      "no mistakes"
    ],
    "answer": 0,
    "explanation": "Find the part of the sentence that violates grammar/usage rules (agreement, tense, pronoun case, modifiers, etc.)."
  },
  {
    "id": "FE-11",
    "subject": "Finding Errors",
    "prompt": "a. My friends bought a new home in an upscale community.",
    "choices": [
      "I am truely sorry about the outcome.",
      "Rhoda has a private office.",
      "no mistakes"
    ],
    "answer": 1,
    "explanation": "Find the part of the sentence that violates grammar/usage rules (agreement, tense, pronoun case, modifiers, etc.)."
  },
  {
    "id": "FE-12",
    "subject": "Finding Errors",
    "prompt": "a. Mark carved the roast with a razor-sharp knife.",
    "choices": [
      "You have been more than charitable.",
      "Which president is buried in this cemetary?",
      "no mistakes"
    ],
    "answer": 2,
    "explanation": "Find the part of the sentence that violates grammar/usage rules (agreement, tense, pronoun case, modifiers, etc.)."
  },
  {
    "id": "FE-14",
    "subject": "Finding Errors",
    "prompt": "a. Her conversation was filled with sarcasim.",
    "choices": [
      "I would like to be as poised as Susanna.",
      "You can learn self-confidence.",
      "no mistakes"
    ],
    "answer": 0,
    "explanation": "Find the part of the sentence that violates grammar/usage rules (agreement, tense, pronoun case, modifiers, etc.)."
  },
  {
    "id": "FE-15",
    "subject": "Finding Errors",
    "prompt": "a. Smart consumers read food labels.",
    "choices": [
      "Your new dress is lovily.",
      "Did you see the lightning?",
      "no mistakes"
    ],
    "answer": 1,
    "explanation": "Find the part of the sentence that violates grammar/usage rules (agreement, tense, pronoun case, modifiers, etc.)."
  },
  {
    "id": "FE-16",
    "subject": "Finding Errors",
    "prompt": "a. The parachute opened properly.",
    "choices": [
      "Carlos is a physical therapist.",
      "This story has received too much publisity.",
      "no mistakes"
    ],
    "answer": 2,
    "explanation": "Find the part of the sentence that violates grammar/usage rules (agreement, tense, pronoun case, modifiers, etc.)."
  },
  {
    "id": "FE-18",
    "subject": "Finding Errors",
    "prompt": "a. Mercury is a poisonous substance.",
    "choices": [
      "Todd served in the militery for twenty",
      "Their relationship suffered as a result of his immaturity.",
      "no mistakes"
    ],
    "answer": 1,
    "explanation": "Find the part of the sentence that violates grammar/usage rules (agreement, tense, pronoun case, modifiers, etc.)."
  },
  {
    "id": "FE-19",
    "subject": "Finding Errors",
    "prompt": "a. She did not even aknowledge my presence.",
    "choices": [
      "Do you think this is an attainable goal?",
      "For the fiftieth time, the answer is no.",
      "no mistakes"
    ],
    "answer": 0,
    "explanation": "Find the part of the sentence that violates grammar/usage rules (agreement, tense, pronoun case, modifiers, etc.)."
  },
  {
    "id": "FE-20",
    "subject": "Finding Errors",
    "prompt": "a. There is a five-year warranty on this appliance.",
    "choices": [
      "Measure both the length and the width of the table.",
      "How many wittnesses do we have?",
      "no mistakes."
    ],
    "answer": 2,
    "explanation": "Find the part of the sentence that violates grammar/usage rules (agreement, tense, pronoun case, modifiers, etc.)."
  },
  {
    "id": "FE-21",
    "subject": "Finding Errors",
    "prompt": "a. Harry is a kind-hearted man.",
    "choices": [
      "We have a fundimental difference of opinion.",
      "Your behavior can only be described as professional.",
      "no mistakes"
    ],
    "answer": 1,
    "explanation": "Find the part of the sentence that violates grammar/usage rules (agreement, tense, pronoun case, modifiers, etc.)."
  },
  {
    "id": "FE-23",
    "subject": "Finding Errors",
    "prompt": "a. Scott was in unaform when he sat for the new family portrait.",
    "choices": [
      "The tenants' association will hold its 20 3 meeting tonight.",
      "This is the best value you will find anywhere.",
      "no mistakes"
    ],
    "answer": 0,
    "explanation": "Find the part of the sentence that violates grammar/usage rules (agreement, tense, pronoun case, modifiers, etc.)."
  },
  {
    "id": "FE-24",
    "subject": "Finding Errors",
    "prompt": "a. I am taking my neice and nephew to the amusement park.",
    "choices": [
      "They placed their wedding announcement in the Sunday paper.",
      "That is one argument that will never be resolved.",
      "no mistakes"
    ],
    "answer": 0,
    "explanation": "Find the part of the sentence that violates grammar/usage rules (agreement, tense, pronoun case, modifiers, etc.)."
  },
  {
    "id": "FE-25",
    "subject": "Finding Errors",
    "prompt": "a. What is your assessment of the situation?",
    "choices": [
      "How much paint do we need to compleat this job?",
      "Your assignment is to right a four-page report.",
      "no mistakes"
    ],
    "answer": 1,
    "explanation": "Find the part of the sentence that violates grammar/usage rules (agreement, tense, pronoun case, modifiers, etc.)."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "Senate, Supreme Court, Congress",
    "choices": [
      "2. Presidential, Unicameral- Parliamentary, Bicameral-Parliamentary",
      "3. Legislative, Executive, Judicial",
      "4. The Legislature, The Senate, The Supreme Court",
      "The Supreme Court shall be composed of a Chief Justice and how many Associates Justices?"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "12",
    "choices": [
      "2. 13",
      "3. 14",
      "4. 15",
      "The executive power shall be vested in the _________."
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "President of the Philippines",
    "choices": [
      "2. House of Representatives",
      "3. The Supreme Court",
      "4. The Congress",
      "The legislative power shall be vested in the _________ which shall consist of a Senate and a House of Representatives."
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "Congress of the Philippines",
    "choices": [
      "2. House of Ombudsman",
      "3. The Supreme Court",
      "4. Bureau of Internal Revenue",
      "The Senate shall be composed of how many senators elected at large by voters of the Philippines?"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "21",
    "choices": [
      "2. 22",
      "3. 23",
      "4. 24",
      "6. How long shall the term of office of the senators be commenced?"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "3 years",
    "choices": [
      "2. 4 years",
      "3. 5 years",
      "4. 6 years",
      "The term of office of the President and Vice-president of the Philippines shall be up to how many years?"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "3 years",
    "choices": [
      "2. 4 years",
      "3. 5 years",
      "4. 6 years",
      "The members of the House of Representatives shall be elected for a term of _______."
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "3 years",
    "choices": [
      "2. 4 years",
      "3. 5 years",
      "4. 6 years",
      "The following shall be exempted from taxation except:"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "Lands and buildings",
    "choices": [
      "2. Churches and convents",
      "3. Charitable institutions",
      "4. Non-profit cemeteries",
      "9. The Congress, by a vote of ____ of both Houses in joint session assembled, voting separately, shall have the sole power to declare a state of war."
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "Two-thirds",
    "choices": [
      "2. One-half",
      "3. Three quarters",
      "4. Minority",
      "10. It states that “no person shall be deprived of life, liberty, or property without due process of law, nor any person be denied the equal protection of the laws.”"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "Article VI",
    "choices": [
      "2. Bill of Rights",
      "3. Republic Act",
      "4. Court Order",
      "11. All of the following is TRUE except:"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "No person shall be compelled to be a witness against himself",
    "choices": [
      "2. No person shall be imprisoned for non-payment of debt or poll tax.",
      "3. No ex post facto law or bill of attainder shall not be enacted.",
      "4. No person shall be detained solely by reason of his political beliefs and aspirations.",
      "12. The following are citizens of the Philippines except:"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "Those fathers or mothers are citizens of the Philippines",
    "choices": [
      "2. Those who are born before January 17, 1973, of Filipino mothers, who elect Philippine citizenship upon reaching the age of majority",
      "3. Those who are naturalized citizens of the Philippines in accordance with law.",
      "4. All of the above are true.",
      "13. It is the right and obligation by all citizens, who are at least 18 years of age, and qualified by law, to vote in the election of national and local officials of the government without literacy, property, or other substantive requirement."
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "Suffrage",
    "choices": [
      "2. Election",
      "3. Voting power",
      "4. Civil Right",
      "14. The three inherent powers of the state are the following except one:"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "Police Power",
    "choices": [
      "2. Power of Eminent Domain",
      "3. Power of Taxation",
      "4. Power to Impeach",
      "15. It is the power of the State to promote public welfare by restraining the use of both liberty and property of all people."
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "Police Power",
    "choices": [
      "2. Power of Eminent Domain",
      "3. Power if Taxation",
      "4. Power to Impeach",
      "16. It is the power of the State to take properties for the purpose of public use upon payment of just compensation."
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "Police Power",
    "choices": [
      "2. Power of Eminent Domain",
      "3. Power if Taxation",
      "4. Power to Impeach",
      "17. It is the power of the State to impose charge or burden to persons and properties, and property rights for the purpose of raising revenues to protect the people and extend public projects and services."
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "Police Power",
    "choices": [
      "2. Power of Eminent Domain",
      "3. Power if Taxation",
      "4. Power to Impeach",
      "18. The following are members of the Constitutional Commission except:"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "Commission on Civil Rights",
    "choices": [
      "2. Commission on Elections",
      "3. Civil Service Commission",
      "4. Commission on Audit",
      "19. It states that public office is public trust and that public officers and employees must, at all times, be accountable to the people, serve them with utmost responsibility, integrity, loyalty and efficiency; act with patriotism and justice and lead modest lives."
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "Public Trust",
    "choices": [
      "2. Constitutional Rights",
      "3. Accountability",
      "4. Responsibility",
      "20.  Who shall have the exclusive power to initiate all cases of impeachment?"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "House of Blue Ribbon Committee",
    "choices": [
      "2. House of Representatives",
      "3. House of the Senate",
      "4. Speaker of the House",
      "21. R.A. 6713 is an act to uphold the time-honored principle of public office being a public trust, granting incentives and rewards for exemplary service, enumerating prohibited acts and providing penalties for violations thereof and for other purposes."
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "Preamble",
    "choices": [
      "2. Code of Ethics",
      "3. Code of Government Officials",
      "4. Code of Conduct and Ethical Standards for Public Officials and Employees",
      "22. The following are duties and responsibilities of Public officials and Employees except:"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "Act promptly on letters, inquiries, calls or any other form of communications sent by the public.",
    "choices": [
      "2. Submit performance reports of the agency or office regularly",
      "3. Accept gifts from the public upon prioritizing their queries.",
      "4. Process documents and papers expeditiously.",
      "23. It is a written instrument containing the proposition and required number of signatories and shall be in a form determined by and submitted to the Commission on Elections."
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "Bill",
    "choices": [
      "2. Law",
      "3. Proposition",
      "4. Petition",
      "24. It is the electoral process by which an initiative on the Constitution is either approved or rejected by the people."
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "Referendum",
    "choices": [
      "2. Plebiscite",
      "3. Petition",
      "4. Initiative",
      "25. It is the power of the electorate to approve or reject a legislation through an election called for the purpose."
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "Referendum",
    "choices": [
      "2. Plebiscite",
      "3. Petition",
      "4. Initiative",
      "26. This law promotes responsible family planning and proper use of reproductive methods to eliminate over-population growth."
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "RH Bill",
    "choices": [
      "2. Responsible Parenthood and Reproductive Health Law",
      "3. Reproductive Law",
      "4. Family Planning",
      "27. It is a specialized agency of the United Nations that concerns international public health."
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "Department of Health",
    "choices": [
      "2. World Health Organization",
      "3. International Health Organization",
      "4. All of the above",
      "28. APEC is a summit that promotes free trade and economic cooperation throughout the Asia-Pacific region countries. APEC stands for:"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "Asia Pacific Economic Corporation",
    "choices": [
      "2. Asia Pacific Economic Cooperation",
      "3. Asia Pacific Economic Council",
      "4. Asia Pacific Economic Countries",
      "29. Association of Southeast Asian Nations (ASEAN) aims to accelerate economic growth, stability, social progress and cultural development in the spirit of equality and partnership to strengthen prosperous and peaceful community along Southeast Asian Nations. Which of the following countries is not a member of ASEAN?"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "Hong Kong",
    "choices": [
      "2. Philippines",
      "3. Singapore",
      "4. Thailand",
      "30. It is a law in the Philippines that aims to address legal issues concerning online interactions and harmful internet behavior in the Philippines. It aims to prevent and punish cybercrime in the country."
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "Cybersquatting",
    "choices": [
      "2. Cybercrime Act",
      "3. Cybercrime Prevention Act",
      "4. Cyber Identity Theft Act",
      "31. __________waste breaks down into natural components and can be recycled into the life cycle naturally."
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "Bio-chemical",
    "choices": [
      "2. Recyclable",
      "3. Biodegradable",
      "4. Non-biodegradable",
      "32. The following are examples of non-biodegradable waste except:"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "Plastics",
    "choices": [
      "2. Metals",
      "3. Styrofoam",
      "4. Papers",
      "33. It is a project of DOST for more accurate, integrated and responsive disaster prevention and mitigation system especially in high-risk calamity areas of the Philippines."
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "PAGASA",
    "choices": [
      "2. I am Ready",
      "3. DOST-Advanced Disaster Program",
      "4. Project NOAH",
      "34. PAGASA is the official government agency for weather forecasting, flood control, astronomical observations, and time service. PAGASA stands for _______?"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "Philippine Atmospheric Geographical and Astronomical Services Administration",
    "choices": [
      "2. Philippine Atmospheric Geophysical and Astronomical Services Administration",
      "3. Philippine Atmospheric Geological and Astronomical Services Association",
      "4. Philippine Atmospheric Geophysical and Astronomical Services Association",
      "35. PHIVOLCS is a branch of DOST to moderate disasters that may arise from volcanic eruptions, earthquakes, tsunami and other related geotectonic phenomena in the Philippines. What is PHIVOLCS?"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "Philippine Institute of Volcanology and Seismology",
    "choices": [
      "2. Philippine Institute of Volcanic and Seismic Services",
      "3. Philippine Institute of Volcanic and Seismology Services",
      "4. Philippine Institute of Volcano and Seismic System",
      "36. Which of the following is a renewable source of energy?"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "Geothermal energy",
    "choices": [
      "2. Solar energy",
      "3. Wind energy",
      "4. All of the above",
      "37. It is a process by which thermal radiation from the earth’s surface is absorbed by atmospheric greenhouse gases and is re-radiated in all directions."
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "Global Warming",
    "choices": [
      "2. Greenhouse Effect",
      "3. Ozone Layer",
      "4. Solar Radiation",
      "38. USB is an industry standard that connects computers and electronic devices like keyboards, digicams, portable media devices, disk drivers, smartphones, and network adapters to any computer. USB stands for?"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-1",
    "subject": "General Information",
    "prompt": "Unit Serial Box",
    "choices": [
      "2. Unit Serial Bolt",
      "3. Universal Serial Bin",
      "4. Universal Serial Bus",
      "39. A rainfall advisory from PAG-ASA which means 7.5mm-15mm of rainfall is expected for the first one hour and has possibility to occur continuously. It advises people to MONITOR."
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-40",
    "subject": "General Information",
    "prompt": "The 1987 Constitution contains at least 3 sets of provisions. Which one of the following provisions is NOT included?",
    "choices": [
      "Constitution of Government",
      "Constitution of Liberty",
      "Constitution of Universality",
      "Constitution of Freedom"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-41",
    "subject": "General Information",
    "prompt": "The current Senate President of the 19th Congress.",
    "choices": [
      "Franklin Drilon",
      "Alan Peter Cayetano",
      "Vicente Sotto",
      "Juan Miguel Zubiri"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-42",
    "subject": "General Information",
    "prompt": "What does \"presumption of innocence\" mean in terms of human rights?",
    "choices": [
      "A suspect is considered guilty until proven otherwise.",
      "A suspect has the right to remain silent.",
      "A suspect remains innocent until proven guilty.",
      "A suspect has the right to a legal counsel."
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-43",
    "subject": "General Information",
    "prompt": "Also known as Tanodbayan ng Pilipinas, he or she is responsible for investigating and prosecuting Philippine government officials accused of crimes, especially graft and corruption.",
    "choices": [
      "Senate President",
      "Ombudsman",
      "Solicitor General",
      "Sandiganbayan Presiding Justice"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-44",
    "subject": "General Information",
    "prompt": "The objectives of the Agrarian Reform Program of the government is to:",
    "choices": [
      "Accelerate the agricultural development of the country",
      "Prevent widespread discontent and unrest among our farmers",
      "Achieve dignified existence for the small farmers.",
      "All of the above"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-45",
    "subject": "General Information",
    "prompt": "Today, the world's number one problem is:",
    "choices": [
      "Population explosion",
      "Natural calamities",
      "Pollution",
      "Nuclear proliferation"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-46",
    "subject": "General Information",
    "prompt": "It is the power of the State to promote public welfare by restraining the use of both liberty and property of all people.",
    "choices": [
      "Power of Eminent Domain",
      "Power if Taxation",
      "Power to Impeach",
      "Police Power"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-47",
    "subject": "General Information",
    "prompt": "Which of the following is a renewable source of energy?",
    "choices": [
      "Wind energy",
      "Geothermal energy",
      "Solar energy",
      "All of the above"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-48",
    "subject": "General Information",
    "prompt": "Political neutrality means that public officials and employees.",
    "choices": [
      "Shall resign from their political parties prior to their appointment to a government position.",
      "Shall join the government service with a political party.",
      "Shall provide service to anyone without unfair discrimination and regardless of party affiliation or preference.",
      "Shall provide service only to those who do not belong to any political party."
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-49",
    "subject": "General Information",
    "prompt": "The eruption of Taal Volcano caused the people of Batangas and its nearby cities to take extreme precautions. Taal Volcano started its eruption on what date?",
    "choices": [
      "January 22, 2020",
      "January 02, 2020",
      "January 12, 2020",
      "January 16, 2020"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-50",
    "subject": "General Information",
    "prompt": "Which right is violated by wiretapping?",
    "choices": [
      "freedom of expression",
      "the right to private property",
      "the right of privacy of communication",
      "the right to information on matters of public concern"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-51",
    "subject": "General Information",
    "prompt": "It is a method by which a public officer may be removed from office during his tenure or before the expiration of his term by a vote of the people after registration of a petition signed by a required percentage of the qualified voters.",
    "choices": [
      "Initiative",
      "Referendum",
      "Plebiscite",
      "Recall"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-52",
    "subject": "General Information",
    "prompt": "It sets down in unequivocal terms the mandate that all government officials and employees, shall at all times, be answerable for their misconduct to the people.",
    "choices": [
      "Public Trust",
      "Accountability",
      "Responsibility",
      "Rights"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-53",
    "subject": "General Information",
    "prompt": "It is a written instrument by which the fundamental powers of the Philippine government are established, limited and defined and by which their power is distributed among several branches for the benefit of the people.",
    "choices": [
      "Laws",
      "Rules and Regulations",
      "Republic Acts",
      "The Philippine Constitution"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-54",
    "subject": "General Information",
    "prompt": "Which of the following is not considered a biofuel?",
    "choices": [
      "Bunker Fuel",
      "Jathropa or “Tuba-tuba”",
      "Liquified Natural gas",
      "Coco Methyl Ester"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-55",
    "subject": "General Information",
    "prompt": "Shall be the SOLE JUDGE of electoral disputes involving the President-elect and the Vice-President elect under the 1987 Constitution.",
    "choices": [
      "The Electoral Tribunal",
      "The Trial Courts",
      "The COMELEC",
      "The Supreme Court"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-56",
    "subject": "General Information",
    "prompt": "The executive power shall be vested in the _________.",
    "choices": [
      "President of the Philippines",
      "The Congress",
      "The Supreme Court",
      "House of Representatives"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-57",
    "subject": "General Information",
    "prompt": "Which is the essence of sustainable development?",
    "choices": [
      "Introducing development at the same time mindful of the effect of such development in the future.",
      "Using old and new technologies side by side.",
      "Introducing only something that can be sustained for a long time.",
      "Using new technology to replace the old one regardless of the cost."
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-58",
    "subject": "General Information",
    "prompt": "Association of Southeast Asian Nations (ASEAN) aims to accelerate economic growth, stability, social progress and cultural development in the spirit of equality and partnership to strengthen prosperous and peaceful community along Southeast Asian Nations. Which of the following countries is not a member of ASEAN?",
    "choices": [
      "Singapore",
      "Hong Kong",
      "Philippines",
      "Thailand"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-59",
    "subject": "General Information",
    "prompt": "A basic social institution that our State should strengthen according to the Constitution under our declaration of principles.",
    "choices": [
      "Family",
      "Barangay",
      "Purok",
      "None of the above"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-60",
    "subject": "General Information",
    "prompt": "The members of the House of Representatives shall be elected for a term of _______.",
    "choices": [
      "6 years",
      "3 years",
      "4 years",
      "5 years"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-61",
    "subject": "General Information",
    "prompt": "She is the first Filipino player to win the US Women’s Open golf championship.",
    "choices": [
      "Yuka Saso",
      "Bianca Pagdanganan",
      "Lois Kaye Go",
      "Abegail Arevalo"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-62",
    "subject": "General Information",
    "prompt": "On January 1, 2018, the Republic Act No. 10963, widely known as the TRAIN Law took effect. What does TRAIN stand for?",
    "choices": [
      "Tax Reform for Acceleration and Income",
      "Tax Reform for Acceleration and Inclusion",
      "Tax Reform for Accelerated Inclusion",
      "Tax Reform for Added Income"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-63",
    "subject": "General Information",
    "prompt": "This constitutional principle is meant that no man in the country, not even the government, is above or beyond the law.",
    "choices": [
      "Rule of the Majority",
      "Republican Law",
      "Rule of Law",
      "Bill of Rights"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-64",
    "subject": "General Information",
    "prompt": "It is a religious corporation that was shut down by the authorities under the orders of President Rodrigo Duterte over the allegations of Ponzi scheme.",
    "choices": [
      "Jesus Is Lord Church Worldwide",
      "Kapa-Community Ministry International",
      "Iglesia ni Cristo",
      "Kingdom of Jesus Christ"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-65",
    "subject": "General Information",
    "prompt": "How long shall the term of office of the senators be commenced?",
    "choices": [
      "3 years",
      "6 years",
      "4 years",
      "5 years"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-66",
    "subject": "General Information",
    "prompt": "This program was launched by the DOTr which greatly affected transport groups and resulted to several transport strike because one of its provisions includes phasing out of jeepneys.",
    "choices": [
      "Jeepney Modernization program",
      "PUV Modernization Program",
      "Jeepney Phaseout Program",
      "None of these"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "GI-67",
    "subject": "General Information",
    "prompt": "The following are members of the Constitutional Commission except:",
    "choices": [
      "Commission on Civil Rights",
      "Civil Service Commission",
      "Commission on Elections",
      "Commission on Audit"
    ],
    "answer": 0,
    "explanation": "Use standard civics/history/current-events facts covered in the reviewer."
  },
  {
    "id": "HOM-X1",
    "subject": "Homophones",
    "prompt": "Please ______ me the file later.",
    "choices": [
      "send",
      "scent",
      "sent"
    ],
    "answer": 0,
    "explanation": "‘Send’ means to transmit. (Extra practice item)"
  },
  {
    "id": "HOM-X2",
    "subject": "Homophones",
    "prompt": "She bought a new ______ of shoes.",
    "choices": [
      "pair",
      "pear",
      "pare"
    ],
    "answer": 0,
    "explanation": "Pair = two items that go together. (Extra practice item)"
  },
  {
    "id": "HOM-X3",
    "subject": "Homophones",
    "prompt": "The judge will ______ the case tomorrow.",
    "choices": [
      "hear",
      "here"
    ],
    "answer": 0,
    "explanation": "Hear = listen to. (Extra practice item)"
  },
  {
    "id": "HOM-X4",
    "subject": "Homophones",
    "prompt": "I can’t ______ what you’re saying.",
    "choices": [
      "quite",
      "quiet"
    ],
    "answer": 0,
    "explanation": "Quite = very; quiet = silent. (Extra practice item)"
  },
  {
    "id": "HOM-X5",
    "subject": "Homophones",
    "prompt": "Please ______ me the file later.",
    "choices": [
      "send",
      "scent",
      "sent"
    ],
    "answer": 0,
    "explanation": "‘Send’ means to transmit. (Extra practice item)"
  },
  {
    "id": "HOM-X6",
    "subject": "Homophones",
    "prompt": "She bought a new ______ of shoes.",
    "choices": [
      "pair",
      "pear",
      "pare"
    ],
    "answer": 0,
    "explanation": "Pair = two items that go together. (Extra practice item)"
  },
  {
    "id": "HOM-X7",
    "subject": "Homophones",
    "prompt": "The judge will ______ the case tomorrow.",
    "choices": [
      "hear",
      "here"
    ],
    "answer": 0,
    "explanation": "Hear = listen to. (Extra practice item)"
  },
  {
    "id": "HOM-X8",
    "subject": "Homophones",
    "prompt": "I can’t ______ what you’re saying.",
    "choices": [
      "quite",
      "quiet"
    ],
    "answer": 0,
    "explanation": "Quite = very; quiet = silent. (Extra practice item)"
  },
  {
    "id": "HOM-X9",
    "subject": "Homophones",
    "prompt": "Please ______ me the file later.",
    "choices": [
      "send",
      "scent",
      "sent"
    ],
    "answer": 0,
    "explanation": "‘Send’ means to transmit. (Extra practice item)"
  },
  {
    "id": "HOM-X10",
    "subject": "Homophones",
    "prompt": "She bought a new ______ of shoes.",
    "choices": [
      "pair",
      "pear",
      "pare"
    ],
    "answer": 0,
    "explanation": "Pair = two items that go together. (Extra practice item)"
  },
  {
    "id": "HOM-X11",
    "subject": "Homophones",
    "prompt": "The judge will ______ the case tomorrow.",
    "choices": [
      "hear",
      "here"
    ],
    "answer": 0,
    "explanation": "Hear = listen to. (Extra practice item)"
  },
  {
    "id": "HOM-X12",
    "subject": "Homophones",
    "prompt": "I can’t ______ what you’re saying.",
    "choices": [
      "quite",
      "quiet"
    ],
    "answer": 0,
    "explanation": "Quite = very; quiet = silent. (Extra practice item)"
  },
  {
    "id": "HOM-X13",
    "subject": "Homophones",
    "prompt": "Please ______ me the file later.",
    "choices": [
      "send",
      "scent",
      "sent"
    ],
    "answer": 0,
    "explanation": "‘Send’ means to transmit. (Extra practice item)"
  },
  {
    "id": "HOM-X14",
    "subject": "Homophones",
    "prompt": "She bought a new ______ of shoes.",
    "choices": [
      "pair",
      "pear",
      "pare"
    ],
    "answer": 0,
    "explanation": "Pair = two items that go together. (Extra practice item)"
  },
  {
    "id": "HOM-X15",
    "subject": "Homophones",
    "prompt": "The judge will ______ the case tomorrow.",
    "choices": [
      "hear",
      "here"
    ],
    "answer": 0,
    "explanation": "Hear = listen to. (Extra practice item)"
  },
  {
    "id": "HOM-X16",
    "subject": "Homophones",
    "prompt": "I can’t ______ what you’re saying.",
    "choices": [
      "quite",
      "quiet"
    ],
    "answer": 0,
    "explanation": "Quite = very; quiet = silent. (Extra practice item)"
  },
  {
    "id": "HOM-X17",
    "subject": "Homophones",
    "prompt": "Please ______ me the file later.",
    "choices": [
      "send",
      "scent",
      "sent"
    ],
    "answer": 0,
    "explanation": "‘Send’ means to transmit. (Extra practice item)"
  },
  {
    "id": "HOM-X18",
    "subject": "Homophones",
    "prompt": "She bought a new ______ of shoes.",
    "choices": [
      "pair",
      "pear",
      "pare"
    ],
    "answer": 0,
    "explanation": "Pair = two items that go together. (Extra practice item)"
  },
  {
    "id": "HOM-X19",
    "subject": "Homophones",
    "prompt": "The judge will ______ the case tomorrow.",
    "choices": [
      "hear",
      "here"
    ],
    "answer": 0,
    "explanation": "Hear = listen to. (Extra practice item)"
  },
  {
    "id": "HOM-X20",
    "subject": "Homophones",
    "prompt": "I can’t ______ what you’re saying.",
    "choices": [
      "quite",
      "quiet"
    ],
    "answer": 0,
    "explanation": "Quite = very; quiet = silent. (Extra practice item)"
  },
  {
    "id": "HOM-X21",
    "subject": "Homophones",
    "prompt": "Please ______ me the file later.",
    "choices": [
      "send",
      "scent",
      "sent"
    ],
    "answer": 0,
    "explanation": "‘Send’ means to transmit. (Extra practice item)"
  },
  {
    "id": "HOM-X22",
    "subject": "Homophones",
    "prompt": "She bought a new ______ of shoes.",
    "choices": [
      "pair",
      "pear",
      "pare"
    ],
    "answer": 0,
    "explanation": "Pair = two items that go together. (Extra practice item)"
  },
  {
    "id": "HOM-X23",
    "subject": "Homophones",
    "prompt": "The judge will ______ the case tomorrow.",
    "choices": [
      "hear",
      "here"
    ],
    "answer": 0,
    "explanation": "Hear = listen to. (Extra practice item)"
  },
  {
    "id": "HOM-X24",
    "subject": "Homophones",
    "prompt": "I can’t ______ what you’re saying.",
    "choices": [
      "quite",
      "quiet"
    ],
    "answer": 0,
    "explanation": "Quite = very; quiet = silent. (Extra practice item)"
  },
  {
    "id": "HOM-X25",
    "subject": "Homophones",
    "prompt": "Please ______ me the file later.",
    "choices": [
      "send",
      "scent",
      "sent"
    ],
    "answer": 0,
    "explanation": "‘Send’ means to transmit. (Extra practice item)"
  },
  {
    "id": "HOM-X26",
    "subject": "Homophones",
    "prompt": "She bought a new ______ of shoes.",
    "choices": [
      "pair",
      "pear",
      "pare"
    ],
    "answer": 0,
    "explanation": "Pair = two items that go together. (Extra practice item)"
  },
  {
    "id": "HOM-X27",
    "subject": "Homophones",
    "prompt": "The judge will ______ the case tomorrow.",
    "choices": [
      "hear",
      "here"
    ],
    "answer": 0,
    "explanation": "Hear = listen to. (Extra practice item)"
  },
  {
    "id": "HOM-X28",
    "subject": "Homophones",
    "prompt": "I can’t ______ what you’re saying.",
    "choices": [
      "quite",
      "quiet"
    ],
    "answer": 0,
    "explanation": "Quite = very; quiet = silent. (Extra practice item)"
  },
  {
    "id": "HOM-X29",
    "subject": "Homophones",
    "prompt": "Please ______ me the file later.",
    "choices": [
      "send",
      "scent",
      "sent"
    ],
    "answer": 0,
    "explanation": "‘Send’ means to transmit. (Extra practice item)"
  },
  {
    "id": "HOM-X30",
    "subject": "Homophones",
    "prompt": "She bought a new ______ of shoes.",
    "choices": [
      "pair",
      "pear",
      "pare"
    ],
    "answer": 0,
    "explanation": "Pair = two items that go together. (Extra practice item)"
  },
  {
    "id": "RC-X1",
    "subject": "Reading Comprehension",
    "prompt": "If a passage says 'The policy reduced costs but increased delays,' which statement is supported?",
    "choices": [
      "Costs went up",
      "Delays increased",
      "Delays decreased",
      "Costs were unchanged"
    ],
    "answer": 1,
    "explanation": "Directly supported: delays increased. (Extra practice item)"
  },
  {
    "id": "RC-X2",
    "subject": "Reading Comprehension",
    "prompt": "In a passage, the word 'benevolent' most nearly means:",
    "choices": [
      "Kind",
      "Angry",
      "Careless",
      "Greedy"
    ],
    "answer": 0,
    "explanation": "Benevolent means kind/well-meaning. (Extra practice item)"
  },
  {
    "id": "RC-X3",
    "subject": "Reading Comprehension",
    "prompt": "If a passage says 'The policy reduced costs but increased delays,' which statement is supported?",
    "choices": [
      "Costs went up",
      "Delays increased",
      "Delays decreased",
      "Costs were unchanged"
    ],
    "answer": 1,
    "explanation": "Directly supported: delays increased. (Extra practice item)"
  },
  {
    "id": "RC-X4",
    "subject": "Reading Comprehension",
    "prompt": "In a passage, the word 'benevolent' most nearly means:",
    "choices": [
      "Kind",
      "Angry",
      "Careless",
      "Greedy"
    ],
    "answer": 0,
    "explanation": "Benevolent means kind/well-meaning. (Extra practice item)"
  },
  {
    "id": "RC-X5",
    "subject": "Reading Comprehension",
    "prompt": "If a passage says 'The policy reduced costs but increased delays,' which statement is supported?",
    "choices": [
      "Costs went up",
      "Delays increased",
      "Delays decreased",
      "Costs were unchanged"
    ],
    "answer": 1,
    "explanation": "Directly supported: delays increased. (Extra practice item)"
  },
  {
    "id": "RC-X6",
    "subject": "Reading Comprehension",
    "prompt": "In a passage, the word 'benevolent' most nearly means:",
    "choices": [
      "Kind",
      "Angry",
      "Careless",
      "Greedy"
    ],
    "answer": 0,
    "explanation": "Benevolent means kind/well-meaning. (Extra practice item)"
  },
  {
    "id": "RC-X7",
    "subject": "Reading Comprehension",
    "prompt": "If a passage says 'The policy reduced costs but increased delays,' which statement is supported?",
    "choices": [
      "Costs went up",
      "Delays increased",
      "Delays decreased",
      "Costs were unchanged"
    ],
    "answer": 1,
    "explanation": "Directly supported: delays increased. (Extra practice item)"
  },
  {
    "id": "RC-X8",
    "subject": "Reading Comprehension",
    "prompt": "In a passage, the word 'benevolent' most nearly means:",
    "choices": [
      "Kind",
      "Angry",
      "Careless",
      "Greedy"
    ],
    "answer": 0,
    "explanation": "Benevolent means kind/well-meaning. (Extra practice item)"
  },
  {
    "id": "RC-X9",
    "subject": "Reading Comprehension",
    "prompt": "If a passage says 'The policy reduced costs but increased delays,' which statement is supported?",
    "choices": [
      "Costs went up",
      "Delays increased",
      "Delays decreased",
      "Costs were unchanged"
    ],
    "answer": 1,
    "explanation": "Directly supported: delays increased. (Extra practice item)"
  },
  {
    "id": "RC-X10",
    "subject": "Reading Comprehension",
    "prompt": "In a passage, the word 'benevolent' most nearly means:",
    "choices": [
      "Kind",
      "Angry",
      "Careless",
      "Greedy"
    ],
    "answer": 0,
    "explanation": "Benevolent means kind/well-meaning. (Extra practice item)"
  },
  {
    "id": "RC-X11",
    "subject": "Reading Comprehension",
    "prompt": "If a passage says 'The policy reduced costs but increased delays,' which statement is supported?",
    "choices": [
      "Costs went up",
      "Delays increased",
      "Delays decreased",
      "Costs were unchanged"
    ],
    "answer": 1,
    "explanation": "Directly supported: delays increased. (Extra practice item)"
  },
  {
    "id": "RC-X12",
    "subject": "Reading Comprehension",
    "prompt": "In a passage, the word 'benevolent' most nearly means:",
    "choices": [
      "Kind",
      "Angry",
      "Careless",
      "Greedy"
    ],
    "answer": 0,
    "explanation": "Benevolent means kind/well-meaning. (Extra practice item)"
  },
  {
    "id": "RC-X13",
    "subject": "Reading Comprehension",
    "prompt": "If a passage says 'The policy reduced costs but increased delays,' which statement is supported?",
    "choices": [
      "Costs went up",
      "Delays increased",
      "Delays decreased",
      "Costs were unchanged"
    ],
    "answer": 1,
    "explanation": "Directly supported: delays increased. (Extra practice item)"
  },
  {
    "id": "RC-X14",
    "subject": "Reading Comprehension",
    "prompt": "In a passage, the word 'benevolent' most nearly means:",
    "choices": [
      "Kind",
      "Angry",
      "Careless",
      "Greedy"
    ],
    "answer": 0,
    "explanation": "Benevolent means kind/well-meaning. (Extra practice item)"
  },
  {
    "id": "RC-X15",
    "subject": "Reading Comprehension",
    "prompt": "If a passage says 'The policy reduced costs but increased delays,' which statement is supported?",
    "choices": [
      "Costs went up",
      "Delays increased",
      "Delays decreased",
      "Costs were unchanged"
    ],
    "answer": 1,
    "explanation": "Directly supported: delays increased. (Extra practice item)"
  },
  {
    "id": "RC-X16",
    "subject": "Reading Comprehension",
    "prompt": "In a passage, the word 'benevolent' most nearly means:",
    "choices": [
      "Kind",
      "Angry",
      "Careless",
      "Greedy"
    ],
    "answer": 0,
    "explanation": "Benevolent means kind/well-meaning. (Extra practice item)"
  },
  {
    "id": "RC-X17",
    "subject": "Reading Comprehension",
    "prompt": "If a passage says 'The policy reduced costs but increased delays,' which statement is supported?",
    "choices": [
      "Costs went up",
      "Delays increased",
      "Delays decreased",
      "Costs were unchanged"
    ],
    "answer": 1,
    "explanation": "Directly supported: delays increased. (Extra practice item)"
  },
  {
    "id": "RC-X18",
    "subject": "Reading Comprehension",
    "prompt": "In a passage, the word 'benevolent' most nearly means:",
    "choices": [
      "Kind",
      "Angry",
      "Careless",
      "Greedy"
    ],
    "answer": 0,
    "explanation": "Benevolent means kind/well-meaning. (Extra practice item)"
  },
  {
    "id": "RC-X19",
    "subject": "Reading Comprehension",
    "prompt": "If a passage says 'The policy reduced costs but increased delays,' which statement is supported?",
    "choices": [
      "Costs went up",
      "Delays increased",
      "Delays decreased",
      "Costs were unchanged"
    ],
    "answer": 1,
    "explanation": "Directly supported: delays increased. (Extra practice item)"
  },
  {
    "id": "RC-X20",
    "subject": "Reading Comprehension",
    "prompt": "In a passage, the word 'benevolent' most nearly means:",
    "choices": [
      "Kind",
      "Angry",
      "Careless",
      "Greedy"
    ],
    "answer": 0,
    "explanation": "Benevolent means kind/well-meaning. (Extra practice item)"
  },
  {
    "id": "AN-X1",
    "subject": "Word Analogy",
    "prompt": "Fish : Gills :: Human : ______",
    "choices": [
      "Skin",
      "Lungs",
      "Heart",
      "Bones"
    ],
    "answer": 1,
    "explanation": "Fish breathe with gills; humans breathe with lungs. (Extra practice item)"
  },
  {
    "id": "AN-X2",
    "subject": "Word Analogy",
    "prompt": "Puppy : Dog :: Kitten : ______",
    "choices": [
      "Cat",
      "Lion",
      "Horse",
      "Cow"
    ],
    "answer": 0,
    "explanation": "A kitten is a young cat. (Extra practice item)"
  },
  {
    "id": "GR-X1",
    "subject": "Grammar",
    "prompt": "Choose the correct sentence.",
    "choices": [
      "Neither of the answers are correct.",
      "Neither of the answers is correct.",
      "Neither of the answer are correct.",
      "Neither of the answer is correct."
    ],
    "answer": 1,
    "explanation": "‘Neither’ is singular → use ‘is’. (Extra practice item)"
  },
  {
    "id": "GR-X2",
    "subject": "Grammar",
    "prompt": "Select the correct sentence.",
    "choices": [
      "He don't like coffee.",
      "He doesn't like coffee.",
      "He didn't likes coffee.",
      "He don't likes coffee."
    ],
    "answer": 1,
    "explanation": "Third person singular uses ‘doesn’t’ + base verb. (Extra practice item)"
  },
  {
    "id": "GR-X3",
    "subject": "Grammar",
    "prompt": "Choose the correct pronoun case.",
    "choices": [
      "Me and her went home.",
      "She and I went home.",
      "Her and I went home.",
      "I and she went home."
    ],
    "answer": 1,
    "explanation": "Use subject pronouns → ‘She and I’. (Extra practice item)"
  },
  {
    "id": "GR-X4",
    "subject": "Grammar",
    "prompt": "Choose the correct verb agreement: The list of items ____ on the table.",
    "choices": [
      "are",
      "were",
      "is",
      "have"
    ],
    "answer": 2,
    "explanation": "Subject is ‘list’ (singular) → ‘is’. (Extra practice item)"
  },
  {
    "id": "GR-X5",
    "subject": "Grammar",
    "prompt": "Choose the correct sentence.",
    "choices": [
      "Neither of the answers are correct.",
      "Neither of the answers is correct.",
      "Neither of the answer are correct.",
      "Neither of the answer is correct."
    ],
    "answer": 1,
    "explanation": "‘Neither’ is singular → use ‘is’. (Extra practice item)"
  },
  {
    "id": "GR-X6",
    "subject": "Grammar",
    "prompt": "Select the correct sentence.",
    "choices": [
      "He don't like coffee.",
      "He doesn't like coffee.",
      "He didn't likes coffee.",
      "He don't likes coffee."
    ],
    "answer": 1,
    "explanation": "Third person singular uses ‘doesn’t’ + base verb. (Extra practice item)"
  },
  {
    "id": "GR-X7",
    "subject": "Grammar",
    "prompt": "Choose the correct pronoun case.",
    "choices": [
      "Me and her went home.",
      "She and I went home.",
      "Her and I went home.",
      "I and she went home."
    ],
    "answer": 1,
    "explanation": "Use subject pronouns → ‘She and I’. (Extra practice item)"
  },
  {
    "id": "GR-X8",
    "subject": "Grammar",
    "prompt": "Choose the correct verb agreement: The list of items ____ on the table.",
    "choices": [
      "are",
      "were",
      "is",
      "have"
    ],
    "answer": 2,
    "explanation": "Subject is ‘list’ (singular) → ‘is’. (Extra practice item)"
  },
  {
    "id": "GR-X9",
    "subject": "Grammar",
    "prompt": "Choose the correct sentence.",
    "choices": [
      "Neither of the answers are correct.",
      "Neither of the answers is correct.",
      "Neither of the answer are correct.",
      "Neither of the answer is correct."
    ],
    "answer": 1,
    "explanation": "‘Neither’ is singular → use ‘is’. (Extra practice item)"
  },
  {
    "id": "GR-X10",
    "subject": "Grammar",
    "prompt": "Select the correct sentence.",
    "choices": [
      "He don't like coffee.",
      "He doesn't like coffee.",
      "He didn't likes coffee.",
      "He don't likes coffee."
    ],
    "answer": 1,
    "explanation": "Third person singular uses ‘doesn’t’ + base verb. (Extra practice item)"
  },
  {
    "id": "GR-X11",
    "subject": "Grammar",
    "prompt": "Choose the correct pronoun case.",
    "choices": [
      "Me and her went home.",
      "She and I went home.",
      "Her and I went home.",
      "I and she went home."
    ],
    "answer": 1,
    "explanation": "Use subject pronouns → ‘She and I’. (Extra practice item)"
  },
  {
    "id": "GR-X12",
    "subject": "Grammar",
    "prompt": "Choose the correct verb agreement: The list of items ____ on the table.",
    "choices": [
      "are",
      "were",
      "is",
      "have"
    ],
    "answer": 2,
    "explanation": "Subject is ‘list’ (singular) → ‘is’. (Extra practice item)"
  },
  {
    "id": "GR-X13",
    "subject": "Grammar",
    "prompt": "Choose the correct sentence.",
    "choices": [
      "Neither of the answers are correct.",
      "Neither of the answers is correct.",
      "Neither of the answer are correct.",
      "Neither of the answer is correct."
    ],
    "answer": 1,
    "explanation": "‘Neither’ is singular → use ‘is’. (Extra practice item)"
  },
  {
    "id": "GR-X14",
    "subject": "Grammar",
    "prompt": "Select the correct sentence.",
    "choices": [
      "He don't like coffee.",
      "He doesn't like coffee.",
      "He didn't likes coffee.",
      "He don't likes coffee."
    ],
    "answer": 1,
    "explanation": "Third person singular uses ‘doesn’t’ + base verb. (Extra practice item)"
  },
  {
    "id": "GR-X15",
    "subject": "Grammar",
    "prompt": "Choose the correct pronoun case.",
    "choices": [
      "Me and her went home.",
      "She and I went home.",
      "Her and I went home.",
      "I and she went home."
    ],
    "answer": 1,
    "explanation": "Use subject pronouns → ‘She and I’. (Extra practice item)"
  },
  {
    "id": "GR-X16",
    "subject": "Grammar",
    "prompt": "Choose the correct verb agreement: The list of items ____ on the table.",
    "choices": [
      "are",
      "were",
      "is",
      "have"
    ],
    "answer": 2,
    "explanation": "Subject is ‘list’ (singular) → ‘is’. (Extra practice item)"
  },
  {
    "id": "GR-X17",
    "subject": "Grammar",
    "prompt": "Choose the correct sentence.",
    "choices": [
      "Neither of the answers are correct.",
      "Neither of the answers is correct.",
      "Neither of the answer are correct.",
      "Neither of the answer is correct."
    ],
    "answer": 1,
    "explanation": "‘Neither’ is singular → use ‘is’. (Extra practice item)"
  },
  {
    "id": "GR-X18",
    "subject": "Grammar",
    "prompt": "Select the correct sentence.",
    "choices": [
      "He don't like coffee.",
      "He doesn't like coffee.",
      "He didn't likes coffee.",
      "He don't likes coffee."
    ],
    "answer": 1,
    "explanation": "Third person singular uses ‘doesn’t’ + base verb. (Extra practice item)"
  },
  {
    "id": "GR-X19",
    "subject": "Grammar",
    "prompt": "Choose the correct pronoun case.",
    "choices": [
      "Me and her went home.",
      "She and I went home.",
      "Her and I went home.",
      "I and she went home."
    ],
    "answer": 1,
    "explanation": "Use subject pronouns → ‘She and I’. (Extra practice item)"
  },
  {
    "id": "GR-X20",
    "subject": "Grammar",
    "prompt": "Choose the correct verb agreement: The list of items ____ on the table.",
    "choices": [
      "are",
      "were",
      "is",
      "have"
    ],
    "answer": 2,
    "explanation": "Subject is ‘list’ (singular) → ‘is’. (Extra practice item)"
  },
  {
    "id": "GR-X21",
    "subject": "Grammar",
    "prompt": "Choose the correct sentence.",
    "choices": [
      "Neither of the answers are correct.",
      "Neither of the answers is correct.",
      "Neither of the answer are correct.",
      "Neither of the answer is correct."
    ],
    "answer": 1,
    "explanation": "‘Neither’ is singular → use ‘is’. (Extra practice item)"
  },
  {
    "id": "GR-X22",
    "subject": "Grammar",
    "prompt": "Select the correct sentence.",
    "choices": [
      "He don't like coffee.",
      "He doesn't like coffee.",
      "He didn't likes coffee.",
      "He don't likes coffee."
    ],
    "answer": 1,
    "explanation": "Third person singular uses ‘doesn’t’ + base verb. (Extra practice item)"
  },
  {
    "id": "GR-X23",
    "subject": "Grammar",
    "prompt": "Choose the correct pronoun case.",
    "choices": [
      "Me and her went home.",
      "She and I went home.",
      "Her and I went home.",
      "I and she went home."
    ],
    "answer": 1,
    "explanation": "Use subject pronouns → ‘She and I’. (Extra practice item)"
  },
  {
    "id": "GR-X24",
    "subject": "Grammar",
    "prompt": "Choose the correct verb agreement: The list of items ____ on the table.",
    "choices": [
      "are",
      "were",
      "is",
      "have"
    ],
    "answer": 2,
    "explanation": "Subject is ‘list’ (singular) → ‘is’. (Extra practice item)"
  },
  {
    "id": "GR-X25",
    "subject": "Grammar",
    "prompt": "Choose the correct sentence.",
    "choices": [
      "Neither of the answers are correct.",
      "Neither of the answers is correct.",
      "Neither of the answer are correct.",
      "Neither of the answer is correct."
    ],
    "answer": 1,
    "explanation": "‘Neither’ is singular → use ‘is’. (Extra practice item)"
  },
  {
    "id": "GR-X26",
    "subject": "Grammar",
    "prompt": "Select the correct sentence.",
    "choices": [
      "He don't like coffee.",
      "He doesn't like coffee.",
      "He didn't likes coffee.",
      "He don't likes coffee."
    ],
    "answer": 1,
    "explanation": "Third person singular uses ‘doesn’t’ + base verb. (Extra practice item)"
  },
  {
    "id": "GR-X27",
    "subject": "Grammar",
    "prompt": "Choose the correct pronoun case.",
    "choices": [
      "Me and her went home.",
      "She and I went home.",
      "Her and I went home.",
      "I and she went home."
    ],
    "answer": 1,
    "explanation": "Use subject pronouns → ‘She and I’. (Extra practice item)"
  },
  {
    "id": "GR-X28",
    "subject": "Grammar",
    "prompt": "Choose the correct verb agreement: The list of items ____ on the table.",
    "choices": [
      "are",
      "were",
      "is",
      "have"
    ],
    "answer": 2,
    "explanation": "Subject is ‘list’ (singular) → ‘is’. (Extra practice item)"
  },
  {
    "id": "GR-X29",
    "subject": "Grammar",
    "prompt": "Choose the correct sentence.",
    "choices": [
      "Neither of the answers are correct.",
      "Neither of the answers is correct.",
      "Neither of the answer are correct.",
      "Neither of the answer is correct."
    ],
    "answer": 1,
    "explanation": "‘Neither’ is singular → use ‘is’. (Extra practice item)"
  },
  {
    "id": "GR-X30",
    "subject": "Grammar",
    "prompt": "Select the correct sentence.",
    "choices": [
      "He don't like coffee.",
      "He doesn't like coffee.",
      "He didn't likes coffee.",
      "He don't likes coffee."
    ],
    "answer": 1,
    "explanation": "Third person singular uses ‘doesn’t’ + base verb. (Extra practice item)"
  },
  {
    "id": "GR-X31",
    "subject": "Grammar",
    "prompt": "Choose the correct pronoun case.",
    "choices": [
      "Me and her went home.",
      "She and I went home.",
      "Her and I went home.",
      "I and she went home."
    ],
    "answer": 1,
    "explanation": "Use subject pronouns → ‘She and I’. (Extra practice item)"
  },
  {
    "id": "GR-X32",
    "subject": "Grammar",
    "prompt": "Choose the correct verb agreement: The list of items ____ on the table.",
    "choices": [
      "are",
      "were",
      "is",
      "have"
    ],
    "answer": 2,
    "explanation": "Subject is ‘list’ (singular) → ‘is’. (Extra practice item)"
  },
  {
    "id": "GR-X33",
    "subject": "Grammar",
    "prompt": "Choose the correct sentence.",
    "choices": [
      "Neither of the answers are correct.",
      "Neither of the answers is correct.",
      "Neither of the answer are correct.",
      "Neither of the answer is correct."
    ],
    "answer": 1,
    "explanation": "‘Neither’ is singular → use ‘is’. (Extra practice item)"
  },
  {
    "id": "FE-X1",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "Everybody are ready.",
      "Everybody is ready.",
      "Everyone is ready.",
      "Each person is ready."
    ],
    "answer": 0,
    "explanation": "‘Everybody’ is singular → should be ‘is’. (Extra practice item)"
  },
  {
    "id": "FE-X2",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "There are less people here.",
      "There are fewer people here.",
      "Fewer people came today.",
      "She has fewer coins."
    ],
    "answer": 0,
    "explanation": "Countable nouns use ‘fewer’, not ‘less’. (Extra practice item)"
  },
  {
    "id": "FE-X3",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "Everybody are ready.",
      "Everybody is ready.",
      "Everyone is ready.",
      "Each person is ready."
    ],
    "answer": 0,
    "explanation": "‘Everybody’ is singular → should be ‘is’. (Extra practice item)"
  },
  {
    "id": "FE-X4",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "There are less people here.",
      "There are fewer people here.",
      "Fewer people came today.",
      "She has fewer coins."
    ],
    "answer": 0,
    "explanation": "Countable nouns use ‘fewer’, not ‘less’. (Extra practice item)"
  },
  {
    "id": "FE-X5",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "Everybody are ready.",
      "Everybody is ready.",
      "Everyone is ready.",
      "Each person is ready."
    ],
    "answer": 0,
    "explanation": "‘Everybody’ is singular → should be ‘is’. (Extra practice item)"
  },
  {
    "id": "FE-X6",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "There are less people here.",
      "There are fewer people here.",
      "Fewer people came today.",
      "She has fewer coins."
    ],
    "answer": 0,
    "explanation": "Countable nouns use ‘fewer’, not ‘less’. (Extra practice item)"
  },
  {
    "id": "FE-X7",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "Everybody are ready.",
      "Everybody is ready.",
      "Everyone is ready.",
      "Each person is ready."
    ],
    "answer": 0,
    "explanation": "‘Everybody’ is singular → should be ‘is’. (Extra practice item)"
  },
  {
    "id": "FE-X8",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "There are less people here.",
      "There are fewer people here.",
      "Fewer people came today.",
      "She has fewer coins."
    ],
    "answer": 0,
    "explanation": "Countable nouns use ‘fewer’, not ‘less’. (Extra practice item)"
  },
  {
    "id": "FE-X9",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "Everybody are ready.",
      "Everybody is ready.",
      "Everyone is ready.",
      "Each person is ready."
    ],
    "answer": 0,
    "explanation": "‘Everybody’ is singular → should be ‘is’. (Extra practice item)"
  },
  {
    "id": "FE-X10",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "There are less people here.",
      "There are fewer people here.",
      "Fewer people came today.",
      "She has fewer coins."
    ],
    "answer": 0,
    "explanation": "Countable nouns use ‘fewer’, not ‘less’. (Extra practice item)"
  },
  {
    "id": "FE-X11",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "Everybody are ready.",
      "Everybody is ready.",
      "Everyone is ready.",
      "Each person is ready."
    ],
    "answer": 0,
    "explanation": "‘Everybody’ is singular → should be ‘is’. (Extra practice item)"
  },
  {
    "id": "FE-X12",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "There are less people here.",
      "There are fewer people here.",
      "Fewer people came today.",
      "She has fewer coins."
    ],
    "answer": 0,
    "explanation": "Countable nouns use ‘fewer’, not ‘less’. (Extra practice item)"
  },
  {
    "id": "FE-X13",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "Everybody are ready.",
      "Everybody is ready.",
      "Everyone is ready.",
      "Each person is ready."
    ],
    "answer": 0,
    "explanation": "‘Everybody’ is singular → should be ‘is’. (Extra practice item)"
  },
  {
    "id": "FE-X14",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "There are less people here.",
      "There are fewer people here.",
      "Fewer people came today.",
      "She has fewer coins."
    ],
    "answer": 0,
    "explanation": "Countable nouns use ‘fewer’, not ‘less’. (Extra practice item)"
  },
  {
    "id": "FE-X15",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "Everybody are ready.",
      "Everybody is ready.",
      "Everyone is ready.",
      "Each person is ready."
    ],
    "answer": 0,
    "explanation": "‘Everybody’ is singular → should be ‘is’. (Extra practice item)"
  },
  {
    "id": "FE-X16",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "There are less people here.",
      "There are fewer people here.",
      "Fewer people came today.",
      "She has fewer coins."
    ],
    "answer": 0,
    "explanation": "Countable nouns use ‘fewer’, not ‘less’. (Extra practice item)"
  },
  {
    "id": "FE-X17",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "Everybody are ready.",
      "Everybody is ready.",
      "Everyone is ready.",
      "Each person is ready."
    ],
    "answer": 0,
    "explanation": "‘Everybody’ is singular → should be ‘is’. (Extra practice item)"
  },
  {
    "id": "FE-X18",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "There are less people here.",
      "There are fewer people here.",
      "Fewer people came today.",
      "She has fewer coins."
    ],
    "answer": 0,
    "explanation": "Countable nouns use ‘fewer’, not ‘less’. (Extra practice item)"
  },
  {
    "id": "FE-X19",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "Everybody are ready.",
      "Everybody is ready.",
      "Everyone is ready.",
      "Each person is ready."
    ],
    "answer": 0,
    "explanation": "‘Everybody’ is singular → should be ‘is’. (Extra practice item)"
  },
  {
    "id": "FE-X20",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "There are less people here.",
      "There are fewer people here.",
      "Fewer people came today.",
      "She has fewer coins."
    ],
    "answer": 0,
    "explanation": "Countable nouns use ‘fewer’, not ‘less’. (Extra practice item)"
  },
  {
    "id": "FE-X21",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "Everybody are ready.",
      "Everybody is ready.",
      "Everyone is ready.",
      "Each person is ready."
    ],
    "answer": 0,
    "explanation": "‘Everybody’ is singular → should be ‘is’. (Extra practice item)"
  },
  {
    "id": "FE-X22",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "There are less people here.",
      "There are fewer people here.",
      "Fewer people came today.",
      "She has fewer coins."
    ],
    "answer": 0,
    "explanation": "Countable nouns use ‘fewer’, not ‘less’. (Extra practice item)"
  },
  {
    "id": "FE-X23",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "Everybody are ready.",
      "Everybody is ready.",
      "Everyone is ready.",
      "Each person is ready."
    ],
    "answer": 0,
    "explanation": "‘Everybody’ is singular → should be ‘is’. (Extra practice item)"
  },
  {
    "id": "FE-X24",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "There are less people here.",
      "There are fewer people here.",
      "Fewer people came today.",
      "She has fewer coins."
    ],
    "answer": 0,
    "explanation": "Countable nouns use ‘fewer’, not ‘less’. (Extra practice item)"
  },
  {
    "id": "FE-X25",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "Everybody are ready.",
      "Everybody is ready.",
      "Everyone is ready.",
      "Each person is ready."
    ],
    "answer": 0,
    "explanation": "‘Everybody’ is singular → should be ‘is’. (Extra practice item)"
  },
  {
    "id": "FE-X26",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "There are less people here.",
      "There are fewer people here.",
      "Fewer people came today.",
      "She has fewer coins."
    ],
    "answer": 0,
    "explanation": "Countable nouns use ‘fewer’, not ‘less’. (Extra practice item)"
  },
  {
    "id": "FE-X27",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "Everybody are ready.",
      "Everybody is ready.",
      "Everyone is ready.",
      "Each person is ready."
    ],
    "answer": 0,
    "explanation": "‘Everybody’ is singular → should be ‘is’. (Extra practice item)"
  },
  {
    "id": "FE-X28",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "There are less people here.",
      "There are fewer people here.",
      "Fewer people came today.",
      "She has fewer coins."
    ],
    "answer": 0,
    "explanation": "Countable nouns use ‘fewer’, not ‘less’. (Extra practice item)"
  },
  {
    "id": "FE-X29",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "Everybody are ready.",
      "Everybody is ready.",
      "Everyone is ready.",
      "Each person is ready."
    ],
    "answer": 0,
    "explanation": "‘Everybody’ is singular → should be ‘is’. (Extra practice item)"
  },
  {
    "id": "FE-X30",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "There are less people here.",
      "There are fewer people here.",
      "Fewer people came today.",
      "She has fewer coins."
    ],
    "answer": 0,
    "explanation": "Countable nouns use ‘fewer’, not ‘less’. (Extra practice item)"
  },
  {
    "id": "FE-X31",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "Everybody are ready.",
      "Everybody is ready.",
      "Everyone is ready.",
      "Each person is ready."
    ],
    "answer": 0,
    "explanation": "‘Everybody’ is singular → should be ‘is’. (Extra practice item)"
  },
  {
    "id": "FE-X32",
    "subject": "Finding Errors",
    "prompt": "Which sentence contains an error?",
    "choices": [
      "There are less people here.",
      "There are fewer people here.",
      "Fewer people came today.",
      "She has fewer coins."
    ],
    "answer": 0,
    "explanation": "Countable nouns use ‘fewer’, not ‘less’. (Extra practice item)"
  },
  {
    "id": "PS-X1",
    "subject": "Problem Solving",
    "prompt": "A store gives 20% off ₱1,500. What is the discount amount?",
    "choices": [
      "₱200",
      "₱250",
      "₱300",
      "₱350"
    ],
    "answer": 2,
    "explanation": "20% of 1500 = 300. (Extra practice item)"
  },
  {
    "id": "PS-X2",
    "subject": "Problem Solving",
    "prompt": "If 5 workers finish a job in 8 days, how many days for 10 workers (same rate)?",
    "choices": [
      "2",
      "4",
      "8",
      "16"
    ],
    "answer": 1,
    "explanation": "5×8 = 40 worker-days. 40/10 = 4 days. (Extra practice item)"
  },
  {
    "id": "PS-X3",
    "subject": "Problem Solving",
    "prompt": "A car travels 90 km in 1.5 hours. What is its speed (km/h)?",
    "choices": [
      "45",
      "50",
      "55",
      "60"
    ],
    "answer": 3,
    "explanation": "Speed = distance/time = 90/1.5 = 60. (Extra practice item)"
  },
  {
    "id": "PS-X4",
    "subject": "Problem Solving",
    "prompt": "A store gives 20% off ₱1,500. What is the discount amount?",
    "choices": [
      "₱200",
      "₱250",
      "₱300",
      "₱350"
    ],
    "answer": 2,
    "explanation": "20% of 1500 = 300. (Extra practice item)"
  },
  {
    "id": "PS-X5",
    "subject": "Problem Solving",
    "prompt": "If 5 workers finish a job in 8 days, how many days for 10 workers (same rate)?",
    "choices": [
      "2",
      "4",
      "8",
      "16"
    ],
    "answer": 1,
    "explanation": "5×8 = 40 worker-days. 40/10 = 4 days. (Extra practice item)"
  },
  {
    "id": "PS-X6",
    "subject": "Problem Solving",
    "prompt": "A car travels 90 km in 1.5 hours. What is its speed (km/h)?",
    "choices": [
      "45",
      "50",
      "55",
      "60"
    ],
    "answer": 3,
    "explanation": "Speed = distance/time = 90/1.5 = 60. (Extra practice item)"
  },
  {
    "id": "PS-X7",
    "subject": "Problem Solving",
    "prompt": "A store gives 20% off ₱1,500. What is the discount amount?",
    "choices": [
      "₱200",
      "₱250",
      "₱300",
      "₱350"
    ],
    "answer": 2,
    "explanation": "20% of 1500 = 300. (Extra practice item)"
  },
  {
    "id": "PS-X8",
    "subject": "Problem Solving",
    "prompt": "If 5 workers finish a job in 8 days, how many days for 10 workers (same rate)?",
    "choices": [
      "2",
      "4",
      "8",
      "16"
    ],
    "answer": 1,
    "explanation": "5×8 = 40 worker-days. 40/10 = 4 days. (Extra practice item)"
  },
  {
    "id": "PS-X9",
    "subject": "Problem Solving",
    "prompt": "A car travels 90 km in 1.5 hours. What is its speed (km/h)?",
    "choices": [
      "45",
      "50",
      "55",
      "60"
    ],
    "answer": 3,
    "explanation": "Speed = distance/time = 90/1.5 = 60. (Extra practice item)"
  },
  {
    "id": "PS-X10",
    "subject": "Problem Solving",
    "prompt": "A store gives 20% off ₱1,500. What is the discount amount?",
    "choices": [
      "₱200",
      "₱250",
      "₱300",
      "₱350"
    ],
    "answer": 2,
    "explanation": "20% of 1500 = 300. (Extra practice item)"
  },
  {
    "id": "PS-X11",
    "subject": "Problem Solving",
    "prompt": "If 5 workers finish a job in 8 days, how many days for 10 workers (same rate)?",
    "choices": [
      "2",
      "4",
      "8",
      "16"
    ],
    "answer": 1,
    "explanation": "5×8 = 40 worker-days. 40/10 = 4 days. (Extra practice item)"
  },
  {
    "id": "PS-X12",
    "subject": "Problem Solving",
    "prompt": "A car travels 90 km in 1.5 hours. What is its speed (km/h)?",
    "choices": [
      "45",
      "50",
      "55",
      "60"
    ],
    "answer": 3,
    "explanation": "Speed = distance/time = 90/1.5 = 60. (Extra practice item)"
  },
  {
    "id": "PS-X13",
    "subject": "Problem Solving",
    "prompt": "A store gives 20% off ₱1,500. What is the discount amount?",
    "choices": [
      "₱200",
      "₱250",
      "₱300",
      "₱350"
    ],
    "answer": 2,
    "explanation": "20% of 1500 = 300. (Extra practice item)"
  },
  {
    "id": "PS-X14",
    "subject": "Problem Solving",
    "prompt": "If 5 workers finish a job in 8 days, how many days for 10 workers (same rate)?",
    "choices": [
      "2",
      "4",
      "8",
      "16"
    ],
    "answer": 1,
    "explanation": "5×8 = 40 worker-days. 40/10 = 4 days. (Extra practice item)"
  },
  {
    "id": "PS-X15",
    "subject": "Problem Solving",
    "prompt": "A car travels 90 km in 1.5 hours. What is its speed (km/h)?",
    "choices": [
      "45",
      "50",
      "55",
      "60"
    ],
    "answer": 3,
    "explanation": "Speed = distance/time = 90/1.5 = 60. (Extra practice item)"
  },
  {
    "id": "PS-X16",
    "subject": "Problem Solving",
    "prompt": "A store gives 20% off ₱1,500. What is the discount amount?",
    "choices": [
      "₱200",
      "₱250",
      "₱300",
      "₱350"
    ],
    "answer": 2,
    "explanation": "20% of 1500 = 300. (Extra practice item)"
  },
  {
    "id": "PS-X17",
    "subject": "Problem Solving",
    "prompt": "If 5 workers finish a job in 8 days, how many days for 10 workers (same rate)?",
    "choices": [
      "2",
      "4",
      "8",
      "16"
    ],
    "answer": 1,
    "explanation": "5×8 = 40 worker-days. 40/10 = 4 days. (Extra practice item)"
  },
  {
    "id": "PS-X18",
    "subject": "Problem Solving",
    "prompt": "A car travels 90 km in 1.5 hours. What is its speed (km/h)?",
    "choices": [
      "45",
      "50",
      "55",
      "60"
    ],
    "answer": 3,
    "explanation": "Speed = distance/time = 90/1.5 = 60. (Extra practice item)"
  },
  {
    "id": "PS-X19",
    "subject": "Problem Solving",
    "prompt": "A store gives 20% off ₱1,500. What is the discount amount?",
    "choices": [
      "₱200",
      "₱250",
      "₱300",
      "₱350"
    ],
    "answer": 2,
    "explanation": "20% of 1500 = 300. (Extra practice item)"
  },
  {
    "id": "PS-X20",
    "subject": "Problem Solving",
    "prompt": "If 5 workers finish a job in 8 days, how many days for 10 workers (same rate)?",
    "choices": [
      "2",
      "4",
      "8",
      "16"
    ],
    "answer": 1,
    "explanation": "5×8 = 40 worker-days. 40/10 = 4 days. (Extra practice item)"
  }
];

// ---------------------------
// Performance tracking (localStorage)
// ---------------------------
const STATS_KEY = "cse_stats_v1";

function loadStats() {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (!raw) return initStats();
    const parsed = JSON.parse(raw);
    // ensure all subjects exist
    for (const s of SUBJECTS) {
      if (!parsed[s]) parsed[s] = {attempted:0, correct:0, last:[]};
      if (!Array.isArray(parsed[s].last)) parsed[s].last = [];
    }
    return parsed;
  } catch (e) {
    return initStats();
  }
}

function initStats() {
  const obj = {};
  for (const s of SUBJECTS) obj[s] = {attempted:0, correct:0, last:[]};
  return obj;
}

function saveStats(stats) {
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

function recordAttempt(subject, isCorrect) {
  const stats = loadStats();
  const s = stats[subject] || {attempted:0, correct:0, last:[]};
  s.attempted += 1;
  if (isCorrect) s.correct += 1;
  s.last = [isCorrect ? 1 : 0, ...(s.last || [])].slice(0, 10);
  stats[subject] = s;
  saveStats(stats);
  renderPerformance();
  renderAccuracyPill(subject);
}

function resetStats() {
  const stats = initStats();
  saveStats(stats);
  renderPerformance();
  renderAccuracyPill(mode==="PRACTICE" ? practiceSubject : (currentQ?currentQ.subject:SUBJECTS[0]));
}

function pct(correct, attempted) {
  if (!attempted) return 0;
  return Math.round((correct/attempted)*100);
}

function renderPerformance() {
  const area = document.getElementById("perfArea");
  if (!area) return;
  const stats = loadStats();

  const rows = SUBJECTS.map(s => {
    const a = stats[s]?.attempted || 0;
    const c = stats[s]?.correct || 0;
    const p = pct(c,a);
    const last = (stats[s]?.last || []).map(v => v ? "✅" : "❌").join(" ");
    return `
      <tr>
        <td><b>${escapeHtml(s)}</b><div class="small mono">${c}/${a} (${
          p
        }%)</div></td>
        <td>
          <div class="perfbar"><div style="width:${p}%"></div></div>
          <div class="small">${last || "—"}</div>
        </td>
      </tr>
    `;
  }).join("");

  area.innerHTML = `
    <table class="perftable">
      <thead>
        <tr><th>Subject</th><th>Accuracy (last 10)</th></tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderAccuracyPill(subject) {
  const pill = document.getElementById("accPill");
  if (!pill) return;
  const stats = loadStats();
  const a = stats[subject]?.attempted || 0;
  const c = stats[subject]?.correct || 0;
  pill.innerHTML = `Accuracy: <b class="mono">${a ? pct(c,a) + "%" : "--"}</b>`;
}

// ---------------------------
// Utilities
// ---------------------------
function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}
function formatTime(sec){
  const m = Math.floor(sec/60);
  const s = sec%60;
  return `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
}
function el(tag, attrs={}, children=[]){
  const n = document.createElement(tag);
  for(const [k,v] of Object.entries(attrs)){
    if(k==="class") n.className = v;
    else if(k==="html") n.innerHTML = v;
    else if(k.startsWith("on") && typeof v === "function") n.addEventListener(k.slice(2), v);
    else n.setAttribute(k,v);
  }
  for(const c of (Array.isArray(children)?children:[children])){
    if(c==null) continue;
    n.appendChild(typeof c==="string"?document.createTextNode(c):c);
  }
  return n;
}
function escapeHtml(s){
  return String(s)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;");
}

// ---------------------------
// State
// ---------------------------
let mode = "PRACTICE"; // PRACTICE | MOCK
let practiceSubject = SUBJECTS[0];
let usedPracticeIds = new Set();

let currentQ = null;
let selectedIndex = null;
let revealed = false;

let mock = {
  running:false,
  examType:"PRO",
  totalItems:0,
  timeLimitSec:0,
  remainingSec:0,
  order:[],
  idx:0,
  answers: new Map(), // qid -> {selected, correct, subject}
  timerHandle:null
};

const EXAM_CONFIG = {
  PRO: { totalItems:170, timeLimitSec: (3*60+10)*60 },
  SUB: { totalItems:165, timeLimitSec: (2*60+40)*60 }
};

// ---------------------------
// DOM refs
// ---------------------------
const subjectSelect = document.getElementById("subjectSelect");
const modePill = document.getElementById("modePill");
const subjectPill = document.getElementById("subjectPill");
const progressPill = document.getElementById("progressPill");
const timerPill = document.getElementById("timerPill");
const scorePill = document.getElementById("scorePill");

const practiceControls = document.getElementById("practiceControls");
const mockControls = document.getElementById("mockControls");

const questionArea = document.getElementById("questionArea");
const resultsArea = document.getElementById("resultsArea");

const btnPractice = document.getElementById("btnPractice");
const btnMock = document.getElementById("btnMock");
const btnNewPractice = document.getElementById("btnNewPractice");
const btnResetPractice = document.getElementById("btnResetPractice");

const examTypeSel = document.getElementById("examType");
const btnStartMock = document.getElementById("btnStartMock");
const btnStopMock = document.getElementById("btnStopMock");
const btnBackToPractice = document.getElementById("btnBackToPractice");

const resTotal = document.getElementById("resTotal");
const resAnswered = document.getElementById("resAnswered");
const breakdown = document.getElementById("breakdown");

const btnResetStats = document.getElementById("btnResetStats");
if (btnResetStats) btnResetStats.addEventListener("click", resetStats);

// ---------------------------
// Init subject select
// ---------------------------
function initSubjects(){
  subjectSelect.innerHTML = "";
  for(const s of SUBJECTS){
    subjectSelect.appendChild(el("option", {value:s}, s));
  }
  subjectSelect.value = practiceSubject;
}
initSubjects();

function getQuestionsBySubject(subject){
  return QUESTION_BANK.filter(q => q.subject === subject);
}
function getAllQuestions(){
  return QUESTION_BANK.slice();
}

// ---------------------------
// Render
// ---------------------------
function render(){
  modePill.innerHTML = `Mode: <b>${mode==="PRACTICE"?"Practice":"Mock Exam"}</b>`;
  subjectPill.innerHTML = `Subject: <b>${mode==="PRACTICE"?practiceSubject:(currentQ?currentQ.subject:"-")}</b>`;
  renderAccuracyPill(mode==="PRACTICE" ? practiceSubject : (currentQ?currentQ.subject:practiceSubject));

  if(mode==="PRACTICE"){
    const total = getQuestionsBySubject(practiceSubject).length;
    const used = usedPracticeIds.size;
    progressPill.innerHTML = `Progress: <b class="mono">${Math.min(used,total)}/${total}</b>`;
    timerPill.classList.add("hidden");
    scorePill.classList.add("hidden");
  } else {
    progressPill.innerHTML = `Progress: <b class="mono">${mock.idx+1}/${mock.totalItems}</b>`;
    timerPill.classList.remove("hidden");
    scorePill.classList.remove("hidden");
    timerPill.innerHTML = `Time Left: <b class="mono">${formatTime(mock.remainingSec)}</b>`;
    const score = computeMockScore().totalCorrect;
    scorePill.innerHTML = `Score: <b class="mono">${score}</b>`;
  }

  resultsArea.classList.add("hidden");
  questionArea.classList.remove("hidden");

  if(!currentQ){
    questionArea.innerHTML = `<p class="small">Click <b>New Question</b> to start.</p>`;
    return;
  }

  const qWrap = el("div", {}, [
    el("div", {class:"q-title"}, mode==="PRACTICE" ? "Practice (1 question)" : "Mock Exam (1 question)"),
    el("p", {class:"q-text"}, currentQ.prompt),
  ]);

  const choices = el("div", {class:"choices"});
  currentQ.choices.forEach((c, idx) => {
    const isSelected = selectedIndex === idx;
    const isCorrect = revealed && idx === currentQ.answer;
    const isWrongSelected = revealed && isSelected && idx !== currentQ.answer;

    const choice = el("label", {class:`choice ${isCorrect?"correct":""} ${isWrongSelected?"wrong":""}`}, [
      el("input", {type:"radio", name:"choice", value:String(idx), ...(isSelected?{checked:"checked"}:{})}),
      el("div", {}, [
        el("div", {class:"mono small"}, String.fromCharCode(65+idx) + "."),
        el("div", {}, c)
      ])
    ]);

    choice.addEventListener("click", () => {
      if(revealed) return;
      selectedIndex = idx;
      render();
    });

    choices.appendChild(choice);
  });

  const btnRow = el("div", {class:"row", style:"margin-top:12px"}, []);
  const submitBtn = el("button", {id:"btnSubmit", class:"btn-good"}, "Submit");
  const nextBtn = el("button", {id:"btnNext", class:"btn-ghost"}, mode==="PRACTICE"?"Next Question":"Next");
  const revealBtn = el("button", {id:"btnReveal", class:"btn-ghost"}, "Show Answer + Explanation");

  submitBtn.disabled = (selectedIndex==null) || revealed;
  revealBtn.disabled = revealed;

  submitBtn.addEventListener("click", () => {
    if(selectedIndex==null) return;
    revealed = true;

    const isCorrect = selectedIndex === currentQ.answer;
    // record performance on submit
    recordAttempt(currentQ.subject, isCorrect);

    if(mode==="MOCK"){
      mock.answers.set(currentQ.id, {selected:selectedIndex, correct:isCorrect, subject: currentQ.subject});
    }
    render();
  });

  revealBtn.addEventListener("click", () => {
    revealed = true;
    if(mode==="MOCK"){
      if(!mock.answers.has(currentQ.id)){
        mock.answers.set(currentQ.id, {selected:null, correct:false, subject: currentQ.subject});
      }
    }
    render();
  });

  nextBtn.addEventListener("click", () => goNext());

  btnRow.appendChild(submitBtn);
  btnRow.appendChild(revealBtn);
  btnRow.appendChild(nextBtn);

  qWrap.appendChild(choices);
  qWrap.appendChild(btnRow);

  if(revealed){
    const isCorrect = selectedIndex === currentQ.answer;
    const fb = el("div", {class:`feedback ${isCorrect?"good":"bad"}`}, [
      el("h3", {}, isCorrect ? "✅ Correct!" : "❌ Not quite."),
      el("p", {html: `<b>Correct answer:</b> ${String.fromCharCode(65+currentQ.answer)}. ${escapeHtml(currentQ.choices[currentQ.answer])}<br><br><b>Explanation:</b> ${escapeHtml(currentQ.explanation)}`})
    ]);
    qWrap.appendChild(fb);
  }

  questionArea.innerHTML = "";
  questionArea.appendChild(qWrap);
}

// ---------------------------
// Practice flow
// ---------------------------
function newPracticeQuestion(){
  const pool = getQuestionsBySubject(practiceSubject);
  if(pool.length===0){
    currentQ = null; selectedIndex=null; revealed=false;
    render();
    return;
  }

  const available = pool.filter(q => !usedPracticeIds.has(q.id));
  if(available.length === 0){
    currentQ = null; selectedIndex=null; revealed=false;
    questionArea.innerHTML =
      `<div class="feedback">
        <h3>Done!</h3>
        <p>You already answered all questions in <b>${practiceSubject}</b> (based on your current question bank).
        Click <b>Reset</b> to allow repeats, or add more questions to the bank.</p>
      </div>`;
    render();
    return;
  }

  currentQ = available[Math.floor(Math.random()*available.length)];
  usedPracticeIds.add(currentQ.id);
  selectedIndex = null;
  revealed = false;
  render();
}

// ---------------------------
// Mock flow
// ---------------------------
function startMock(){
  mock.examType = examTypeSel.value;
  const cfg = EXAM_CONFIG[mock.examType];
  mock.totalItems = cfg.totalItems;
  mock.timeLimitSec = cfg.timeLimitSec;
  mock.remainingSec = cfg.timeLimitSec;

  const base = shuffle(getAllQuestions());
  const order = [];
  while(order.length < mock.totalItems){
    order.push(...shuffle(base));
    if(order.length > mock.totalItems) order.length = mock.totalItems;
  }
  mock.order = order;
  mock.idx = 0;
  mock.answers = new Map();
  mock.running = true;

  if(mock.timerHandle) clearInterval(mock.timerHandle);
  mock.timerHandle = setInterval(() => {
    mock.remainingSec--;
    if(mock.remainingSec <= 0){
      mock.remainingSec = 0;
      stopMock(true);
      return;
    }
    timerPill.innerHTML = `Time Left: <b class="mono">${formatTime(mock.remainingSec)}</b>`;
  }, 1000);

  loadMockQuestion(0);

  btnStartMock.disabled = true;
  btnStopMock.disabled = false;

  render();
}

function loadMockQuestion(i){
  mock.idx = i;
  currentQ = mock.order[mock.idx] || null;

  const prev = currentQ ? mock.answers.get(currentQ.id) : null;
  selectedIndex = prev ? prev.selected : null;

  revealed = false;
  render();
}

function goNext(){
  if(mode==="PRACTICE"){
    newPracticeQuestion();
  } else {
    const next = mock.idx + 1;
    if(next >= mock.totalItems) stopMock(false);
    else loadMockQuestion(next);
  }
}

function stopMock(timeUp){
  if(mock.timerHandle) clearInterval(mock.timerHandle);
  mock.timerHandle = null;
  mock.running = false;

  btnStartMock.disabled = false;
  btnStopMock.disabled = true;

  showResults(timeUp);
}

function computeMockScore(){
  let totalCorrect = 0;
  let totalAnswered = 0;
  const bySubject = new Map();
  for(const q of mock.order){
    const a = mock.answers.get(q.id);
    if(!bySubject.has(q.subject)) bySubject.set(q.subject, {correct:0, answered:0});
    if(a && a.selected != null){
      totalAnswered++;
      bySubject.get(q.subject).answered++;
      if(a.correct){
        totalCorrect++;
        bySubject.get(q.subject).correct++;
      }
    }
  }
  return {totalCorrect, totalAnswered, bySubject};
}

function showResults(timeUp){
  const {totalCorrect, totalAnswered, bySubject} = computeMockScore();

  questionArea.classList.add("hidden");
  resultsArea.classList.remove("hidden");

  const existing = resultsArea.querySelector(".feedback.bad.timeup");
  if(existing) existing.remove();

  resTotal.textContent = totalCorrect;
  resAnswered.textContent = `${totalAnswered} / ${mock.totalItems}`;

  breakdown.innerHTML = "";
  const subjectsSorted = Array.from(bySubject.keys()).sort();
  for(const s of subjectsSorted){
    const v = bySubject.get(s);
    const item = el("div", {class:"kpi"}, [
      el("div", {class:"small"}, s),
      el("div", {class:"v mono"}, `${v.correct} / ${v.answered}`)
    ]);
    breakdown.appendChild(item);
  }

  if(timeUp){
    const note = el("div", {class:"feedback bad timeup"}, [
      el("h3", {}, "⏰ Time’s up!"),
      el("p", {}, "Your mock exam ended because the timer reached zero.")
    ]);
    resultsArea.insertBefore(note, resultsArea.children[1]);
  }
}

// ---------------------------
// Mode switching
// ---------------------------
function setMode(newMode){
  mode = newMode;
  if(mode==="PRACTICE"){
    practiceControls.classList.remove("hidden");
    mockControls.classList.add("hidden");
    btnPractice.className = "btn-good";
    btnMock.className = "btn-ghost";

    timerPill.classList.add("hidden");
    scorePill.classList.add("hidden");

    currentQ = null;
    selectedIndex = null;
    revealed = false;
    render();
  } else {
    practiceControls.classList.add("hidden");
    mockControls.classList.remove("hidden");
    btnPractice.className = "btn-ghost";
    btnMock.className = "btn-good";

    currentQ = null;
    selectedIndex = null;
    revealed = false;
    render();
  }
}

// ---------------------------
// Wiring
// ---------------------------
btnPractice.addEventListener("click", () => setMode("PRACTICE"));
btnMock.addEventListener("click", () => setMode("MOCK"));

subjectSelect.addEventListener("change", () => {
  practiceSubject = subjectSelect.value;
  currentQ = null; selectedIndex = null; revealed = false;
  render();
});

btnNewPractice.addEventListener("click", () => newPracticeQuestion());
btnResetPractice.addEventListener("click", () => {
  usedPracticeIds = new Set();
  currentQ = null; selectedIndex=null; revealed=false;
  render();
});

btnStartMock.addEventListener("click", () => startMock());
btnStopMock.addEventListener("click", () => stopMock(false));

btnBackToPractice.addEventListener("click", () => {
  if(mock.timerHandle) clearInterval(mock.timerHandle);
  mock.timerHandle = null;
  mock.running = false;
  setMode("PRACTICE");
});

// initial
renderPerformance();
setMode("PRACTICE");
render();


// Reset ALL performance data (full wipe)
const btnResetAllStats = document.getElementById("btnResetAllStats");
if (btnResetAllStats) {
  btnResetAllStats.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete ALL performance data? This cannot be undone.")) {
      localStorage.removeItem(STATS_KEY);
      renderPerformance();
      renderAccuracyPill(practiceSubject);
    }
  });
}
