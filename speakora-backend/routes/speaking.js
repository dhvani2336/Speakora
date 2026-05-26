const express = require("express");
const router = express.Router();
const Speaking = require("../models/Speaking");

const SpeakingResult = require("../models/SpeakingResult");

// Get all unique categories
router.get("/categories", async (req, res) => {
    try {
        const categories = await Speaking.distinct("category");
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Save a practice result
router.post("/result", async (req, res) => {
    try {
        const { user, sentence, score, category } = req.body;
        const result = new SpeakingResult({
            user,
            sentence,
            score,
            category
        });
        await result.save();
        res.status(201).json({ message: "Result saved locally", result });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get sentences for a specific category
router.get("/category/:category", async (req, res) => {
    try {
        const sentences = await Speaking.find({
            category: req.params.category
        }).sort({ difficulty: 1 });
        res.json(sentences);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
