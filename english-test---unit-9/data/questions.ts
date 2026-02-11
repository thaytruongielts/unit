
import { Question } from '../types';

export const QUESTIONS: Question[] = [
  // SECTION I: PRONUNCIATION (1-10)
  {
    id: 1,
    section: "I. PRONUNCIATION (A)",
    instruction: "Choose the word whose underlined part is pronounced differently from that of the others.",
    content: "1. a. natural b. disaster c. damage d. grandma",
    options: ["a", "b", "c", "d"],
    correctAnswer: "b"
  },
  {
    id: 2,
    section: "I. PRONUNCIATION (A)",
    instruction: "Choose the word whose underlined part is pronounced differently from that of the others.",
    content: "2. a. weather b. reach c. leak d. between",
    options: ["a", "b", "c", "d"],
    correctAnswer: "a"
  },
  {
    id: 3,
    section: "I. PRONUNCIATION (A)",
    instruction: "Choose the word whose underlined part is pronounced differently from that of the others.",
    content: "3. a. thunder b. result c. erupt d. volume",
    options: ["a", "b", "c", "d"],
    correctAnswer: "d"
  },
  {
    id: 4,
    section: "I. PRONUNCIATION (A)",
    instruction: "Choose the word whose underlined part is pronounced differently from that of the others.",
    content: "4. a. watched b. collapsed c. caused d. laughed",
    options: ["a", "b", "c", "d"],
    correctAnswer: "c"
  },
  {
    id: 5,
    section: "I. PRONUNCIATION (A)",
    instruction: "Choose the word whose underlined part is pronounced differently from that of the others.",
    content: "5. a. typhoon b. cyclone c. sky d. sunny",
    options: ["a", "b", "c", "d"],
    correctAnswer: "d"
  },
  {
    id: 6,
    section: "I. PRONUNCIATION (B)",
    instruction: "Choose the word whose main stress pattern is placed differently from the others.",
    content: "6. a. natural b. disaster c. volcano d. typhoon",
    options: ["a", "b", "c", "d"],
    correctAnswer: "a"
  },
  {
    id: 7,
    section: "I. PRONUNCIATION (B)",
    instruction: "Choose the word whose main stress pattern is placed differently from the others.",
    content: "7. a. earthquake b. thunderstorm c. temperature d. experience",
    options: ["a", "b", "c", "d"],
    correctAnswer: "d"
  },
  {
    id: 8,
    section: "I. PRONUNCIATION (B)",
    instruction: "Choose the word whose main stress pattern is placed differently from the others.",
    content: "8. a. erupt b. collapse c. gather d. occur",
    options: ["a", "b", "c", "d"],
    correctAnswer: "c"
  },
  {
    id: 9,
    section: "I. PRONUNCIATION (B)",
    instruction: "Choose the word whose main stress pattern is placed differently from the others.",
    content: "9. a. forecast b. tornado c. hurricane d. tropical",
    options: ["a", "b", "c", "d"],
    correctAnswer: "b"
  },
  {
    id: 10,
    section: "I. PRONUNCIATION (B)",
    instruction: "Choose the word whose main stress pattern is placed differently from the others.",
    content: "10. a. extensive b. dangerous c. furniture d. carriage",
    options: ["a", "b", "c", "d"],
    correctAnswer: "a"
  },

  // SECTION II: VOCABULARY (11-17)
  {
    id: 11,
    section: "II. VOCABULARY AND EXPRESSION",
    instruction: "Choose the word or phrase that best fits the blank space.",
    content: "1. Thuy’s grandma turned the television ________ to see the weather forecast.",
    options: ["a. off", "b. up", "c. on", "d. down"],
    correctAnswer: "c"
  },
  {
    id: 12,
    section: "II. VOCABULARY AND EXPRESSION",
    instruction: "Choose the word or phrase that best fits the blank space.",
    content: "2. The hurricane took several days to blow itself ________.",
    options: ["a. in", "b. out", "c. down", "d. off"],
    correctAnswer: "b"
  },
  {
    id: 13,
    section: "II. VOCABULARY AND EXPRESSION",
    instruction: "Choose the word or phrase that best fits the blank space.",
    content: "3. It was the biggest eruption of Vesuvius ________ some years.",
    options: ["a. for", "b. since", "c. in", "d. from"],
    correctAnswer: "a"
  },
  {
    id: 14,
    section: "II. VOCABULARY AND EXPRESSION",
    instruction: "Choose the word or phrase that best fits the blank space.",
    content: "4. The earthquake ________ the city at two in the morning.",
    options: ["a. occurred", "b. hit", "c. swept", "d. measured"],
    correctAnswer: "b"
  },
  {
    id: 15,
    section: "II. VOCABULARY AND EXPRESSION",
    instruction: "Choose the word or phrase that best fits the blank space.",
    content: "5. A funnel-shaped storms passing overland below a thunderstorm is called a ________.",
    options: ["a. typhoons", "b. tsunami", "c. tornado", "d. hurricane"],
    correctAnswer: "c"
  },
  {
    id: 16,
    section: "II. VOCABULARY AND EXPRESSION",
    instruction: "Choose the word or phrase that best fits the blank space.",
    content: "6. The last tsunami caused a lot of ________ to the countries along the Pacific coast.",
    options: ["a. eruption", "b. disasters", "c. destruction", "d. damage"],
    correctAnswer: "d"
  },
  {
    id: 17,
    section: "II. VOCABULARY AND EXPRESSION",
    instruction: "Choose the closest meaning to the underlined word.",
    content: "7. The roof collapsed under the weight of snow.",
    options: ["a. fell in", "b. broke off", "c. pulled down", "d. put away"],
    correctAnswer: "a"
  },

  // SECTION III: CLOZE (18-25)
  // Box: tsunami, geographical, factors, wondered, common, change, ring, occur
  {
    id: 18,
    section: "III. FILL IN THE BLANKS (CLOZE)",
    instruction: "Complete the passage with suitable words.",
    content: "Have you ever (1) __________ what caused a tsunami?",
    correctAnswer: "wondered"
  },
  {
    id: 19,
    section: "III. FILL IN THE BLANKS (CLOZE)",
    instruction: "Complete the passage with suitable words.",
    content: "Several (2) __________ contribute to the formation of a tsunami.",
    correctAnswer: "factors"
  },
  {
    id: 20,
    section: "III. FILL IN THE BLANKS (CLOZE)",
    instruction: "Complete the passage with suitable words.",
    content: "One variable is any sized seismic or (3) __________ disturbance.",
    correctAnswer: "geographical"
  },
  {
    id: 21,
    section: "III. FILL IN THE BLANKS (CLOZE)",
    instruction: "Complete the passage with suitable words.",
    content: "This is usually caused by a sudden (4) __________ in the level of the earth's crust.",
    correctAnswer: "change"
  },
  {
    id: 22,
    section: "III. FILL IN THE BLANKS (CLOZE)",
    instruction: "Complete the passage with suitable words.",
    content: "Another factor in the cause of (5) __________ is volcanic activity.",
    correctAnswer: "tsunami"
  },
  {
    id: 23,
    section: "III. FILL IN THE BLANKS (CLOZE)",
    instruction: "Complete the passage with suitable words.",
    content: "Although tsunami may (6) __________ in any of the world's major oceans...",
    correctAnswer: "occur"
  },
  {
    id: 24,
    section: "III. FILL IN THE BLANKS (CLOZE)",
    instruction: "Complete the passage with suitable words.",
    content: "...they are most (7) __________ in the area of the world...",
    correctAnswer: "common"
  },
  {
    id: 25,
    section: "III. FILL IN THE BLANKS (CLOZE)",
    instruction: "Complete the passage with suitable words.",
    content: "...known as the (8) __________ of fire.",
    correctAnswer: "ring"
  },

  // SECTION IV: PRONOUNS (26-40)
  {
    id: 26,
    section: "IV. RELATIVE PRONOUNS",
    instruction: "Write the possible pronoun(s). Use 'zero' for no pronoun.",
    content: "1. Mrs Green is the woman __________ I was talking about.",
    correctAnswer: ["who", "whom", "that", "zero"]
  },
  {
    id: 27,
    section: "IV. RELATIVE PRONOUNS",
    instruction: "Write the possible pronoun(s).",
    content: "2. I don't like people __________ tell jokes all the time.",
    correctAnswer: ["who", "that"]
  },
  {
    id: 28,
    section: "IV. RELATIVE PRONOUNS",
    instruction: "Write the possible pronoun(s).",
    content: "3. The subjects __________ we talk about in class are interesting.",
    correctAnswer: ["which", "that", "zero"]
  },
  {
    id: 29,
    section: "IV. RELATIVE PRONOUNS",
    instruction: "Write the possible pronoun(s).",
    content: "4. Alex bought a bicycle __________ is specially designed for racing.",
    correctAnswer: ["which", "that"]
  },
  {
    id: 30,
    section: "IV. RELATIVE PRONOUNS",
    instruction: "Write the possible pronoun(s).",
    content: "5. The student __________ essay I read writes well.",
    correctAnswer: "whose"
  },
  {
    id: 31,
    section: "IV. RELATIVE PRONOUNS",
    instruction: "Write the possible pronoun(s).",
    content: "6. The teacher __________ I like most is Mrs. Grange.",
    correctAnswer: ["who", "whom", "that", "zero"]
  },
  {
    id: 32,
    section: "IV. RELATIVE PRONOUNS",
    instruction: "Write the possible pronoun(s).",
    content: "7. This is the letter __________ I've been looking for.",
    correctAnswer: ["which", "that", "zero"]
  },
  {
    id: 33,
    section: "IV. RELATIVE PRONOUNS",
    instruction: "Write the possible pronoun(s).",
    content: "8. The person to __________ Ann spoke could not answer.",
    correctAnswer: "whom"
  },
  {
    id: 34,
    section: "IV. RELATIVE PRONOUNS",
    instruction: "Write the possible pronoun(s).",
    content: "9. The new stadium, __________ can hold 90,000 people, opens next month.",
    correctAnswer: "which"
  },
  {
    id: 35,
    section: "IV. RELATIVE PRONOUNS",
    instruction: "Write the possible pronoun(s).",
    content: "10. Ann, __________ lives next door, is very friendly.",
    correctAnswer: "who"
  },
  {
    id: 36,
    section: "IV. RELATIVE PRONOUNS",
    instruction: "Write the possible pronoun(s).",
    content: "11. Colin told me about his new job, __________ he's enjoying a lot.",
    correctAnswer: "which"
  },
  {
    id: 37,
    section: "IV. RELATIVE PRONOUNS",
    instruction: "Write the possible pronoun(s).",
    content: "12. Is this the article in __________ you were interested?",
    correctAnswer: "which"
  },
  {
    id: 38,
    section: "IV. RELATIVE PRONOUNS",
    instruction: "Write the possible pronoun(s).",
    content: "13. Which is the country __________ economy is growing the fastest?",
    correctAnswer: "whose"
  },
  {
    id: 39,
    section: "IV. RELATIVE PRONOUNS",
    instruction: "Write the possible pronoun(s).",
    content: "14. We visited Barcelona, __________ is a city in northern Spain.",
    correctAnswer: "which"
  },
  {
    id: 40,
    section: "IV. RELATIVE PRONOUNS",
    instruction: "Write the possible pronoun(s).",
    content: "15. This morning I met Diane, __________ I hadn't seen for ages.",
    correctAnswer: ["whom", "who"]
  },

  // SECTION IX: PREPOSITIONS (41-50)
  {
    id: 41,
    section: "IX. PREPOSITIONS",
    instruction: "Fill in the blank with a suitable preposition.",
    content: "1. The music is too loud. Could you turn it __________ a little?",
    correctAnswer: "down"
  },
  {
    id: 42,
    section: "IX. PREPOSITIONS",
    instruction: "Fill in the blank with a suitable preposition.",
    content: "2. They read the news __________ the Internet.",
    correctAnswer: "on"
  },
  {
    id: 43,
    section: "IX. PREPOSITIONS",
    instruction: "Fill in the blank with a suitable preposition.",
    content: "3. Ha Noi will have temperatures __________ 23°C and 27°C.",
    correctAnswer: "between"
  },
  {
    id: 44,
    section: "IX. PREPOSITIONS",
    instruction: "Fill in the blank with a suitable preposition.",
    content: "4. Why don't you bring __________ an umbrella?",
    correctAnswer: "along"
  },
  {
    id: 45,
    section: "IX. PREPOSITIONS",
    instruction: "Fill in the blank with a suitable preposition.",
    content: "5. You shouldn't laugh __________ the disabled.",
    correctAnswer: "at"
  },
  {
    id: 46,
    section: "IX. PREPOSITIONS",
    instruction: "Fill in the blank with a suitable preposition.",
    content: "6. The earthquake __________ Kobe __________ 1995 killed many people. (First blank)",
    correctAnswer: "in"
  },
  {
    id: 47,
    section: "IX. PREPOSITIONS",
    instruction: "Fill in the blank with a suitable preposition.",
    content: "6. The earthquake in Kobe __________ 1995 killed many people. (Second blank)",
    correctAnswer: "in"
  },
  {
    id: 48,
    section: "IX. PREPOSITIONS",
    instruction: "Fill in the blank with a suitable preposition.",
    content: "7. A tornado looks __________ a funnel.",
    correctAnswer: "like"
  },
  {
    id: 49,
    section: "IX. PREPOSITIONS",
    instruction: "Fill in the blank with a suitable preposition.",
    content: "8. Tornadoes can suck __________ anything that is in their path.",
    correctAnswer: "up"
  },
  {
    id: 50,
    section: "IX. PREPOSITIONS",
    instruction: "Fill in the blank with a suitable preposition.",
    content: "9. I agree __________ my mother about most things.",
    correctAnswer: "with"
  },

  // SECTION X: READING TRUE/FALSE (51-54)
  {
    id: 51,
    section: "X. READING PASSAGE",
    instruction: "Read the passage about the 2004 Tsunami and decide if statements are True (T) or False (F).",
    content: "1. The tsunami mainly occurred in Indonesia.",
    options: ["T", "F"],
    correctAnswer: "T"
  },
  {
    id: 52,
    section: "X. READING PASSAGE",
    instruction: "Decide if True (T) or False (F).",
    content: "2. The tsunami caused serious damage and deaths in coastal areas around the Indian Ocean.",
    options: ["T", "F"],
    correctAnswer: "T"
  },
  {
    id: 53,
    section: "X. READING PASSAGE",
    instruction: "Decide if True (T) or False (F).",
    content: "3. In Thailand, the tsunami had been predicted a few hours before.",
    options: ["T", "F"],
    correctAnswer: "F"
  },
  {
    id: 54,
    section: "X. READING PASSAGE",
    instruction: "Decide if True (T) or False (F).",
    content: "4. The 2004 tsunami is one of the worst natural disasters in the world.",
    options: ["T", "F"],
    correctAnswer: "T"
  },

  // SECTION VIII: VERB FORMS (55-64)
  {
    id: 55,
    section: "VIII. VERB FORMS",
    instruction: "Complete the passage with the correct form/tense of the verbs in brackets.",
    content: "(1) As many as 1,500 people __________ (kill) in Haiti...",
    correctAnswer: ["were killed", "have been killed"]
  },
  {
    id: 56,
    section: "VIII. VERB FORMS",
    instruction: "Verb form.",
    content: "(2) ...after tropical storm Jean __________ (hit) the island nation...",
    correctAnswer: "hit"
  },
  {
    id: 57,
    section: "VIII. VERB FORMS",
    instruction: "Verb form.",
    content: "(3) ...dumping heavy rains that __________ (cause) deadly flooding.",
    correctAnswer: ["caused", "had caused"]
  },
  {
    id: 58,
    section: "VIII. VERB FORMS",
    instruction: "Verb form.",
    content: "(4) At the present in Haiti, relief workers __________ (struggle) to distribute supplies.",
    correctAnswer: ["are struggling"]
  },
  {
    id: 59,
    section: "VIII. VERB FORMS",
    instruction: "Verb form.",
    content: "(5) ...residents who __________ (not eat) since their homes were destroyed.",
    correctAnswer: ["haven't eaten", "have not eaten"]
  },
  {
    id: 60,
    section: "VIII. VERB FORMS",
    instruction: "Verb form.",
    content: "(6) ...since their homes __________ (destroy).",
    correctAnswer: ["were destroyed"]
  },
  {
    id: 61,
    section: "VIII. VERB FORMS",
    instruction: "Verb form.",
    content: "(7) The northern city of Gonaives __________ (completely/destroy).",
    correctAnswer: ["was completely destroyed", "has been completely destroyed"]
  },
  {
    id: 62,
    section: "VIII. VERB FORMS",
    instruction: "Verb form.",
    content: "(8) ...and residents __________ (wade) through streets trying to find missing loved ones.",
    correctAnswer: ["are wading", "were wading"]
  },
  {
    id: 63,
    section: "VIII. VERB FORMS",
    instruction: "Verb form.",
    content: "(9) At the moment, mass graves __________ (dig) to bury hundreds of bodies.",
    correctAnswer: ["are being dug"]
  },
  {
    id: 64,
    section: "VIII. VERB FORMS",
    instruction: "Verb form.",
    content: "(10) ...expect fatalities to rise as the water __________ (subside).",
    correctAnswer: ["subsides"]
  },

  // SECTION XI: REWRITE (65-71)
  {
    id: 65,
    section: "XI. REWRITE SENTENCES",
    instruction: "Rewrite the sentence beginning with the given words.",
    content: "1. Why did you allow them to leave in the storm? -> You shouldn't let...",
    correctAnswer: ["them leave in the storm", "them leave during the storm"]
  },
  {
    id: 66,
    section: "XI. REWRITE SENTENCES",
    instruction: "Rewrite the sentence.",
    content: "2. Not a single house in the village escaped undamaged. -> There was not...",
    correctAnswer: "a single house in the village that escaped undamaged"
  },
  {
    id: 67,
    section: "XI. REWRITE SENTENCES",
    instruction: "Rewrite the sentence.",
    content: "3. Tom is a careful driver. -> Tom is a driver...",
    correctAnswer: "who drives carefully"
  },
  {
    id: 68,
    section: "XI. REWRITE SENTENCES",
    instruction: "Rewrite the sentence.",
    content: "4. 'Don't forget to bring along the raincoat,' said grandma. -> Grandma reminded...",
    correctAnswer: ["Thuy to bring along the raincoat", "me to bring along the raincoat"]
  },
  {
    id: 69,
    section: "XI. REWRITE SENTENCES",
    instruction: "Rewrite the sentence.",
    content: "5. The last time Thuy met her friends was when they left school. -> Thuy haven't...",
    correctAnswer: "met her old friends since they left school"
  },
  {
    id: 70,
    section: "XI. REWRITE SENTENCES",
    instruction: "Rewrite the sentence.",
    content: "6. There are more than 1,000 workers in the factory. -> He works...",
    correctAnswer: "in a factory which has more than 1,000 workers"
  },
  {
    id: 71,
    section: "XI. REWRITE SENTENCES",
    instruction: "Rewrite the sentence.",
    content: "7. The news about the earthquake distressed Josephine. -> Josephine...",
    correctAnswer: "was distressed by the news about the earthquake"
  },

  // SECTION VII: COMBINE SENTENCES (72-86)
  {
    id: 72,
    section: "VII. COMBINE SENTENCES",
    instruction: "Combine each pair of sentences with who, whom, which, that, or whose.",
    content: "1. The old man is my grandfather. He lives next door.",
    correctAnswer: ["the old man who lives next door is my grandfather", "the old man, who lives next door, is my grandfather"]
  },
  {
    id: 73,
    section: "VII. COMBINE SENTENCES",
    instruction: "Combine sentences.",
    content: "2. Natalie is very friendly. She is a friend of Emma's.",
    correctAnswer: ["natalie, who is a friend of emma's, is very friendly", "natalie who is a friend of emma's is very friendly"]
  },
  {
    id: 74,
    section: "VII. COMBINE SENTENCES",
    instruction: "Combine sentences.",
    content: "3. We stayed at the Grand Hotel. Ann recommended it to us.",
    correctAnswer: ["we stayed at the grand hotel which ann recommended to us", "we stayed at the grand hotel, which ann recommended to us"]
  },
  {
    id: 75,
    section: "VII. COMBINE SENTENCES",
    instruction: "Combine sentences.",
    content: "4. The trousers are too small. I bought them yesterday.",
    correctAnswer: ["the trousers which i bought yesterday are too small", "the trousers that i bought yesterday are too small"]
  },
  {
    id: 76,
    section: "VII. COMBINE SENTENCES",
    instruction: "Combine sentences.",
    content: "5. John is one of my friends. I've known him for a long time.",
    correctAnswer: ["john, whom i've known for a very long time, is one of my closest friends", "john, who i've known for a very long time, is one of my closest friends"]
  },
  {
    id: 77,
    section: "VII. COMBINE SENTENCES",
    instruction: "Combine sentences.",
    content: "6. The man is a computer expert. You were talking to him.",
    correctAnswer: ["the man to whom you were talking is a computer expert", "the man who you were talking to is a computer expert"]
  },
  {
    id: 78,
    section: "VII. COMBINE SENTENCES",
    instruction: "Combine sentences.",
    content: "7. The stadium will be opened next month. It can hold 90,000 people.",
    correctAnswer: "the new stadium, which can hold 90,000 people, will be opened next month"
  },
  {
    id: 79,
    section: "VII. COMBINE SENTENCES",
    instruction: "Combine sentences.",
    content: "8. Alex plays the guitar well. He is Greg's brother.",
    correctAnswer: "alex, who is greg's brother, plays the guitar well"
  },
  {
    id: 80,
    section: "VII. COMBINE SENTENCES",
    instruction: "Combine sentences.",
    content: "9. This morning I met Diana. I hadn't seen her for ages.",
    correctAnswer: "this morning i met diana, whom i hadn't seen for ages"
  },
  {
    id: 81,
    section: "VII. COMBINE SENTENCES",
    instruction: "Combine sentences.",
    content: "10. The postcard was from Harriet. It came this morning.",
    correctAnswer: "the postcard which came this morning was from harriet"
  },
  {
    id: 82,
    section: "VII. COMBINE SENTENCES",
    instruction: "Combine sentences.",
    content: "11. Tulip computers are very good. They are made in Holland.",
    correctAnswer: "tulip computers, which are made in holland, are very good"
  },
  {
    id: 83,
    section: "VII. COMBINE SENTENCES",
    instruction: "Combine sentences.",
    content: "12. I saw a girl. Her beauty took my breath away.",
    correctAnswer: "i saw a girl whose beauty took my breath away"
  },
  {
    id: 84,
    section: "VII. COMBINE SENTENCES",
    instruction: "Combine sentences.",
    content: "13. The boy is Jane's brother. He sat beside you.",
    correctAnswer: "the boy who sat beside you at the party is jane's brother"
  },
  {
    id: 85,
    section: "VII. COMBINE SENTENCES",
    instruction: "Combine sentences.",
    content: "14. John is absent. His mother's in hospital.",
    correctAnswer: "john, whose mother is in hospital, is absent from school"
  },
  {
    id: 86,
    section: "VII. COMBINE SENTENCES",
    instruction: "Combine sentences.",
    content: "15. Arlene Black never turned up. Guy invited her.",
    correctAnswer: "arlene black, whom guy invited onto his chat show, never turned up"
  },

  // SECTION V: MATCHING/JOINING (87-100) - Simulating as text inputs
  {
    id: 87,
    section: "V. JOIN SENTENCES",
    instruction: "Join the segments using relative clauses.",
    content: "1. I know some people. They could help you.",
    correctAnswer: "i know some people who could help you"
  },
  {
    id: 88,
    section: "V. JOIN SENTENCES",
    instruction: "Join segments.",
    content: "2. We live in Henfield. It has 150 inhabitants.",
    correctAnswer: "we live in a village called henfield which has 150 inhabitants"
  },
  {
    id: 89,
    section: "V. JOIN SENTENCES",
    instruction: "Join segments.",
    content: "3. I want some plates. They can go in the microwave.",
    correctAnswer: "i want some plates that can go in the microwave"
  },
  {
    id: 90,
    section: "V. JOIN SENTENCES",
    instruction: "Join segments.",
    content: "4. Tim told me about his new job. He's enjoyed it.",
    correctAnswer: "tim told me about his new job, which he's enjoyed very much"
  },
  {
    id: 91,
    section: "V. JOIN SENTENCES",
    instruction: "Join segments.",
    content: "5. The police haven't found the man. He stole my car.",
    correctAnswer: "the police haven't found the man who stole my car"
  },
  {
    id: 92,
    section: "V. JOIN SENTENCES",
    instruction: "Join segments.",
    content: "6. I lent her The Old Man and the Sea. It's easy to read.",
    correctAnswer: "i lent her the old man and the sea, which is really easy to read"
  },
  {
    id: 93,
    section: "V. JOIN SENTENCES",
    instruction: "Join segments.",
    content: "7. We've got some light bulbs. They last for years.",
    correctAnswer: "we've got some light bulbs that last for years"
  },
  {
    id: 94,
    section: "V. JOIN SENTENCES",
    instruction: "Join segments.",
    content: "8. This is Peter Taylor. He works with my sister.",
    correctAnswer: "this is peter taylor, who works with my sister sedge"
  },
  {
    id: 95,
    section: "V. JOIN SENTENCES",
    instruction: "Join segments.",
    content: "9. I've had a card from Sally. She used to be my classmate.",
    correctAnswer: "i've had a card from sally, who used to be my classmate"
  },
  {
    id: 96,
    section: "V. JOIN SENTENCES",
    instruction: "Join segments.",
    content: "10. Laura had a box. She kept photos in it.",
    correctAnswer: "laura had a wooden box which she kept her photos in"
  },
  {
    id: 97,
    section: "V. JOIN SENTENCES",
    instruction: "Join segments.",
    content: "11. I don't know the woman. I spoke to her on the phone.",
    correctAnswer: "i don't know the name of the woman whom i spoke to on the phone"
  },
  {
    id: 98,
    section: "VI. NON-DEFINING CLAUSE",
    instruction: "Write sentences using column A, B, C info.",
    content: "1. Nelson Mandela / In prison for 27 years / President of SA",
    correctAnswer: "nelson mandela, who was in prison for 27 years, became president of south africa"
  },
  {
    id: 99,
    section: "VI. NON-DEFINING CLAUSE",
    instruction: "Write sentence.",
    content: "2. John Lennon / Killed in 1980 / One of the Beatles",
    correctAnswer: "john lennon, who was killed in 1980, was one of the beatles"
  },
  {
    id: 100,
    section: "VI. NON-DEFINING CLAUSE",
    instruction: "Write sentence.",
    content: "3. The Titanic / Sank in 1912 / Supposed to be unsinkable",
    correctAnswer: "the titanic, which sank in 1912, was supposed to be unsinkable"
  }
];
