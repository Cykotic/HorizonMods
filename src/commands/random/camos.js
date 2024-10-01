const {
    SlashCommandBuilder
} = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName('camos')
        .setDescription('Camo List'),
    async execute(interaction) {
        await interaction.reply({
            content: "Gold \nPlatinum \nPolyatomic \nOrion \nGalvanic \nCrown Camo \nCherry Blossom \nGold Cherry Blossom \nProjectiles \nThe Boys \nTamished \nBlood Cell \nPolished \nNuke Camo \nMP/WZ S5 Top 250 Camo \nMP/WZ S5 Iridecent Camo \nMP/WZ S5 Crimson Camo \nWild Funk \nGhoulie \nBioluminecent \nBlue Camo \nGolden Enigma \nZircon Scale \nSerpentinite \nBorealis \nGilded \nForged \nPriceless \nInterstellar"
        })
    },
};