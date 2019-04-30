const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
    }
    if (message.content === '!test') {
        message.channel.send('yeet');
    }
    if (message.channel.name === 'general' && message.content === '!bitch') {
        message.channel.send('general yeet');
    }

    if (message.content === "$loop") { 
        var interval = setInterval (function () {
            // use the message's channel (TextChannel) to send a new message
            message.channel.send("drink water, bro")
            .catch(console.error); // add error handling here
        }, 1800 * 1000); 
    }

});



client.login('NTcxODc2NjExNjIwNjAxODY3.XMXy2A.3pMQXkdF15Mb5fcllX4dtNY6Dyk');