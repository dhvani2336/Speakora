const mongoose = require('mongoose');

const listeningQuestionSchema = new mongoose.Schema({
    level: {
        type: String,
        enum: ['easy', 'medium', 'advanced'],
        required: true
    },
    type: {
        type: String,
        enum: ['short_answer', 'dictation'],
        required: true
    },
    audioUrl: {
        type: String,
        required: true
    },
    transcript: {
        type: String,
        required: true
    },
    // For Short Answer
    questions: [{
        questionText: String,
        options: [String],
        correctAnswer: String,
        explanation: String
    }],
    // Metadata
    difficultWords: [{
        word: String,
        meaning: String
    }]
});

module.exports = mongoose.model('ListeningQuestion', listeningQuestionSchema);
