const {
    EmbedBuilder,
    Client,
    Events,
} = require("discord.js");
const User = require("../../model/levelsystem/RankingSchema"); //RankingSchema
const ChannelDB = require("../../model/levelsystem/RankingChannelSchema"); // RankingChannelSchema
const cooldown = new Set();

module.exports = {
    name: Events.MessageCreate,
    async execute(message, client) {
        /**
         * @param { Client} client
         */

        const guildId = message.guild?.id;
        const userId = message.author?.id;

        if (!guildId || !userId) {
            return;
        }

        let user;

        try {
            const channelDB = await ChannelDB.findOne({
                guild: guildId
            });

            if (!channelDB || !channelDB.status) {
                // The leveling system is disabled, do not record or send level-up messages
                return;
            }

            const xpAmount = Math.floor(Math.random() * (25 - 15 + 1) + 15);

            user = await User.findOneAndUpdate({
                guildId,
                userId,
            }, {
                guildId,
                userId,
                $inc: {
                    xp: xpAmount
                },
            }, {
                upsert: true,
                new: true
            });

            let {
                xp,
                level
            } = user;

            if (xp >= level * 100) {
                ++level;
                xp = 0;
            
                let notificationChannel = null;
            
                if (channelDB && channelDB.notificationChannel) {
                    try {
                        notificationChannel = await client.channels.fetch(channelDB.notificationChannel);
                    } catch (err) {
                        console.log(err);
                    }
                }
            
                if (!notificationChannel) {
                    notificationChannel = message.channel;
                }

                const embed = new EmbedBuilder()
                    .setTitle("🎉 Congratulations! 🎉")
                    .setThumbnail(message.author.avatarURL({
                        dynamic: true
                    }))
                    .addFields({
                        name: "User:",
                        value: `${message.author.username}`,
                        inline: true
                    }, {
                        name: "Level:",
                        value: `${level}`,
                        inline: true
                    }, {
                        name: "Check the global leaderboard using:",
                        value: "`/ranking leaderboard`"
                    })
                    .setColor("Aqua");

                notificationChannel.send({
                    embeds: [embed]
                });

                await User.updateOne({
                    guildId,
                    userId
                }, {
                    level,
                    xp
                });
            }
        } catch (error) {
            console.log(error);
        }

        cooldown.add(message.author.id);

        setTimeout(() => {
            cooldown.delete(message.author.id);
        }, 60 * 1000);
    },
};