const { EmbedBuilder } = require("discord.js");

/**<:Blank:1219499654639652875>
 *
 * MW3
 *
 *
 */

function createMainEmbed() {
  return new EmbedBuilder()
    .setColor("FFB6C1")
    .setDescription(
      "## **<:bullet:1277560084188368916>   CoD Price Sheet <:bullet:1277560084188368916>  **\n" +
        "## <:Star:1226672643885891636> Modern Call of Dutys" +
        "\n<:bullet:1277560084188368916>    MW3 (2023)\n" +
        "<:Blank:1219499654639652875><:bullet:1277560084188368916>   MW2 (2022)\n" +
        "<:Blank:1219499654639652875><:bullet:1277560084188368916>   BOCW\n" +
        "## <:Star:1226672643885891636> Other Games\n" +
        "<:Blank:1219499654639652875><:bullet:1277560084188368916>   Forza\n" +
        "<:Blank:1219499654639652875><:bullet:1277560084188368916>   Elden Ring\n" +
        "<:Blank:1219499654639652875><:bullet:1277560084188368916>   Starfield\n" +
        "<:Blank:1219499654639652875><:bullet:1277560084188368916>   Borderlands 3\n" +
        "## <:Star:1226672643885891636> Old Gen - Xbox FREE\n" +
        "<:Blank:1219499654639652875><:opendot:1277545940713996310> CoD 4\n" +
        "<:Blank:1219499654639652875><:opendot:1277545940713996310> CoD WaW\n" +
        "<:Blank:1219499654639652875><:opendot:1277545940713996310> MW2 (2009)\n" +
        "<:Blank:1219499654639652875><:opendot:1277545940713996310> BO1\n" +
        "<:Blank:1219499654639652875><:opendot:1277545940713996310> MW3 (2011)\n" +
        "<:Blank:1219499654639652875><:opendot:1277545940713996310> BO2\n" +
        "<:Blank:1219499654639652875><:opendot:1277545940713996310> Ghosts\n" +
        "<:Blank:1219499654639652875><:opendot:1277545940713996310> Advanced Warfare\n"
    )
    .setThumbnail("https://i.imgur.com/Orns68N.png")
    .setImage("https://i.imgur.com/vIm7yWj.gif")
    .setFooter({
      text: "Horizon • Est. 2023",
      iconURL: "https://i.imgur.com/Orns68N.png",
    });
}

function createMW3ServicesEmbed() {
  return new EmbedBuilder()
    .setColor("FFB6C1")
    .setDescription(
      "## <:Star:1226672643885891636> **MW3 Services**\n" +
        "## <:Blank:1219499654639652875><:bullet:1277560084188368916>   **Blueprints & camos**\n" + // TITLE
        "## <:Blank:1219499654639652875><:bullet:1277560084188368916>   **Bot Lobbies**\n" +
        "## <:Blank:1219499654639652875><:bullet:1277560084188368916>   **Unreleased Bundles**\n" +
        "## <:Blank:1219499654639652875><:bullet:1277560084188368916>   **Hard Unlocks (Recovery)**\n" + // TITLE
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><a:pointing:1226672727956394115> Camos\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><a:pointing:1219405541911035974> Max Guns \n" +
        "## <:Blank:1219499654639652875><:bullet:1277560084188368916>   **Misc. Services (Recovery)**\n" + // TITLE
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><a:pointing:1226672727956394115>  Bone Collector Skin\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><a:pointing:1226672727956394115>  Zombie Schematics\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><a:pointing:1226672727956394115>  Nuke Service\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><a:pointing:1226672727956394115>  2XP Weapon Tokens\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><a:pointing:1226672727956394115>  DMZ Raids\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><a:pointing:1219405541911035974> Ranked Services\n"
    )
    .setThumbnail("https://i.imgur.com/Orns68N.png")
    .setImage("https://i.imgur.com/vIm7yWj.gif")
    .setFooter({
      text: "Horizon • Est. 2023",
      iconURL: "https://i.imgur.com/Orns68N.png",
    });
}

function MW2HubEmbed() {
  return new EmbedBuilder().setColor("FFB6C1").setDescription(
    "## <:Star:1226672643885891636> **MW2 Services**\n" +
      "## <:Blank:1219499654639652875><:bullet:1277560084188368916>   **Blueprints & camos**\n" + // TITLE
      "## <:Blank:1219499654639652875><:bullet:1277560084188368916>   **Bot Lobbies**\n" +
      "## <:Blank:1219499654639652875><:bullet:1277560084188368916>   **Hard Unlocks (Recovery)**\n" + // TITLE
      "<:Blank:1219499654639652875><:Blank:1219499654639652875><a:pointing:1219405541911035974> Camos\n" +
      "<:Blank:1219499654639652875><:Blank:1219499654639652875><a:pointing:1226672727956394115> Max Guns \n" +
      "<:Blank:1219499654639652875><:Blank:1219499654639652875><a:pointing:1219405541911035974>  DMZ Raids\n"
  );
}

