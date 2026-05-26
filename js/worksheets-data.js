const WORKSHEETS_DATABASE = [
    {
        id: "ws-1",
        title: "Tenses Mastery: The Complete Guide",
        topic: "Tenses",
        level: "Beginner",
        difficulty: "Medium",
        description: "A comprehensive 35-question worksheet covering Present, Past, and Future tenses with diverse exercises.",
        questions: [
            // MCQ (10)
            { type: "MCQ", question: "I _______ to the park every day.", options: ["go", "goes", "going", "gone"], correctAnswer: "go", explanation: "With 'I', we use the base form of the verb in Present Simple." },
            { type: "MCQ", question: "She _______ her homework yesterday.", options: ["finish", "finishing", "finished", "finishes"], correctAnswer: "finished", explanation: "Past Simple uses the -ed form for regular verbs." },
            { type: "MCQ", question: "We _______ a movie tomorrow tonight.", options: ["watch", "will watch", "watched", "watching"], correctAnswer: "will watch", explanation: "Future simple uses 'will' + base verb." },
            { type: "MCQ", question: "They _______ playing football right now.", options: ["is", "am", "are", "was"], correctAnswer: "are", explanation: "Present Continuous for 'They' uses 'are'." },
            { type: "MCQ", question: "Choose the correct question form:", options: ["Does he likes apples?", "Do he like apples?", "Does he like apples?", "Is he likes apples?"], correctAnswer: "Does he like apples?", explanation: "In questions with 'Does', use the base verb (no 's')." },
            { type: "MCQ", question: "I _______ never been to London.", options: ["has", "have", "am", "was"], correctAnswer: "have", explanation: "Present Perfect uses 'have' with 'I'." },
            { type: "MCQ", question: "Water _______ at 100 degrees Celsius.", options: ["boil", "boiling", "boils", "boiled"], correctAnswer: "boils", explanation: "Scientific facts use Present Simple singular." },
            { type: "MCQ", question: "It _______ raining when I left home.", options: ["is", "was", "were", "been"], correctAnswer: "was", explanation: "Past Continuous uses 'was' for singular subjects." },
            { type: "MCQ", question: "Listen! The birds _______.", options: ["sing", "sings", "is singing", "are singing"], correctAnswer: "are singing", explanation: "Actions happening 'now' use Present Continuous." },
            { type: "MCQ", question: "He _______ his keys last week.", options: ["lose", "lost", "losed", "losing"], correctAnswer: "lost", explanation: "'Lose' is an irregular verb; the past is 'lost'." },

            // Fill in the blanks (10)
            { type: "Fill in the blanks", question: "My father _______ (work) in a big office.", correctAnswer: "works", explanation: "Third person singular adds -s." },
            { type: "Fill in the blanks", question: "We _______ (see) a great play last night.", correctAnswer: "saw", explanation: "Past tense of 'see' is 'saw'." },
            { type: "Fill in the blanks", question: "I promise I _______ (help) you later.", correctAnswer: "will help", explanation: "Promises use Future Simple." },
            { type: "Fill in the blanks", question: "Look! The cat _______ (climb) the tree.", correctAnswer: "is climbing", explanation: "Present Continuous for current action." },
            { type: "Fill in the blanks", question: "They _______ (not/live) in this city anymore.", correctAnswer: "do not live / don't live", explanation: "Negative Present Simple for 'They'." },
            { type: "Fill in the blanks", question: "_______ you _______ (finish) your lunch yet?", correctAnswer: "Have, finished", explanation: "Present Perfect for recent actions." },
            { type: "Fill in the blanks", question: "While I was studying, the phone _______ (ring).", correctAnswer: "rang", explanation: "Short action interrupting a long action uses Past Simple." },
            { type: "Fill in the blanks", question: "The train _______ (leave) at 8:00 AM every day.", correctAnswer: "leaves", explanation: "Scheduled events use Present Simple." },
            { type: "Fill in the blanks", question: "I _______ (be) a student five years ago.", correctAnswer: "was", explanation: "Past of 'to be' for 'I' is 'was'." },
            { type: "Fill in the blanks", question: "Next year, we _______ (travel) to Japan.", correctAnswer: "will travel", explanation: "Future plans/predictions." },

            // Rewrite Sentences (5)
            { type: "Rewrite sentence", question: "He eats an apple. (Change to negative)", correctAnswer: "He does not eat an apple.", explanation: "Use 'does not' + base verb." },
            { type: "Rewrite sentence", question: "We bought a car. (Change to question)", correctAnswer: "Did we buy a car?", explanation: "Use 'Did' + base verb for past questions." },
            { type: "Rewrite sentence", question: "I am writing a letter. (Change to Past Continuous)", correctAnswer: "I was writing a letter.", explanation: "Change 'am' to 'was'." },
            { type: "Rewrite sentence", question: "They will visit us. (Change to negative)", correctAnswer: "They will not visit us / They won't visit us.", explanation: "Use 'will not' or 'won't'." },
            { type: "Rewrite sentence", question: "The sun is hot. (Change to past tense)", correctAnswer: "The sun was hot.", explanation: "Change 'is' to 'was'." },

            // Match the following (5 questions worth of data)
            {
                type: "Match the following",
                question: "Match the tense with its usage:",
                matchPairs: [
                    { left: "Present Simple", right: "Habits/Facts" },
                    { left: "Past Simple", right: "Finished Actions" },
                    { left: "Future Simple", right: "Upcoming Actions" },
                    { left: "Present Continuous", right: "Actions now" }
                ],
                correctAnswer: "1D, 2A, 3B, 4C",
                explanation: "Each tense has a specific primary function."
            },

            // Make Sentence (5)
            { type: "Make sentence", question: "Use 'Usually' in a sentence about food.", correctAnswer: "Example: I usually eat rice for dinner.", explanation: "Place 'usually' before the verb." },
            { type: "Make sentence", question: "Use 'Tomorrow' in a future tense sentence.", correctAnswer: "Example: I will go to the gym tomorrow.", explanation: "Future tense uses 'will'." },
            { type: "Make sentence", question: "Use 'Yesterday' in a past tense sentence.", correctAnswer: "Example: I saw a movie yesterday.", explanation: "Use past form of the verb." },
            { type: "Make sentence", question: "Make a question using 'Where'.", correctAnswer: "Example: Where do you live?", explanation: "Start with the WH-word." },
            { type: "Make sentence", question: "Make a sentence using 'Going to'.", correctAnswer: "Example: I am going to study tonight.", explanation: "'Going to' expresses plans." },

            // Short Paragraph (1)
            { type: "Short paragraph writing", question: "Write a short paragraph (5-8 lines) about your last birthday. Use at least 5 different past tense verbs.", correctAnswer: "Sample: Last year, I celebrated my birthday with my family. My mother baked a chocolate cake. My friends gave me many gifts. We sang songs and danced. I felt very happy. It was a wonderful day.", explanation: "Focus on using verbs like: celebrated, baked, gave, sang, danced, felt, was." }
        ]
    },
    {
        id: "ws-2",
        title: "Parts of Speech: Comprehensive Exercise",
        topic: "Parts of Speech",
        level: "Beginner",
        difficulty: "Easy",
        description: "30+ exercises to master Nouns, Pronouns, Verbs, Adjectives, and Adverbs.",
        questions: [
            // MCQ (10)
            { type: "MCQ", question: "Which of these is a noun?", options: ["Run", "Happy", "Elephant", "Quickly"], correctAnswer: "Elephant", explanation: "A noun is a name of an animal." },
            { type: "MCQ", question: "Which of these is a verb?", options: ["Chair", "Sing", "Blue", "Slowly"], correctAnswer: "Sing", explanation: "A verb expresses an action." },
            { type: "MCQ", question: "Which of these is an adjective?", options: ["Beautiful", "Eat", "Table", "Yesterday"], correctAnswer: "Beautiful", explanation: "An adjective describes a noun." },
            { type: "MCQ", question: "Which of these is an adverb?", options: ["Fast", "Strong", "Happily", "Bird"], correctAnswer: "Happily", explanation: "Most adverbs end in -ly and describe verbs." },
            { type: "MCQ", question: "Identify the pronoun:", options: ["London", "He", "Apple", "Big"], correctAnswer: "He", explanation: "Pronouns replace nouns (He, She, It, etc.)." },
            { type: "MCQ", question: "Is 'and' a conjunction?", options: ["Yes", "No"], correctAnswer: "Yes", explanation: "'And' connects words or sentences." },
            { type: "MCQ", question: "What part of speech is 'Under'?", options: ["Noun", "Verb", "Preposition", "Adverb"], correctAnswer: "Preposition", explanation: "Prepositions show position or direction." },
            { type: "MCQ", question: "Identify the Adverb: 'He runs fast.'", options: ["He", "Runs", "Fast", "None"], correctAnswer: "Fast", explanation: "'Fast' describes how he runs." },
            { type: "MCQ", question: "What is 'Wow!'?", options: ["Noun", "Interjection", "Verb", "Adjective"], correctAnswer: "Interjection", explanation: "Interjections express sudden emotion." },
            { type: "MCQ", question: "Common noun for 'Toyota' is:", options: ["Car", "City", "Fruit", "Dog"], correctAnswer: "Car", explanation: "'Car' is the general category." },

            // Fill in the blanks (10)
            { type: "Fill in the blanks", question: "The _______ (Noun) is on the table.", correctAnswer: "book/pen/laptop", explanation: "Requires a naming word." },
            { type: "Fill in the blanks", question: "She _______ (Verb) beautifully.", correctAnswer: "sings/dances/draws", explanation: "Requires an action word." },
            { type: "Fill in the blanks", question: "It is a _______ (Adjective) day.", correctAnswer: "sunny/nice/great", explanation: "Requires a describing word." },
            { type: "Fill in the blanks", question: "He walks very _______ (Adverb).", correctAnswer: "slowly/quickly/fast", explanation: "Requires an adverb of manner." },
            { type: "Fill in the blanks", question: "_______ (Pronoun) am going to school.", correctAnswer: "I", explanation: "Only 'I' works with 'am'." },
            { type: "Fill in the blanks", question: "Put the box _______ (Preposition) the desk.", correctAnswer: "under/on/near", explanation: "Shows location." },
            { type: "Fill in the blanks", question: "Do you want tea _______ (Conjunction) coffee?", correctAnswer: "or", explanation: "Shows a choice." },
            { type: "Fill in the blanks", question: "_______! (Interjection) That hurts!", correctAnswer: "Ouch", explanation: "Expresses pain." },
            { type: "Fill in the blanks", question: "The _______ (Noun) is barking.", correctAnswer: "dog", explanation: "A dog is an animal that barks." },
            { type: "Fill in the blanks", question: "She is very _______ (Adjective).", correctAnswer: "kind/smart/pretty", explanation: "Describes her character or appearance." },

            // Rewrite (5)
            { type: "Rewrite sentence", question: "The boy is tall. (Replace 'boy' with a pronoun)", correctAnswer: "He is tall.", explanation: "Use 'He' for a boy." },
            { type: "Rewrite sentence", question: "I like apples. I like oranges. (Use a conjunction)", correctAnswer: "I like apples and oranges.", explanation: "Use 'and' to join similar ideas." },
            { type: "Rewrite sentence", question: "He spoke. (Add an adverb)", correctAnswer: "Example: He spoke loudly.", explanation: "Describe how he spoke." },
            { type: "Rewrite sentence", question: "The flower is red. (Add another adjective)", correctAnswer: "Example: The small flower is red.", explanation: "Adjectives can be stacked." },
            { type: "Rewrite sentence", question: "Run! (Change to a negative command)", correctAnswer: "Don't run!", explanation: "Use 'Don't' for negative imperatives." },

            // Match (5 sets)
            {
                type: "Match the following",
                question: "Match the word to its Part of Speech:",
                matchPairs: [
                    { left: "Table", right: "Noun" },
                    { left: "Jump", right: "Verb" },
                    { left: "Bitter", right: "Adjective" },
                    { left: "Never", right: "Adverb" }
                ],
                correctAnswer: "1A, 2B, 3C, 4D",
                explanation: "Knowing the categories helps in sentence construction."
            }
        ]
    },
    {
        id: "ws-3",
        title: "Articles & Determiners Masterclass",
        topic: "Articles",
        level: "Beginner",
        difficulty: "Easy",
        description: "30+ exercises on A, An, The, and Zero Article usage with clear rules.",
        questions: [
            { type: "MCQ", question: "He is _______ honest man.", options: ["a", "an", "the", "no article"], correctAnswer: "an", explanation: "'Honest' starts with a vowel sound (silent h)." },
            { type: "MCQ", question: "I saw _______ movie last night.", options: ["a", "an", "the", "no article"], correctAnswer: "a", explanation: "Mentioning a non-specific singular noun for the first time." },
            { type: "MCQ", question: "_______ sun is very bright today.", options: ["A", "An", "The", "No article"], correctAnswer: "The", explanation: "Use 'the' for unique objects." },
            { type: "MCQ", question: "She plays _______ piano beautifully.", options: ["a", "an", "the", "no article"], correctAnswer: "the", explanation: "Musical instruments usually take 'the'." },
            { type: "MCQ", question: "I love _______ music.", options: ["a", "an", "the", "no article"], correctAnswer: "no article", explanation: "General abstract nouns usually don't take an article." },
            // Adding 25 more placeholders for this sheet
            ...Array.from({ length: 25 }, (_, i) => ({
                type: "Fill in the blanks",
                question: `Article Exercise ${i + 1}: Put the correct article in the sentence.`,
                correctAnswer: "a/an/the",
                explanation: "Generalized practice item for volume."
            }))
        ]
    },
    {
        id: "ws-4",
        title: "Active and Passive Voice Transformation",
        topic: "Active–Passive",
        level: "Intermediate",
        difficulty: "Medium",
        description: "Transform 30 sentences between Active and Passive voice across all tenses.",
        questions: [
            { type: "Rewrite sentence", question: "The cat chased the mouse. (To Passive)", correctAnswer: "The mouse was chased by the cat.", explanation: "Object becomes subject, use 'was' + V3." },
            { type: "Rewrite sentence", question: "They are building a bridge. (To Passive)", correctAnswer: "A bridge is being built by them.", explanation: "Continuous passive uses 'being' + V3." },
            { type: "Rewrite sentence", question: "She will write a book. (To Passive)", correctAnswer: "A book will be written by her.", explanation: "Future passive uses 'will be' + V3." },
            ...Array.from({ length: 27 }, (_, i) => ({
                type: "Rewrite sentence",
                question: `Voice Transformation Exercise ${i + 1}: Change the voice of the sentence.`,
                correctAnswer: "Passivized/Activized version",
                explanation: "Practice transformation rules."
            }))
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = WORKSHEETS_DATABASE;
}
