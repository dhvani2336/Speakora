const mongoose = require("mongoose");

const VocabularySchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    icon: String,
    description: String,
    isGuide: {
        type: Boolean,
        default: false
    },
    content: mongoose.Schema.Types.Mixed, // For the master guide structure
    words: [{
        word: String,
        phonetic: String,
        meaning: String,
        hindi: String,
        examples: [String],
        synonyms: [String],
        antonyms: [String]
    }]
}, { strict: false }); // Using strict: false to allow for the varied content structure

module.exports = mongoose.model("Vocabulary", VocabularySchema);
