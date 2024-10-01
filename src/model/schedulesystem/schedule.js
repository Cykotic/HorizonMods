const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    guildId: String,
    channelId: String,
    intervalMinutes: Number, // Store the interval in minutes as a number
});

module.exports = mongoose.model('schedule', scheduleSchema);
