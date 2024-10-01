const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  tickets: String,
  channelid: String,
  claimedBy: {
    type: String,
    default: null
  },
  createdBy: String
});

module.exports = mongoose.model('Users', userSchema);