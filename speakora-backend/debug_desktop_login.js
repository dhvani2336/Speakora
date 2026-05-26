const mongoose = require("mongoose");
const User = require("./models/User");
require("dotenv").config();

console.log("URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log("Connected to DB...");
        const email = "dhvanipadaliya23@gmail.com";
        /* Case insensitive search */
        const user = await User.findOne({
            email: { $regex: new RegExp(`^${email.trim()}$`, 'i') }
        });

        if (user) {
            console.log("User FOUND:", user.email);
            console.log("Password:", user.password); // Checking plain text
        } else {
            console.log("User NOT found:", email);
        }

        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
