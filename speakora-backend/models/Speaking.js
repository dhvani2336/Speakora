const mongoose = require("mongoose");

const SpeakingSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    sentence: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        enum: ["Beginner", "Intermediate", "Advanced"],
        default: "Beginner"
    },
    language: {
        type: String,
        default: "English"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Speaking", SpeakingSchema);
