const mongoose = require("mongoose");

const LessonSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    level: {
        type: String, // Beginner, Intermediate, Advanced
        required: true
    },
    description: {
        type: String,
        required: true
    },
    content: {
        type: Array, // Array of objects or strings explaining the lesson
        default: []
    },
    exercises: {
        type: Array, // Array of objects { question, options, answer }
        default: []
    },
    order: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Lesson", LessonSchema);
