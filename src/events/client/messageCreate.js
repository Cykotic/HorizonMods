const {
    Events
} = require('discord.js')
const {
    AutoMod
} = require('../../utils/automod')

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        await AutoMod(message)
    }
}