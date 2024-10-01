const {
    SlashCommandBuilder,
    EmbedBuilder
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Pong!"),
    async execute(interaction, client) {
        return await interaction.reply({
            embeds: [new EmbedBuilder().setDescription(`Latency: ${client.ws.ping}ms`).setColor("Green")]
        })
    }
}