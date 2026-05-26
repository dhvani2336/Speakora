const mongoose = require("mongoose");
const Lesson = require("./models/Lesson");
require("dotenv").config();

async function checkLessons() {
    try {
        await mongoose.connect(process.env.MONGO_URI || process.env.MONGODB_URI);
        console.log("Connected to MongoDB...");

        const count = await Lesson.countDocuments({ language: "English" });
        console.log("Total English Lessons:", count);

        const latest = await Lesson.find({ language: "English" }).sort({ order: -1 }).limit(1);
        console.log("Latest Lesson:", latest[0]?.title);

        mongoose.connection.close();
    } catch (err) {
        console.error("Verification Error:", err);
    }
}

checkLessons();
