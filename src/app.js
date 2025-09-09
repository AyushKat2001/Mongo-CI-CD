const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Mongo Schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String
});
const User = mongoose.model("User", UserSchema);

// Routes
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = app;
