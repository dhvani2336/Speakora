const mongoose = require("mongoose");
const Speaking = require("./models/Speaking");
require("dotenv").config();

const SPEAKING_DATA = [
    // BUSINESS
    { category: "Business", sentence: "I look forward to our meeting next week.", difficulty: "Intermediate" },
    { category: "Business", sentence: "Could you please send me the updated project proposal?", difficulty: "Intermediate" },
    { category: "Business", sentence: "We need to discuss the budget for the upcoming quarter.", difficulty: "Advanced" },
    { category: "Business", sentence: "Thank you for your valuable feedback on the presentation.", difficulty: "Intermediate" },
    { category: "Business", sentence: "Let's schedule a follow-up call to finalize the details.", difficulty: "Intermediate" },

    // DAILY LIFE
    { category: "Daily Life", sentence: "How was your day at work today?", difficulty: "Beginner" },
    { category: "Daily Life", sentence: "I'm going to the grocery store, do you need anything?", difficulty: "Beginner" },
    { category: "Daily Life", sentence: "It's a beautiful day to go for a walk in the park.", difficulty: "Beginner" },
    { category: "Daily Life", sentence: "What would you like to have for dinner tonight?", difficulty: "Beginner" },
    { category: "Daily Life", sentence: "I need to wake up early tomorrow for my appointment.", difficulty: "Beginner" },

    // TRAVEL
    { category: "Travel", sentence: "Where is the nearest subway station?", difficulty: "Beginner" },
    { category: "Travel", sentence: "I'd like to book a room for three nights, please.", difficulty: "Intermediate" },
    { category: "Travel", sentence: "Could you recommend a good local restaurant nearby?", difficulty: "Intermediate" },
    { category: "Travel", sentence: "What time does the flight to London depart?", difficulty: "Intermediate" },
    { category: "Travel", sentence: "I've always wanted to visit the historical landmarks in this city.", difficulty: "Advanced" },

    // INTERVIEW
    { category: "Interview", sentence: "Tell me about your previous work experience.", difficulty: "Intermediate" },
    { category: "Interview", sentence: "What are your greatest professional strengths?", difficulty: "Intermediate" },
    { category: "Interview", sentence: "Why are you interested in joining our company?", difficulty: "Advanced" },
    { category: "Interview", sentence: "How do you handle high-pressure situations at work?", difficulty: "Advanced" },
    { category: "Interview", sentence: "Where do you see yourself in the next five years?", difficulty: "Advanced" },

    // LESSONS
    { category: "Lessons", sentence: "Greetings are the foundation of any conversation.", difficulty: "Beginner" },
    { category: "Lessons", sentence: "A good introduction follows a simple structure: Present, Past, and Future.", difficulty: "Intermediate" },
    { category: "Lessons", sentence: "We use the Present Simple for things we do regularly.", difficulty: "Intermediate" },
    { category: "Lessons", sentence: "The rise of remote work is decentralizing urban populations.", difficulty: "Advanced" },
    { category: "Lessons", sentence: "Deepfakes pose a serious threat to information integrity.", difficulty: "Advanced" },

    // GRAMMAR
    { category: "Grammar", sentence: "The quick brown fox jumps over the lazy dog.", difficulty: "Beginner" },
    { category: "Grammar", sentence: "Honesty is the best policy.", difficulty: "Beginner" },
    { category: "Grammar", sentence: "Rahul is a pilot. He flies planes.", difficulty: "Beginner" },
    { category: "Grammar", sentence: "She ran very quickly yesterday.", difficulty: "Intermediate" },
    { category: "Grammar", sentence: "Although it was raining, we went out.", difficulty: "Intermediate" },

    // VOCABULARY
    { category: "Vocabulary", sentence: "You should believe in yourself.", difficulty: "Beginner" },
    { category: "Vocabulary", sentence: "Paris is a popular tourist destination.", difficulty: "Intermediate" },
    { category: "Vocabulary", sentence: "The company has seen steady growth.", difficulty: "Intermediate" },
    { category: "Vocabulary", sentence: "I accidentally let the cat out of the bag.", difficulty: "Advanced" },
    { category: "Vocabulary", sentence: "Every cloud has a silver lining.", difficulty: "Advanced" }
];

async function seedDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI || process.env.MONGODB_URI);
        console.log("Connected to MongoDB for seeding...");

        // Clear existing data
        await Speaking.deleteMany({});
        console.log("Cleared existing speaking data.");

        // Insert new data
        await Speaking.insertMany(SPEAKING_DATA);
        console.log(`Successfully seeded ${SPEAKING_DATA.length} speaking sentences!`);

        mongoose.connection.close();
        console.log("DB Connection closed.");
    } catch (err) {
        console.error("Error seeding DB:", err);
        process.exit(1);
    }
}

seedDB();
