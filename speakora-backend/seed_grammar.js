const mongoose = require("mongoose");
const dns = require("dns");
require("dotenv").config();
const Grammar = require("./models/Grammar");

// Set DNS servers to bypass local network issues with MongoDB SRV records
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const grammarData = [
    {
        sequence: 1,
        level: "Level 1",
        title: "Alphabet & Pronunciation",
        definition: "The English alphabet is the set of 26 letters used for writing the English language.",
        purpose: "To provide the fundamental sounds (phonemes) and symbols used to form words.",
        rules: [
            "Every word contains at least one vowel sound.",
            "Consonants are sounds blocked by the tongue, teeth, or lips.",
            "Vowels are open sounds: A, E, I, O, U.",
            "Pronunciation can change based on the position of letters in a word (e.g., Silent 'e')."
        ],
        types: [
            { name: "Alphabets", description: "26 letters, from A to Z", examples: ["A, B, C..."] },
            { name: "Vowels", description: "Open sounds produced without blocking airflow", examples: ["a, e, i, o, u"] },
            { name: "Consonants", description: "Sounds produced by blocking airflow with mouth parts", examples: ["b, c, d, f..."] }
        ],
        structures: [
            { pattern: "Short Vowel Sounds", explanation: "Short vowels are usually found in CVC (Consonant-Vowel-Consonant) words." },
            { pattern: "Long Vowel Sounds", explanation: "Long vowels sound like the letter name, often created by a silent 'e' at the end." }
        ],
        examples: [
            { sentence: "The word 'Bat' has a short 'a' sound.", meaning: "Short vowel example", type: "Positive" },
            { sentence: "The word 'Bake' has a long 'a' sound.", meaning: "Long vowel example", type: "Positive" }
        ],
        commonMistakes: [
            { wrong: "Pronouncing the 'k' in 'Knee'", correct: "Silent 'k' - Nee", reason: "'K' is silent when followed by 'n' at the start of a word." }
        ],
        summary: "Mastering the 26 letters and their diverse sounds is the first step to English fluency.",
        practice: ["Pronounce: Apple, Elephant, Island, Orange, Umbrella", "Identify silent letters in: Write, Comb, Hour"]
    },
    {
        sequence: 2,
        level: "Level 1",
        title: "Parts of Speech",
        definition: "Parts of speech are categories that describe the role a word plays in a sentence.",
        purpose: "To understand how words function together to create meaning.",
        rules: [
            "A word's part of speech is determined by its usage in a sentence.",
            "There are 8 major parts of speech: Noun, Pronoun, Verb, Adjective, Adverb, Preposition, Conjunction, Interjection."
        ],
        types: [
            { name: "8 Parts of Speech", description: "The standard categories in English grammar.", examples: ["Noun", "Verb", "Adjective"] }
        ],
        summary: "Every word in English belongs to one of 8 categories called Parts of Speech.",
        practice: ["List 2 examples for each of the 8 parts of speech."]
    },
    {
        sequence: 3,
        level: "Level 1",
        title: "Noun",
        definition: "A noun is a word that names a person, place, thing, or idea.",
        purpose: "To identify the 'who' or 'what' in a sentence.",
        rules: [
            "Nouns can be specific (Proper) or general (Common).",
            "Abstract nouns name things you can't touch (like love, bravery).",
            "Collective nouns name groups (like team, colony)."
        ],
        types: [
            { name: "Proper Noun", description: "Names a specific person/place, always capitalized.", examples: ["London", "John", "Google"] },
            { name: "Common Noun", description: "General names for things.", examples: ["City", "Boy", "Company"] },
            { name: "Collective Noun", description: "Names a group of people or things.", examples: ["Flock", "Family", "Audience"] },
            { name: "Abstract Noun", description: "Names ideas, qualities, or states.", examples: ["Freedom", "Beauty", "Patience"] }
        ],
        examples: [
            { sentence: "Paris is beautiful.", meaning: "Proper noun example", type: "Positive" },
            { sentence: "The teacher brought books.", meaning: "Common noun example", type: "Positive" }
        ],
        commonMistakes: [
            { wrong: "i live in london.", correct: "I live in London.", reason: "Proper nouns must be capitalized." }
        ],
        summary: "Nouns are the building blocks of sentences, naming everything around us.",
        practice: ["Classify these nouns: Happiness, Dog, Microsoft, Water, Team."]
    },
    {
        sequence: 4,
        level: "Level 1",
        title: "Pronoun",
        definition: "A pronoun is a word used in place of a noun to avoid repetition.",
        purpose: "To make sentences smoother and less repetitive.",
        types: [
            { name: "Personal Pronouns", description: "Refer to people or things.", examples: ["I", "You", "He", "She", "It", "We", "They"] },
            { name: "Possessive Pronouns", description: "Show ownership.", examples: ["Mine", "Yours", "His", "Hers", "Ours"] },
            { name: "Demonstrative Pronouns", description: "Point to specific things.", examples: ["This", "That", "These", "Those"] }
        ],
        rules: [
            "Pronouns must agree in gender and number with the noun they replace.",
            "Use 'subject' pronouns for the doer and 'object' pronouns for the receiver."
        ],
        examples: [
            { sentence: "John is tall. He plays basketball.", meaning: "Subjective pronoun", type: "Positive" },
            { sentence: "That book is mine.", meaning: "Possessive pronoun", type: "Positive" }
        ],
        practice: ["Replace nouns with pronouns: 'Sarah gave the gift to Sarah's brother.'"]
    },
    {
        sequence: 5,
        level: "Level 1",
        title: "Verb",
        definition: "A verb is an action word or a state of being.",
        purpose: "The engine of the sentence, expressing what happens.",
        types: [
            { name: "Action Verbs", description: "Physical or mental actions.", examples: ["Run", "Think", "Eat"] },
            { name: "State of Being Verbs", description: "Show a condition or identity.", examples: ["Is", "Am", "Are", "Was", "Were"] },
            { name: "Helping Verbs", description: "Assist the main verb.", examples: ["Has", "Have", "Will", "Can"] }
        ],
        structures: [
            { pattern: "Subject + Verb", explanation: "The most basic sentence structure." },
            { pattern: "Subject + Helping Verb + Main Verb", explanation: "For continuous or perfect tenses." }
        ],
        examples: [
            { sentence: "She runs fast.", meaning: "Action verb", type: "Positive" },
            { sentence: "I am a student.", meaning: "State of being verb", type: "Positive" }
        ],
        summary: "Every sentence must have at least one verb.",
        practice: ["Identify the verb: 'They have finished their homework.'"]
    },
    {
        sequence: 6,
        level: "Level 1",
        title: "Adjective",
        definition: "An adjective is a word that describes or modifies a noun or pronoun.",
        purpose: "To provide more detail about people, places, or things.",
        types: [
            { name: "Descriptive", description: "Describes quality.", examples: ["Tall", "Green", "Spicy"] },
            { name: "Quantitative", description: "Shows amount.", examples: ["Many", "Few", "Ten"] },
            { name: "Degrees of Comparison", description: "Comparing qualities.", examples: ["Big", "Bigger", "Biggest"] }
        ],
        rules: [
            "Adjectives usually come before the noun they describe.",
            "Order matters: Opinion > Size > Age > Shape > Color > Origin > Material > Purpose."
        ],
        examples: [
            { sentence: "The big blue house.", meaning: "Adjective order", type: "Positive" },
            { sentence: "He is taller than me.", meaning: "Comparative", type: "Positive" }
        ],
        practice: ["Give three adjectives to describe a 'Dog'."]
    },
    {
        sequence: 11,
        level: "Level 1",
        title: "Articles (a, an, the)",
        definition: "Articles are special adjectives used before nouns to show if they are specific or general.",
        purpose: "To clarify the reference of a noun.",
        rules: [
            "Use 'A' before consonant sounds.",
            "Use 'An' before vowel sounds.",
            "Use 'The' for specific/unique things.",
            "Zero Article: No article for general plurals or uncountable nouns (e.g., 'I love music')."
        ],
        types: [
            { name: "Indefinite Articles", description: "A, An - for any one of a kind.", examples: ["A book", "An orange"] },
            { name: "Definite Article", description: "The - for a specific thing.", examples: ["The sun", "The principal"] }
        ],
        examples: [
            { sentence: "An hour later, we left.", meaning: "Vowel sound 'h' is silent", type: "Positive" },
            { sentence: "A university in London.", meaning: "Consonant sound 'u' sounds like 'y'", type: "Positive" }
        ],
        summary: "Articles guide the listener's focus to either a general or specific noun.",
        practice: ["Fill in: '___ apple a day keeps ___ doctor away.'"]
    },
    {
        sequence: 19,
        level: "Level 2",
        title: "Tenses (MOST IMPORTANT)",
        definition: "Tense is the form of a verb that shows the time of an action.",
        purpose: "To communicate when an event occurred (Past, Present, or Future).",
        rules: [
            "There are 12 main tenses in English.",
            "Each tense has a specific structure using helping verbs and verb forms."
        ],
        summary: "Mastering tenses is the key to clear communication in English.",
        practice: ["List the 12 tenses in order."]
    }
];

async function seed() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000,
        });
        console.log("Connected to DB for seeding grammar...");

        console.log("Attempting to clear existing grammar data...");
        await Grammar.deleteMany({});
        console.log("Cleared existing grammar data.");

        console.log("Attempting to insert grammar data...");
        await Grammar.insertMany(grammarData);
        console.log("Seeded " + grammarData.length + " grammar topics successfully!");

        process.exit();
    } catch (err) {
        console.error("Seeding Error Details:", JSON.stringify(err, null, 2));
        console.error("Seeding Error Message:", err.message);
        process.exit(1);
    }
}

seed();
