const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("instructions")
    .setDescription("Next gen instructions"),
  async execute(interaction) {
    await interaction.reply({
      content:
        "How to Link Accounts \n\n • Go to https://battle.net/ \n\n • Make a blizzard account \n\n • Add a phone number that is not used for bnet before \n\n • Connect the account to your activision account (The part shown after these steps) \n\n LINK TO ACTIVISION ALSO \n\n • Go to https://activision.com/ and log in \n\n • Go to account linking \n\n • Press link account on Battlenet \n\n • Link your activision to the battlenet account you just made. \n\n All Next Gen mods require us to recover your account though Battle net on order to give you what you are wanting other than Cold War. \n\n We CANNOT do HARD unlocks! We do soft unlocks for mostly everything. Bot lobbys is the only real way to hard unlock. \n\n We will NOT be held responsible for any bans or shadow bans that may occur,  YOU are accepting the risk of bans whenever you decide that you're going to get your account modded in the game.  New Gen has a much higher chance of getting banned! Use at your own risk",
    });
  },
};
