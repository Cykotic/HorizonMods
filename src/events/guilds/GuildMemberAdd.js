const {
    Events,
    EmbedBuilder,
} = require("discord.js");
const voiceschema = require("../../model/vcshit/voicechannelschema");
const botschema = require("../../model/vcshit/botvoicechannels");
const Schema = require("../../model/verifysystem/verify");
const joinSchema = require("../../model/welcomesystem/welcome")


module.exports = {
    name: Events.GuildMemberAdd,
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

        // Assign unverified role
        const data = await Schema.findOne({
            Guild: member.guild.id
        });
        const unverifiedRole = member.guild.roles.cache.get(data ?.UnverifiedRole);

        if (unverifiedRole) {
            try {
                await member.roles.add(unverifiedRole);
                console.log(`Added unverified role to ${member.user.tag}`);
            } catch (error) {
                console.error(`Error adding unverified role to ${member.user.tag}: ${error}`);
            }
        } else {
            console.error(`Unverified role with ID ${data?.UnverifiedRole} not found.`);
        }



       // Welcome stuff
       const joinChannel = await joinSchema.findOne({ guildId: member.guild.id });

       if (joinChannel?.messageEnable === true && joinChannel.channelId) {
           const channel = client.channels.cache.get(joinChannel.channelId);

           if (!channel) {
               console.error(`Welcome channel with ID ${joinChannel.channelId} not found.`);
               return;
           }

           const user = member.user;

           try {
               await channel.send({
                   embeds: [
                       new EmbedBuilder()
                           .setTitle("New Member Join!")
                           .setDescription(`Welcome <@${user.id}> to ${member.guild.name}! We hope you enjoy your stay!`)
                           .addFields(
                               { name: "Account Created", value: `<t:${parseInt(user.createdTimestamp / 1000)}:R>`, inline: true },
                               { name: "Member Count", value: `${member.guild.memberCount} members`, inline: true }
                           )
                           .setColor("#00ff00")
                           .setTimestamp(),
                   ],
               });
           } catch (err) {
               console.error(err);
           }
       }

    },
};