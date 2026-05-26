const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dns = require("dns");
require("dotenv").config({ path: __dirname + "/.env" });

// Set DNS servers to bypass local network issues with MongoDB SRV records
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch(err => console.log("MongoDB Error:", err));

const path = require("path");

app.use("/api/user", require("./routes/user"));
app.use("/api/lessons", require("./routes/lesson"));
app.use("/api/grammar", require("./routes/grammar"));
app.use("/api/speaking", require("./routes/speaking"));
app.use("/api/stories", require("./routes/stories"));
app.use("/api/pronunciation", require("./routes/pronunciation"));
app.use("/api/tips", require("./routes/tips"));
app.use("/api/worksheets", require("./routes/worksheets"));
app.use("/api/vocab", require("./routes/vocab"));
app.use("/api/sentence", require("./routes/sentence"));
app.use("/api/listening", require("./routes/listening"));
app.use("/api/ai", require("./routes/ai"));

// Serve static files from parent directory
app.use(express.static(path.join(__dirname, "../"), { index: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../home.html"));
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
