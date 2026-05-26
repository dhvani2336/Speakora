const mongoose = require("mongoose");
const Lesson = require("./models/Lesson");
const LESSONS_DATABASE = require("../js/lesson-data");
require("dotenv").config();

async function robustSeed() {
    try {
        console.log("Connecting to DB for robust seeding...");
        await mongoose.connect(process.env.MONGO_URI || process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });
        console.log("Connected.");

        console.log("Cleaning up English lessons...");
        await Lesson.deleteMany({ language: "English" });
        console.log("Cleanup complete.");

        console.log(`Starting insertion of ${LESSONS_DATABASE.length} lessons...`);

        // Insert one by one to avoid large payload if network is flaky
        for (const lesson of LESSONS_DATABASE) {
            await Lesson.create(lesson);
            console.log(`Inserted: ${lesson.title}`);
        }

        console.log("Seeding complete successfully!");
        mongoose.connection.close();
    } catch (err) {
        console.error("Robust Seeding Failed:", err);
        process.exit(1);
    }
}

robustSeed();
