const mongoose = require("mongoose");
const Lesson = require("./models/Lesson");
require("dotenv").config();

console.log("Connecting to:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log("Connected to DB");
        console.log("Database Name:", mongoose.connection.name);

        try {
            const count = await Lesson.countDocuments();
            console.log("Total Lessons:", count);

            if (count > 0) {
                const sample = await Lesson.findOne();
                console.log("Sample Lesson:", JSON.stringify(sample, null, 2));
            }
        } catch (err) {
            console.error("Error counting lessons:", err);
        } finally {
            mongoose.disconnect();
        }
    })
    .catch(err => {
        console.error("Connection Error:", err);
    });
