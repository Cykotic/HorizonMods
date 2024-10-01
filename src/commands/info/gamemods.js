const {
    EmbedBuilder,
    ActionRowBuilder,
    StringSelectMenuBuilder,
    SlashCommandBuilder,
    Colors
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gamemods')
        .setDescription('Select an game from the dropdown'),

    async execute(interaction) {
        try {
            // Create a SelectMenuBuilder for the FAQ options
            const selectMenu = new ActionRowBuilder()
                .addComponents(
                    new StringSelectMenuBuilder()
                    .setCustomId('game_select')
                    .setPlaceholder('Select a game')
                    .addOptions([{
                            label: 'MWIII',
                            description: 'MWIII',
                            value: '1',
                        },
                        {
                            label: 'MW2/Warzone',
                            description: 'MW2/Warzone',
                            value: '2',
                        },
                        {
                            label: 'Cold War mods',
                            description: 'Cold War',
                            value: '3',
                        },
                        {
                            label: 'GTA V mods',
                            description: 'GTA V',
                            value: '4',
                        },
                        {
                            label: 'Mods for Borderlands 3',
                            description: 'Borderelands 3',
                            value: '5',
                        },
                        {
                            label: 'Mods for Borderlands 1/2',
                            description: 'Borderlands 1/2',
                            value: '6',
                        },
                        {
                            label: 'Mods for Skate 3',
                            description: 'Skate 3',
                            value: '7',
                        },
                        {
                            label: 'Mods for BO3',
                            description: 'BO3 Xbox 360 PS4/5',
                            value: '8',
                        },
                        {
                            label: 'Mods for Ghosts',
                            description: 'Ghosts',
                            value: '9',
                        },
                        {
                            label: 'Mods for BO2',
                            description: 'BO2',
                            value: '10',
                        },
                        {
                            label: 'MW3 Mods',
                            description: 'MW3',
                            value: '11',
                        },
                        {
                            label: 'BO1 mods',
                            description: 'BO1',
                            value: '12',
                        },
                        {
                            label: 'MW2 mods',
                            description: 'MW2',
                            value: '13',
                        },
                        {
                            label: 'COD 4 & WAW mods',
                            description: 'COD 4 & WAW',
                            value: '14',
                        },
                        {
                            label: 'Dont see a game?',
                            description: 'Cant find a game?',
                            value: '15',
                        },
                    ])
                );

            await interaction.reply({
                embeds: [
                    new EmbedBuilder()
                    .setDescription("Please select a game")
                    .setColor(0xff6464)
                ],
                components: [selectMenu],
            });

            // Collect the user's selection
            const filter = (interaction) => interaction.customId === 'game_select' && interaction.user.id === interaction.user.id;
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
                                .setTitle('Mods for MWIII')
                                .setDescription("Meta/Camo, Blueprints, meta attachments and more on the way!")
                                .setTimestamp()
                                .setFooter({ text: 'Thank you for supporting Horizon'})
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
                                .setTitle("Mods for MWII/Warzone")
                                .setDescription("Colored Classes, Loadouts, Perk Packages, Mastery camos, meta attachments and blueprints")
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
                                .setTitle("Mods for Cold War")
                                .setDescription("Calling cards, emblems, Blueprints, Camos, Dark Ether hard unlock, Max crystals dlc weapon hard unlock rank progression (PAID SERVICE).")
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
                                .setTitle("Mods for GTA V")
                                .setDescription("Modded account uploading \n\n this will tranfer over to your current GTA account. Please check out <#1188328734923702333> for more information! (PAID SERVICE).")
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
                                .setColor(Colors.Purple)
                                .setTitle("Mods for Borderlands 3")
                                .setDescription("Skin and decorations, level 72 and lvl 1 modded weapons, currency drops, diamond keys and more! (PAID SERVICE).")
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
                                .setColor(Colors.Purple)
                                .setTitle("Mods for Borderlands 1/2")
                                .setDescription("Gamesaves, Modded Items ect. (Donator perk)")
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
                                .setTitle("Mods for Skate 3")
                                .setDescription("Modded Game save uploading (donator perk)")
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
                                .setTitle("Mods for COD BO3")
                                .setDescription("Any rank, stats, unlock all, colored/custom classes, all client mod menu MP/ZM. (DOES NOT TRANSFER TO XB1) \n\n BO3 next gen Playstation account duping (PAID SERVICE).")
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
                                .setTitle("Mods for Ghosts")
                                .setDescription("Any rank, stats, unlock all, colored/custom classes.")
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
                        
                    case '10':
                        await selectInteraction.reply({
                            embeds: [
                                new EmbedBuilder()
                                .setTitle("BO2")
                                .setDescription("Any rank, stats, unlock all, colored/custom classes, Serenity V6 Infect, Serenity OG, Emblems!")
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
                            
                    case '11':
                        await selectInteraction.reply({
                            embeds: [
                                new EmbedBuilder()
                                .setTitle("MW3")
                                .setDescription("Any rank, stats, unlock all, colored classes, fix frozen classes, infections.")
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

                    case '12':
                        await selectInteraction.reply({
                            embeds: [
                                new EmbedBuilder()
                                .setTitle("Mods for BO1")
                                .setDescription("Any rank, stats, unlock all, colored/custom calsses.")
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

                    case '13':
                        await selectInteraction.reply({
                            embeds: [
                                new EmbedBuilder()
                                .setTitle("Mods for MW2")
                                .setDescription("Any rank, stats, unlock all, colored classes, fix frozen classes, infections, no ghillie suit.")
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

                    case '14':
                        await selectInteraction.reply({
                            embeds: [
                                new EmbedBuilder()
                                .setTitle("Mods for CoD 4/WaW")
                                .setDescription("Mods available are any rank, stats, unlock all and r2r infectible mod menu.")
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

                    case '15':
                        await selectInteraction.reply({
                            embeds: [
                                new EmbedBuilder()
                                .setTitle("Dont see a game you want?")
                                .setDescription("ASK if you don't see a game one of us may be able to help you!")
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