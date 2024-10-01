const {
    Events
} = require("discord.js")
const reactSchema = require("../../model/reactionroles/reaction");

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (interaction.customId === "reactionrole") {
            const guild = interaction.guild.id;
            const message = interaction.message.id;
            const reactchannel = interaction.channel.id;

            const reactData = await reactSchema.findOne({
                Guild: guild,
                Message: message,
                Channel: reactchannel
            })

            if (!reactData) {
                return;
            } else if (reactData) {
                //Role ID
                const ROLE_ID = reactData.Role;
                //try add/remove role
                try {
                    const targetMember = interaction.member;
                    const role = interaction.guild.roles.cache.get(ROLE_ID);
                    if (!role) {
                        interaction.reply({
                            content: 'Role not found.',
                            ephemeral: true
                        });
                    }
                    if (targetMember.roles.cache.has(ROLE_ID)) {
                        targetMember.roles.remove(role).catch(err => {
                            console.log(err)
                        });
                        interaction.reply({
                            content: `Removed the role ${role} from ${targetMember}.`,
                            ephemeral: true
                        });
                    } else {
                        await targetMember.roles.add(role).catch(err => {
                            console.log(err)
                        });;
                        interaction.reply({
                            content: `Added the role ${role} to ${targetMember}.`,
                            ephemeral: true
                        });
                    }
                } catch (error) {
                    //catch the error
                    console.log(error);
                    interaction.reply('An error occurred while processing the command.');
                }
            }
        }
    }
}