function MW2CamosEmbed() {
  return new EmbedBuilder()
    .setColor("FFB6C1")
    .setDescription("this is the MW2 CAMO EMBED")
    .setDescription(
      "## <:Star:1226672643885891636> **__MW2 BLUEPRINTS & CAMOS__**\n" +
        "<:Blank:1219499654639652875>Instantly unlock up to 5 camos of your choice\n" +
        "<:Blank:1219499654639652875>Blueprints that are saved will never go away!\n\n" +
        "### <:Blank:1219499654639652875><:bullet:1277560084188368916>   3 camos with meta attachments $10\n" +
        "### <:Blank:1219499654639652875><:bullet:1277560084188368916>   4 camos with meta attachments $15\n" +
        "### <:Blank:1219499654639652875><:bullet:1277560084188368916>   5 camos with meta attachments $20\n\n" +
        "### <:Blank:1219499654639652875> Camos and attachments save for every gun on MW3/MW2 and Warzone 3 \n<:Blank:1219499654639652875>this is around 125+ weapons that will have the camos and attachments."
    );
}

function createMW3WarzoneServicesEmbed() {
  return new EmbedBuilder()
    .setColor("FFB6C1")
    .setDescription(
      "## <:Star:1226672643885891636> **MW3/Warzone 3 Services**\n" +
        "<:Blank:1219499654639652875>Instantly unlock up to 5 camos of your choice\n" +
        "<:Blank:1219499654639652875>Blueprints that are saved will never go away!\n\n" +
        "<:Blank:1219499654639652875><:bullet:1277560084188368916>   3 camos with meta attachments $10\n" +
        "<:Blank:1219499654639652875><:bullet:1277560084188368916>   4 camos with meta attachments $15\n" +
        "<:Blank:1219499654639652875><:bullet:1277560084188368916>   5 camos with meta attachments $20\n\n" +
        "<:Blank:1219499654639652875> Camos and attachments save for every gun on MW3/MW2 and Warzone 3 \n<:Blank:1219499654639652875>this is around 125+ weapons that will have the camos and attachments."
    );
}

function MW2CamosEmbed2() {
  return new EmbedBuilder()
    .setColor("FFB6C1")
    .setDescription(
      "## <:Blank:1219499654639652875><:Star:1226672643885891636> Camos:\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Gold\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Platinum\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Polyatomic\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Orion\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Galvanic\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Crown Camo\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Cherry Blossom\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Gold Cherry Blossom\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Projectiles\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   The Boys\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Tamished\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Blood Cell\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Polished\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Season 1 Nuke Camo\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Top 250 (MW3 Season 1)\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Top250 (MW3 Season2)\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   MP/WZ S5 Top 250 Camo\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   MP/WZ S5 Iridecent Camo\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   MP/WZ S5 Crimson Camo\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Wild Funk\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Ghoulie\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Bioluminescent\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Golden Enigma\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Zircon Scale\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Serpentinite\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Borealis\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Gilded\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Forged\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Priceless\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Interstellar\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Pink camo\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Rotten inferno\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Melty\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Acerbic Roil (season 2 nuke)\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Unknown camos (Future events)\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Wriggler\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Umbral Destiny\n"
    );
}

/**
 *
 * HardUnlocksEmbed button 1 ( MW3 PAGE)
 *
 *
 */

