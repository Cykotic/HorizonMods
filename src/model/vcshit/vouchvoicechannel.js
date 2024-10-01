const {
    model,
    Schema
} = require("mongoose");

let vouchchannelschema = new Schema({
    Guild: String,
    VouchChannel: String,
    VouchCount: Number,
})

module.exports = model("vouchchannelschema", vouchchannelschema);