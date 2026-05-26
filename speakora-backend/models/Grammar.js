const mongoose = require("mongoose");

const GrammarSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    level: {
        type: String, // Level 1, Level 2, etc.
        required: true
    },
    sequence: {
        type: Number,
        required: true
    },
    definition: String,
    purpose: String,
    rules: [String],
    types: [{
        name: String,
        description: String,
        examples: [String]
    }],
    structures: [{
        pattern: String,
        explanation: String
    }],
    examples: [{
        sentence: String,
        meaning: String,
        type: { type: String } // Positive, Negative, Question
    }],
    commonMistakes: [{
        wrong: String,
        correct: String,
        reason: String
    }],
    summary: String,
    practice: [String],
    notes: String
});

module.exports = mongoose.model("Grammar", GrammarSchema);