function HardUnlocksEmbed() {
  return new EmbedBuilder()
    .setColor("FFB6C1")
    .setDescription(
      "<:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875>__MW3 HARD UNLOCKS__\n" +
        "```ansi\n" +
        "[0;2m[0;2m[0;2m[0m[0m[0mService is done via recovery with an [2;32mXbox account[0m. For each service, the prior service [4;2mmust[0m have been completed. So, if you want to purchase [2;35mPriceless[0m for 5 guns those guns must already be [2;31mMAX[0m + [2;33mGILDED[0m + [2;34mFORGED[0m prior to purchase! For [2;33mGilded[0m, [2;34mForged[0m, and [2;35mPriceless[0m orders, a [4;2mMINIMUM[0m of [2;36m5 guns per order[0m.[0;2m[0m\n" +
        "```\n" +
        "## __BUNDLES__\n" +
        "<:INTERSTELLAR:1219463940313186324> **__INTERSTELLER + MAX ALL GUNS__ - [$200]**\n" +
        "<:BOREALIS:1219411223121235980> **__BOREALIS + MAX ALL GUNS__ - [$300]**\n" +
        "<:BIOLUMINESCENT:1219411203156217957> **__BIOLUMINESCENT + MAX ALL GUNS__ - [$450]**\n" +
        "<:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145>\n\n" +
        "## __CAMOS__\n" +
        "<:INTERSTELLAR:1219463940313186324> __INTERSTELLER - [$110]__\n" +
        "<:Blank:1219499654639652875><a:pointing:1219405541911035974> Must have max weapon level\n\n" +
        "<:BOREALIS:1219411223121235980> __BOREALIS - [$270]__\n" +
        "<:Blank:1219499654639652875><a:pointing:1219405541911035974> Must have max weapon level\n\n" +
        "<:GILDED:1219411283120750693> __GILDED - [$20] for 5 guns or [$90] for ALL__\n" +
        "<:Blank:1219499654639652875><a:pointing:1219405541911035974> Must have max weapon level - minimum 5 guns per order\n\n" +
        "<:FORGED:1219411271619711056> __FORGED - [$20] for 5 guns or [$80] for ALL__\n" +
        "<:Blank:1219499654639652875><a:pointing:1219405541911035974> Must have max weapon level + GILDED - minimum 5 guns per order\n\n" +
        "<:PRICELESS:1219411252170854441> __PRICELESS - [$20] for 5 guns or [$80] for ALL__\n" +
        "<:Blank:1219499654639652875><a:pointing:1219405541911035974> Must have max weapon level + GILDED + FORGED - minimum 5 guns per order\n\n" +
        "<:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145>\n" +
        "## __MAX GUNS__\n" +
        "<:bullet:1277560084188368916>   1 Guns - [$5]\n" +
        "<:bullet:1277560084188368916>   5 Guns - [$25]\n" +
        "<:bullet:1277560084188368916>   10 Guns - [$40]\n" +
        "<:bullet:1277560084188368916>   15 Guns - [$60]\n" +
        "<:bullet:1277560084188368916>   20 Guns - [$80]\n" +
        "<:bullet:1277560084188368916>   ALL BASE GUNS - [$100]\n"
    );
}

/**
 *
 * Misc Services
 *
 *
 */

function OtherEmbed() {
  return new EmbedBuilder()
    .setColor("FFB6C1")
    .setDescription(
      "<:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875> __Misc. Services__\n" +
        "```ansi\n" +
        "[0;2m[0;2m[0;2m[0m[0m[0mService is done via recovery with an [2;32mXbox account[0m. For each service, using [4;2mONLY[0m [2;35mLEGIT[0m methods for these services so there is [2;31mNO[0m chance for [2;35mBANS![0m\n" +
        "```\n" +
        "## __BONE COLLECTOR__\n" +
        "<:bullet:1277560084188368916>   Act 1 - [$40]\n" +
        "<:bullet:1277560084188368916>   Act 2 (IF ACT 1 IS DONE) - [$40\n" +
        "<:bullet:1277560084188368916>   Act 3 (IF ACT 1 & 2 ARE DONE)- [$40]\n" +
        "<:bullet:1277560084188368916>   All Acts Price - [$100]\n" +
        "## __ZOMBIE SCHEMATICHS__\n" +
        "<:bullet:1277560084188368916>   3 Zombie Schematics - [$8]\n" +
        "<:bullet:1277560084188368916>   All Zombie Perk - [$20]\n" +
        "<:bullet:1277560084188368916>   All  Legendary Schematics - [$20]\n" +
        "<:bullet:1277560084188368916>   All Schematics - [$35]\n" +
        "## __2XP Weapon Tokens__\n" +
        "<:bullet:1277560084188368916>   10 Hours - [$18]\n" +
        "<:bullet:1277560084188368916>   50 Hours - [$40]\n" +
        "<:bullet:1277560084188368916>   200 Hours - [$75]\n" +
        "<:bullet:1277560084188368916>   500 Hours - [$125]\n" +
        "## __Urzikstan Nuke__\n" +
        "<:bullet:1277560084188368916>   Price - [$60]\n" +
        "## __Ranked Boosting__\n" +
        "<:bullet:1277560084188368916>   Bronze <a:pointing:1226672727956394115>  Silver - [$40]\n" +
        "<:bullet:1277560084188368916>   Silver <a:pointing:1226672727956394115>   Gold - [$65]\n" +
        "<:bullet:1277560084188368916>   Gold <a:pointing:1226672727956394115>   Platinum - [$90]\n" +
        "<:bullet:1277560084188368916>   Platinum <a:pointing:1226672727956394115>  Diamond - [$100]\n" +
        "<:bullet:1277560084188368916>   Diamond <a:pointing:1226672727956394115>  Crimson - [$125]\n" +
        "<:bullet:1277560084188368916>   Crimson <a:pointing:1226672727956394115>  Iridescent - [$160]\n" +
        "## __DMZ RAIDS__\n" +
        "<:bullet:1277560084188368916>   Season 1 <a:pointing:1226672727956394115>  - [60]\n" +
        "<:bullet:1277560084188368916>   Season 2 <a:pointing:1226672727956394115>  - [60]\n" +
        "<:bullet:1277560084188368916>   Season 3 <a:pointing:1226672727956394115>  - [60]\n" +
        "<:bullet:1277560084188368916>   Season 4 <a:pointing:1226672727956394115>  - [60]\n"
    );
}

