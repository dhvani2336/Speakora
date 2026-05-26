const mongoose = require('mongoose');

const worksheetSchema = new mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    topic: {
        type: String,
        required: true,
        enum: [
            'Parts of Speech', 'Tenses', 'Articles',
            'Active–Passive', 'Direct–Indirect', 'Vocabulary',
            'Sentence Formation', 'Paragraph Writing', 'Letter / Email Writing'
        ]
    },
    level: {
        type: String,
        required: true,
        enum: ['Beginner', 'Intermediate']
    },
    difficulty: {
        type: String,
        required: true,
        enum: ['Easy', 'Medium', 'Hard']
    },
    description: { type: String, required: true },
    questions: [{
        type: {
            type: String,
            enum: ['MCQ', 'Fill in the blanks', 'Match the following', 'Rewrite sentence', 'Make sentence', 'Short paragraph writing']
        },
        question: String,
        options: [String], // For MCQ
        correctAnswer: String,
        explanation: String,
        matchPairs: [{ left: String, right: String }] // For Match the following
    }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Worksheet', worksheetSchema);
