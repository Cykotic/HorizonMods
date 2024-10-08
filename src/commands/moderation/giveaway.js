const {
    SlashCommandBuilder,
    PermissionFlagsBits
} = require('discord.js');
const ms = require('ms');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('giveaway')
        .setDescription('Start a giveaway or configure already existing ones.')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels)
        .addSubcommand(command =>
            command.setName('start')
            .setDescription('Starts a giveaway with the specified fields.')
            .addStringOption(option =>
                option.setName('duration')
                .setDescription(`Specified duration will be the giveaway's duration (in ms)`)
                .setRequired(true))
            .addIntegerOption(option =>
                option.setName('winners')
                .setDescription('Specified amount will be the number of winners chosen.')
                .setRequired(true))
            .addStringOption(option =>
                option.setName('prize')
                .setDescription('Specified prize will be the prize for the giveaway.')
                .setRequired(true))
            .addChannelOption(option =>
                option.setName('channel')
                .setDescription('Specified channel will receive the giveaway.'))
            .addStringOption(option =>
                option.setName('content')
                .setDescription('Specified content will be used for the giveaway embed.')))
        .addSubcommand(command =>
            command.setName('edit')
            .setDescription('Edits a specified giveaway.')
            .addStringOption(option =>
                option.setName('message-id')
                .setDescription('Specify the message ID of the giveaway you want to edit.')
                .setRequired(true))
            .addStringOption(option =>
                option.setName('time')
                .setDescription('Specify the added duration of the giveaway (in ms).')
                .setRequired(true))
            .addIntegerOption(option =>
                option.setName('winners')
                .setDescription('Specify the new amount of winners.')
                .setRequired(true))
            .addStringOption(option =>
                option.setName('prize')
                .setDescription('Specify the new prize for the giveaway.')
                .setRequired(true)))
        .addSubcommand(command =>
            command.setName('end')
            .setDescription('Ends a specified giveaway.')
            .addStringOption(option =>
                option.setName('message-id')
                .setDescription('Specify the message ID of the giveaway you want to end.')
                .setRequired(true)))
        .addSubcommand(command =>
            command.setName('reroll')
            .setDescription('Rerolls a specified giveaway.')
            .addStringOption(option =>
                option.setName('message-id')
                .setDescription('Specify the message ID of the giveaway you want to reroll.')
                .setRequired(true))),
    async execute(interaction, client) {
    
        const sub = interaction.options.getSubcommand();

        switch (sub) {

            case 'start':
                await interaction.reply({
                    content: `**Starting** your giveaway..`,
                    ephemeral: true
                })

                const duration = ms(interaction.options.getString("duration") || "")
                const winnerCount = interaction.options.getInteger('winners');
                const prize = interaction.options.getString('prize');
                const contentmain = interaction.options.getString(`content`);
                const channel = interaction.options.getChannel("channel");
                const showchannel = interaction.options.getChannel('channel') || interaction.channel;
                if (!channel && !contentmain)

                    client.giveawayManager.start(interaction.channel, {

                        prize,
                        winnerCount,
                        duration,
                        hostedBy: interaction.user,
                        lastChance: {
                            enabled: false,
                            content: contentmain,
                            threshold: 60000000000_000,
                            embedColor: '#7704ba'
                        }

                    });

                else if (!channel)
                    client.giveawayManager.start(interaction.channel, {
                        prize,
                        winnerCount,
                        duration,
                        hostedBy: interaction.user,
                        lastChance: {
                            enabled: true,
                            content: contentmain,
                            threshold: 60000000000_000,
                            embedColor: '#7704ba'
                        }
                    });
                else if (!contentmain)
                    client.giveawayManager.start(channel, {
                        prize,
                        winnerCount,
                        duration,
                        hostedBy: interaction.user,
                        lastChance: {
                            enabled: false,
                            content: contentmain,
                            threshold: 60000000000_000,
                            embedColor: '#7704ba'
                        }
                    });
                else
                    client.giveawayManager.start(channel, {
                        prize,
                        winnerCount,
                        duration,
                        hostedBy: interaction.user,
                        lastChance: {
                            enabled: true,
                            content: contentmain,
                            threshold: 60000000000_000,
                            embedColor: '#7704ba'
                        }
                    });

                interaction.editReply({
                    content: `Your **giveaway** has started successfuly! Check ${showchannel}.`,
                    ephemeral: true
                })

                break;
            case 'edit':

                await interaction.reply({
                    content: `**Editing** your giveaway..`,
                    ephemeral: true
                });

                const newprize = interaction.options.getString('prize');
                const newduration = interaction.options.getString('time');
                const newwinners = interaction.options.getInteger('winners');
                const messageId = interaction.options.getString('message-id');
                client.giveawayManager.edit(messageId, {

                    addTime: ms(newduration),
                    newWinnerCount: newwinners,
                    newPrize: newprize

                }).then(() => {

                    interaction.reply({
                        content: `Your **giveaway** has been **edited** successfuly!`,
                        ephemeral: true
                    });
                }).catch((err) => {

                    interaction.reply({
                        content: `An **error** occured! \n> **Error**: ${err}`,
                        ephemeral: true
                    });
                });

                break;
            case 'end':

                await interaction.reply({
                    content: `**Ending** your giveaway..`,
                    ephemeral: true
                });

                const messageId1 = interaction.options.getString('message-id');
                client.giveawayManager
                    .end(messageId1)
                    .then(() => {
                        interaction.reply({
                            content: 'Your **giveaway** has ended **successfuly!**',
                            ephemeral: true
                        });
                    })
                    .catch((err) => {
                        interaction.reply({
                            content: `An **error** occured! \n> **Error**: ${err}`,
                            ephemeral: true
                        });
                    });

                break;
            case 'reroll':

                await interaction.reply({
                    content: `**Rerolling** your giveaway..`,
                    ephemeral: true
                });

                const query = interaction.options.getString('message-id');
                const giveaway =

                    client.giveawayManager.giveaways.find((g) => g.guildId === interaction.guildId && g.prize === query) ||

                    client.giveawayManager.giveaways.find((g) => g.guildId === interaction.guildId && g.messageId === query);


                if (!giveaway) return interaction.reply({
                    content: `**Couldn't** find a **giveaway** with the ID of "**${query}**".`,
                    ephemeral: true
                });
                const messageId2 = interaction.options.getString('message-id');
                client.giveawayManager.reroll(messageId2).then(() => {
                        interaction.reply({
                            content: `Your **giveaway** has been **successfuly** rerolled!`
                        });
                    })
                    .catch((err) => {
                        interaction.reply({
                            content: `An **error** occured! \n> **Error**: ${err}`,
                            ephemeral: true
                        });
                    });
        }
    },
    cooldown: 2000
}