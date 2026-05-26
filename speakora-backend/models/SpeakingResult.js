const mongoose = require("mongoose");

const SpeakingResultSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    sentence: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("SpeakingResult", SpeakingResultSchema);
