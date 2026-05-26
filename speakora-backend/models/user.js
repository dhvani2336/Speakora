const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  username: { type: String, unique: true, sparse: true },
  phone: { type: String },
  languages: { type: [String], default: [] },
  googleId: { type: String, unique: true, sparse: true },
  picture: { type: String },
  subscription: { type: String, default: "Free" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);
