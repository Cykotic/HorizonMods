const {
    WebhookClient,
    PermissionFlagsBits
} = require("discord.js")

const inviteRegex = new RegExp(/discord(?:app.com\/invite|.gg|.me|.io)(?:[\\]+)?\/([a-zA-Z0-9\-]+)/gi);

async function AutoMod(message) {
    const invite = message.content.match(inviteRegex);
    if (invite && invite.length) {
        if (message.member.permissions.has(PermissionFlagsBits.ManageMessages)) return false;
        if (message.deletable) await message.delete();
        await message.channel.send(`<@${message.author.id}> do not send discord invites here!`);
        await message.client.guilds.cache.get(process.env.guildId).channels.cache.get(process.env.CHANNEL_BOT_LOGS).send({
            embeds: [{
                color: Colors.Yellow,
                title: 'Auto Mod - unauthorised invite link',
                fields: [{
                        name: 'User',
                        value: `${message.author} (${message.author.tag})`,
                        inline: true
                    },
                    {
                        name: 'Action Taken',
                        value: 'Nothing',
                        inline: true
                    },
                    {
                        name: 'Invite',
                        value: invite.toString(),
                        inline: true
                    },
                    {
                        name: 'Message',
                        value: message.content
                    }
                ]
            }]
        });
        return true;
    }
}

function SendAutoMessage() {
    const uve = new WebhookClient({
        url: process.env.AUTO_SEND_MESSAGES
    })
    setInterval(() => {
        uve.send({
            embeds: [{
                color: Colors.Purple,
                description: `<a:1115458435660648579:1140857373796335616> Welcome to Specialty Creations! Here you can make tickets ${channelMention('1096165023459581992')}                    \n\n This is the showcase of happy verified customers ${channelMention('1097990179995783188')}\n\n This is where you can see the hard work I put into soldering ${channelMention('1063937872358559795')} \n\n You can message   ${userMention('841679967993331723')}, ${userMention('516448722440159244')},  ${userMention('1069771651945877614')} or ${userMention('100164100763426816')} for help`
            }]
        });
    }, 8640000); // every 24 hours
}

module.exports = {
    AutoMod,
    SendAutoMessage
}