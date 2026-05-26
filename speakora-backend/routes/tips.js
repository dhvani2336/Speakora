const express = require("express");
const router = express.Router();
const Tip = require("../models/Tip");

// Get all tips
router.get("/all", async (req, res) => {
    try {
        const tips = await Tip.find();
        res.json(tips);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
