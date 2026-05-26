const mongoose = require("mongoose");

const TipSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        enum: ["Grammar", "Vocabulary", "Reading", "Speaking", "Pronunciation", "General Studies"]
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        default: "💡"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Tip", TipSchema);
