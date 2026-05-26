const express = require('express');
const router = express.Router();
const ListeningQuestion = require('../models/ListeningQuestion');

// Get listening exercises filtered by level and type
router.get('/', async (req, res) => {
    try {
        const { level, type } = req.query;
        let query = {};
        if (level) query.level = level;
        if (type) query.type = type;

        // Fetch a few examples randomly for the test interface
        const questions = await ListeningQuestion.aggregate([
            { $match: query },
            { $sample: { size: 10 } }
        ]);

        res.json(questions);
    } catch (error) {
        console.error("Listening fetch error:", error);
        res.status(500).json({ message: "Server Error fetching listening questions" });
    }
});

module.exports = router;
