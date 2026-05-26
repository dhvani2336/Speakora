const express = require('express');
const router = express.Router();
const VocabWord = require('../models/VocabWord');

// Get all vocab words, optionally filtered by level
router.get('/', async (req, res) => {
    try {
        const { level } = req.query;
        let query = {};
        if (level) {
            query.level = level;
        }

        // We fetch words randomly depending on how you want them served
        // For testing we will just pull all words of the level format them randomly
        const words = await VocabWord.aggregate([
            { $match: query },
            { $sample: { size: 60 } }
        ]);

        res.json(words);
    } catch (error) {
        console.error("Vocabulary fetch error:", error);
        res.status(500).json({ message: "Server Error fetching vocabulary" });
    }
});

module.exports = router;
