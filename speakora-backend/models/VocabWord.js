const mongoose = require('mongoose');

const vocabWordSchema = new mongoose.Schema({
  word: { type: String, required: true },
  meaning: { type: String, required: true },
  hint: { type: String, required: true },
  level: { type: String, enum: ['easy', 'medium', 'advanced'], required: true },
});

module.exports = mongoose.model('VocabWord', vocabWordSchema);