/**
 *
 * Unreleased Bundles
 *
 *
 */

function UnreleasedEmbed() {
  return new EmbedBuilder()
    .setColor("FFB6C1")
    .setDescription(
      "<:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875> __UNRELEASED BUNDLES__\n" +
        "```ansi\n" +
        "[0;2m[0;2m[0;2m[0m[0m[0mService is done via recovery with an [2;32mXbox account[0m. For each service, using [4;2mONLY[0m [2;35mLEGIT[0m methods for these services so there is [2;31mNO[0m chance for [2;35mBANS![0m\n" +
        "```\n" +
        "## __UNRELEASED BUNDLES__\n" +
        "<:bullet:1277560084188368916>   NIGHTHAWK\n" +
        "<:bullet:1277560084188368916>   BUSINESS CASUAL\n" +
        "<:bullet:1277560084188368916>   KONG ARMOR\n" +
        "<:bullet:1277560084188368916>   PESTILENCE\n" +
        "<:bullet:1277560084188368916>   CADIAN KASRKIN\n" +
        "<:bullet:1277560084188368916>   PETROL\n" +
        "<:bullet:1277560084188368916>   ULTRAMARINES SCOU\n" +
        "<:bullet:1277560084188368916>   BATTLE SISTER\n" +
        "<:bullet:1277560084188368916>   KARAGE\n" +
        "<:bullet:1277560084188368916>   FLAVOR BLASTER\n" +
        "<:bullet:1277560084188368916>   AUGMENTATION\n" +
        "## <:Star:1226672643885891636> $30 PER BUNDLE\n"
    );
}

/**
 *
 * BOT LOBBIES
 *
 *
 */

function BotLobbbiesEmbed() {
  return new EmbedBuilder()
    .setColor("FFB6C1")
    .setDescription(
      "<:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875>__MW3 BOT LOBBIES__\n" +
        "```ansi\n" +
        "[4;2m[0;2mAVERAGES FOR 1 BOT LOBBY\n" +
        "[0m[0m[2;34m99-120 kills[0m per game\n" +
        "[2;31m1 Gun Max Level[0m per game\n" +
        "[2;33m1 Gun Gold[0m per game (if already max level)\n" +
        "[2;36m10 - 15 minutes[0m per game[0;2m[0m\n" +
        "```\n" +
        "<:bullet:1277560084188368916>   1 Bot Lobby - [$6]\n\n" +
        "<:bullet:1277560084188368916>   3 Bot Lobbies - [$18]\n\n" +
        "<:bullet:1277560084188368916>   5 Bot Lobbies - [$30]\n\n" +
        "<:bullet:1277560084188368916>   10 Bot Lobbies - [$50]\n\n" +
        "<:bullet:1277560084188368916>   20 Bot Lobbies - [$90]\n\n" +
        "<:bullet:1277560084188368916>   Unlimited Bot Lobbies - [$350]\n\n" +
        "<:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145>\n\n" +
        "<:bullet:1277560084188368916>   10 Rustment Bot Lobbies - [$75]\n" +
        "<:Blank:1219499654639652875> <a:pointing:1219405541911035974> Playlist must be active"
    );
}

/**
 *
 * CAMO EMBED
 *
 *
 */

