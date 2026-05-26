const mongoose = require("mongoose");
const Tip = require("./models/Tip");
const dns = require("dns");
require("dotenv").config();

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const TIPS_DATA = [
    {
        category: "Grammar",
        title: "Mastering Tenses",
        content: "Don't try to learn all tenses at once. Focus on Present Simple, Past Simple, and Future Simple first. Use them in your daily journal to build muscle memory.",
        icon: "📘"
    },
    {
        category: "Vocabulary",
        title: "The Power of Context",
        content: "Instead of memorizing lists of words, learn them through sentences. When you find a new word, write three sentences about your own life using that word.",
        icon: "📗"
    },
    {
        category: "Speaking",
        title: "Record and Review",
        content: "Recording yourself is the fastest way to improve. Listen to your recordings in the Pronunciation Lab and compare them with the transcript to find your common mistakes.",
        icon: "🗣️"
    },
    {
        category: "Reading",
        title: "Don't Translate",
        content: "When reading stories, try to understand the meaning from the context instead of translating every word. This helps you start thinking in English.",
        icon: "📕"
    },
    {
        category: "Pronunciation",
        title: "The Mirror Technique",
        content: "Watch your mouth in the mirror while practicing difficult sounds like 'th' or 'r'. Compare your mouth movements with native speaker videos.",
        icon: "👄"
    },
    {
        category: "General Studies",
        title: "Consistency > Intensity",
        content: "Practicing for 15 minutes every single day is much more effective than studying for 4 hours once a week. Make Speakora a part of your daily routine.",
        icon: "⚡"
    },
    {
        category: "Vocabulary",
        title: "Label Your House",
        content: "Put sticky notes on items around your house with their English names. Every time you use the item, say the name out loud.",
        icon: "🏷️"
    },
    {
        category: "Speaking",
        title: "Shadowing Technique",
        content: "Listen to a native speaker and repeat what they say immediately after, mimicking their rhythm, stress, and intonation as closely as possible.",
        icon: "👥"
    },
    {
        category: "Grammar",
        title: "Think in Chunks",
        content: "Instead of learning individual grammar rules, learn common phrases or 'chunks'. For example, learn 'I have been to...' as a single unit.",
        icon: "🧱"
    },
    {
        category: "Reading",
        title: "Read Out Loud",
        content: "Reading out loud combines reading, speaking, and listening. It helps you get used to the sound of your own voice in English.",
        icon: "📢"
    }
];

async function seedDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI || process.env.MONGODB_URI);
        console.log("Connected to MongoDB for Tips Seeding...");

        await Tip.deleteMany({});
        console.log("Cleared existing tips.");

        await Tip.insertMany(TIPS_DATA);
        console.log(`Successfully seeded ${TIPS_DATA.length} tips!`);

        mongoose.connection.close();
        console.log("DB Connection closed.");
    } catch (err) {
        console.error("Error seeding Tips DB:", err);
        process.exit(1);
    }
}

seedDB();
