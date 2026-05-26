const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true, enum: ['Beginner', 'Intermediate', 'Advanced'] },
    image: { type: String, required: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    questions: [{
        question: String,
        options: [String],
        correctAnswer: Number, // Index of option
        explanation: String
    }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Story', storySchema);
