const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    Guild: String,
    Channel: String,
    Role: String,
    UnverifiedRole: String, // Add the unverified role ID field
    Captcha: String
});

module.exports = mongoose.model("verify", Schema);