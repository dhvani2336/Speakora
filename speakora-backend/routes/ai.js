const express = require("express");
const router = express.Router();
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

router.get("/ping", (req, res) => {
    res.json({ message: "AI route is active" });
});

router.post("/chat", async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: "Message is required" });
    }

    try {
        console.log("Sending direct fetch to Gemini Flash Latest (v1beta)...");

        const apiKey = process.env.GEMINI_API_KEY;
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`;

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: `Provide a direct one-sentence English vocabulary explanation for: ${message}` }]
                }]
            })
        });

        const data = await response.json();

        if (data.candidates && data.candidates[0].content && data.candidates[0].content.parts[0]) {
            const reply = data.candidates[0].content.parts[0].text;
            res.json({ reply: reply.trim() });
        } else {
            console.error("Gemini Error:", data);
            res.status(500).json({ error: "AI error", details: data.error ? data.error.message : "Invalid response" });
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        res.status(500).json({ error: "Connection error", details: error.message });
    }
});

module.exports = router;

module.exports = router;
