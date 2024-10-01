const {
    Schema,
    model
} = require("mongoose");
const userLeaveSchema = new Schema({
    guildId: String,
    channelId: String,
    messageEnable: Boolean,
});

module.exports = model("leaveSchema", userLeaveSchema, "userLeaveSchema");