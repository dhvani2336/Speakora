const mongoose = require("mongoose");
const dns = require('dns');
require("dotenv").config();

// Force DNS to use Google's servers to bypass local DNS issues with SRV
dns.setServers(['8.8.8.8', '8.8.4.4']);

console.log("Connecting with custom DNS...");
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("SUCCESS: MongoDB Connected with custom DNS");
    process.exit(0);
  })
  .catch(err => {
    console.error("FAILURE:", err);
    process.exit(1);
  });
