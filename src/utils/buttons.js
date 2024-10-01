const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
} = require("discord.js");

/**
 *
 * MW3
 *
 *
 */

function createMoreButtons() {
  return new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("BLUEPRINTS")
      .setLabel("Blueprint & Camos") // Blueprint & Camos ( 1st Button ) # First PAGE
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId("Bot_Lobbies")
      .setLabel("Bot Lobbies") // Bot Lobbies ( 2nd Button ) # First PAGE
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId("Unreleased")
      .setLabel("Unreleased Bundles") // Unreleased Bundles ( 4th Button ) # First PAGE
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId("Hard_Unlocks")
      .setLabel("Hard Unlocks") // Hard Unlocks ( 3rd Button ) # First PAGE
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId("Misc")
      .setLabel("Misc. Services") // Misc. Services ( 5th Button ) # First PAGE
      .setStyle(ButtonStyle.Secondary)
  );
}

function createEVENMoreButtons() {
  return new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("CAMOS")
      .setLabel("Camos") // CAMOS
      .setStyle(ButtonStyle.Secondary)
  );
}

/**
 *
 * MW2
 *
 *
 */

function createMW2Buttons() {
  return new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("MW2Services")
      .setLabel("Blueprint & Camos") // Blueprint & Camos ( 1st Button ) # First PAGE
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId("MW2BotLobbbies")
      .setLabel("Bot Lobbies") //
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId("MW2HardUnlocks")
      .setLabel("Hard Unlocks")
      .setStyle(ButtonStyle.Secondary)
  );
}

function MW2CAMOS() {
  return new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("MW2CAMOS")
      .setLabel("Camos") // CAMOS
      .setStyle(ButtonStyle.Secondary)
  );
}

/**
 *
 * BOCW
 *
 *
 */

function createCWButtons() {
  return new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("CWZM")
      .setLabel("Zombies Mods") // Blueprint & Camos ( 1st Button ) # First PAGE
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId("DMU")
      .setLabel("DMU") //
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId("WW")
      .setLabel("Wonder Weapons loadouts") //
      .setStyle(ButtonStyle.Secondary)
  );
}

/**
 *
 * ELDEN RING BUTTON
 *
 *
 */

function EldenringButton() {
  return new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("elr1")
      .setLabel("placeholdment1")
      .setStyle(ButtonStyle.Secondary)
  );
}

/**
 *
 * PRICING SYSTEM
 *
 *
 */

function createPageDropDown() {
  return new ActionRowBuilder().addComponents(
    new StringSelectMenuBuilder()
      .setCustomId("selectpage")
      .setPlaceholder("Select")
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setValue("Page1")
          .setLabel("MW3 (2023)") // MW3
          .setEmoji("<:MW3:1209647248716210196>"),
        new StringSelectMenuOptionBuilder()
          .setValue("Page2")
          .setLabel("MW2 (2022)") // MW2
          .setEmoji("<:MW2:1209647229661614121>"),
        new StringSelectMenuOptionBuilder()
          .setValue("Page3")
          .setLabel("COLD WAR") // CW
          .setEmoji("<:coldwar:1219363178933256315>"),
        new StringSelectMenuOptionBuilder()
          .setValue("Page4")
          .setLabel("Forza") // Forza
          .setEmoji("<:forza:1208232647223017512>"),
        new StringSelectMenuOptionBuilder()
          .setValue("Page5")
          .setLabel("Elden Ring") // ER
          .setEmoji("<:eldenring:1208232761660547114>"),
        new StringSelectMenuOptionBuilder()
          .setValue("Page6")
          .setLabel("Starfield") // Star
          .setEmoji("<:starfield:1208232704852889610>"),
        new StringSelectMenuOptionBuilder()
          .setValue("Page7")
          .setLabel("Borderlands 3") // BL3
          .setEmoji("<:Borderlands3:1200845164109910016>")
      )
  );
}

module.exports = {
  createMoreButtons,
  createEVENMoreButtons,
  createMW2Buttons,
  EldenringButton,
  MW2CAMOS,
  createPageDropDown,
  createCWButtons,
};
