const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

/**
 *
 * MW3
 *
 *
 */

function createGoBackButton() {
  return new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("gobackpricesheet")
      .setLabel("Go Back")
      .setStyle(ButtonStyle.Danger)
  );
}

function createTestGoBackButton() {
  return new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("mw3gobackpage1")
      .setLabel("Go Back")
      .setStyle(ButtonStyle.Danger)
  );
}

function YetAnotherGoBackButton() {
  return new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("mw3hubwith4buttons")
      .setLabel("Go Back")
      .setStyle(ButtonStyle.Danger)
  );
}

/**
 *
 * MW2
 *
 *
 */

function createMW2BackButton() {
  return new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("MW2GOBACKHUB")
      .setLabel("Go Back")
      .setStyle(ButtonStyle.Danger)
  );
}

function MW2GOBACKTOBLUEPRINTS() {
  return new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("MW2GOBACKTOBLUEPRINTS")
      .setLabel("Go Back")
      .setStyle(ButtonStyle.Danger)
  );
}

/**
 *
 * BOCW
 *
 *
 */

function createCWBackButton() {
  return new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("CWZMBACK")
      .setLabel("Go Back")
      .setStyle(ButtonStyle.Danger)
  );
}

module.exports = {
  createGoBackButton,
  createTestGoBackButton,
  YetAnotherGoBackButton,
  createMW2BackButton,
  MW2GOBACKTOBLUEPRINTS,
  createCWBackButton,
};
