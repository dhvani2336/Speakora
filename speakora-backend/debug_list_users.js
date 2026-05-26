const mongoose = require("mongoose");
const User = require("./models/user");
require("dotenv").config();

console.log("Connecting to:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log("Connected. Fetching users...");
        const users = await User.find({});
        console.log("--- REGISTERED USERS ---");
        users.forEach(u => {
            console.log(`Email: '${u.email}' | Password: '${u.password}' | Name: '${u.name}'`);
        });
        console.log("------------------------");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
