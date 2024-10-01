const Schema = require("../../model/verifysystem/verify");
const {
    SlashCommandBuilder,
    PermissionsBitField,
    ChannelType,
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('setverify')
        .setDescription('Setup the verify panel')
        .addBooleanOption(option => option.setName('enable').setDescription('Select a boolean').setRequired(true))
        .addChannelOption(option => option.setName('channel').setDescription('Select a channel').setRequired(true).addChannelTypes(ChannelType.GuildText))
        .addRoleOption(option => option.setName('role').setDescription('Select a role').setRequired(true))
        .addRoleOption(option => option.setName('unverified-role').setDescription('Select a role (unverified users)').setRequired(true)) // New option for unverified users
        .addStringOption(option => option.setName("image").setDescription("Enter a image"))
        .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator),
    async execute(interaction) {
        await interaction.deferReply({
            fetchReply: true
        });
        const boolean = interaction.options.getBoolean('enable');
        const channel = interaction.options.getChannel('channel');
        const role = interaction.options.getRole('role');
        const unverifiedRole = interaction.options.getRole('unverified-role'); // unverified role
        const image = interaction.options.getString('image');


        if (boolean == true) {
            const data = await Schema.findOne({
                Guild: interaction.guild.id
            });
            if (data) {
                data.Channel = channel.id;
                data.Role = role.id,
                    data.UnverifiedRole = unverifiedRole.id; // Store unverified role
                data.save();
            } else {
                new Schema({
                    Guild: interaction.guild.id,
                    Channel: channel.id,
                    Role: role.id,
                    UnverifiedRole: unverifiedRole.id // Store unverified role
                }).save();
            }
            const embedsuccess = new EmbedBuilder()
                .setTitle(`Success`)
                .setColor('#00ff00')
                .setDescription(`Verify panel has been successfully created`)
                .addFields({
                    name: `Channel`,
                    value: `${channel} (${channel.name})`,
                    inline: true
                }, {
                    name: `Role`,
                    value: `${role} (${role.name})`,
                    inline: true
                })
            interaction.editReply({
                embeds: [embedsuccess]
            })

            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                    .setCustomId('Bot_verify')
                    .setEmoji('✅')
                    .setStyle(ButtonStyle.Success),
                );

            const embedVerify = new EmbedBuilder()
                .setTitle(`${interaction.guild.name} ・ Verification System`)
                .setColor('#800080')
                .setDescription(`Click on the button to verify yourself`)
                .setImage(image)

            channel.send({
                embeds: [embedVerify],
                components: [row]
            })
        }

    },
};