function camoEmbed() {
  return new EmbedBuilder()
    .setColor("FFB6C1")
    .setDescription(
      "## <:Blank:1219499654639652875><:Star:1226672643885891636> Camos:\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Gold\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Platinum\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Polyatomic\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Orion\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Galvanic\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Crown Camo\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Cherry Blossom\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Gold Cherry Blossom\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Projectiles\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   The Boys\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Tamished\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Blood Cell\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Polished\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Season 1 Nuke Camo\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Top 250 (MW3 Season 1)\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Top250 (MW3 Season2)\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   MP/WZ S5 Top 250 Camo\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   MP/WZ S5 Iridecent Camo\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   MP/WZ S5 Crimson Camo\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Wild Funk\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Ghoulie\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Bioluminescent\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Golden Enigma\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Zircon Scale\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Serpentinite\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Borealis\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Gilded\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Forged\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Priceless\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Interstellar\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Pink camo\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Rotten inferno\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Melty\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Acerbic Roil (season 2 nuke)\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Unknown camos (Future events)\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Wriggler\n" +
        "<:Blank:1219499654639652875><:Blank:1219499654639652875><:bullet:1277560084188368916>   Umbral Destiny\n"
    );
}

/**
 *
 * MW2
 *
 *
 */

function MW2HubEmbed() {
  return new EmbedBuilder().setColor("FFB6C1").setDescription(
    "## <:Star:1226672643885891636> **MW2 Services**\n" +
      "## <:Blank:1219499654639652875><:bullet:1277560084188368916>   **Blueprints & camos**\n" + // TITLE
      "## <:Blank:1219499654639652875><:bullet:1277560084188368916>   **Bot Lobbies**\n" +
      "## <:Blank:1219499654639652875><:bullet:1277560084188368916>   **Hard Unlocks (Recovery)**\n" + // TITLE
      "<:Blank:1219499654639652875><:Blank:1219499654639652875><a:pointing:1219405541911035974> Camos\n" +
      "<:Blank:1219499654639652875><:Blank:1219499654639652875><a:pointing:1219405541911035974> Max Guns \n" +
      "<:Blank:1219499654639652875><:Blank:1219499654639652875><a:pointing:1219405541911035974>  DMZ Raids\n"
  );
}

/**
 *
 * MW2 CAMOS
 *
 *
 */

function MW2CamosEmbed() {
  return new EmbedBuilder()
    .setColor("FFB6C1")
    .setDescription(
      "## <:Star:1226672643885891636> **__MW2 BLUEPRINTS & CAMOS__**\n" +
        "<:Blank:1219499654639652875>Instantly unlock up to 5 camos of your choice\n" +
        "<:Blank:1219499654639652875>Blueprints that are saved will never go away!\n\n" +
        "<:Blank:1219499654639652875><:bullet:1277560084188368916>   3 camos with meta attachments $10\n" +
        "<:Blank:1219499654639652875><:bullet:1277560084188368916>   4 camos with meta attachments $15\n" +
        "<:Blank:1219499654639652875><:bullet:1277560084188368916>   5 camos with meta attachments $20\n\n" +
        "<:Blank:1219499654639652875> Camos and attachments save for every gun on MW3/MW2 and Warzone 3 \n<:Blank:1219499654639652875>this is around 125+ weapons that will have the camos and attachments."
    );
}

/**
 *
 * MW2 BOT LOBBIES
 *
 *
 */

function MW2BotLobbbies() {
  return new EmbedBuilder()
    .setColor("FFB6C1")
    .setDescription(
      "<:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875>__MW2 BOT LOBBIES__\n" +
        "```ansi\n" +
        "[4;2m[0;2mAVERAGES FOR 1 BOT LOBBY\n" +
        "[0m[0m[2;34m99-120 kills[0m per game\n" +
        "[2;31m1 Gun Max Level[0m per game\n" +
        "[2;33m1 Gun Gold[0m per game (if already max level)\n" +
        "[2;36m10 - 15 minutes[0m per game[0;2m[0m\n" +
        "```\n" +
        "<:bullet:1277560084188368916>   1 Bot Lobby - [$6]\n\n" +
        "<:bullet:1277560084188368916>   3 Bot Lobbies - [$18]\n\n" +
        "<:bullet:1277560084188368916>   5 Bot Lobbies - [$30]\n\n" +
        "<:bullet:1277560084188368916>   10 Bot Lobbies - [$50]\n\n" +
        "<:bullet:1277560084188368916>   20 Bot Lobbies - [$90]\n\n" +
        "<:bullet:1277560084188368916>   24 Hrs Unlimited Bot Lobbies - [$175]\n\n" +
        "<:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145>\n\n"
    );
}

/**
 *
 * MW2 HARD UNLOCKS
 *
 *
 */

