const mongoose = require('mongoose');

const sentenceQuestionSchema = new mongoose.Schema({
    level: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
    type: { type: String, enum: ['making_sentence', 'fill_blanks'], required: true },
    question: { type: String, required: true },
    options: { type: [String], default: [] }, // Used for fill_blanks (e.g., ["go", "goes"])
    correctAnswer: { type: String, required: true },
    explanation: { type: String, required: true }
});

module.exports = mongoose.model('SentenceQuestion', sentenceQuestionSchema);
