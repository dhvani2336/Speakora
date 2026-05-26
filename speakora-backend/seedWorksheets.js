const mongoose = require("mongoose");
const dns = require("dns");
require("dotenv").config();
const Worksheet = require("./models/Worksheet");
const WORKSHEETS_DATABASE = require("../js/worksheets-data");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

async function seed() {
    try {
        await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 });
        console.log("Connected to MongoDB for Worksheets seeding...");

        await Worksheet.deleteMany({});
        await Worksheet.insertMany(WORKSHEETS_DATABASE);

        console.log(`Successfully seeded ${WORKSHEETS_DATABASE.length} worksheets!`);
        process.exit();
    } catch (err) {
        console.error("Seeding Error:", err);
        process.exit(1);
    }
}

seed();
