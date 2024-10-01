const {
    SlashCommandBuilder,
    Colors,
    PermissionFlagsBits,
    ChannelType
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('announce')
        .setDescription('Announce a message to a channel')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .setDMPermission(false)
        .addChannelOption(option =>
            option.setName('channel')
            .setDescription('channel you want to post the announcement to')
            .addChannelTypes(ChannelType.GuildText)
            .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('message')
            .setDescription('The message you would like to announce')
            .setRequired(true)
        ),

    async execute(interaction, client) {
        await interaction.deferReply({
            ephemeral: true
        });
        const channel = interaction.options.getChannel('channel');
        const message = interaction.options.getString('message');

        try {
            await channel.send({
                embeds: [{
                    color: Colors.Purple,
                    author: {
                        name: `${interaction.guild.name} announcement.`,
                        iconURL: interaction.guild.iconURL()
                    },
                    description: message,
                }],
            });

            await interaction.editReply({
                content: 'Announcement sent!',
                ephemeral: true,
            });
        } catch (error) {
            await interaction.editReply({
                content: `Something went wrong. Please contact Jinx to fix this. (ERROR NAME: ${error.message})`,
                ephemeral: true,
            });

            console.error(error);
        }
    }
};