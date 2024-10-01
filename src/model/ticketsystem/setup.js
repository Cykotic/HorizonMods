const mongoose = require('mongoose');

const setupSchema = new mongoose.Schema({
  channel: String,
  staffrole: String,
  category: String,
  transcriptchannel: String,
  guild: String
});

module.exports = mongoose.model('setup', setupSchema);
