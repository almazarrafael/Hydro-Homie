const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const prefix = ">";

var hour = 5;
var turnArr = ["Raf", "Edgar", "Kevin"];
var currTurnName = turnArr[0];
var currTurn = 0;
var currMovie = "glass";

client.once('ready', () => {
	console.log('Ready!');
});

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
      delete require.cache[require.resolve(`./events/${file}`)];
    });
  });

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.on('message', message => {

    if (!message.content.startsWith(config.prefix) || message.author.bot) {
        return;
    }

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();


    if (command === "raftest" || message.author) {

    }

    if (command === "current turn") {
        let currentTurn = "Current turn: " + turnArr[currTurn];
        message.channel.send(currentTurn);
    }

    if (command === "lastmovie") {
        message.channel.send("Last movie was: " + currMovie);
    }

    if (command === "updatemovie") {
        let movie = args.slice(0).join(" ");

        if (currTurn === 2) {
            currTurn = 0;
        }
        else {
            currTurn++;
        }

        message.channel.send("Last movie is now: " + movie + "\nCurrent turn is now: " + turnArr[currTurn]);
        currMovie = movie;
    }

	if (command === "ping") {
        // send back "Pong." to the channel the message was sent in
        let msg = args[0];
        if (msg = "undefined") {
            message.channel.send("pong");
            return;
        }
        message.channel.send(`pong ${msg}`);
    }

    if (command === "current hour") {
        message.channel.send(hour);
    }
    
    if (command === "hour 1") {
        message.channel.send("Hour set to 1");
        hour = 1;
    }

    if (command === "hour 2") {
        message.channel.send("Hour set to 2");
        hour = 2;
    }

    if (command === "water") {
        setInterval(() => 
        message.channel.send("drink water")
        , hour * 360 * 1000)
    }

});

client.login(config.token);