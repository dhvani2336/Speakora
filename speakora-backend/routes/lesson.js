const express = require("express");
const router = express.Router();
const Lesson = require("../models/Lesson");

// Get all lessons for a specific language
router.get("/lang/:language", async (req, res) => {
    try {
        const langRegex = new RegExp(`^${req.params.language}$`, 'i');
        const lessons = await Lesson.find({ language: langRegex }).sort({ order: 1 });
        res.json(lessons);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a specific lesson by ID
router.get("/:id", async (req, res) => {
    try {
        const lesson = await Lesson.findById(req.params.id);
        if (!lesson) return res.status(404).json({ message: "Lesson not found" });
        res.json(lesson);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
