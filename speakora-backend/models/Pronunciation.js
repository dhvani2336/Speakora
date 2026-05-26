const mongoose = require("mongoose");

const PronunciationSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    level: {
        type: String,
        enum: ["Beginner", "Intermediate", "Advanced"],
        required: true
    },
    category: {
        type: String,
        default: "General"
    },
    ideas: [String], // Prompts or points to cover
    description: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Pronunciation", PronunciationSchema);
