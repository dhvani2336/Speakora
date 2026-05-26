const mongoose = require("mongoose");
const dns = require("dns");
require("dotenv").config();

async function test() {
    console.log("Setting DNS...");
    dns.setServers(["8.8.8.8", "8.8.4.4"]);

    console.log("Connecting to:", process.env.MONGO_URI);
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000,
        });
        console.log("SUCCESS: Connected to MongoDB");
        await mongoose.connection.close();
        process.exit(0);
    } catch (err) {
        console.error("FAILURE: Could not connect to MongoDB");
        console.error(err);
        process.exit(1);
    }
}

test();
