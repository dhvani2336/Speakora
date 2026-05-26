const mongoose = require("mongoose");
const dns = require("dns");
require("dotenv").config();
const Vocabulary = require("./models/Vocabulary");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const VOCABULARY_DATABASE = [
    {
        id: "master-guide",
        category: "Master Guide",
        icon: "📖",
        isGuide: true,
        description: "Everything you need to know about learning vocabulary effectively.",
        content: {
            definition: "Vocabulary means all the words of a language that we understand and use.",
            benefits: ["Speak confidently", "Write clearly", "Understand media", "Score better", "Express emotions"],
            whatIsVocab: [
                { label: "Meaning", desc: "Knowing what the word represents." },
                { label: "Usage", desc: "Knowing how the word fits." },
                { label: "Grammar Role", desc: "Noun, verb, etc." },
                { label: "Context", desc: "When and where to use it." }
            ]
        }
    },
    {
        id: "daily-verbs",
        category: "Essential Verbs",
        icon: "🏃",
        words: [
            { word: "Achieve", meaning: "To successfully finish something.", hindi: "हासिल करना" },
            { word: "Believe", meaning: "To think something is true.", hindi: "विश्वास करना" },
            { word: "Communicate", meaning: "To share information.", hindi: "संवाद करना" },
            { word: "Describe", meaning: "To say what something is like.", hindi: "वर्णन करना" },
            { word: "Explain", meaning: "To make something clear.", hindi: "समझाना" }
        ]
    },
    {
        id: "emotions",
        category: "Feeling & Emotions",
        icon: "🎭",
        words: [
            { word: "Anxious", meaning: "Feeling worried.", hindi: "चिंतित" },
            { word: "Confident", meaning: "Sure of abilities.", hindi: "आत्मविश्वासी" },
            { word: "Grateful", meaning: "Showing appreciation.", hindi: "आभारी" }
        ]
    },
    {
        id: "travel",
        category: "Travel & Tourism",
        icon: "✈️",
        words: [
            { word: "Destination", meaning: "Place where going.", hindi: "गंतव्य" },
            { word: "Itinerary", meaning: "Planned route.", hindi: "यात्रा कार्यक्रम" }
        ]
    },
    {
        id: "business",
        category: "Business & Professional",
        icon: "💼",
        words: [
            { word: "Collaborate", meaning: "Work together.", hindi: "सहयोग करना" },
            { word: "Negotiate", meaning: "Reach agreement.", hindi: "मोलभाव करना" }
        ]
    },
    {
        id: "phrasal-verbs",
        category: "Common Phrasal Verbs",
        icon: "🔗",
        words: [
            { word: "Bring up", meaning: "Mention a subject.", hindi: "चर्चा करना" },
            { word: "Call off", meaning: "Cancel something.", hindi: "रद्द करना" }
        ]
    },
    {
        id: "health",
        category: "Health & Wellness",
        icon: "🧘",
        words: [
            { word: "Symptoms", meaning: "Signs of problems.", hindi: "लक्षण" },
            { word: "Recovery", meaning: "Return to health.", hindi: "सुधार" }
        ]
    },
    {
        id: "food",
        category: "Food & Dining",
        icon: "🍽️",
        words: [
            { word: "Cuisine", meaning: "Style of cooking.", hindi: "व्यंजन शैली" },
            { word: "Delicious", meaning: "Pleasant to taste.", hindi: "स्वादिष्ट" }
        ]
    },
    {
        id: "technology",
        category: "Technology & Digital",
        icon: "💻",
        words: [
            { word: "Algorithm", meaning: "Rules for solving.", hindi: "कलन विधि" },
            { word: "Software", meaning: "Computer programs.", hindi: "सॉफ्टवेयर" }
        ]
    },
    {
        id: "education",
        category: "Education & Learning",
        icon: "🎓",
        words: [
            { word: "Academic", meaning: "Relating to education.", hindi: "शैक्षिक" },
            { word: "Curriculum", meaning: "Subjects in a course.", hindi: "पाठ्यक्रम" }
        ]
    },
    {
        id: "nature",
        category: "Nature & Environment",
        icon: "🌿",
        words: [
            { word: "Atmosphere", meaning: "Gases surrounding Earth.", hindi: "वायुमंडल" },
            { word: "Biodiversity", meaning: "Variety of life.", hindi: "जैव विविधता" }
        ]
    },
    {
        id: "idioms",
        category: "Idioms & Phrases",
        icon: "🗣️",
        words: [
            { word: "Piece of cake", meaning: "Very easy.", hindi: "बहुत आसान काम" },
            { word: "Under the weather", meaning: "Feeling unwell.", hindi: "तबीयत खराब होना" }
        ]
    }
];

async function seed() {
    try {
        await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 });
        console.log("Connected to DB...");
        await Vocabulary.deleteMany({});
        await Vocabulary.insertMany(VOCABULARY_DATABASE);
        console.log("Vocabulary seeded with ALL categories successfully!");
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}
seed();
