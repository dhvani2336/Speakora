const mongoose = require("mongoose");
const Speaking = require("./models/Speaking");
const SpeakingResult = require("./models/SpeakingResult");
require("dotenv").config();

async function verify() {
    try {
        await mongoose.connect(process.env.MONGO_URI || process.env.MONGODB_URI);
        console.log("Connected to MongoDB for verification...");

        const categories = await Speaking.distinct("category");
        console.log("Available Categories:", categories);

        const sentencesCount = await Speaking.countDocuments();
        console.log("Total Sentences:", sentencesCount);

        const results = await SpeakingResult.find().limit(5);
        console.log("Recent Results (First 5):", results);

        mongoose.connection.close();
    } catch (err) {
        console.error("Verification Error:", err);
        process.exit(1);
    }
}

verify();
