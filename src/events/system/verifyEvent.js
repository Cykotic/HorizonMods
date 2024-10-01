const verify = require('../../model/verifysystem/verify');
const {
    EmbedBuilder,
    ActionRowBuilder,
    ButtonStyle,
    ModalBuilder,
    ButtonBuilder,
    TextInputBuilder,
    TextInputStyle
} = require('discord.js');
const soycanvas = require('soycanvas');

const {
    Events
} = require("discord.js");

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction, client) {

        // Verify system
        if (interaction.isButton() && interaction.customId == "Bot_verify") {
            const data = await verify.findOne({
                Guild: interaction.guild.id,
                Channel: interaction.channel.id
            });
            if (interaction.member.roles.cache.has(data.Role)) {
                return interaction.reply({
                    content: `You're already verified.`,
                    ephemeral: true
                });
            } else {
                const randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
                if (data) {
                    const captcha = soycanvas.Util.captchaKey(8);
                    data.Captcha = captcha;
                    data.save();
                    const image = await new soycanvas.Captcha()
                        .setBackground("image", "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
                        .setCaptchaKey(captcha)
                        .setBorder("#" + randomColor)
                        .setOverlayOpacity(0.7)
                        .build();

                    const verifyembed = new EmbedBuilder()
                        .setTitle('Verification Code')
                        .setDescription('This is your Verification code.\nPress the button below and answer the question with this code')
                        .setColor('#' + randomColor);

                    const validateverify = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                            .setCustomId('Verify_Modal')
                            .setLabel('Enter the Code')
                            .setStyle(ButtonStyle.Primary),
                        );

                    interaction.reply({
                        files: [image],
                        embeds: [verifyembed],
                        components: [validateverify],
                        ephemeral: true
                    });
                } else {
                    client.errNormal({
                        error: "Verify is disabled in this server! Or you are using the wrong channel!",
                        type: 'ephemeral'
                    }, interaction);
                }
            }
        }

        if (interaction.customId == "Verify_Modal") {
            const data = await verify.findOne({
                Guild: interaction.guild.id
            });
            const modal = new ModalBuilder()
                .setCustomId('Verification_Modal')
                .setTitle(`Verify Code: ${data.Captcha}`);

            const verification = new TextInputBuilder()
                .setCustomId('Verification_Check')
                .setLabel("Enter the Captcha Code")
                .setStyle(TextInputStyle.Short)
                .setRequired(true)
                .setMinLength(1);

            const validate = new ActionRowBuilder().addComponents(verification);

            modal.addComponents(validate);
            await interaction.showModal(modal);
        }

        if (interaction.customId === 'Verification_Modal') {
            const check = interaction.fields.getTextInputValue('Verification_Check');
            const data = await verify.findOne({
                Guild: interaction.guild.id,
                Channel: interaction.channel.id
            });
            if (check === data.Captcha) {
                interaction.reply({
                    content: `Your verification status is true. Welcome to ${interaction.guild.name}`,
                    ephemeral: true
                });

                const verifyUser = interaction.guild.members.cache.get(interaction.user.id);
                verifyUser.roles.add(data.Role);

                verifyUser.roles.remove(data.UnverifiedRole);

            } else {
                interaction.reply({
                    content: 'You answered the captcha incorrectly',
                    ephemeral: true
                });
            }
        }
    }
};