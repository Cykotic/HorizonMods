const {
    SlashCommandBuilder
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('purge')
        .setDescription('Delete a specified number of messages in the channel')
        .addIntegerOption(option =>
            option.setName('amount')
            .setDescription('Number of messages to delete')
            .setRequired(true)),

    async execute(interaction, client) {
        await interaction.deferReply({
            ephemeral: true
        });
        const amount = interaction.options.getInteger('amount');

        try {
            const messages = await interaction.channel.messages.fetch({
                limit: amount
            });
            await interaction.channel.bulkDelete(messages).catch(error => {
                throw error;
            });
            await interaction.editReply({
                content: `Successfully deleted ${amount} messages`,
                ephemeral: true,
            });
        } catch (error) {
            console.error(error);
        }
    }
};