const express = require('express');
const router = express.Router();
const SentenceQuestion = require('../models/SentenceQuestion');

// Get sentence questions by level
router.get('/', async (req, res) => {
    try {
        const { level } = req.query;
        if (!level || !['easy', 'medium', 'hard'].includes(level)) {
            return res.status(400).json({ message: "Valid level (easy, medium, hard) is required" });
        }

        // Fetch exactly 25 making_sentence and 25 fill_blanks for the level, randomized
        const makingSentences = await SentenceQuestion.aggregate([
            { $match: { level, type: 'making_sentence' } },
            { $sample: { size: 25 } }
        ]);

        const fillBlanks = await SentenceQuestion.aggregate([
            { $match: { level, type: 'fill_blanks' } },
            { $sample: { size: 25 } }
        ]);

        // Combine them into a single array (we can decide order, e.g., all 25 making then 25 fill)
        const allQuestions = [...makingSentences, ...fillBlanks];

        res.json(allQuestions);
    } catch (error) {
        console.error("Sentence questions fetch error:", error);
        res.status(500).json({ message: "Server Error fetching sentence questions" });
    }
});

module.exports = router;
