let fs = require('fs');
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const funCommand = new (require("./main.js"))()
require("dotenv").config
let token = process.env.token


const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ], 
    partials: [
        Partials.Channel,
        Partials.GuildMember,
        Partials.Message, 
        Partials.Channel, 
        Partials.Reaction,
        Partials.User,
        Partials.Guilds
    ] 
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    console.log(message.author.username + ": " + message.content);
    await funCommand.execute(message)
});


client.login(token);
