const {
    Events,
    EmbedBuilder,
} = require("discord.js");
const voiceschema = require("../../model/vcshit/voicechannelschema");
const botschema = require("../../model/vcshit/botvoicechannels");
const leaveSchema = require("../../model/welcomesystem/leave");

module.exports = {
    name: Events.GuildMemberRemove,
    async execute(member, client) {
        // Update total members in the voice channel
        const voicedata = await voiceschema.findOne({
            Guild: member.guild.id
        });
        if (voicedata) {
            const totalvoicechannel = member.guild.channels.cache.get(voicedata.TotalChannel);
            if (totalvoicechannel) {
                totalvoicechannel.setName(`• Total Members: ${member.guild.memberCount}`);
            }
        }

        // Update total bots in the voice channel
        const botdata = await botschema.findOne({
            Guild: member.guild.id
        });
        if (botdata) {
            const botvoicechannel = member.guild.channels.cache.get(botdata.BotChannel);
            if (botvoicechannel) {
                const botslist = member.guild.members.cache.filter((member) => member.user.bot).size;
                botvoicechannel.setName(`• Total Bots: ${botslist}`);
            }
        }

        // Leave message
        const leaveChannel = await leaveSchema.findOne({
            guildId: member.guild.id,
        });

        if (leaveChannel?.messageEnable === true && leaveChannel.channelId) {
            const channel = client.channels.cache.get(leaveChannel.channelId);

            if (!channel) {
                console.error(`Leave channel with ID ${leaveChannel.channelId} not found.`);
                return;
            }

            const user = member.user;

            try {
                await channel.send({
                    embeds: [
                        new EmbedBuilder()
                            .setTitle(`Member Left`)
                            .setDescription(`<@${user.id}> left the server. We will miss you, we hope to see you again.`)
                            .addFields(
                                { name: "Account Created", value: `<t:${parseInt(user.createdTimestamp / 1000)}:R>`, inline: true },
                                { name: "Member Count", value: `${member.guild.memberCount} members`, inline: true }
                            )
                            .setColor("Red")
                            .setTimestamp(),
                    ],
                });
            } catch (err) {
                console.error(err);
            }
        }
    },
};
