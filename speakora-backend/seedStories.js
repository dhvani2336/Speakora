const mongoose = require('mongoose');
const Story = require('./models/Story');
const READING_DATABASE = require('../js/reading-data');
const dns = require('dns');
require('dotenv').config();

// Set DNS servers to bypass local network issues with MongoDB SRV records
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/speakora');
        console.log("Connected to MongoDB for seeding");

        await Story.deleteMany({});
        console.log("Cleared existing stories");

        // Format data for MongoDB (remove 'id' which is used for local fallback)
        const mongoStories = READING_DATABASE.map(s => {
            const { id, ...rest } = s;
            return rest;
        });

        await Story.insertMany(mongoStories);
        console.log(`Seeded database with ${mongoStories.length} stories`);

        mongoose.connection.close();
        console.log("Database connection closed");
    } catch (error) {
        if (error.name === 'ValidationError') {
            console.error("Validation Error Details:");
            for (let field in error.errors) {
                console.error(`${field}: ${error.errors[field].message}`);
            }
        } else {
            console.error("Error seeding database:", error);
        }
        process.exit(1);
    }
};

seedDB();
