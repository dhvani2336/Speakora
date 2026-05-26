const GRAMMAR_QUESTIONS = {
    "Alphabet & Pronunciation": [
        {
            "type": "mcq",
            "question": "How many letters are in the English alphabet?",
            "options": [
                "24",
                "26",
                "28",
                "30"
            ],
            "answer": "26"
        },
        {
            "type": "mcq",
            "question": "Which of these is a vowel?",
            "options": [
                "B",
                "C",
                "E",
                "F"
            ],
            "answer": "E"
        },
        {
            "type": "tf",
            "question": "The letter 'K' in 'Knife' is silent.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "There are ___ consonants in English.",
            "answer": "21"
        },
        {
            "type": "oneword",
            "question": "What is the sound of 'C' in 'City'?",
            "answer": "s"
        },
        {
            "type": "mcq",
            "question": "Identify the silent letter in 'Write'.",
            "options": [
                "r",
                "i",
                "t",
                "w"
            ],
            "answer": "w"
        },
        {
            "type": "tf",
            "question": "Every English word must have at least one vowel sound.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "In the word 'Cake', the final 'E' is ___.",
            "answer": "silent"
        },
        {
            "type": "oneword",
            "question": "What is the silent letter in 'Debt'?",
            "answer": "b"
        },
        {
            "type": "mcq",
            "question": "Which word has a long vowel sound?",
            "options": [
                "Cat",
                "Cake",
                "Bit",
                "Dot"
            ],
            "answer": "Cake"
        },
        {
            "type": "fib",
            "question": "'Psychology' starts with the sound of letter ___.",
            "answer": "s"
        },
        {
            "type": "tf",
            "question": "The letter 'G' sounds like 'j' before E, I, or Y.",
            "answer": "True"
        },
        {
            "type": "mcq",
            "question": "Which of these is NOT a vowel?",
            "options": [
                "A",
                "E",
                "O",
                "Y"
            ],
            "answer": "Y"
        },
        {
            "type": "oneword",
            "question": "What is the silent letter in 'Talk'?",
            "answer": "l"
        },
        {
            "type": "fib",
            "question": "Two vowels making one sound are called a ___.",
            "answer": "digraph"
        }
    ],
    "Noun": [
        {
            "type": "mcq",
            "question": "Which of these is a proper noun?",
            "options": [
                "city",
                "India",
                "country",
                "boy"
            ],
            "answer": "India"
        },
        {
            "type": "mcq",
            "question": "Identify the collective noun: 'A flock of birds flew away.'",
            "options": [
                "birds",
                "flock",
                "flew",
                "away"
            ],
            "answer": "flock"
        },
        {
            "type": "tf",
            "question": "Abstract nouns can be touched physically.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "The plural of 'Child' is ___.",
            "answer": "children"
        },
        {
            "type": "oneword",
            "question": "What type of noun is 'Honesty'?",
            "answer": "Abstract"
        },
        {
            "type": "mcq",
            "question": "Which of these is an uncountable noun?",
            "options": [
                "Pen",
                "Book",
                "Milk",
                "Car"
            ],
            "answer": "Milk"
        },
        {
            "type": "tf",
            "question": "Proper nouns always start with a capital letter.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "The plural of 'Leaf' is ___.",
            "answer": "leaves"
        },
        {
            "type": "oneword",
            "question": "What gender is the noun 'King'?",
            "answer": "Masculine"
        },
        {
            "type": "mcq",
            "question": "Identify the material noun.",
            "options": [
                "Water",
                "Love",
                "Crowd",
                "Rahul"
            ],
            "answer": "Water"
        },
        {
            "type": "fib",
            "question": "The plural of 'Mouse' is ___.",
            "answer": "mice"
        },
        {
            "type": "tf",
            "question": "'Furniture' is a countable noun.",
            "answer": "False"
        },
        {
            "type": "mcq",
            "question": "Which of these is a common noun?",
            "options": [
                "Delhi",
                "Rahul",
                "City",
                "Taj Mahal"
            ],
            "answer": "City"
        },
        {
            "type": "oneword",
            "question": "What suffix is usually added to make 'Box' plural?",
            "answer": "es"
        },
        {
            "type": "fib",
            "question": "A noun phrase like 'a beautiful girl' consists of a noun and an ___.",
            "answer": "adjective"
        },
        {
            "type": "mcq",
            "question": "What is the feminine of 'Lion'?",
            "options": [
                "Lion",
                "Lioness",
                "Lions",
                "Lioning"
            ],
            "answer": "Lioness"
        },
        {
            "type": "tf",
            "question": "Collective nouns can be singular or plural depending on usage.",
            "answer": "True"
        },
        {
            "type": "oneword",
            "question": "What is the plural of 'Life'?",
            "answer": "lives"
        },
        {
            "type": "mcq",
            "question": "Which of these is an abstract noun?",
            "options": [
                "Bottle",
                "Happiness",
                "Phone",
                "Rahul"
            ],
            "answer": "Happiness"
        },
        {
            "type": "fib",
            "question": "A ___ of sheep was grazing in the field.",
            "answer": "flock"
        },
        {
            "type": "tf",
            "question": "'Gold' is a material noun.",
            "answer": "True"
        },
        {
            "type": "oneword",
            "question": "What is the plural of 'Knife'?",
            "answer": "knives"
        },
        {
            "type": "mcq",
            "question": "Identify the countable noun.",
            "options": [
                "Rice",
                "Oil",
                "Apple",
                "Information"
            ],
            "answer": "Apple"
        },
        {
            "type": "fib",
            "question": "The feminine of 'Sir' is ___.",
            "answer": "Madam"
        },
        {
            "type": "tf",
            "question": "'Water' has a plural form 'Waters' in standard usage for counting bottles.",
            "answer": "False"
        },
        {
            "type": "oneword",
            "question": "What is the plural of 'Foot'?",
            "answer": "feet"
        },
        {
            "type": "mcq",
            "question": "Which word is a common noun?",
            "options": [
                "Monday",
                "Holiday",
                "January",
                "India"
            ],
            "answer": "Holiday"
        },
        {
            "type": "fib",
            "question": "Abstract nouns often end in suffixes like -ness, -tion, or -___.",
            "answer": "ship"
        },
        {
            "type": "tf",
            "question": "'Class' is a collective noun.",
            "answer": "True"
        },
        {
            "type": "oneword",
            "question": "What is the plural of 'Goose'?",
            "answer": "geese"
        },
        {
            "type": "mcq",
            "question": "Identify the proper noun: 'Last week I visited the Eiffel Tower.'",
            "options": [
                "week",
                "visited",
                "Eiffel Tower",
                "last"
            ],
            "answer": "Eiffel Tower"
        },
        {
            "type": "fib",
            "question": "The plural of 'Potato' is ___.",
            "answer": "potatoes"
        },
        {
            "type": "tf",
            "question": "'Team' is always treated as a singular noun.",
            "answer": "False"
        },
        {
            "type": "oneword",
            "question": "What is the collective noun for a group of soldiers?",
            "answer": "Army"
        },
        {
            "type": "mcq",
            "question": "Which is a concrete noun?",
            "options": [
                "Bravery",
                "Teacher",
                "Kindness",
                "Fear"
            ],
            "answer": "Teacher"
        },
        {
            "type": "fib",
            "question": "The plural of 'Woman' is ___.",
            "answer": "women"
        },
        {
            "type": "tf",
            "question": "Proper nouns like 'The Sun' are unique.",
            "answer": "True"
        }
    ],
    "Pronoun": [
        {
            "type": "mcq",
            "question": "Which is a subjective pronoun?",
            "options": [
                "Me",
                "Him",
                "They",
                "Us"
            ],
            "answer": "They"
        },
        {
            "type": "tf",
            "question": "A pronoun replaces a noun.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "___ am going to school.",
            "answer": "I"
        },
        {
            "type": "oneword",
            "question": "What is the possessive pronoun for 'He'?",
            "answer": "His"
        },
        {
            "type": "mcq",
            "question": "Replace 'The students': '___ are studying.'",
            "options": [
                "He",
                "She",
                "They",
                "It"
            ],
            "answer": "They"
        },
        {
            "type": "fib",
            "question": "Give the book to ___ (I/me).",
            "answer": "me"
        },
        {
            "type": "tf",
            "question": "'This' is a demonstrative pronoun.",
            "answer": "True"
        },
        {
            "type": "mcq",
            "question": "Which is a reflexive pronoun?",
            "options": [
                "My",
                "Mine",
                "Myself",
                "Me"
            ],
            "answer": "Myself"
        },
        {
            "type": "mcq",
            "question": "Which pronoun is objective?",
            "options": [
                "Him",
                "He",
                "They",
                "She"
            ],
            "answer": "Him"
        },
        {
            "type": "tf",
            "question": "'Whose' is an interrogative pronoun.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "This belongs to us. It is ___.",
            "answer": "ours"
        },
        {
            "type": "oneword",
            "question": "What is the plural of 'I'?",
            "answer": "We"
        },
        {
            "type": "mcq",
            "question": "Choose the indefinite pronoun.",
            "options": [
                "Someone",
                "He",
                "They",
                "It"
            ],
            "answer": "Someone"
        },
        {
            "type": "tf",
            "question": "'Which' can be used as a relative pronoun.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "The dog wagged ___ tail.",
            "answer": "its"
        }
    ],
    "Verb": [
        {
            "type": "mcq",
            "question": "Identify the verb: 'She walks to work.'",
            "options": [
                "She",
                "walks",
                "to",
                "work"
            ],
            "answer": "walks"
        },
        {
            "type": "fib",
            "question": "The V3 (Past Participle) of 'Go' is ___.",
            "answer": "gone"
        },
        {
            "type": "tf",
            "question": "A sentence can be complete without a verb.",
            "answer": "False"
        },
        {
            "type": "oneword",
            "question": "What is the V2 of 'Eat'?",
            "answer": "ate"
        },
        {
            "type": "mcq",
            "question": "Which of these is an auxiliary (helping) verb?",
            "options": [
                "Run",
                "Is",
                "Jump",
                "Speak"
            ],
            "answer": "Is"
        },
        {
            "type": "fib",
            "question": "Subject-Verb Agreement: He ___ (run/runs) fast.",
            "answer": "runs"
        },
        {
            "type": "oneword",
            "question": "What is the V5 (ing) form of 'Play'?",
            "answer": "playing"
        },
        {
            "type": "mcq",
            "question": "Identify the irregular verb.",
            "options": [
                "Walked",
                "Worked",
                "Went",
                "Talked"
            ],
            "answer": "Went"
        },
        {
            "type": "fib",
            "question": "The V4 (s/es) form of 'Carry' is ___.",
            "answer": "carries"
        },
        {
            "type": "tf",
            "question": "'Being' verbs like is, am, are are also verbs.",
            "answer": "True"
        },
        {
            "type": "oneword",
            "question": "What is the V3 of 'Write'?",
            "answer": "written"
        },
        {
            "type": "mcq",
            "question": "Which verb is in the V5 (ing) form?",
            "options": [
                "Helping",
                "Helped",
                "Help",
                "Helps"
            ],
            "answer": "Helping"
        },
        {
            "type": "fib",
            "question": "The V2 of 'Speak' is ___.",
            "answer": "spoke"
        },
        {
            "type": "tf",
            "question": "Irregular verbs follow the '-ed' rule for V2 and V3.",
            "answer": "False"
        },
        {
            "type": "oneword",
            "question": "What is the V4 form of 'Go'?",
            "answer": "goes"
        },
        {
            "type": "mcq",
            "question": "Choose the correct V3 for 'Break'.",
            "options": [
                "Breaked",
                "Broke",
                "Broken",
                "Breaking"
            ],
            "answer": "Broken"
        },
        {
            "type": "fib",
            "question": "Transitive verbs need an ___ to complete their meaning.",
            "answer": "object"
        },
        {
            "type": "tf",
            "question": "'Run' is an action verb.",
            "answer": "True"
        },
        {
            "type": "oneword",
            "question": "What is the past tense (V2) of 'Run'?",
            "answer": "ran"
        },
        {
            "type": "mcq",
            "question": "Identify the state verb.",
            "options": [
                "Jump",
                "Believe",
                "Run",
                "Sing"
            ],
            "answer": "Believe"
        },
        {
            "type": "fib",
            "question": "The V3 of 'Do' is ___.",
            "answer": "done"
        },
        {
            "type": "tf",
            "question": "Modal verbs are a type of helping verb.",
            "answer": "True"
        },
        {
            "type": "oneword",
            "question": "What is the V5 form of 'Study'?",
            "answer": "studying"
        },
        {
            "type": "mcq",
            "question": "Which is the V4 form of 'Watch'?",
            "options": [
                "Watch",
                "Watched",
                "Watches",
                "Watching"
            ],
            "answer": "Watches"
        },
        {
            "type": "fib",
            "question": "The V3 of 'See' is ___.",
            "answer": "seen"
        },
        {
            "type": "tf",
            "question": "Intransitive verbs do not need an object.",
            "answer": "True"
        },
        {
            "type": "oneword",
            "question": "What is the V2 of 'Take'?",
            "answer": "took"
        },
        {
            "type": "mcq",
            "question": "Identify the helping verb in: 'I am reading.'",
            "options": [
                "I",
                "am",
                "reading",
                "."
            ],
            "answer": "am"
        },
        {
            "type": "fib",
            "question": "The V4 form of 'Catch' is ___.",
            "answer": "catches"
        },
        {
            "type": "tf",
            "question": "'Will' is a main verb.",
            "answer": "False"
        }
    ],
    "Tenses (MOST IMPORTANT)": [
        {
            "type": "mcq",
            "question": "Which tense shows an action happening right now?",
            "options": [
                "Simple Present",
                "Present Continuous",
                "Simple Past",
                "Present Perfect"
            ],
            "answer": "Present Continuous"
        },
        {
            "type": "fib",
            "question": "Future Simple formula: Subject + ___ + V1.",
            "answer": "will"
        },
        {
            "type": "tf",
            "question": "Present Perfect uses 'has/have + V3'.",
            "answer": "True"
        },
        {
            "type": "mcq",
            "question": "Identify the tense: 'I had finished my work.'",
            "options": [
                "Past Perfect",
                "Past Simple",
                "Present Perfect",
                "Past Continuous"
            ],
            "answer": "Past Perfect"
        },
        {
            "type": "oneword",
            "question": "Which helping verb is used in Present Continuous?",
            "answer": "is"
        },
        {
            "type": "mcq",
            "question": "Which tense is used for habitual actions?",
            "options": [
                "Present Simple",
                "Present Perfect",
                "Past Continuous",
                "Future Continuous"
            ],
            "answer": "Present Simple"
        },
        {
            "type": "fib",
            "question": "In Present Continuous, we use V1 + ___.",
            "answer": "ing"
        },
        {
            "type": "tf",
            "question": "Simple Past generally uses V2 form of the verb.",
            "answer": "True"
        },
        {
            "type": "oneword",
            "question": "What is the helping verb for Future Continuous?",
            "answer": "will be"
        },
        {
            "type": "mcq",
            "question": "Identify the tense: 'She will have gone.'",
            "options": [
                "Future Perfect",
                "Future Continuous",
                "Future Simple",
                "Present Perfect"
            ],
            "answer": "Future Perfect"
        },
        {
            "type": "fib",
            "question": "Past Continuous formula: Subject + was/were + ___.",
            "answer": "V5"
        },
        {
            "type": "tf",
            "question": "'I am going' is an example of Present Perfect.",
            "answer": "False"
        },
        {
            "type": "oneword",
            "question": "Which tense uses 'has been / have been'?",
            "answer": "Present Perfect Continuous"
        },
        {
            "type": "mcq",
            "question": "Which tense shows an action completed in the past?",
            "options": [
                "Present Simple",
                "Past Simple",
                "Future Simple",
                "Present Continuous"
            ],
            "answer": "Past Simple"
        },
        {
            "type": "fib",
            "question": "The negative of 'I go' in Simple Present is 'I ___ go'.",
            "answer": "do not"
        },
        {
            "type": "tf",
            "question": "Past Perfect Continuous uses 'had been + V5'.",
            "answer": "True"
        },
        {
            "type": "mcq",
            "question": "Identify the tense: 'They are playing football.'",
            "options": [
                "Present Continuous",
                "Past Continuous",
                "Future Continuous",
                "Present Simple"
            ],
            "answer": "Present Continuous"
        },
        {
            "type": "oneword",
            "question": "What helping verb is used in Past Perfect?",
            "answer": "had"
        },
        {
            "type": "fib",
            "question": "Present Perfect Continuous: Subject + has/have + ___ + V5.",
            "answer": "been"
        },
        {
            "type": "tf",
            "question": "Simple Future expresses an action that will happen later.",
            "answer": "True"
        },
        {
            "type": "mcq",
            "question": "Which tense uses 'was/were'?",
            "options": [
                "Past Continuous",
                "Present Continuous",
                "Future Continuous",
                "Past Simple"
            ],
            "answer": "Past Continuous"
        },
        {
            "type": "oneword",
            "question": "What form of verb is used in all Continuous tenses?",
            "answer": "ing"
        },
        {
            "type": "mcq",
            "question": "Which tense uses 'did' for questions?",
            "options": [
                "Simple Past",
                "Simple Present",
                "Past Perfect",
                "Simple Future"
            ],
            "answer": "Simple Past"
        },
        {
            "type": "fib",
            "question": "Present Perfect formula: Subject + ___ + V3.",
            "answer": "has/have"
        },
        {
            "type": "tf",
            "question": "Future Perfect Continuous uses 'will have been + V5'.",
            "answer": "True"
        },
        {
            "type": "oneword",
            "question": "Which helping verb is used with 'He' in Present Simple?",
            "answer": "does"
        },
        {
            "type": "mcq",
            "question": "Identify the tense: 'I will be working tomorrow.'",
            "options": [
                "Future Continuous",
                "Future Simple",
                "Future Perfect",
                "Present Continuous"
            ],
            "answer": "Future Continuous"
        },
        {
            "type": "fib",
            "question": "Past Perfect: Subject + ___ + V3.",
            "answer": "had"
        },
        {
            "type": "tf",
            "question": "Continuous tenses always show a state of being.",
            "answer": "False"
        }
    ],
    "Parts of Speech": [
        {
            "type": "mcq",
            "question": "How many parts of speech are there in English?",
            "options": [
                "6",
                "7",
                "8",
                "9"
            ],
            "answer": "8"
        },
        {
            "type": "mcq",
            "question": "Which part of speech describes a noun?",
            "options": [
                "Verb",
                "Adverb",
                "Adjective",
                "Preposition"
            ],
            "answer": "Adjective"
        },
        {
            "type": "fib",
            "question": "A ___ is an action word.",
            "answer": "verb"
        },
        {
            "type": "mcq",
            "question": "Which part of speech connects words or phrases?",
            "options": [
                "Conjunction",
                "Preposition",
                "Verb",
                "Noun"
            ],
            "answer": "Conjunction"
        },
        {
            "type": "tf",
            "question": "A pronoun is used in place of a verb.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "'Wow!' is an example of an ___.",
            "answer": "interjection"
        },
        {
            "type": "oneword",
            "question": "What part of speech is 'quickly'?",
            "answer": "Adverb"
        },
        {
            "type": "mcq",
            "question": "In the sentence 'She sings beautifully', what is 'sings'?",
            "options": [
                "Verb",
                "Adverb",
                "Noun",
                "Adjective"
            ],
            "answer": "Verb"
        },
        {
            "type": "tf",
            "question": "An adjective often modifies an adverb.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "A preposition shows the ___ of a noun in relation to another word.",
            "answer": "relationship"
        },
        {
            "type": "oneword",
            "question": "What part of speech is 'and'?",
            "answer": "Conjunction"
        },
        {
            "type": "mcq",
            "question": "'Under' is an example of a:",
            "options": [
                "Preposition",
                "Noun",
                "Verb",
                "Adverb"
            ],
            "answer": "Preposition"
        },
        {
            "type": "tf",
            "question": "Every sentence must have a noun or pronoun acting as a subject.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "Words like 'he', 'she', and 'it' are ___.",
            "answer": "pronouns"
        },
        {
            "type": "oneword",
            "question": "What part of speech names a person, place, or thing?",
            "answer": "Noun"
        }
    ],
    "Adjective": [
        {
            "type": "mcq",
            "question": "Identify the adjective: The quick brown fox jumps.",
            "options": [
                "quick",
                "The",
                "fox",
                "jumps"
            ],
            "answer": "quick"
        },
        {
            "type": "tf",
            "question": "Adjectives usually come before the noun they describe.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "The comparative form of 'Big' is ___.",
            "answer": "bigger"
        },
        {
            "type": "mcq",
            "question": "Which word is a superlative adjective?",
            "options": [
                "Tall",
                "Taller",
                "Tallest",
                "More tall"
            ],
            "answer": "Tallest"
        },
        {
            "type": "tf",
            "question": "Demonstrative adjectives include this, that, these, and those.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "She has a ___ (beauty) dress.",
            "answer": "beautiful"
        },
        {
            "type": "oneword",
            "question": "What is the comparative form of 'small'?",
            "answer": "smaller"
        },
        {
            "type": "mcq",
            "question": "Identify the adjective in 'The quiet room':",
            "options": [
                "The",
                "quiet",
                "room",
                "None"
            ],
            "answer": "quiet"
        },
        {
            "type": "tf",
            "question": "Adjectives cannot modify pronouns.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "He is the ___ (smart) boy in the class.",
            "answer": "smartest"
        },
        {
            "type": "oneword",
            "question": "What type of adjective is 'Indian' in 'Indian food'?",
            "answer": "Proper"
        },
        {
            "type": "mcq",
            "question": "Which of these is a possessive adjective?",
            "options": [
                "Mine",
                "My",
                "Me",
                "I"
            ],
            "answer": "My"
        },
        {
            "type": "tf",
            "question": "The word 'some' can be an adjective.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "It was a very ___ (interest) movie.",
            "answer": "interesting"
        },
        {
            "type": "oneword",
            "question": "Give the superlative of 'bad'",
            "answer": "worst"
        }
    ],
    "Adverb": [
        {
            "type": "mcq",
            "question": "Which word is an adverb?",
            "options": [
                "Quick",
                "Quickly",
                "Quicker",
                "Quiet"
            ],
            "answer": "Quickly"
        },
        {
            "type": "tf",
            "question": "An adverb answers questions like How, When, or Where.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "She sang ___ (beautiful / beautifully).",
            "answer": "beautifully"
        },
        {
            "type": "mcq",
            "question": "Identify the adverb of time:",
            "options": [
                "Here",
                "Now",
                "Slowly",
                "Very"
            ],
            "answer": "Now"
        },
        {
            "type": "tf",
            "question": "Adverbs can modify adjectives.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "He runs ___ (fast/fastly).",
            "answer": "fast"
        },
        {
            "type": "oneword",
            "question": "What adverb of frequency means 'at all times'?",
            "answer": "always"
        },
        {
            "type": "mcq",
            "question": "Which word is an adverb of place?",
            "options": [
                "Outside",
                "Tomorrow",
                "Quickly",
                "Often"
            ],
            "answer": "Outside"
        },
        {
            "type": "tf",
            "question": "'Often' is an adverb of manner.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "The child cried ___ (loud).",
            "answer": "loudly"
        },
        {
            "type": "oneword",
            "question": "What adverb is the opposite of 'never'?",
            "answer": "always"
        },
        {
            "type": "mcq",
            "question": "In 'She is very smart', 'very' is:",
            "options": [
                "Adverb",
                "Adjective",
                "Verb",
                "Noun"
            ],
            "answer": "Adverb"
        },
        {
            "type": "tf",
            "question": "All adverbs end in -ly.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "He will arrive ___ (soon/sooner).",
            "answer": "soon"
        },
        {
            "type": "oneword",
            "question": "What is the adverb form of 'good'?",
            "answer": "well"
        }
    ],
    "Preposition": [
        {
            "type": "mcq",
            "question": "Which is a preposition?",
            "options": [
                "And",
                "Under",
                "Quickly",
                "Because"
            ],
            "answer": "Under"
        },
        {
            "type": "tf",
            "question": "Prepositions show relationship between a noun and another word.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "The cat is hiding ___ the table.",
            "answer": "under"
        },
        {
            "type": "mcq",
            "question": "Which preposition indicates direction?",
            "options": [
                "Towards",
                "At",
                "In",
                "On"
            ],
            "answer": "Towards"
        },
        {
            "type": "tf",
            "question": "We use 'in' for expressions of time like 'in the morning'.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "I will meet you ___ Monday.",
            "answer": "on"
        },
        {
            "type": "oneword",
            "question": "What preposition is used with 'look' to mean 'search'?",
            "answer": "for"
        },
        {
            "type": "mcq",
            "question": "Choose the correct preposition: He jumped ___ the pool.",
            "options": [
                "into",
                "in",
                "on",
                "to"
            ],
            "answer": "into"
        },
        {
            "type": "tf",
            "question": "A preposition usually comes before a noun or pronoun.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "The book is right ___ you. (behind/after)",
            "answer": "behind"
        },
        {
            "type": "oneword",
            "question": "What preposition follows 'depend'?",
            "answer": "on"
        },
        {
            "type": "mcq",
            "question": "Which sentence is correct?",
            "options": [
                "I look at you",
                "I look to you"
            ],
            "answer": "I look at you"
        },
        {
            "type": "tf",
            "question": "'During' is not a preposition.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "Keep the phone ___ the drawer.",
            "answer": "in"
        },
        {
            "type": "oneword",
            "question": "Which preposition is used for precise time limits, eg '___ 5 PM'?",
            "answer": "at"
        }
    ],
    "Conjunction": [
        {
            "type": "mcq",
            "question": "Identify the conjunction.",
            "options": [
                "But",
                "Run",
                "Slowly",
                "Table"
            ],
            "answer": "But"
        },
        {
            "type": "tf",
            "question": "Conjunctions are used to connect words or phrases.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "I like tea ___ coffee.",
            "answer": "and"
        },
        {
            "type": "mcq",
            "question": "Which conjunction is correlative?",
            "options": [
                "Either...or",
                "And",
                "Because",
                "So"
            ],
            "answer": "Either...or"
        },
        {
            "type": "tf",
            "question": "'Although' is a coordinating conjunction.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "He was sick, ___ he went to work.",
            "answer": "yet"
        },
        {
            "type": "oneword",
            "question": "What conjunction joins alternatives?",
            "answer": "or"
        },
        {
            "type": "mcq",
            "question": "Which conjunction is a subordinating conjunction?",
            "options": [
                "But",
                "Unless",
                "Or",
                "Nor"
            ],
            "answer": "Unless"
        },
        {
            "type": "tf",
            "question": "Conjunctions link clauses together.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "I will wait ___ you finish.",
            "answer": "until"
        },
        {
            "type": "oneword",
            "question": "What conjunction is used with 'Neither'?",
            "answer": "nor"
        },
        {
            "type": "mcq",
            "question": "We stayed inside ___ it was raining.",
            "options": [
                "because",
                "so",
                "but",
                "and"
            ],
            "answer": "because"
        },
        {
            "type": "tf",
            "question": "FANBOYS helps remember subordinating conjunctions.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "___ she is poor, she is honest.",
            "answer": "Although"
        },
        {
            "type": "oneword",
            "question": "What conjunction shows a result?",
            "answer": "so"
        }
    ],
    "Interjection": [
        {
            "type": "mcq",
            "question": "Which expresses sudden emotion?",
            "options": [
                "Noun",
                "Adverb",
                "Interjection",
                "Verb"
            ],
            "answer": "Interjection"
        },
        {
            "type": "tf",
            "question": "Interjections are often followed by an exclamation mark.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "___! That hurts.",
            "answer": "Ouch"
        },
        {
            "type": "mcq",
            "question": "Which expresses disgust?",
            "options": [
                "Yuck",
                "Yay",
                "Oops",
                "Wow"
            ],
            "answer": "Yuck"
        },
        {
            "type": "tf",
            "question": "Interjections are grammatically tied to the rest of the sentence.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "___! I won the match.",
            "answer": "Hurray"
        },
        {
            "type": "oneword",
            "question": "What interjection is used for sudden pain?",
            "answer": "Ouch"
        },
        {
            "type": "mcq",
            "question": "Which expresses a mistake?",
            "options": [
                "Oops",
                "Alas",
                "Hurray",
                "Bravo"
            ],
            "answer": "Oops"
        },
        {
            "type": "tf",
            "question": "Interjections can stand alone as a sentence.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "___! The baby is sleeping.",
            "answer": "Shh"
        },
        {
            "type": "oneword",
            "question": "What interjection expresses grief?",
            "answer": "Alas"
        },
        {
            "type": "mcq",
            "question": "Which interjection is for realization?",
            "options": [
                "Aha",
                "Eww",
                "Yay",
                "Phew"
            ],
            "answer": "Aha"
        },
        {
            "type": "tf",
            "question": "Interjections are commonly used in academic writing.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "___! That was a close call.",
            "answer": "Phew"
        },
        {
            "type": "oneword",
            "question": "What interjection is used to congratulate or praise?",
            "answer": "Bravo"
        }
    ],
    "Articles (a, an, the)": [
        {
            "type": "mcq",
            "question": "Which article is used before a vowel sound?",
            "options": [
                "a",
                "an",
                "the",
                "none"
            ],
            "answer": "an"
        },
        {
            "type": "tf",
            "question": "'The' is a definite article.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "I saw ___ elephant at the zoo.",
            "answer": "an"
        },
        {
            "type": "mcq",
            "question": "Which is the correct usage?",
            "options": [
                "An hour",
                "A hour",
                "The hour",
                "Hour"
            ],
            "answer": "An hour"
        },
        {
            "type": "tf",
            "question": "'A' and 'An' are definite articles.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "He is ___ honest man.",
            "answer": "an"
        },
        {
            "type": "oneword",
            "question": "What article do we use for specific or known nouns?",
            "answer": "the"
        },
        {
            "type": "mcq",
            "question": "Which sentence is correct?",
            "options": [
                "I have a umbrella",
                "I have an umbrella"
            ],
            "answer": "I have an umbrella"
        },
        {
            "type": "tf",
            "question": "We do not use articles before most proper nouns like countries.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "The sun rises in ___ east.",
            "answer": "the"
        },
        {
            "type": "oneword",
            "question": "What article is used before words starting with a consonant sound?",
            "answer": "a"
        },
        {
            "type": "mcq",
            "question": "Which is correct?",
            "options": [
                "An university",
                "A university",
                "The university",
                "University"
            ],
            "answer": "A university"
        },
        {
            "type": "tf",
            "question": "'The' can be used with both singular and plural nouns.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "She ate ___ apple yesterday.",
            "answer": "an"
        },
        {
            "type": "oneword",
            "question": "What article goes before 'European'?",
            "answer": "a"
        }
    ],
    "Subject & Predicate": [
        {
            "type": "mcq",
            "question": "The doer of the action is called the:",
            "options": [
                "Predicate",
                "Subject",
                "Object",
                "Verb"
            ],
            "answer": "Subject"
        },
        {
            "type": "tf",
            "question": "The predicate contains the verb.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "In 'The dog barked', 'The dog' is the ___.",
            "answer": "subject"
        },
        {
            "type": "mcq",
            "question": "Find the subject: 'Behind the door hid a small dog.'",
            "options": [
                "dog",
                "door",
                "hid",
                "Behind"
            ],
            "answer": "dog"
        },
        {
            "type": "tf",
            "question": "The predicate never contains the verb.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "The ___ tells what the subject is or does.",
            "answer": "predicate"
        },
        {
            "type": "oneword",
            "question": "In 'Birds fly', what is the subject?",
            "answer": "Birds"
        },
        {
            "type": "mcq",
            "question": "Find the predicate: 'The old car broke down.'",
            "options": [
                "broke down",
                "The old",
                "car",
                "old car"
            ],
            "answer": "broke down"
        },
        {
            "type": "tf",
            "question": "A sentence can have a compound subject.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "Every complete sentence must have a subject and a ___.",
            "answer": "predicate"
        },
        {
            "type": "oneword",
            "question": "In 'Go away!', what is the implied subject?",
            "answer": "You"
        },
        {
            "type": "mcq",
            "question": "What is the subject in 'Are you coming?'",
            "options": [
                "you",
                "Are",
                "coming",
                "None"
            ],
            "answer": "you"
        },
        {
            "type": "tf",
            "question": "The subject always comes first in a sentence.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "My mother and father ___ (is/are) the subject in 'My mother and father smiled'.",
            "answer": "are"
        },
        {
            "type": "oneword",
            "question": "What part of 'The tall boy ran fast' is 'ran fast'?",
            "answer": "Predicate"
        }
    ],
    "Singular and Plural": [
        {
            "type": "mcq",
            "question": "What is the plural of 'Foot'?",
            "options": [
                "Foots",
                "Feet",
                "Feets",
                "Footes"
            ],
            "answer": "Feet"
        },
        {
            "type": "tf",
            "question": "The plural of 'Child' is 'Childrens'.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "One tooth, many ___.",
            "answer": "teeth"
        },
        {
            "type": "mcq",
            "question": "What is the plural of 'Deer'?",
            "options": [
                "Deers",
                "Deer",
                "Dears",
                "Deeries"
            ],
            "answer": "Deer"
        },
        {
            "type": "tf",
            "question": "Plural of 'Person' is usually 'People'.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "The plural of 'Sheep' is ___.",
            "answer": "sheep"
        },
        {
            "type": "oneword",
            "question": "What is the plural of 'Tooth'?",
            "answer": "teeth"
        },
        {
            "type": "mcq",
            "question": "What is the plural of 'City'?",
            "options": [
                "Citys",
                "Cities",
                "Citis",
                "Cites"
            ],
            "answer": "Cities"
        },
        {
            "type": "tf",
            "question": "'Focus' becomes 'Focuses' or 'Foci'.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "Singular is one, plural is more than ___.",
            "answer": "one"
        },
        {
            "type": "oneword",
            "question": "What is the plural of 'Ox'?",
            "answer": "oxen"
        },
        {
            "type": "mcq",
            "question": "Which word is always singular?",
            "options": [
                "Maths",
                "Scissors",
                "Pants",
                "Glasses"
            ],
            "answer": "Maths"
        },
        {
            "type": "tf",
            "question": "'Information' has a plural form 'Informations'.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "Half becomes ___.",
            "answer": "halves"
        },
        {
            "type": "oneword",
            "question": "What is the plural of 'Criterion'?",
            "answer": "criteria"
        }
    ],
    "Gender": [
        {
            "type": "mcq",
            "question": "What is the feminine gender of 'Actor'?",
            "options": [
                "Actoress",
                "Actress",
                "Actor",
                "Actring"
            ],
            "answer": "Actress"
        },
        {
            "type": "tf",
            "question": "King is a masculine gender noun.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "The feminine of 'Uncle' is ___.",
            "answer": "aunt"
        },
        {
            "type": "mcq",
            "question": "Feminine of 'Tiger'?",
            "options": [
                "Tigress",
                "Tiger",
                "Tigrine",
                "Tigeress"
            ],
            "answer": "Tigress"
        },
        {
            "type": "tf",
            "question": "'Teacher' is a common gender noun.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "Feminine of 'nephew' is ___.",
            "answer": "niece"
        },
        {
            "type": "oneword",
            "question": "Masculine of 'Queen'?",
            "answer": "King"
        },
        {
            "type": "mcq",
            "question": "Neuter gender refers to:",
            "options": [
                "Male",
                "Female",
                "Lifeless object",
                "Both"
            ],
            "answer": "Lifeless object"
        },
        {
            "type": "tf",
            "question": "'Horse' is masculine, 'Mare' is feminine.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "Masculine of 'Wife' is ___.",
            "answer": "husband"
        },
        {
            "type": "oneword",
            "question": "Feminine of 'Prince'?",
            "answer": "Princess"
        },
        {
            "type": "mcq",
            "question": "Which is a neuter gender noun?",
            "options": [
                "Book",
                "Dog",
                "Sister",
                "Father"
            ],
            "answer": "Book"
        },
        {
            "type": "tf",
            "question": "'Baby' is a common gender noun.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "Feminine of 'Bull' is ___.",
            "answer": "cow"
        },
        {
            "type": "oneword",
            "question": "Masculine of 'Hen'?",
            "answer": "Rooster"
        }
    ],
    "Countable & Uncountable Nouns": [
        {
            "type": "mcq",
            "question": "Which noun is uncountable?",
            "options": [
                "Apple",
                "Book",
                "Water",
                "Chair"
            ],
            "answer": "Water"
        },
        {
            "type": "tf",
            "question": "Countable nouns can have plural forms.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "I have too ___ (much/many) work to do.",
            "answer": "much"
        },
        {
            "type": "mcq",
            "question": "Which is countable?",
            "options": [
                "Sand",
                "Music",
                "Car",
                "Happiness"
            ],
            "answer": "Car"
        },
        {
            "type": "tf",
            "question": "You can use 'a' or 'an' with uncountable nouns.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "How ___ (much/many) cars are there?",
            "answer": "many"
        },
        {
            "type": "oneword",
            "question": "Is 'knowledge' countable or uncountable?",
            "answer": "uncountable"
        },
        {
            "type": "mcq",
            "question": "Which is uncountable?",
            "options": [
                "Cup",
                "Idea",
                "Coin",
                "Flour"
            ],
            "answer": "Flour"
        },
        {
            "type": "tf",
            "question": "We use 'some' and 'any' with both countable and uncountable nouns.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "We have very ___ (few/little) time left.",
            "answer": "little"
        },
        {
            "type": "oneword",
            "question": "Is 'money' countable or uncountable?",
            "answer": "uncountable"
        },
        {
            "type": "mcq",
            "question": "Which is countable?",
            "options": [
                "Advice",
                "Information",
                "Suggestion",
                "News"
            ],
            "answer": "Suggestion"
        },
        {
            "type": "tf",
            "question": "'Equipment' is an uncountable noun.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "Put a ___ (few/little) sugar in my tea.",
            "answer": "little"
        },
        {
            "type": "oneword",
            "question": "Is 'sugar' countable or uncountable?",
            "answer": "uncountable"
        }
    ],
    "Types of Sentences": [
        {
            "type": "mcq",
            "question": "A sentence that asks a question is called:",
            "options": [
                "Declarative",
                "Interrogative",
                "Imperative",
                "Exclamatory"
            ],
            "answer": "Interrogative"
        },
        {
            "type": "tf",
            "question": "An exclamatory sentence ends with a period.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "Please close the door. This is an ___ sentence.",
            "answer": "imperative"
        },
        {
            "type": "mcq",
            "question": "Which sentence makes a statement?",
            "options": [
                "Declarative",
                "Imperative",
                "Interrogative",
                "Exclamatory"
            ],
            "answer": "Declarative"
        },
        {
            "type": "tf",
            "question": "An imperative sentence can end with a period or exclamation mark.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "'Stop!' is an example of an ___ sentence.",
            "answer": "imperative"
        },
        {
            "type": "oneword",
            "question": "What punctuation mark ends an interrogative sentence?",
            "answer": "?"
        },
        {
            "type": "mcq",
            "question": "'What a beautiful day!' is:",
            "options": [
                "Exclamatory",
                "Declarative",
                "Imperative",
                "Interrogative"
            ],
            "answer": "Exclamatory"
        },
        {
            "type": "tf",
            "question": "A declarative sentence asks a question.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "A sentence that expresses strong feeling is ___.",
            "answer": "exclamatory"
        },
        {
            "type": "oneword",
            "question": "What type of sentence is 'Keep quiet'?",
            "answer": "Imperative"
        },
        {
            "type": "mcq",
            "question": "'I love pizza.' is:",
            "options": [
                "Declarative",
                "Imperative",
                "Interrogative",
                "Exclamatory"
            ],
            "answer": "Declarative"
        },
        {
            "type": "tf",
            "question": "An interrogative sentence always starts with a WH-word.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "'Where are you going?' is an ___ sentence.",
            "answer": "interrogative"
        },
        {
            "type": "oneword",
            "question": "What type of sentence issues a command?",
            "answer": "Imperative"
        }
    ],
    "Sentence Structure": [
        {
            "type": "mcq",
            "question": "Basic English sentence structure is:",
            "options": [
                "VSO",
                "SVO",
                "OSV",
                "SOV"
            ],
            "answer": "SVO"
        },
        {
            "type": "tf",
            "question": "In SVO, 'O' stands for Object.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "The pattern S + V + O stands for ___ + Verb + Object.",
            "answer": "Subject"
        },
        {
            "type": "mcq",
            "question": "A compound sentence contains:",
            "options": [
                "One independent clause",
                "Two independent clauses",
                "One dependent clause",
                "No clauses"
            ],
            "answer": "Two independent clauses"
        },
        {
            "type": "tf",
            "question": "A complex sentence has at least one independent and one dependent clause.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "A simple sentence consists of one ___ clause.",
            "answer": "independent"
        },
        {
            "type": "oneword",
            "question": "What do we use with a comma to join independent clauses? (Hint: FANBOYS)",
            "answer": "conjunction"
        },
        {
            "type": "mcq",
            "question": "'I waited, but he didn't come.' is a:",
            "options": [
                "Simple",
                "Compound",
                "Complex",
                "Compound-complex"
            ],
            "answer": "Compound"
        },
        {
            "type": "tf",
            "question": "A fragment is an incomplete sentence.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "'Because it was raining' is a ___ clause.",
            "answer": "dependent"
        },
        {
            "type": "oneword",
            "question": "What type of sentence is 'He ran fast'?",
            "answer": "Simple"
        },
        {
            "type": "mcq",
            "question": "Which structure is 'S-V-O'?",
            "options": [
                "Subject-Verb-Object",
                "Subject-Vowel-Object",
                "Sentence-Verb-Object"
            ],
            "answer": "Subject-Verb-Object"
        },
        {
            "type": "tf",
            "question": "Compound-complex sentences contain at least two independent clauses and one dependent clause.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "'She sings and dances.' is a ___ sentence.",
            "answer": "simple"
        },
        {
            "type": "oneword",
            "question": "In SVO, what does O stand for?",
            "answer": "Object"
        }
    ],
    "Helping Verbs": [
        {
            "type": "mcq",
            "question": "Identify the helping verb: 'She is singing.'",
            "options": [
                "She",
                "is",
                "singing",
                "None"
            ],
            "answer": "is"
        },
        {
            "type": "tf",
            "question": "'Have' can be used as a helping verb.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "___ you like to drink coffee? (Do/Are)",
            "answer": "Do"
        },
        {
            "type": "mcq",
            "question": "Which is a primary helping verb?",
            "options": [
                "Can",
                "Should",
                "Have",
                "Might"
            ],
            "answer": "Have"
        },
        {
            "type": "tf",
            "question": "'Do', 'does', and 'did' are helping verbs.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "I ___ not know the answer.",
            "answer": "do"
        },
        {
            "type": "oneword",
            "question": "What is the helping verb in 'He is playing'?",
            "answer": "is"
        },
        {
            "type": "mcq",
            "question": "Which helping verb is used for Future perfect?",
            "options": [
                "will have",
                "is having",
                "was having",
                "will be"
            ],
            "answer": "will have"
        },
        {
            "type": "tf",
            "question": "'Are' is a helping verb in 'They are students'.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "They ___ (has/have) finished the task.",
            "answer": "have"
        },
        {
            "type": "oneword",
            "question": "What helping verb goes with 'He' in Present Simple negative?",
            "answer": "does"
        },
        {
            "type": "mcq",
            "question": "In 'We had gone', what is 'had'?",
            "options": [
                "Main verb",
                "Adverb",
                "Helping verb",
                "Noun"
            ],
            "answer": "Helping verb"
        },
        {
            "type": "tf",
            "question": "Helping verbs always come immediately before the main verb.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "___ she going to the party?",
            "answer": "Is"
        },
        {
            "type": "oneword",
            "question": "What is the helping verb in 'Was he sleeping?'?",
            "answer": "Was"
        }
    ],
    "Modals": [
        {
            "type": "mcq",
            "question": "Which modal shows ability?",
            "options": [
                "Must",
                "Can",
                "Will",
                "Should"
            ],
            "answer": "Can"
        },
        {
            "type": "tf",
            "question": "We use 'to' after modal verbs like 'can'.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "You ___ wear a seatbelt while driving.",
            "answer": "must"
        },
        {
            "type": "mcq",
            "question": "Which modal indicates strong obligation?",
            "options": [
                "May",
                "Might",
                "Must",
                "Could"
            ],
            "answer": "Must"
        },
        {
            "type": "tf",
            "question": "Modals change form according to the subject (e.g., he cans).",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "___ I come in, sir?",
            "answer": "May"
        },
        {
            "type": "oneword",
            "question": "Which modal verb is used to offer help (e.g., '___ I help you?')?",
            "answer": "May"
        },
        {
            "type": "mcq",
            "question": "Which modal indicates possibility?",
            "options": [
                "Must",
                "Will",
                "Might",
                "Shall"
            ],
            "answer": "Might"
        },
        {
            "type": "tf",
            "question": "'Should' is used for giving advice.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "You ___ (can/must) try this pizza, it's amazing!",
            "answer": "must"
        },
        {
            "type": "oneword",
            "question": "What modal indicates past ability?",
            "answer": "could"
        },
        {
            "type": "mcq",
            "question": "'Would you like some tea?' shows a:",
            "options": [
                "Command",
                "Polite offer",
                "Obligation",
                "Certainty"
            ],
            "answer": "Polite offer"
        },
        {
            "type": "tf",
            "question": "Modals are always followed by the base form of the verb.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "We ___ leave now or we will be late.",
            "answer": "should"
        },
        {
            "type": "oneword",
            "question": "Which modal is often used with 'have to' meaning?",
            "answer": "must"
        }
    ],
    "Active & Passive Voice": [
        {
            "type": "mcq",
            "question": "Identify the passive sentence.",
            "options": [
                "He read a book.",
                "A book was read by him.",
                "He is reading.",
                "She reads."
            ],
            "answer": "A book was read by him."
        },
        {
            "type": "tf",
            "question": "In passive voice, the object becomes the subject.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "The window was ___ (break) by the boy.",
            "answer": "broken"
        },
        {
            "type": "mcq",
            "question": "Convert to passive: 'He writes a letter'",
            "options": [
                "A letter is written by him",
                "A letter was written by him"
            ],
            "answer": "A letter is written by him"
        },
        {
            "type": "tf",
            "question": "Intransitive verbs cannot be changed into passive voice.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "The cake was ___ (eat) by the boys.",
            "answer": "eaten"
        },
        {
            "type": "oneword",
            "question": "What form of the verb is always used in passive voice? (V1/V2/V3)",
            "answer": "V3"
        },
        {
            "type": "mcq",
            "question": "Convert to active: 'The car was washed by John'",
            "options": [
                "John washes the car",
                "John washed the car"
            ],
            "answer": "John washed the car"
        },
        {
            "type": "tf",
            "question": "Present perfect passive uses 'has/have been + V3'.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "A song is ___ (sing) by her.",
            "answer": "sung"
        },
        {
            "type": "oneword",
            "question": "What preposition usually introduces the agent in the passive voice?",
            "answer": "by"
        },
        {
            "type": "mcq",
            "question": "Which sentence is active?",
            "options": [
                "The dog bit the man",
                "The man was bitten by the dog"
            ],
            "answer": "The dog bit the man"
        },
        {
            "type": "tf",
            "question": "Future continuous sentences can be easily converted to passive.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "The house will be ___ (build) next year.",
            "answer": "built"
        },
        {
            "type": "oneword",
            "question": "The subject of the active sentence becomes the ___ of the passive sentence.",
            "answer": "object"
        }
    ],
    "Direct & Indirect Speech": [
        {
            "type": "mcq",
            "question": "Indirect speech often requires changing:",
            "options": [
                "The subject only",
                "The tense",
                "Nothing",
                "The object only"
            ],
            "answer": "The tense"
        },
        {
            "type": "tf",
            "question": "Direct speech uses quotation marks.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "He said, 'I need help.' He said that he ___ help.",
            "answer": "needed"
        },
        {
            "type": "mcq",
            "question": "In indirect speech, 'now' becomes:",
            "options": [
                "then",
                "today",
                "here",
                "soon"
            ],
            "answer": "then"
        },
        {
            "type": "tf",
            "question": "Present simple in direct speech changes to past simple in indirect speech.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "He said that he ___ (is/was) happy.",
            "answer": "was"
        },
        {
            "type": "oneword",
            "question": "What does 'tomorrow' change to in indirect speech? (the ___ day)",
            "answer": "next"
        },
        {
            "type": "mcq",
            "question": "He said, 'I can swim.' -> He said that he (could/can/would) swim.",
            "options": [
                "could",
                "can",
                "would"
            ],
            "answer": "could"
        },
        {
            "type": "tf",
            "question": "If the reporting verb is in the present tense, the tense inside the quote does not change.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "She asked me ___ I was okay. (if/that)",
            "answer": "if"
        },
        {
            "type": "oneword",
            "question": "What connector is typically used for declarative sentences in indirect speech?",
            "answer": "that"
        },
        {
            "type": "mcq",
            "question": "Yesterday changes to:",
            "options": [
                "the previous day",
                "the following day"
            ],
            "answer": "the previous day"
        },
        {
            "type": "tf",
            "question": "Exclamations change into statements in indirect speech.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "He commanded me ___ sit down.",
            "answer": "to"
        },
        {
            "type": "oneword",
            "question": "Does 'here' change to 'there' in reported speech? (Yes/No)",
            "answer": "Yes"
        }
    ],
    "Question Formation": [
        {
            "type": "mcq",
            "question": "Which is a correct question?",
            "options": [
                "You are happy?",
                "Are you happy?",
                "Happy are you?",
                "You happy are?"
            ],
            "answer": "Are you happy?"
        },
        {
            "type": "tf",
            "question": "We often swap the subject and helping verb to make a question.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "___ he work in a bank? (Do/Does)",
            "answer": "Does"
        },
        {
            "type": "mcq",
            "question": "Which is correct?",
            "options": [
                "Where he lives?",
                "Where does he live?",
                "Where lives he?"
            ],
            "answer": "Where does he live?"
        },
        {
            "type": "tf",
            "question": "'Do' and 'Does' are used to form questions in Past Simple.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "___ she like ice cream?",
            "answer": "Does"
        },
        {
            "type": "oneword",
            "question": "What auxiliary verb is used to form a question in Present Simple for 'I, you, we, they'?",
            "answer": "Do"
        },
        {
            "type": "mcq",
            "question": "Convert to question: 'They are students.'",
            "options": [
                "They are students?",
                "Are they students?",
                "Do they are students?"
            ],
            "answer": "Are they students?"
        },
        {
            "type": "tf",
            "question": "In question form, the helping verb comes before the subject.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "___ you see the movie yesterday?",
            "answer": "Did"
        },
        {
            "type": "oneword",
            "question": "What word begins an interrogative sentence asking for a reason?",
            "answer": "Why"
        },
        {
            "type": "mcq",
            "question": "Make a question: 'He is playing.'",
            "options": [
                "Is he playing?",
                "Does he playing?",
                "He playing is?"
            ],
            "answer": "Is he playing?"
        },
        {
            "type": "tf",
            "question": "Question marks are optional in question formation.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "___ will win the match? (Who/Whom)",
            "answer": "Who"
        },
        {
            "type": "oneword",
            "question": "What auxiliary verb is used for questions in the past progressive?",
            "answer": "Was"
        }
    ],
    "Negatives": [
        {
            "type": "mcq",
            "question": "A negative sentence contains:",
            "options": [
                "Yes",
                "Not",
                "Very",
                "Only"
            ],
            "answer": "Not"
        },
        {
            "type": "tf",
            "question": "'Never' can make a sentence negative without 'not'.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "She ___ not want to go.",
            "answer": "does"
        },
        {
            "type": "mcq",
            "question": "Make 'She likes cats' negative.",
            "options": [
                "She not likes cats",
                "She does not like cats",
                "She don't like cats"
            ],
            "answer": "She does not like cats"
        },
        {
            "type": "tf",
            "question": "'Hardly' is a negative word.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "They ___ not playing yesterday. (was/were)",
            "answer": "were"
        },
        {
            "type": "oneword",
            "question": "What is the contraction of 'do not'?",
            "answer": "don't"
        },
        {
            "type": "mcq",
            "question": "Which sentence is correctly negative?",
            "options": [
                "I ain't got no money",
                "I don't have any money"
            ],
            "answer": "I don't have any money"
        },
        {
            "type": "tf",
            "question": "Double negatives are considered correct in standard English.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "He ___ (has/does) not have a car.",
            "answer": "does"
        },
        {
            "type": "oneword",
            "question": "What is the contraction of 'will not'?",
            "answer": "won't"
        },
        {
            "type": "mcq",
            "question": "Negative command:",
            "options": [
                "Run not!",
                "Do not run!"
            ],
            "answer": "Do not run!"
        },
        {
            "type": "tf",
            "question": "To make 'can' negative, we say 'cannot' or 'can't'.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "I have ___ (never/none) been to Paris.",
            "answer": "never"
        },
        {
            "type": "oneword",
            "question": "Complete the negative prefix: ___happy",
            "answer": "un"
        }
    ],
    "WH Questions": [
        {
            "type": "mcq",
            "question": "Which word asks about a place?",
            "options": [
                "Who",
                "Why",
                "Where",
                "When"
            ],
            "answer": "Where"
        },
        {
            "type": "tf",
            "question": "'When' asks about time.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "___ is your name?",
            "answer": "What"
        },
        {
            "type": "mcq",
            "question": "Which WH word asks about possession?",
            "options": [
                "Who",
                "Whose",
                "Whom",
                "Which"
            ],
            "answer": "Whose"
        },
        {
            "type": "tf",
            "question": "'How' is considered a WH question word.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "___ are you crying?",
            "answer": "Why"
        },
        {
            "type": "oneword",
            "question": "What WH word asks about a choice or option?",
            "answer": "Which"
        },
        {
            "type": "mcq",
            "question": "To ask about time, we use:",
            "options": [
                "Where",
                "When",
                "Why",
                "Who"
            ],
            "answer": "When"
        },
        {
            "type": "tf",
            "question": "We use 'Whom' to ask about the subject of a sentence.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "___ old are you?",
            "answer": "How"
        },
        {
            "type": "oneword",
            "question": "What WH word asks about the manner of an action?",
            "answer": "How"
        },
        {
            "type": "mcq",
            "question": "'___ is your favorite color?'",
            "options": [
                "What",
                "Who",
                "Why",
                "When"
            ],
            "answer": "What"
        },
        {
            "type": "tf",
            "question": "'How many' is used for uncountable nouns.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "___ much water do you need?",
            "answer": "How"
        },
        {
            "type": "oneword",
            "question": "What WH word asks about a person?",
            "answer": "Who"
        }
    ],
    "Prepositions (Detailed)": [
        {
            "type": "mcq",
            "question": "Which preposition is used for specific time?",
            "options": [
                "In",
                "On",
                "At",
                "By"
            ],
            "answer": "At"
        },
        {
            "type": "tf",
            "question": "We use 'on' for days of the week.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "My birthday is ___ May.",
            "answer": "in"
        },
        {
            "type": "mcq",
            "question": "'He is good ___ math.'",
            "options": [
                "in",
                "at",
                "on",
                "with"
            ],
            "answer": "at"
        },
        {
            "type": "tf",
            "question": "'According to' is a compound preposition.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "The dog jumped ___ the fence.",
            "answer": "over"
        },
        {
            "type": "oneword",
            "question": "What preposition comes after 'afraid'?",
            "answer": "of"
        },
        {
            "type": "mcq",
            "question": "I insist ___ going.",
            "options": [
                "to",
                "for",
                "on",
                "at"
            ],
            "answer": "on"
        },
        {
            "type": "tf",
            "question": "'Since' is used for a point in time.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "He has been living here ___ 10 years.",
            "answer": "for"
        },
        {
            "type": "oneword",
            "question": "What preposition follows 'interested'?",
            "answer": "in"
        },
        {
            "type": "mcq",
            "question": "She walked ___ the street.",
            "options": [
                "across",
                "between",
                "among",
                "into"
            ],
            "answer": "across"
        },
        {
            "type": "tf",
            "question": "We distribute candies 'between' three children.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "He is completely different ___ his brother.",
            "answer": "from"
        },
        {
            "type": "oneword",
            "question": "Preposition meaning 'in the middle of':",
            "answer": "among"
        }
    ],
    "Adjectives & Degrees of Comparison": [
        {
            "type": "mcq",
            "question": "What is the superlative of 'Good'?",
            "options": [
                "Gooder",
                "Better",
                "Best",
                "Goodest"
            ],
            "answer": "Best"
        },
        {
            "type": "tf",
            "question": "We add 'er' to make a comparative degree for short words.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "She is ___ (beautiful) than her sister.",
            "answer": "more beautiful"
        },
        {
            "type": "mcq",
            "question": "Positive degree of 'best' is:",
            "options": [
                "good",
                "better",
                "best",
                "goodest"
            ],
            "answer": "good"
        },
        {
            "type": "tf",
            "question": "'Farther' refers to physical distance.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "She is the ___ (tall) girl in the class.",
            "answer": "tallest"
        },
        {
            "type": "oneword",
            "question": "What is the comparative of 'happy'?",
            "answer": "happier"
        },
        {
            "type": "mcq",
            "question": "Find the comparative degree:",
            "options": [
                "Small",
                "Smaller",
                "Smallest",
                "None"
            ],
            "answer": "Smaller"
        },
        {
            "type": "tf",
            "question": "'More tall' is correct comparative.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "Gold is ___ expensive than silver.",
            "answer": "more"
        },
        {
            "type": "oneword",
            "question": "Superlative of 'little':",
            "answer": "least"
        },
        {
            "type": "mcq",
            "question": "Which degree is used to compare two things?",
            "options": [
                "Positive",
                "Comparative",
                "Superlative"
            ],
            "answer": "Comparative"
        },
        {
            "type": "tf",
            "question": "Unique cannot have comparative or superlative degrees.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "This task is ___ difficult than the previous one. (much/more)",
            "answer": "more"
        },
        {
            "type": "oneword",
            "question": "Comparative of 'bad':",
            "answer": "worse"
        }
    ],
    "Conjunctions & Connectors": [
        {
            "type": "mcq",
            "question": "Which connector shows contrast?",
            "options": [
                "And",
                "Therefore",
                "However",
                "Also"
            ],
            "answer": "However"
        },
        {
            "type": "tf",
            "question": "'Therefore' shows a result.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "It rained heavily, ___ we stayed home.",
            "answer": "so"
        },
        {
            "type": "mcq",
            "question": "Which connector adds information?",
            "options": [
                "Also",
                "However",
                "Instead",
                "Otherwise"
            ],
            "answer": "Also"
        },
        {
            "type": "tf",
            "question": "'Unless' means 'if not'.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "Not only... ___ also",
            "answer": "but"
        },
        {
            "type": "oneword",
            "question": "What conjunction pairs with 'Neither'?",
            "answer": "nor"
        },
        {
            "type": "mcq",
            "question": "Which connector shows cause?",
            "options": [
                "Therefore",
                "Because",
                "Then",
                "And"
            ],
            "answer": "Because"
        },
        {
            "type": "tf",
            "question": "'As well as' acts like a conjunction.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "He studied hard, ___ he failed.",
            "answer": "yet"
        },
        {
            "type": "oneword",
            "question": "What time connector means 'at the same time'?",
            "answer": "while"
        },
        {
            "type": "mcq",
            "question": "'I will go ___ he invites me.'",
            "options": [
                "if",
                "but",
                "and",
                "or"
            ],
            "answer": "if"
        },
        {
            "type": "tf",
            "question": "'Consequently' connects contrasting ideas.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "Wait here ___ I return.",
            "answer": "until"
        },
        {
            "type": "oneword",
            "question": "What connector means 'in addition to'?",
            "answer": "besides"
        }
    ],
    "Clauses": [
        {
            "type": "mcq",
            "question": "An independent clause can stand alone as a sentence.",
            "options": [
                "Yes",
                "No",
                "Maybe",
                "Sometimes"
            ],
            "answer": "Yes"
        },
        {
            "type": "tf",
            "question": "A dependent clause needs another clause to make sense.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "A clause must have a subject and a ___.",
            "answer": "verb"
        },
        {
            "type": "mcq",
            "question": "A dependent clause functions as an:",
            "options": [
                "Adverb",
                "Noun",
                "Adjective",
                "All of these"
            ],
            "answer": "All of these"
        },
        {
            "type": "tf",
            "question": "A main clause expresses a complete thought.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "A relative clause starts with a ___ pronoun.",
            "answer": "relative"
        },
        {
            "type": "oneword",
            "question": "Which word connects an adverb clause of condition?",
            "answer": "if"
        },
        {
            "type": "mcq",
            "question": "Identify the dependent clause: (I ran fast because I was late / I ran fast)",
            "options": [
                "because I was late",
                "I ran fast"
            ],
            "answer": "because I was late"
        },
        {
            "type": "tf",
            "question": "'That she is honest' can function as a noun clause.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "A relative clause describes a ___.",
            "answer": "noun"
        },
        {
            "type": "oneword",
            "question": "What type of clause modifies a verb?",
            "answer": "Adverb"
        },
        {
            "type": "mcq",
            "question": "A clause must contain a subject and a:",
            "options": [
                "Verb",
                "Noun",
                "Object",
                "Preposition"
            ],
            "answer": "Verb"
        },
        {
            "type": "tf",
            "question": "Compound sentences consist only of dependent clauses.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "Although he tried, he failed. 'Although he tried' is a ___ clause.",
            "answer": "dependent"
        },
        {
            "type": "oneword",
            "question": "Can an independent clause be a simple sentence? (Yes/No)",
            "answer": "Yes"
        }
    ],
    "Conditional Sentences": [
        {
            "type": "mcq",
            "question": "First conditional is used for:",
            "options": [
                "Real future possibility",
                "Past regrets",
                "Scientific facts",
                "Imaginary situations"
            ],
            "answer": "Real future possibility"
        },
        {
            "type": "tf",
            "question": "Zero conditional is for universal truths.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "If it rains, I ___ stay home.",
            "answer": "will"
        },
        {
            "type": "mcq",
            "question": "Which conditional speaks of unreal past situations?",
            "options": [
                "Zero",
                "First",
                "Second",
                "Third"
            ],
            "answer": "Third"
        },
        {
            "type": "tf",
            "question": "Second conditional uses past tense.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "If I ___ (be) you, I would study.",
            "answer": "were"
        },
        {
            "type": "oneword",
            "question": "In a first conditional 'If it rains', what tense is 'rains'?",
            "answer": "present"
        },
        {
            "type": "mcq",
            "question": "'If you heat ice, it melts' is:",
            "options": [
                "Zero",
                "First",
                "Second",
                "Third"
            ],
            "answer": "Zero"
        },
        {
            "type": "tf",
            "question": "'Unless you study, you will fail' is a conditional sentence.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "If he had worked hard, he ___ have passed.",
            "answer": "would"
        },
        {
            "type": "oneword",
            "question": "Which word often replaces 'if not'?",
            "answer": "unless"
        },
        {
            "type": "mcq",
            "question": "Formula for second conditional: If + Past Simple, + (will/would/can/may) + V1",
            "options": [
                "would",
                "will",
                "can",
                "may"
            ],
            "answer": "would"
        },
        {
            "type": "tf",
            "question": "The 'if' clause can come at the end of the sentence.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "If I win the lottery, I ___ buy a car.",
            "answer": "will"
        },
        {
            "type": "oneword",
            "question": "What conditional talks about imaginary present situations?",
            "answer": "Second"
        }
    ],
    "Gerund & Infinitive": [
        {
            "type": "mcq",
            "question": "Identify the gerund:",
            "options": [
                "To swim",
                "Swam",
                "Swimming",
                "Swim"
            ],
            "answer": "Swimming"
        },
        {
            "type": "tf",
            "question": "An infinitive is 'to' + base verb.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "I enjoy ___ (read) books.",
            "answer": "reading"
        },
        {
            "type": "mcq",
            "question": "What is a gerund?",
            "options": [
                "V1",
                "V2",
                "V3",
                "V+ing"
            ],
            "answer": "V+ing"
        },
        {
            "type": "tf",
            "question": "'To go' is an infinitive.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "He suggested ___ (go) to the park.",
            "answer": "going"
        },
        {
            "type": "oneword",
            "question": "What form follows the verb 'want'?",
            "answer": "infinitive"
        },
        {
            "type": "mcq",
            "question": "Which verb takes a gerund?",
            "options": [
                "Decide",
                "Enjoy",
                "Hope",
                "Promise"
            ],
            "answer": "Enjoy"
        },
        {
            "type": "tf",
            "question": "A gerund can act as the subject of a sentence.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "___ (Swim) is a good exercise.",
            "answer": "Swimming"
        },
        {
            "type": "oneword",
            "question": "What is 'to walk' called?",
            "answer": "infinitive"
        },
        {
            "type": "mcq",
            "question": "'Stop ___ !'",
            "options": [
                "talking",
                "to talk",
                "talk",
                "talked"
            ],
            "answer": "talking"
        },
        {
            "type": "tf",
            "question": "Prepositions are followed by infinitives.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "I look forward to ___ (see) you.",
            "answer": "seeing"
        },
        {
            "type": "oneword",
            "question": "Gerund acts as what part of speech?",
            "answer": "noun"
        }
    ],
    "Question Tags": [
        {
            "type": "mcq",
            "question": "You are happy, ___?",
            "options": [
                "are you",
                "aren't you",
                "do you",
                "don't you"
            ],
            "answer": "aren't you"
        },
        {
            "type": "tf",
            "question": "A positive sentence gets a negative tag.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "He plays well, ___ he?",
            "answer": "doesn't"
        },
        {
            "type": "mcq",
            "question": "She is coming, _____?",
            "options": [
                "isn't she",
                "is she",
                "does she"
            ],
            "answer": "isn't she"
        },
        {
            "type": "tf",
            "question": "They haven't eaten, have they?",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "You like pizza, ___ you?",
            "answer": "don't"
        },
        {
            "type": "oneword",
            "question": "Let's go, ___ we?",
            "answer": "shall"
        },
        {
            "type": "mcq",
            "question": "He can't swim, _____?",
            "options": [
                "can he",
                "can't he",
                "does he"
            ],
            "answer": "can he"
        },
        {
            "type": "tf",
            "question": "A negative sentence gets a positive question tag.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "Everybody is here, aren't ___?",
            "answer": "they"
        },
        {
            "type": "oneword",
            "question": "I am right, ___ I?",
            "answer": "aren't"
        },
        {
            "type": "mcq",
            "question": "Close the door, _____?",
            "options": [
                "will you",
                "do you",
                "did you"
            ],
            "answer": "will you"
        },
        {
            "type": "tf",
            "question": "Question tags are always formed with DO.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "He arrived late, ___ he?",
            "answer": "didn't"
        },
        {
            "type": "oneword",
            "question": "You couldn't hear me, ___ you?",
            "answer": "could"
        }
    ],
    "Phrasal Verbs": [
        {
            "type": "mcq",
            "question": "What does 'give up' mean?",
            "options": [
                "Start",
                "Stop trying",
                "Continue",
                "Look for"
            ],
            "answer": "Stop trying"
        },
        {
            "type": "tf",
            "question": "A phrasal verb's meaning can be different from its parts.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "Please ___ on your shoes.",
            "answer": "put"
        },
        {
            "type": "mcq",
            "question": "'Look after' means:",
            "options": [
                "Search",
                "Take care of",
                "Inspect",
                "Despise"
            ],
            "answer": "Take care of"
        },
        {
            "type": "tf",
            "question": "Phrasal verbs consist of a verb and a particle.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "The plane will take ___ at 6 AM.",
            "answer": "off"
        },
        {
            "type": "oneword",
            "question": "What phrasal verb means to extinguish a fire? (put ___)",
            "answer": "out"
        },
        {
            "type": "mcq",
            "question": "'Give in' means:",
            "options": [
                "Distribute",
                "Surrender",
                "Announce",
                "Provide"
            ],
            "answer": "Surrender"
        },
        {
            "type": "tf",
            "question": "'Carry on' means to stop what you are doing.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "I need to cut ___ on sugar.",
            "answer": "down"
        },
        {
            "type": "oneword",
            "question": "What phrasal verb means to tolerate? (put up ___)",
            "answer": "with"
        },
        {
            "type": "mcq",
            "question": "'Find out' means:",
            "options": [
                "Discover",
                "Lose",
                "Search",
                "Hide"
            ],
            "answer": "Discover"
        },
        {
            "type": "tf",
            "question": "Phrasal verbs can be separable or inseparable.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "Don't give ___ your dreams!",
            "answer": "up"
        },
        {
            "type": "oneword",
            "question": "What particle pairs with 'look' to mean anticipate with pleasure? (look forward __)",
            "answer": "to"
        }
    ],
    "Common Errors & Corrections": [
        {
            "type": "mcq",
            "question": "Which is correct?",
            "options": [
                "He is senior than me.",
                "He is senior to me.",
                "He is more senior than me.",
                "He is senior from me."
            ],
            "answer": "He is senior to me."
        },
        {
            "type": "tf",
            "question": "'One of my friend' is correct.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "I look forward to ___ (meet) you.",
            "answer": "meeting"
        },
        {
            "type": "mcq",
            "question": "Correct:",
            "options": [
                "I didn't went",
                "I didn't go",
                "I don't went"
            ],
            "answer": "I didn't go"
        },
        {
            "type": "tf",
            "question": "'Return back' is redundant.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "He is good ___ (at/in) English.",
            "answer": "at"
        },
        {
            "type": "oneword",
            "question": "What is redundant in 'repeat again'?",
            "answer": "again"
        },
        {
            "type": "mcq",
            "question": "Correct:",
            "options": [
                "Me and my friend went",
                "My friend and I went"
            ],
            "answer": "My friend and I went"
        },
        {
            "type": "tf",
            "question": "'Discuss about' is grammatically correct.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "She prefers tea ___ coffee. (to/than)",
            "answer": "to"
        },
        {
            "type": "oneword",
            "question": "Should 'advice' be pluralized as 'advices'? (Yes/No)",
            "answer": "No"
        },
        {
            "type": "mcq",
            "question": "Correct:",
            "options": [
                "Less cars",
                "Fewer cars"
            ],
            "answer": "Fewer cars"
        },
        {
            "type": "tf",
            "question": "Use 'much' for uncountable nouns.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "Each of the boys ___ (has/have) a book.",
            "answer": "has"
        },
        {
            "type": "oneword",
            "question": "What is the correct preposition in 'married ___'?",
            "answer": "to"
        }
    ],
    "Paragraph & Essay Structure": [
        {
            "type": "mcq",
            "question": "What comes at the beginning of an essay?",
            "options": [
                "Conclusion",
                "Body",
                "Introduction",
                "Summary"
            ],
            "answer": "Introduction"
        },
        {
            "type": "tf",
            "question": "A paragraph should have a topic sentence.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "The end of an essay is called the ___.",
            "answer": "conclusion"
        },
        {
            "type": "mcq",
            "question": "The main idea of a paragraph is stated in the:",
            "options": [
                "Thesis",
                "Topic sentence",
                "Conclusion",
                "Hook"
            ],
            "answer": "Topic sentence"
        },
        {
            "type": "tf",
            "question": "Transitions help connect ideas smoothly.",
            "answer": "True"
        },
        {
            "type": "fib",
            "question": "An essay usually has ___ main parts minimum. (Intro, body, conc)",
            "answer": "3"
        },
        {
            "type": "oneword",
            "question": "What captures the reader's attention in the introduction?",
            "answer": "Hook"
        },
        {
            "type": "mcq",
            "question": "Supporting sentences provide:",
            "options": [
                "Details",
                "Conclusions",
                "Topic statements",
                "Hooks"
            ],
            "answer": "Details"
        },
        {
            "type": "tf",
            "question": "A conclusion should introduce new arguments.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "The central argument of an essay is the ___ statement.",
            "answer": "thesis"
        },
        {
            "type": "oneword",
            "question": "What is the final section of an essay?",
            "answer": "Conclusion"
        },
        {
            "type": "mcq",
            "question": "Chronological order organizes ideas by:",
            "options": [
                "Importance",
                "Time",
                "Location",
                "Contrast"
            ],
            "answer": "Time"
        },
        {
            "type": "tf",
            "question": "Each body paragraph should focus on multiple distinct topics.",
            "answer": "False"
        },
        {
            "type": "fib",
            "question": "The very first sentence of an essay is called the ___.",
            "answer": "hook"
        },
        {
            "type": "oneword",
            "question": "What sentence summarizes the paragraph?",
            "answer": "concluding"
        }
    ]
};
