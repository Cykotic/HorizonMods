const {
    EmbedBuilder,
    ActionRowBuilder,
    StringSelectMenuBuilder,
    SlashCommandBuilder,
    Colors
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('faq')
        .setDescription('Select an FAQ from the dropdown'),

    async execute(interaction) {
        try {
            // Create a SelectMenuBuilder for the FAQ options
            const selectMenu = new ActionRowBuilder()
                .addComponents(
                    new StringSelectMenuBuilder()
                    .setCustomId('faq_select')
                    .setPlaceholder('Select a FAQ')
                    .addOptions([{
                            label: 'How to make a ticket?',
                            description: 'Tickets',
                            value: '1',
                        },
                        {
                            label: 'What games do we mod?',
                            description: 'Games',
                            value: '2',
                        },
                        {
                            label: 'What is hard recovery?',
                            description: 'Hard Recovery',
                            value: '3',
                        },
                        {
                            label: 'What does spoofing mean?',
                            description: 'Spoofing',
                            value: '4',
                        },
                        {
                            label: 'What does R2R mean?',
                            description: 'R2R',
                            value: '5',
                        },
                        {
                            label: 'What does quick recovery mean?',
                            description: 'Quick Recovery',
                            value: '6',
                        },
                        {
                            label: 'What does All Client mean?',
                            description: 'All client',
                            value: '7',
                        },
                        {
                            label: 'Can I be banned?',
                            description: 'bans',
                            value: '8',
                        },
                        {
                            label: 'More to come!',
                            description: 'suggestions',
                            value: '9',
                        },
                    ])
                );

            await interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription("Please select an FAQ")
                    .setColor(0xff6464)
                ],
                components: [selectMenu],
            });

            // Collect the user's selection
            const filter = (interaction) => interaction.customId === 'faq_select' && interaction.user.id === interaction.user.id;
            const collector = interaction.channel.createMessageComponentCollector({
                filter,
            });

            collector.on('collect', async (selectInteraction) => {
                const tx = interaction.guild.channels.cache.get("1172163843934392440"); // channel
                const selectedValue = selectInteraction.values[0]; // Get the selected value

                // Perform actions based on the selected FAQ if needed
                switch (selectedValue) {
                    case '1':
                        await selectInteraction.reply({
                            embeds: [
                                new EmbedBuilder()
                                .setColor(Colors.Purple)
                                .setTitle('How to make a ticket?')
                                .setDescription("How do I make a ticket? go to (<#1176558668456677577>)  in the channels and select what you need!")
                                .setTimestamp()
                                .setFooter({ text: 'Thank you for supporting Shadow Recovery'})
                                .setTimestamp()
                                .setFooter({
                                    text: 'Thank you for supporting Horizon'
                                })
                            ],
                            ephemeral: true
                        });
                        break;

                    case '2':
                        await selectInteraction.reply({
                            embeds: [
                                new EmbedBuilder()
                                .setColor(Colors.Purple)
                                .setTitle("What games do we mod?")
                                .setDescription("We mod all Xbox 360 old gen games and most next gen services as well! \n\n All old gen services are free while next gen services are paid")
                                .setAuthor({
                                    name: 'KaFreaKinB00m',
                                })
                                .setTimestamp()
                                .setFooter({
                                    text: 'Thank you for supporting Horizon',
                                })
                            ],
                            ephemeral: true
                        });
                        break;

                    case '3':
                        await selectInteraction.reply({
                            embeds: [
                                new EmbedBuilder()
                                .setColor(Colors.Purple)
                                .setTitle("What is hard recovery?")
                                .setDescription("Hard recovery refers to a download of your profile via email and password onto a hoster's xbox. Unfortunately certain CODs/services require this and cannot be done in game with you. Your account info is NOT SHARED nor given to anyone. The Shadow team Is the only one who does them here for safety and security of your account.")
                                .setAuthor({
                                    name: 'KaFreaKinB00m',
                                })
                                .setTimestamp()
                                .setFooter({
                                    text: 'Thank you for supporting Horizon',
                                })
                            ],
                            ephemeral: true
                        });
                        break;

                    case '4':
                        await selectInteraction.reply({
                            embeds: [
                                new EmbedBuilder()
                                .setColor(Colors.Purple)
                                .setTitle("What is Spoofing?")
                                .setDescription("spoofing means we can enter your gamertag into our tool and provide your service that way. No download of your profile and no game invite needed.")
                                .setAuthor({
                                    name: 'KaFreaKinB00m',
                                })
                                .setTimestamp()
                                .setFooter({
                                    text: 'Thank you for supporting Horizon',
                                })
                            ],
                            ephemeral: true
                        });
                        break;

                    case '5':
                        await selectInteraction.reply({
                            embeds: [
                                new EmbedBuilder()
                                .setTitle("What does R2R mean?")
                                .setDescription("R2R means Retail 2 Retail. This is our terminology for an infectable mod menu. ONLY ON COD 4 and WaW.")
                                .setColor(Colors.Purple)
                                .setAuthor({
                                    name: 'KaFreaKinB00m',
                                })
                                .setTimestamp()
                                .setFooter({
                                    text: 'Thank you for supporting Horizon',
                                })
                            ],
                            ephemeral: true
                        });
                        break;

                    case '6':
                        await selectInteraction.reply({
                            embeds: [
                                new EmbedBuilder()
                                .setTitle("What does quick mod mean?")
                                .setDescription("Quick recovery is a term for hosters that means with one click of a button, they can give somebody max rank, max prestige, unlock all, random stats. Much easier to say this if you just want everything. NOT AN OPTION FOR ALL CODS.")
                                .setColor(Colors.Purple)
                                .setAuthor({
                                    name: 'KaFreaKinB00m',
                                })
                                .setTimestamp()
                                .setFooter({
                                    text: 'Thank you for supporting Horizon',
                                })
                            ],
                            ephemeral: true
                        });
                        break;
                        
                        case '7':
                            await selectInteraction.reply({
                                embeds: [
                                    new EmbedBuilder()
                                    .setTitle("What does All Client mean?")
                                    .setDescription("All-client means that everybody in the lobby can use the same mod menu as us.")
                                    .setColor(Colors.Purple)
                                    .setAuthor({
                                        name: 'KaFreaKinB00m',
                                    })
                                    .setTimestamp()
                                    .setFooter({
                                        text: 'Thank you for supporting Horizon',
                                    })
                                ],
                                ephemeral: true
                            });
                            break;
                        
                            case '8':
                                await selectInteraction.reply({
                                    embeds: [
                                        new EmbedBuilder()
                                        .setTitle("Can I be banned?")
                                        .setDescription("All-Next gen mods come with a risk of ban. We use the best tools on the market to make sure we minimize that chance. \n\n there is no risk of ban for old gen unless doing acheivements!")
                                        .setColor(Colors.Purple)
                                        .setAuthor({
                                            name: 'KaFreaKinB00m',
                                        })
                                        .setTimestamp()
                                        .setFooter({
                                            text: 'Thank you for supporting Horizon',
                                        })
                                    ],
                                    ephemeral: true
                                });
                                break;
                            
                                case '9':
                                    await selectInteraction.reply({
                                        embeds: [
                                            new EmbedBuilder()
                                            .setTitle("Where can I make Suggestions?")
                                            .setDescription("How do I make a suggestions? go to (<#1184315981313626162>)  and let us have it")
                                            .setColor(Colors.Purple)
                                            .setAuthor({
                                                name: 'KaFreaKinB00m',
                                            })
                                            .setTimestamp()
                                            .setFooter({
                                                text: 'Thank you for supporting Horizon',
                                            })
                                        ],
                                        ephemeral: true
                                    });
                                    break;

                    default:
                        await interaction.reply({
                            content: 'Sorry, I couldn\'t find an answer for that question.',
                            ephemeral: true
                        });
                        break;
                }
            });
        } catch (err) {
            console.error(err);
            await interaction.reply({
                content: 'Error processing FAQ. Please try again later.',
                ephemeral: true,
            });
        }
    },
};