function MW2HardUnlocks() {
  return new EmbedBuilder()
    .setColor("FFB6C1")
    .setDescription(
      "```ansi\n" +
        "Service is done via [4;2mrecovery[0m[1;2m[0m with an [2;32mXbox[0m account. For each service, the prior service [4;2mmust[0m have been completed. So, if you want to purchase [2;45m[0m[2;31m[0m[2;35mPolyatomic[0m for 5 guns those guns must already be [2;31mMAX[0m + [2;33mGOLD[0m + [2;34mPLATINUM[0m prior to purchase! For [2;33mGold[0m, [2;34mPlatinum[0m , [2;36m[2;35mPolyatomic[0m[2;36m[0m and orders, a [2;31mMINIMUM[0m of [4;2m5 guns[0m per order." +
        "```\n" +
        "## __BUNDLES__\n" +
        "<:ORION:1219803288145231932> **__ORION + MAX ALL GUNS__ - [$150]**\n" +
        "<:PLATINUM:1219803251306926140> **__PLATINUM + MAX ALL GUNS__ - [$105]**\n" +
        "<:GOLD:1219803168188399726> **__GOLD + MAX ALL GUNS__ - [$105]**\n" +
        "<:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145>\n\n" +
        "## __CAMOS__\n" +
        "<:ORION:1219803288145231932> __ORION - [$180]__\n" +
        "<:Blank:1219499654639652875><a:pointing:1219405541911035974> Must have max weapon level + GOLD + PLATINUM + POLYATOMIC\n\n" +
        "<:POLYATOMIC:1219803622746099743> __POLYATOMIC - [$30] for 5 guns or [$60] for ALL__\n" +
        "<:Blank:1219499654639652875><a:pointing:1219405541911035974> Must have max weapon level + GOLD + PLATINUM\n\n" +
        "<:PLATINUM:1219803251306926140> __PLATINUM - [$25] for 5 guns or [$75] for ALL__\n" +
        "<:Blank:1219499654639652875><a:pointing:1219405541911035974> Must have max weapon level - minimum 5 guns per order + GOLD\n\n" +
        "<:GOLD:1219803168188399726> __GOLD - [$25] for 5 guns or [$50] for ALL__\n" +
        "<:Blank:1219499654639652875><a:pointing:1219405541911035974> Must have max weapon level - minimum 5 guns per order\n\n" +
        "<:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145>\n" +
        "## __MAX GUNS__\n" +
        "<:bullet:1277560084188368916>   1 GUN CATAGORY - [$30]\n" +
        "<:bullet:1277560084188368916>   ALL DLC GUNS - [$35]\n" +
        "<:bullet:1277560084188368916>   ALL GUNS - [$95]\n"
    );
}

/**
 *
 * BOCW
 *
 *
 */

function CWHUB() {
  return new EmbedBuilder().setColor("FFB6C1").setDescription(
    "## <:Star:1226672643885891636> **COLD WAR SERVICES**\n" +
      "## <:Blank:1219499654639652875><:bullet:1277560084188368916>   **Zombies**\n" + // TITLE
      "## <:Blank:1219499654639652875><:bullet:1277560084188368916>   **Hard Unlocks (Recovery)**\n" + // TITLE
      "## <:Blank:1219499654639652875><:bullet:1277560084188368916>   **Wonder Weapon classes (Recovery)**\n"
  );
}

/**
 *
 * CW ZOMBIES
 *
 *
 */

function CWZM() {
  return new EmbedBuilder()
    .setColor("FFB6C1")
    .setDescription(
      "```ansi\n" +
        "Service is done by joining a [2;34mpublic[0m [2;34mlobby[0m [4;2mno recovery[0m needed! This service [2;35mWILL NOT[0m cause any [2;31mbans[0m and is [2;33mguaranteed[0m [2;36msafe[0m!" +
        "```\n" +
        "## <:Star:1226672643885891636> **COLD WAR ZOMBIE MODS**\n" +
        "## <:Blank:1219499654639652875><:bullet:1277560084188368916>   Full package \n" +
        "## <:Blank:1219499654639652875><a:pointing:1226672727956394115>  Unlock All DLC Weapons\n" +
        "## <:Blank:1219499654639652875><a:pointing:1226672727956394115>  Max Aether Crystals\n" +
        "## <:Blank:1219499654639652875><a:pointing:1226672727956394115>  ALL ZOMBIES CAMOS\n" +
        "## <:Blank:1219499654639652875><a:pointing:1226672727956394115>  100% All Zombie Challenges\n" +
        "## <:Blank:1219499654639652875><a:pointing:1226672727956394115>  Unlock Reticles\n" +
        "## <:Blank:1219499654639652875><a:pointing:1226672727956394115>  ALL ZOMBIES EMBLEMS\n" +
        "## <:Blank:1219499654639652875><a:pointing:1226672727956394115>  ALL ZOMBIES CALLING CARDS\n" +
        "## <:Blank:1219499654639652875><a:pointing:1226672727956394115>  100-300 RANKS\n" +
        "## <:Blank:1219499654639652875><a:pointing:1226672727956394115>  EVENT ITEMS NO LONGER AVAILABLE\n" +
        "# <:Star:1226672643885891636> $20\n"
    );
}

