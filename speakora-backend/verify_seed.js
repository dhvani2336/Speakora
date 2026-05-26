const mongoose = require("mongoose");
const Lesson = require("./models/Lesson");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI || process.env.MONGODB_URI)
    .then(async () => {
        const count = await Lesson.countDocuments({ language: "English" });
        console.log(`Total English Lessons: ${count}`);
        const lessons = await Lesson.find({ language: "English" }).select("title");
        lessons.forEach((l, i) => console.log(`${i + 1}. ${l.title}`));
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
