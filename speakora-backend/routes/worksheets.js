const express = require('express');
const router = express.Router();
const Worksheet = require('../models/Worksheet');

// Get all worksheets
router.get('/', async (req, res) => {
    try {
        const worksheets = await Worksheet.find().sort({ createdAt: -1 });
        res.json(worksheets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get worksheet by ID
router.get('/:id', async (req, res) => {
    try {
        const worksheet = await Worksheet.findById(req.params.id);
        if (!worksheet) return res.status(404).json({ message: 'Worksheet not found' });
        res.json(worksheet);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
