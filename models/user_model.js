const mongoose = require("mongoose");

// Tạo Schema
var userSchema = new mongoose.Schema({
    id: Number,
    name: String,
    age: Number,
});

// Tạo model
var User = mongoose.model("User", userSchema, "users");

module.exports = User;