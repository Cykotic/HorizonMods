const { EmbedBuilder } = require("discord.js");
const {
  createGoBackButton,
  createTestGoBackButton,
  YetAnotherGoBackButton,
  createMW2BackButton,
  createCWBackButton,
  MW2GOBACKTOBLUEPRINTS,
} = require("../../utils/backbuttons"); // back buttons
const {
  createMoreButtons,
  createEVENMoreButtons,
  createMW2Buttons,
  createPageDropDown,
  createCWButtons,
  EldenringButton,
  MW2CAMOS,
} = require("../../utils/buttons"); // buttons
const {
  createMainEmbed,
  createMW3ServicesEmbed,
  MW2HubEmbed,
  MW2CamosEmbed,
  CWHUB,
  CWZM,
  ForzaEmbed,
  EldenringEmbed,
  StarfieldEmbed,
  DMU,
  createMW3WarzoneServicesEmbed,
  camoEmbed,
  HardUnlocksEmbed,
  BotLobbbiesEmbed,
  UnreleasedEmbed,
  OtherEmbed,
  MW2HardUnlocks,
  MW2BotLobbbies,
  BL3Embed,
  MW2CamosEmbed2,
  WW,
} = require("../../utils/embeds"); //embeds

module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    try {
      if (interaction.isCommand()) {
        const command = client.commands.get(interaction.commandName);
        if (!command) return;

        await command.execute(interaction, client);
        /**
         *
         * TICKET SYSTEM
         *
         *
         */
      } else if (interaction.isStringSelectMenu()) {
        // dropdown
        if (interaction.customId === "selectpage") {
          await interaction.deferReply({
            ephemeral: true,
          });
          if (interaction.values[0] === "Page1") {
            // MW3
            await interaction
              .editReply({
                embeds: [createMW3ServicesEmbed()],
                components: [createMoreButtons(), createGoBackButton()],
              })
              .catch(console.error);
          } else if (interaction.values[0] === "Page2") {
            // MW2
            await interaction
              .editReply({
                embeds: [MW2HubEmbed()],
                components: [createMW2Buttons(), createGoBackButton()],
              })
              .catch(console.error);
          } else if (interaction.values[0] === "Page3") {
            // BOCW
            await interaction
              .editReply({
                embeds: [CWHUB()],
                components: [createCWButtons(), createGoBackButton()],
              })
              .catch(console.error);
          } else if (interaction.values[0] === "Page4") {
            // Forza
            await interaction
              .editReply({
                embeds: [ForzaEmbed()],
                components: [createGoBackButton()],
              })
              .catch(console.error);
          } else if (interaction.values[0] === "Page5") {
            // Elden Ring
            await interaction
              .editReply({
                embeds: [EldenringEmbed()],
                components: [createGoBackButton()],
              })
              .catch(console.error);
          } else if (interaction.values[0] === "Page6") {
            // Starfield
            await interaction
              .editReply({
                embeds: [StarfieldEmbed()],
                components: [createGoBackButton()],
              })
              .catch(console.error);
          } else if (interaction.values[0] === "Page7") {
            // BL3
            await interaction
              .editReply({
                embeds: [BL3Embed()],
                components: [createGoBackButton()],
              })
              .catch(console.error);
          }
        }
      } else if (interaction.isButton()) {
        //buttons
        if (interaction.customId === "view_pricing_button") {
          // Main button
          await interaction.reply({
            ephemeral: true,
            embeds: [createMainEmbed()],
            components: [createPageDropDown()],
          }); //  PRICING
        } else if (interaction.customId === "gobackpricesheet") {
          // GO BACK 1
          await interaction.deferUpdate();
          return await interaction.editReply({
            embeds: [createMainEmbed()], // MAIN PAGE
            components: [createPageDropDown()],
            /**
             *
             * MW3
             *
             *
             */
          }); // PRICING BUTTON
        } else if (interaction.customId === "mw3gobackpage1") {
          // THE HUB WITH THE 4 OTHER BUTTONS
          await interaction.deferUpdate();
          return await interaction.editReply({
            embeds: [createMW3ServicesEmbed()], // PAGE 1
            components: [createMoreButtons(), createGoBackButton()],
          });
        } else if (interaction.customId === "mw3hubwith4buttons") {
          // GO BACK
          await interaction.deferUpdate();
          return await interaction.editReply({
            embeds: [createMW3WarzoneServicesEmbed()],
            components: [createTestGoBackButton()],
          });
        } else if (interaction.customId === "BLUEPRINTS") {
          await interaction.deferUpdate();
          return await interaction.editReply({
            embeds: [createMW3WarzoneServicesEmbed()], // BLUE PRINT  (BACK 2)
            components: [createEVENMoreButtons(), createTestGoBackButton()], // (BACK 2)
          });
        } else if (interaction.customId === "CAMOS") {
          await interaction.deferUpdate();
          return await interaction.editReply({
            embeds: [camoEmbed()], //  CAMO EMBED
            components: [YetAnotherGoBackButton()],
          });
        } else if (interaction.customId === "Bot_Lobbies") {
          await interaction.deferUpdate();
          return await interaction.editReply({
            embeds: [BotLobbbiesEmbed()], // BOT LOBBIES EMBED
            components: [createTestGoBackButton()],
          });
        } else if (interaction.customId === "Unreleased") {
          // UNRELEASED BUNDLES
          await interaction.deferUpdate();
          return await interaction.editReply({
            embeds: [UnreleasedEmbed()], // Unreleased EMBED
            components: [createTestGoBackButton()],
          });
        } else if (interaction.customId === "Hard_Unlocks") {
          // HARD UNLOCKS
          await interaction.deferUpdate();
          return await interaction.editReply({
            embeds: [HardUnlocksEmbed()],
            components: [createTestGoBackButton()],
          });
        } else if (interaction.customId === "Misc") {
          // MISC
          await interaction.deferUpdate();
          return await interaction.editReply({
            embeds: [OtherEmbed()], // Misc
            components: [createTestGoBackButton()],
          });
          /**
           *
           * MW2
           *
           *
           */
          // BUTTONS FOR MW2
        } else if (interaction.customId === "MW2Services") {
          // MW2 CAMOS AND BLUE PRINTS
          await interaction.deferUpdate();
          return await interaction.editReply({
            embeds: [MW2CamosEmbed()],
            components: [MW2CAMOS(), createMW2BackButton()],
          });
        } else if (interaction.customId === "MW2BotLobbbies") {
          // MW2 BOT LOBBIES
          await interaction.deferUpdate();
          return await interaction.editReply({
            embeds: [MW2BotLobbbies()],
            components: [createMW2BackButton()],
          });
        } else if (interaction.customId === "MW2HardUnlocks") {
          // MW2 HARD UNLOCKS
          await interaction.deferUpdate();
          return await interaction.editReply({
            embeds: [MW2HardUnlocks()],
            components: [createMW2BackButton()],
          });
        } else if (interaction.customId === "MW2CAMOS") {
          // CAMOS
          await interaction.deferUpdate();
          return await interaction.editReply({
            embeds: [MW2CamosEmbed2()],
            components: [MW2GOBACKTOBLUEPRINTS()],
          });
        } else if (interaction.customId === "MW2GOBACKTOBLUEPRINTS") {
          // CAMOS
          await interaction.deferUpdate();
          return await interaction.editReply({
            embeds: [MW2CamosEmbed()],
            components: [createMW2BackButton()],
          });

          /**
           *
           * MW2 BACK BUTTONS
           *
           *
           */
        } else if (interaction.customId === "MW2GOBACKHUB") {
          // GO BACK TO THE MAIN HUB
          await interaction.deferUpdate();
          return await interaction.editReply({
            embeds: [MW2HubEmbed()],
            components: [createMW2Buttons(), createGoBackButton()],
          });
          // GO BACK TO THE MAIN HUB
        } else if (interaction.customId === "MW2BotLobbbies") {
          await interaction.deferUpdate();
          return await interaction.editReply({
            embeds: [MW2HubEmbed()],
            components: [createMW2Buttons(), createMW2BackButton()],
          });
          // GO BACK TO THE MAIN HUB
        } else if (interaction.customId === "MW2HardUnlocks") {
          await interaction.deferUpdate();
          return await interaction.editReply({
            embeds: [MW2HubEmbed()],
            components: [createMW2Buttons(), createMW2BackButton()],
          });
          // GO BACK TO BLUEPRINTS
        } else if (interaction.customId === "MW2GOBACKTOBLUEPRINTS") {
          await interaction.deferUpdate();
          return await interaction.editReply({
            embeds: [MW2HubEmbed()],
            components: [createMW2Buttons(), createMW2BackButton()],
          });
          /**
           *
           * BOCW
           *
           *
           */
        } else if (interaction.customId === "WW") {
          await interaction.deferUpdate();
          return await interaction.editReply({
            embeds: [WW()], // CWZM
            components: [createCWBackButton()],
          });
        } else if (interaction.customId === "CWZM") {
          await interaction.deferUpdate();
          return await interaction.editReply({
            embeds: [CWZM()], // CWZM
            components: [createCWBackButton()],
          });
        } else if (interaction.customId === "DMU") {
          await interaction.deferUpdate();
          return await interaction.editReply({
            embeds: [DMU()], // DMU
            components: [createCWBackButton()],
          });
        } else if (interaction.customId === "CWZMBACK") {
          await interaction.deferUpdate();
          return await interaction.editReply({
            embeds: [CWHUB()], // BACK BUTTON
            components: [createCWButtons(), createGoBackButton()],
          });

          /**
           *
           * BL3
           *
           *
           */
        }
      }
    } catch (error) {
      console.error(error);
    }
  },
};
