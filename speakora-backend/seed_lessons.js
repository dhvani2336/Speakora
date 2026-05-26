const mongoose = require("mongoose");
const Lesson = require("./models/Lesson");
const LESSONS_DATABASE = require("../js/lesson-data");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI || process.env.MONGODB_URI)
    .then(async () => {
        console.log("Connected to DB...");
        await Lesson.deleteMany({ language: "English" });
        await Lesson.insertMany(LESSONS_DATABASE);
        console.log(`Seeded database with ${LESSONS_DATABASE.length} high-quality lessons from lesson-data.js successfully!`);
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });


