const {
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionFlagsBits
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("vouches")
    .setDescription("You are good to")
    .addUserOption((user) =>
      user
      .setName("user")
      .setDescription("The user to mention in the message")
      .setRequired(true)
    ),
  async execute(interaction) {

    await interaction.deferReply({
      ephemeral: true
    });

    if (!interaction.member.permissions.has(PermissionFlagsBits.MuteMembers)) {
      return await interaction.editReply({
        content: "This user is missing the `MuteMembers` permission.",
        ephemeral: true
      });
    } else {
      const mentionedUser = interaction.options.getMember("user");
      interaction.deleteReply();
      interaction.channel.send({
        embeds: [
          new EmbedBuilder()
          .setDescription(`You are good to go! Thank you for trusting Horizon to help with your services ${mentionedUser} Please vouch here <#1177411418723725352>  Also! Check out <#1177409331004702842> For our tiers with amazing perks! \n\n•Specific donation role \n\n•Priority when making a ticket \n\n•Special perms in the server \n\n•Discounts on tools/RGH consoles \n\n•Increase in tickets per day \n\n•Private mod menu lobby with friends for up to an hour \n\n•Achievements unlocking \n\n•Modded Game save uploading \n\n•Discounts on next gen servies!`)
        ]
      });
    }
  },
};