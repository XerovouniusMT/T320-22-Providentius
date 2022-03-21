const Discord = require('discord.js');
require("dotenv").config()

const TOKEN = "ODM5MTQxMDUwMDE4MDM3Nzgx.YJFVAA.8LSu5MoOxVlm-EgzCjG2_hFhyBA"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

client.on("ready", () => {
    console.log('Providentius is online')
})

client.on("messageCreate", (message) => {
    if (message.content == "Hi"){
        message.reply("Hello")
    }
    if (message.content == "Uoh"){
        message.reply(':sob:')
    }
})

client.login(process.env.TOKEN)