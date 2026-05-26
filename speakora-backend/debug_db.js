const mongoose = require("mongoose");
require("dotenv").config();
const Lesson = require("./models/Lesson");

async function checkDB() {
    try {
        console.log("Connecting to DB...");
        console.log("URI:", process.env.MONGO_URI); // Log URI to be sure (mask password if needed)
        
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected successfully!");

        const count = await Lesson.countDocuments();
        console.log(`Total lessons in DB: ${count}`);

        const englishLessons = await Lesson.countDocuments({ language: "English" });
        console.log(`English lessons: ${englishLessons}`);

        if (count === 0) {
            console.log("Database is empty. You should run 'node seed_lessons.js'");
        } else {
            const sample = await Lesson.findOne();
            console.log("Sample lesson:", sample);
        }

    } catch (err) {
        console.error("DB Connection Error:", err);
    } finally {
        await mongoose.disconnect();
    }
}

checkDB();