/**
 *
 * CW DMU
 *
 *
 */

function DMU() {
  return new EmbedBuilder().setColor("FFB6C1").setDescription(
    "```ansi\n" +
      "Service is done via [4;2mrecovery[0m[1;2m[0m with an [2;32mXbox[0m account. For each service, the prior service [4;2mmust[0m have been completed. So, if you want to purchase [2;45m[0m[2;31m[0m[2;35mPolyatomic[0m for 5 guns those guns must already be [2;31mMAX[0m + [2;33mGOLD[0m + [2;34mPLATINUM[0m prior to purchase! For [2;33mGold[0m, [2;34mPlatinum[0m , [2;36m[2;35mPolyatomic[0m[2;36m[0m and orders, a [2;31mMINIMUM[0m of [4;2m5 guns[0m per order." +
      "```\n" +
      "## <:Star:1226672643885891636> **DMU HARD UNLOCK**\n" +
      "## <:Blank:1219499654639652875><:bullet:1277560084188368916>   DMU IF YOU DONT HAVE MAX GUNS\n" + // TITLE
      "# <:Blank:1219499654639652875><a:pointing:1226672727956394115>  $100\n" +
      "## <:Blank:1219499654639652875><:bullet:1277560084188368916>   DMU IF YOU DONT HAVE MAX GUNS\n" + // TITLE
      "# <:Blank:1219499654639652875><a:pointing:1226672727956394115>  $50 "
  );
}

/**
 *
 *
 * WW CLASSES
 *
 *
 *
 *
 */

function WW() {
  return new EmbedBuilder().setColor("FFB6C1").setDescription(
    "```ansi\n" +
      "Service is done via [4;2mrecovery[0m[1;2m[0m with an [2;32mBATTLENET[0m account." +
      "```\n" +
      "## <:Star:1226672643885891636> **WONDER WEAPONS IN LOADOUTS**\n" +
      "## <:Blank:1219499654639652875><:bullet:1277560084188368916>   ALL WONDER WEAPONS\n" + // TITLE
      "# <:Blank:1219499654639652875><a:pointing:1226672727956394115>  $30\n" +
      "## <:Blank:1219499654639652875><:bullet:1277560084188368916>   ONE WONDER WEAPON\n" + // TITLE
      "# <:Blank:1219499654639652875><a:pointing:1226672727956394115>  $10 "
  );
}

/**
 *
 * ForzaEmbed
 *
 *
 */

function ForzaEmbed() {
  return new EmbedBuilder().setColor("FFB6C1").setDescription(
    "## <:Star:1226672643885891636> **Forza Horizon 5 Services**\n" +
      "## <:Blank:1219499654639652875><:Blank:1219499654639652875><a:pointing:1226672727956394115>  10th Prestige LVL 2999 Max Rank\n" + // TITLE
      "## <:Blank:1219499654639652875><:Blank:1219499654639652875><a:pointing:1226672727956394115>  999 Million Credits\n" +
      "## <:Blank:1219499654639652875><:Blank:1219499654639652875><a:pointing:1226672727956394115>  999 Million Wheel Spins\n" + // TITLE
      "## <:Blank:1219499654639652875><:Blank:1219499654639652875><a:pointing:1226672727956394115>  999 Million Skill Points\n" +
      "## <:Blank:1219499654639652875><:Blank:1219499654639652875><a:pointing:1226672727956394115>  728+ Cars \n" +
      "## <:Star:1226672643885891636> $35\n"
  );
}

/**
 *
 * Elden Ring Embed
 *
 *
 */

