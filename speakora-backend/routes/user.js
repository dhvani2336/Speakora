const express = require("express");
const router = express.Router();
const User = require("../models/user");

/* REGISTER */
router.post("/register", async (req, res) => {
  try {
    let { name, email, password, language } = req.body;
    email = email.toLowerCase().trim();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({
      name,
      email,
      password, // In a real app, hash this!
      languages: language ? [language] : []
    });

    await user.save();
    res.json({ message: "User registered successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

/* LOGIN */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login attempt:", { email, password });

    if (!email || !password) {
      return res.status(400).json({ message: "Please provide both email and password" });
    }

    // Find user by email (case-insensitive)
    const user = await User.findOne({
      email: { $regex: new RegExp(`^${email.trim()}$`, 'i') }
    });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.json(user);

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/* GOOGLE LOGIN */
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

router.post("/google-login", async (req, res) => {
  try {
    const { token } = req.body;

    // Verify Token
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    const { sub: googleId, email, name, picture } = payload;

    // Check if user exists
    let user = await User.findOne({ email });

    if (user) {
      // Evaluate if user needs update (e.g. add googleId if missing)
      if (!user.googleId) {
        user.googleId = googleId;
        user.picture = picture;
        await user.save();
      }
    } else {
      // Create new user
      user = new User({
        name,
        email,
        password: "", // No password for Google users
        googleId,
        picture,
        languages: ["English"]
      });
      await user.save();
    }

    res.json(user);

  } catch (err) {
    console.error("Google Login Error:", err);
    res.status(500).json({ message: "Google authentication failed" });
  }
});

/* GOOGLE CALLBACK (Redirect Mode) */
router.post("/google-callback", async (req, res) => {
  try {
    const { credential } = req.body;

    // Verify Token
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    const { sub: googleId, email, name, picture } = payload;

    // Check if user exists
    let user = await User.findOne({ email });

    if (user) {
      if (!user.googleId) {
        user.googleId = googleId;
        user.picture = picture;
        await user.save();
      }
    } else {
      user = new User({
        name,
        email,
        password: "",
        googleId,
        picture,
        languages: ["English"]
      });
      await user.save();
    }

    // Redirect to Dashboard with User Data
    const userData = encodeURIComponent(JSON.stringify(user));
    res.redirect(`https://speakora-one.vercel.app/dashboard.html?user_data=${userData}`);

  } catch (err) {
    console.error("Google Callback Error:", err);
    res.redirect("https://speakora-one.vercel.app/index.html?error=GoogleAuthFailed");
  }
});

/* ⭐ MULTI LANGUAGE */
router.post("/update-language", async (req, res) => {
  try {
    const { userId, language } = req.body;

    const user = await User.findById(userId);

    if (user.languages.length >= 3)
      return res.status(400).json({ message: "Max 3 languages" });

    if (!user.languages.includes(language))
      user.languages.push(language);

    await user.save();

    res.json({ languages: user.languages });

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});
/* GET PROFILE */
router.get("/profile/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});
/* CERTIFICATE DATA */
router.get("/certificate/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .select("name languages");

    res.json(user);

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
