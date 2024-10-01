const {
  Events,
  EmbedBuilder,
  ButtonBuilder,
  StringSelectMenuOptionBuilder,
  StringSelectMenuBuilder,
  ActionRowBuilder,
  ChannelType,
  ButtonStyle,
  PermissionsBitField,
} = require("discord.js");

const setup = require("../../model/ticketsystem/setup");
const User = require("../../model/ticketsystem/userSchema");
const discordTranscripts = require("discord-html-transcripts");

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction, client) {
    try {
      if (interaction.isStringSelectMenu()) {
        const selectedValue = interaction.values[0];
        const ticketOptions = [
          "CURRENT GEN CALL OF DUTY",
          "OTHER GAMES",
          "OLD GEN CALL OF DUTY",
          "OTHER",
        ];

        if (ticketOptions.includes(selectedValue)) {
          await interaction.deferReply({
            ephemeral: true,
          });

          const data = await User.findOne({
            username: interaction.user.tag,
            tickets: "1",
          });

          if (data) {
            const embed = new EmbedBuilder()
              .setTitle("Ticket is already opened")
              .setDescription("You already have an opened ticket.")
              .setTimestamp()
              .setColor("FFB6C1");

            await interaction.editReply({
              embeds: [embed],
              ephemeral: true,
            });
          } else {
            let subcategoryOptions = [];

            if (selectedValue === "CURRENT GEN CALL OF DUTY") {
              // CoD Services
              subcategoryOptions = [
                new StringSelectMenuOptionBuilder()
                  .setLabel("MW3 (2023)")
                  .setEmoji("<:MW3:1219495644654342194>")
                  .setValue("MW32023"),
                new StringSelectMenuOptionBuilder()
                  .setLabel("MW2 (2022)")
                  .setEmoji("<:MWII:1219495137537953853>")
                  .setValue("MW22022"),
                new StringSelectMenuOptionBuilder()
                  .setLabel("BOCW")
                  .setEmoji("<:bocw:1219897910703951903>")
                  .setValue("BOCW"),
                new StringSelectMenuOptionBuilder()
                  .setLabel("BO3 PS4/5 (ONLY)")
                  .setEmoji("<:bo3:1200843954741059614>")
                  .setValue("BO3"),
              ];
            } else if (selectedValue === "OTHER GAMES") {
              // Other Games
              subcategoryOptions = [
                new StringSelectMenuOptionBuilder()
                  .setLabel("Elden Ring")
                  .setEmoji("<:eldenring:1208232761660547114>")
                  .setValue("Elden Ring"),
                new StringSelectMenuOptionBuilder()
                  .setLabel("Forza")
                  .setEmoji("<:forza:1208232647223017512>")
                  .setValue("Forza"),
                new StringSelectMenuOptionBuilder()
                  .setLabel("Starfield")
                  .setEmoji("<:starfield:1208232704852889610>")
                  .setValue("Starfield"),
                new StringSelectMenuOptionBuilder()
                  .setLabel("Borderlands 3")
                  .setEmoji("<:Borderlands3:1200845164109910016>")
                  .setValue("Borderlands 3"),
              ];
            } else if (selectedValue === "OLD GEN CALL OF DUTY") {
              // Old Gen CoD - FREE
              subcategoryOptions = [
                new StringSelectMenuOptionBuilder()
                  .setLabel("COD 4")
                  .setEmoji("<a:cod4:1172549165583171623>")
                  .setValue("COD4"),
                new StringSelectMenuOptionBuilder()
                  .setLabel("WaW")
                  .setEmoji("<:codwaw:1200846743403769996>")
                  .setValue("WaW"),
                new StringSelectMenuOptionBuilder()
                  .setLabel("MW2(2009)")
                  .setEmoji("<:MW2MP:1200847454959059184>")
                  .setValue("MW2(2009)"),
                new StringSelectMenuOptionBuilder()
                  .setLabel("BO1")
                  .setEmoji("<:bo1:1200846923272310935>")
                  .setValue("BO1"),
                new StringSelectMenuOptionBuilder()
                  .setLabel("MW3(2011)")
                  .setEmoji("<:MW3:1219495644654342194>")
                  .setValue("MW3(2011)"),
                new StringSelectMenuOptionBuilder()
                  .setLabel("BO2")
                  .setEmoji("<:bo2:1200843792153067612>")
                  .setValue("BO2"),
                new StringSelectMenuOptionBuilder()
                  .setLabel("Ghosts")
                  .setEmoji("<:ghosts:1208232587953315911>")
                  .setValue("Ghosts"),
                new StringSelectMenuOptionBuilder()
                  .setLabel("Advanced Warfare")
                  .setEmoji("<:AW:1200847161101910069>")
                  .setValue("Advanced Warfare"),
              ];
            } else if (selectedValue === "OTHER") {
              // OTHER
              subcategoryOptions = [
                new StringSelectMenuOptionBuilder()
                  .setLabel("Other")
                  .setEmoji("<a:GTA_Loading:1200843067771596940>")
                  .setValue("Other"),
              ];
            }

            const select = new StringSelectMenuBuilder()
              .setCustomId("subcategorySelect")
              .setPlaceholder("Select a subcategory!")
              .addOptions(subcategoryOptions);

            const row = new ActionRowBuilder().addComponents(select);

            const embed = new EmbedBuilder()
              .setDescription(
                `Please select a subcategory for ${selectedValue}:`
              )
              .setColor("FFB6C1");

            await interaction.editReply({
              embeds: [embed],
              components: [row],
              ephemeral: true,
            });
          }
        } else if (
          [
            // CoD Services
            "MW32023",
            "MW22022",
            "BOCW",
            "BO3",
            // Other Games
            "Elden Ring",
            "Forza",
            "Starfield",
            "Borderlands 3",
            // Old Gen CoD - FREE
            "COD4",
            "WaW",
            "MW2(2009)",
            "BO1",
            "MW3(2011)",
            "BO2",
            "Advanced Warfare",
            // other
            "Other",
          ].includes(selectedValue)
        ) {
          const subcategorySelectedValue = interaction.values[0];

          await interaction.reply({
            embeds: [
              {
                color: 0xffb6c1,
                description: "Please wait whilst I create you a ticket!",
              },
            ],
            ephemeral: true,
          });

          const data = await setup.findOne({
            guild: interaction.guild.id,
          });
          const category = data.category;
          const staffrole = await data.staffrole;
          const newChannel = await interaction.guild.channels.create({
            name: `${subcategorySelectedValue}-${interaction.user.username}`,
            type: ChannelType.GuildText,
            parent: category,
            permissionOverwrites: [
              {
                id: interaction.guild.id,
                deny: [PermissionsBitField.Flags.ViewChannel],
              },
              {
                id: interaction.user.id,
                allow: [PermissionsBitField.Flags.ViewChannel],
              },
              {
                id: staffrole,
                allow: [PermissionsBitField.Flags.ViewChannel],
              },
            ],
          });

          await User.create({
            username: interaction.user.tag,
            tickets: `1`,
            channelid: `${newChannel.id}`,
            claimedBy: null,
            createdBy: interaction.user.id,
          });

          await interaction.editReply({
            embeds: [
              {
                color: 0xffb6c1,
                footer: {
                  text: interaction.guild.name,
                  icon_url: interaction.client.user.displayAvatarURL(),
                },
                timestamp: new Date().toISOString(),
                description: `Hi, your ticket has been created, you can view it in ${newChannel}`,
              },
            ],
          });

          await interaction.user.send({
            embeds: [
              {
                color: 0xffb6c1,
                footer: {
                  text: interaction.guild.name,
                  icon_url: interaction.client.user.displayAvatarURL(),
                },
                timestamp: new Date().toISOString(),
                description: `Within your ticket please provide us with the necessary information needed, such as the type of service (unlock all, etc.) and your gamertag.\n\nIf you wish to do so you can also donate using [PayPal.me/hello777hi](https://www.paypal.me/hello777hi) or [cash.app/$hello777hi](https://cash.app/$hello777hi)`,
              },
            ],
          });

          const message = await newChannel.send({
            content: isPriority(interaction.member)
              ? `<@&${staffrole}> will be with you shortly (Priority Ping)`
              : undefined,
            embeds: [
              {
                color: 0xffb6c1,
                description: `Hi ${interaction.user}, a <@&${staffrole}> will be with you shortly. Please say what type of service you would like!`,
              },
            ],
          });
          await message.pin();

          const close = new ButtonBuilder()
            .setLabel("Close")
            .setCustomId("close")
            .setEmoji("❌")
            .setStyle(ButtonStyle.Danger);

          const claim = new ButtonBuilder()
            .setLabel("Claim")
            .setCustomId("claim")
            .setEmoji("✅")
            .setStyle(ButtonStyle.Success);

          const transcript = new ButtonBuilder()
            .setLabel("Transcript")
            .setCustomId("transcript")
            .setEmoji("📒")
            .setStyle(ButtonStyle.Primary);

          const row = new ActionRowBuilder().addComponents(
            close,
            claim,
            transcript
          );

          await newChannel.send({
            ephemeral: false,
            components: [row],
          });
        }
      } else if (interaction.customId === "close") {
        const embed = new EmbedBuilder()
          .setTitle("Confirm")
          .setDescription("Are you sure you want to close this ticket?")
          .setTimestamp()
          .setFooter({
            text: `Action taken by: ${interaction.user.tag}`,
          });

        const yes = new ButtonBuilder()
          .setCustomId("yes")
          .setLabel("Yes")
          .setEmoji("✅")
          .setStyle(ButtonStyle.Success);

        const no = new ButtonBuilder()
          .setCustomId("no")
          .setLabel("No")
          .setStyle(ButtonStyle.Danger)
          .setEmoji("❌");

        const row = new ActionRowBuilder().addComponents(yes, no);

        await interaction.reply({
          embeds: [embed],
          components: [row],
        });
      } else if (interaction.customId === "no") {
        const data = await setup.findOne({
          guild: interaction.guild.id,
        });
        const staffrole = await data.staffrole;
        if (!interaction.member.roles.cache.has(staffrole))
          return await interaction.reply({
            embeds: [
              {
                color: 0xffb6c1,
                description:
                  "Invalid Permissions to take action within this ticket!",
              },
            ],
            ephemeral: true,
          });
        const embed = new EmbedBuilder()
          .setTitle("Action Cancelled")
          .setDescription("This ticket wont be closed.")
          .setTimestamp()
          .setColor("Green");
        const yes = new ButtonBuilder()
          .setCustomId("yes")
          .setLabel("Yes")
          .setEmoji("✅")
          .setStyle(ButtonStyle.Success)
          .setDisabled(true);

        const no = new ButtonBuilder()
          .setCustomId("no")
          .setLabel("No")
          .setEmoji("<:blacklock:1169289779309981746> ")
          .setStyle(ButtonStyle.Danger)
          .setDisabled(true);

        const row = new ActionRowBuilder().addComponents(yes, no);

        await interaction.message.edit({
          embeds: [embed],
          ephemeral: false,
          components: [row],
        });
        await interaction.reply({
          content: `Action has been taken`,
          ephemeral: true,
        });
      } else if (interaction.customId === "yes") {
        const data = await setup.findOne({
          guild: interaction.guild.id,
        });
        const staffrole = await data.staffrole;

        if (!interaction.member.roles.cache.has(staffrole))
          return await interaction.reply({
            embeds: [
              {
                color: 0xffb6c1,
                description:
                  "Invalid Permissions to take action within this ticket!",
              },
            ],
            ephemeral: true,
          });

        await User.findOneAndDelete({
          tickets: `1`,
          channelid: `${interaction.channel.id}`,
        });
        const embed2 = new EmbedBuilder()
          .setTitle("Transcript Generated")
          .setDescription("A ticket channel transcript has been attached")
          .setTimestamp()
          .setColor("Green");
        const transcriptlogchannel = interaction.client.channels.cache.get(
          data.transcriptchannel
        );

        const channel = interaction.channel;
        const attachment = await discordTranscripts.createTranscript(channel);

        await transcriptlogchannel.send({
          embeds: [embed2],
          ephemeral: false,
        });
        await transcriptlogchannel.send({
          files: [attachment],
        });

        await interaction.channel.delete();
      } else if (interaction.customId === "claim") {
        const data = await setup.findOne({
          guild: interaction.guild.id,
        });

        const userData = await User.findOne({
          channelid: interaction.channel.id,
        });

        const claimedBy = userData ? userData.claimedBy : null;
        const createdBy = userData ? userData.createdBy : null;
        const staffrole = await data.staffrole;

        // Check if the user has the necessary permissions
        if (!interaction.member.roles.cache.has(staffrole)) {
          return await interaction.reply({
            embeds: [
              new EmbedBuilder()
                .setDescription(
                  "Invalid Permissions to take action within this ticket."
                )
                .setColor("FFB6C1"),
            ],
            ephemeral: true,
          });
        }

        // Update the claimedBy field in the database
        await User.findOneAndUpdate(
          {
            channelid: interaction.channel.id,
          },
          {
            claimedBy: interaction.user.id,
          },
          {
            new: true,
          }
        ); // To return the updated document

        // Update channel permissions
        let overwrites = [
          {
            id: interaction.guild.id,
            deny: [PermissionsBitField.Flags.ViewChannel],
          },
          {
            id: staffrole,
            deny: [PermissionsBitField.Flags.ViewChannel], // Allow staff to view
          },
          {
            id: interaction.user.id,
            allow: [PermissionsBitField.Flags.ViewChannel], // Allow the client to view
          },
        ];

        if (claimedBy) {
          // update the perms on who made claimed the ticket
          overwrites.push({
            id: claimedBy,
            allow: [PermissionsBitField.Flags.ViewChannel], // Allow the user who claimed the ticket to view
          });
        } else if (createdBy) {
          // update the user perms on who created the ticket
          overwrites.push({
            id: createdBy,
            allow: [
              PermissionsBitField.Flags.ViewChannel,
              PermissionsBitField.Flags.SendMessages,
              PermissionsBitField.Flags.ReadMessageHistory,
            ],
          });
        }

        await interaction.channel.permissionOverwrites.set(overwrites);

        const embed = new EmbedBuilder()
          .setTitle("Ticket Claimed")
          .setDescription(`Your ticket has been claimed by ${interaction.user}`)
          .setTimestamp()
          .setColor("Green");
        await interaction.reply({
          content: "The ticket has now been claimed",
          ephemeral: true,
        });
        await interaction.channel.send({
          embeds: [embed],
        });

        const close = new ButtonBuilder()
          .setCustomId("close")
          .setLabel("Close")
          .setEmoji("<:blacklock:1169289779309981746> ")
          .setStyle(ButtonStyle.Danger);

        const claim = new ButtonBuilder()
          .setCustomId("claim")
          .setLabel("Claim")
          .setEmoji("✅")
          .setStyle(ButtonStyle.Success)
          .setDisabled(true);

        const transcript = new ButtonBuilder()
          .setCustomId("transcript")
          .setLabel("Transcript")
          .setEmoji("📒")
          .setStyle(ButtonStyle.Primary);

        const row = new ActionRowBuilder().addComponents(
          close,
          claim,
          transcript
        );

        await interaction.message.edit({
          components: [row],
          ephemeral: false,
        });
      } else if (interaction.customId === "transcript") {
        const data = await setup.findOne({
          guild: interaction.guild.id,
        });
        const staffrole = await data.staffrole;
        if (!interaction.member.roles.cache.has(staffrole))
          return await interaction.reply({
            embeds: [
              {
                color: 0xffb6c1,
                description:
                  "Invalid Permissions to take action within this ticket!",
              },
            ],
            ephemeral: true,
          });

        const embed = new EmbedBuilder()
          .setTitle("Transcript Generated")
          .setDescription("Your channel transcript has been attached below.")
          .setTimestamp()
          .setColor("Green");
        await interaction.reply({
          content: `Transcript has been generated`,
          ephemeral: true,
        });

        const channel = interaction.channel;
        const attachment = await discordTranscripts.createTranscript(channel);

        await interaction.channel.send({
          embeds: [embed],
          ephemeral: false,
        });
        await interaction.channel.send({
          files: [attachment],
        });
      }
    } catch (error) {
      console.error(error);
    }
  },
};

/**
//  * @param { GuildMember } member 
 */
function isPriority(member) {
  return;
  // if (member.roles.cache.has(process.env.VERIFIED_CUSTOMER) || (process.env.BOOSTER_ROLE)) return true;
  // else return false;
}