function EldenringEmbed() {
  return new EmbedBuilder()
    .setColor("FFB6C1")
    .setDescription(
      "<:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875> __RUNE BOOSTING__\n" +
        "```ansi\n" +
        "[0;2m[0;2m[0;2m[0m[0m[0mService is done via recovery with an [2;32mXbox account[0m. For each service, using [4;2mONLY[0m [2;35mLEGIT[0m methods for these services so there is [2;31mNO[0m chance for [2;35mBANS![0m\n" +
        "```\n" +
        "## __RUNE BOOSTING__\n" +
        "### <a:pointing:1226672727956394115>  Elden Ring: 500 Million Runes\n" +
        "## <:Star:1226672643885891636> $25\n" +
        "### <:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145><:Line:1219371745576751145>\n\n" +
        "## __FULL GAME__\n" +
        "### <a:pointing:1226672727956394115>  All 310 Types of Weapons\n" +
        "### <a:pointing:1226672727956394115>  All 564 Types of Armor\n" +
        "### <a:pointing:1226672727956394115>  All 69 Types of Shields\n" +
        "### <a:pointing:1226672727956394115>  All 91 Types of War Ash\n" +
        "### <a:pointing:1226672727956394115>  All 116 Types of Talismans\n" +
        "### <a:pointing:1226672727956394115>  All 66 Types of Crafting Materials for 999 each\n" +
        "### <a:pointing:1226672727956394115>  All 62 Types of Crafting Tools\n" +
        "## <:Star:1226672643885891636> $35\n"
    );
}

/**
 *
 * Starfield Embed
 *
 *
 */

function StarfieldEmbed() {
  return new EmbedBuilder()
    .setColor("FFB6C1")
    .setDescription(
      "<:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875><:Blank:1219499654639652875> __STAR FIELD__\n" +
        "```ansi\n" +
        "[0;2m[0;2m[0;2m[0m[0m[0mService is done via recovery with an [2;32mXbox account[0m. For each service, using [4;2mONLY[0m [2;35mLEGIT[0m methods for these services so there is [2;31mNO[0m chance for [2;35mBANS![0m\n" +
        "```\n" +
        "## __Starfield__\n" +
        "### <a:pointing:1226672727956394115>  999x All Items - Aid, Throwables, Misc\n" +
        "## <:Star:1226672643885891636> $6\n" +
        "### <a:pointing:1226672727956394115>  1000+ Levels - Rank you up 1000+ Levels!\n" +
        "## <:Star:1226672643885891636> $10\n" +
        "### <a:pointing:1226672727956394115>  Max Credits 999 Billion - 999,999,999,999 Credits to buy anything!\n" +
        "## <:Star:1226672643885891636> $10\n" +
        "### <a:pointing:1226672727956394115>  Unlock and Max Everything\n" +
        "## <:Star:1226672643885891636> $25\n"
    );
}

function BL3Embed() {
  return new EmbedBuilder()
    .setColor("FFB6C1")
    .setDescription(
      "```ansi\n" +
        "This [2;35mservice[0m is done in a [2;34mcross[0m [2;36mgen[0m server! There is no risk of ban with [2;33many[0m of these [2;35mservices[0m!\n" +
        "```\n" +
        "## __BORDLERLANDS 3__\n" +
        "### <a:pointing:1226672727956394115>  10 Modded or Legit OP Weapons/Shields/Relics/Class Mods\n" +
        "## <:Star:1226672643885891636> $5\n" +
        "### <a:pointing:1226672727956394115>  DIAMOND KEYS\n" +
        "## <:Star:1226672643885891636> $5\n" +
        "### <a:pointing:1226672727956394115>  50 Modded or Legit OP Weapons/Shields/Relics/Class Mods\n" +
        "## <:Star:1226672643885891636> $15\n" +
        "### <a:pointing:1226672727956394115>  Every Skin/Head/Customization & 100 guns\n" +
        "## <:Star:1226672643885891636> $25\n" +
        "### <a:pointing:1226672727956394115>  FULL ACCOUNT DIAMOND KEYS/Skins ETC/ALL MODDED ITEMS YOUR BANK CAN HOLD\n" +
        "## <:Star:1226672643885891636> $50"
    );
}

module.exports = {
  createMainEmbed,
  createMW3ServicesEmbed,
  MW2HubEmbed,
  MW2CamosEmbed,
  MW2BotLobbbies,
  EldenringEmbed,
  createMW3WarzoneServicesEmbed,
  camoEmbed,
  StarfieldEmbed,
  HardUnlocksEmbed,
  BotLobbbiesEmbed,
  UnreleasedEmbed,
  OtherEmbed,
  BL3Embed,
  MW2BotLobbbies,
  MW2HardUnlocks,
  ForzaEmbed,
  CWHUB,
  CWZM,
  MW2CamosEmbed2,
  DMU,
  WW,
};
