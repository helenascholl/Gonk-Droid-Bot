const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('Gonk!', { type: 'PLAYING' })
        .catch(console.error);
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (message) => {
    let authorIsNotClient = message.author.id !== client.user.id;
    let randomMessage = Math.floor(Math.random() * 30) === 0;
    let messageIncludesGonk = message.content.toLowerCase().includes('gonk');

    if (authorIsNotClient && (randomMessage || messageIncludesGonk)) {
        message.channel.send('Gonk!')
            .catch(console.error);
    }
});

client.login(process.env['DISCORD_TOKEN'])
    .catch(console.error);