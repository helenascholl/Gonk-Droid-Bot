const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('Gonk!', { type: 'PLAYING' });
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (message) => {
    if (
        message.author.id !== client.user.id && (
        Math.floor(Math.random() * 30) === 0
        || message.content.toLowerCase().includes('gonk'))
        ) {
        message.channel.send('Gonk!');
    }
});

client.login(process.env['DISCORD_TOKEN'])
    .catch(console.error);