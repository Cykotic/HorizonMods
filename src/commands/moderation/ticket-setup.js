const {
  SlashCommandBuilder,
  EmbedBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ChannelType,
} = require("discord.js");
const setup = require("../../model/ticketsystem/setup");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ticket")
    .setDescription("Set up the ticket")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("setup")
        .setDescription("Setup ticket system")
        .addChannelOption((options) =>
          options
            .setName("channel")
            .addChannelTypes(ChannelType.GuildText)
            .setDescription("The channel for the ticket embed to be sent")
            .setRequired(true)
        )
        .addRoleOption((options) =>
          options
            .setName("staffrole")
            .setDescription("The staff for the ticket managers to be")
            .setRequired(true)
        )
        .addChannelOption((options) =>
          options
            .setName("category")
            .addChannelTypes(ChannelType.GuildCategory)
            .setDescription(
              "The channel category for the new tickets to be opened"
            )
            .setRequired(true)
        )
        .addChannelOption((options) =>
          options
            .setName("transcript-channel")
            .addChannelTypes(ChannelType.GuildText)
            .setDescription(
              "The channel category for the new tickets to be opened"
            )
            .setRequired(true)
        )
    )
    .addSubcommand((command) =>
      command.setName("disable").setDescription("Removes the ticket system")
    ),

  async execute(interaction) {
    const { options } = interaction;

    try {
      await interaction.deferReply({
        ephemeral: true,
      });

      if (options.getSubcommand() === "setup") {
        const channel = options.getChannel("channel");
        const staffrole = options.getRole("staffrole");
        const category = options.getChannel("category");
        const transcriptchannel = options.getChannel("transcript-channel");

        const data = await setup.findOne({
          guild: interaction.guild.id,
        });

        if (data) {
          const embed = new EmbedBuilder()
            .setTitle("Ticket System has been set up already.")
            .setDescription("You already have set up the ticket system.")
            .setTimestamp()
            .setColor("#FFB6C1");

          await interaction.editReply({
            embeds: [embed],
            ephemeral: true,
          });
        } else {
          await setup.create({
            channel: channel.id,
            staffrole: staffrole.id,
            category: category.id,
            transcriptchannel: transcriptchannel.id,
            guild: interaction.guild.id,
          });

          const embed = new EmbedBuilder()
            .setColor("FFB6C1")
            .setThumbnail("https://i.imgur.com/Orns68N.png")
            .setDescription(
              "## **<:Star:1219363120733098024> CoD Services**" + // TITLE
                "\n<:Blank:1219499654639652875><a:bullet:1220068947190218862> MW3 (2023)\n" +
                "<:Blank:1219499654639652875><a:bullet:1220068947190218862> MW2 (2022)\n" +
                "<:Blank:1219499654639652875><a:bullet:1220068947190218862> BOCW\n" +
                "<:Blank:1219499654639652875><a:bullet:1220068947190218862> BO3 PS4/5 ONLY\n" +
                "## **<:Star:1219363120733098024> Other Games**" + // TITLE
                "\n<:Blank:1219499654639652875><a:bullet:1220068947190218862> Elden Ring\n" +
                "<:Blank:1219499654639652875><a:bullet:1220068947190218862> Forza\n" +
                "<:Blank:1219499654639652875><a:bullet:1220068947190218862> Starfield\n" +
                "<:Blank:1219499654639652875><a:bullet:1220068947190218862> Borderlands 3\n" +
                "## **<:Star:1219363120733098024>** Old Gen CoD FREE \n" +
                "<:Blank:1219499654639652875><:opendot:1219374918798409859> COD 4\n" +
                "<:Blank:1219499654639652875><:opendot:1219374918798409859> WaW\n" +
                "<:Blank:1219499654639652875><:opendot:1219374918798409859> MW2(2009)\n" +
                "<:Blank:1219499654639652875><:opendot:1219374918798409859> BO1\n" +
                "<:Blank:1219499654639652875><:opendot:1219374918798409859> MW3(2011)\n" +
                "<:Blank:1219499654639652875><:opendot:1219374918798409859> BO2\n" +
                "<:Blank:1219499654639652875><:opendot:1219374918798409859> Ghosts\n" +
                "<:Blank:1219499654639652875><:opendot:1219374918798409859> Advanced Warfare\n"
            )
            .setImage("https://i.imgur.com/vIm7yWj.gif")
            .setFooter({
              text: "Horizon • Est. 2023",
              iconURL: "https://i.imgur.com/Orns68N.png",
            });

          const select = new StringSelectMenuBuilder()
            .setCustomId("test_dropdown")
            .setPlaceholder("Click Here to Create a Ticket (Scroll)")
            .addOptions([
              new StringSelectMenuOptionBuilder()
                .setLabel("CoD Services")
                .setEmoji("<:xbox_one:1200845396549828730>")
                .setValue("CURRENT GEN CALL OF DUTY"),
              new StringSelectMenuOptionBuilder()
                .setLabel("Other Games")
                .setEmoji("<:Xbox:1172584896041062533>")
                .setValue("OTHER GAMES"),
              new StringSelectMenuOptionBuilder()
                .setLabel("Old Gen CoD FREE - Xbox")
                .setEmoji("<:Xbox_360:1200845399238393927>")
                .setValue("OLD GEN CALL OF DUTY"),
              new StringSelectMenuOptionBuilder()
                .setLabel("Other")
                .setEmoji("<a:GTA_Loading:1200843067771596940>")
                .setValue("OTHER"),
            ]);

          const selectRow = new ActionRowBuilder().addComponents(select);
          const buttonRow = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
              .setCustomId("view_pricing_button")
              .setEmoji("<:pricing:1219374184627572967>")
              .setLabel("Click Here to View Pricing")
              .setStyle(ButtonStyle.Secondary)
          );

          await interaction.editReply({
            embeds: [
              new EmbedBuilder()
                .setDescription("Sent Successfully!")
                .setColor("#FFB6C1"),
            ],
            ephemeral: true,
          });
          await channel.send({
            embeds: [embed],
            components: [selectRow, buttonRow],
          });
        }
      } else if (options.getSubcommand() === "disable") {
        await setup.deleteMany({
          guild: interaction.guild.id,
        });

        return interaction.editReply({
          embeds: [
            new EmbedBuilder()
              .setDescription(
                "The Ticket System has been successfully disabled."
              )
              .setColor("#FFB6C1"),
          ],
          ephemeral: true,
        });
      }
    } catch (error) {
      console.error(error);
      await interaction.editReply({
        content: "An error occurred while processing your request.",
        ephemeral: true,
      });
    }
  },
};
