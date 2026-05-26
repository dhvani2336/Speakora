const express = require("express");
const router = express.Router();
const Pronunciation = require("../models/Pronunciation");

// Get all topics
router.get("/topics", async (req, res) => {
    try {
        const topics = await Pronunciation.find();
        res.json(topics);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
