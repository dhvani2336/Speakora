const express = require("express");
const router = express.Router();
const Grammar = require("../models/Grammar");

// Get all grammar topics sorted by sequence
router.get("/", async (req, res) => {
    try {
        const grammar = await Grammar.find().sort({ sequence: 1 });
        res.json(grammar);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get grammar by level
router.get("/level/:level", async (req, res) => {
    try {
        const grammar = await Grammar.find({ level: req.params.level }).sort({ sequence: 1 });
        res.json(grammar);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
