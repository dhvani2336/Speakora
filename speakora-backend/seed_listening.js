const mongoose = require('mongoose');
const dotenv = require('dotenv');
const dns = require('dns');

// Set DNS servers
dns.setServers(['8.8.8.8', '8.8.4.4']);

dotenv.config();

const ListeningQuestion = require('./models/ListeningQuestion');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const audios = [
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
];

function generateMCQ(level, index) {
    let questions = [];
    for (let i = 1; i <= 10; i++) {
        questions.push({
            questionText: `Question ${i} regarding the audio for ${level} level. What is discussed?`,
            options: ['Option A', 'Option B', 'Option C', 'Option D'],
            correctAnswer: 'Option A',
            explanation: `The audio explicitly mentioned Option A in the context of question ${i}.`
        });
    }
    return {
        level: level,
        type: 'mcq',
        audioUrl: audios[index % audios.length],
        transcript: `This is a full transcript for the MCQ audio at the ${level} level (item ${index}). It contains multiple sentences describing the topic in detail so that all 10 questions can be answered.`,
        questions: questions,
        difficultWords: [{ word: 'Example', meaning: 'A representative form' }]
    };
}

function generateFillBlanks(level, index) {
    return {
        level: level,
        type: 'fill_blanks',
        audioUrl: audios[index % audios.length],
        transcript: `The sun rises in the east and sets in the west. Birds fly high in the blue sky. We should always drink plenty of water to stay healthy. Exercise is good for the body. Reading books improves our mind. The ocean is vast and deep. Mountains are tall and majestic. Friends are important in life. Time flies when you are having fun. Always try your best.`,
        blankText: `The sun ___ in the east and sets in the west. Birds ___ high in the blue sky. We should always ___ plenty of water to stay healthy. Exercise is ___ for the body. Reading books ___ our mind. The ocean is ___ and deep. Mountains are ___ and majestic. Friends are ___ in life. Time ___ when you are having fun. Always ___ your best.`,
        blankAnswers: ['rises', 'fly', 'drink', 'good', 'improves', 'vast', 'tall', 'important', 'flies', 'try'],
        difficultWords: []
    };
}

function generateDictation(level, index) {
    return {
        level: level,
        type: 'dictation',
        audioUrl: audios[index % audios.length],
        transcript: `This is a full paragraph for the dictation exercise. Dictation requires the student to listen carefully and type exactly what they hear without any mistakes. In this exercise, the audio will play a continuous stream of words forming complete sentences. Students must pay attention to punctuation and spelling. This is excellent practice for real-world listening comprehension.`,
        difficultWords: []
    };
}

const listeningQuestions = [];
const levels = ['easy', 'medium', 'advanced'];

// Generate 4 items per level per activity type
levels.forEach(level => {
    for (let i = 1; i <= 4; i++) {
        listeningQuestions.push(generateMCQ(level, i));
        listeningQuestions.push(generateFillBlanks(level, i));
        listeningQuestions.push(generateDictation(level, i));
    }
});

async function seedListening() {
    try {
        await ListeningQuestion.deleteMany({});
        console.log('Existing listening questions cleared.');

        await ListeningQuestion.insertMany(listeningQuestions);
        console.log(`Successfully seeded ${listeningQuestions.length} listening questions!`);

        process.exit(0);
    } catch (error) {
        console.error('Error seeding questions:', error);
        process.exit(1);
    }
}

seedListening();
