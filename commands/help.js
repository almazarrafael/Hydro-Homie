exports.run = (client, message, args) => {
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
        .setColor(2471891)
        .setAuthor("Commands: ")
        .setTitle(">help")
        .setDescription("An info box will pop up that explains how to use the bot.")
        .addField(">info", "Shows the importance of drinking water. Info based on Mayo Clinic.", false)
        .addField(">hour", "Set how many hours you would like to be reminded. (Default is 5)", false)
        .addField(">log", "Log every time you drink a cup water so you can keep track of how much water you drink. This also starts a timer that reminds you based on how many hours you want it to.", false)
        .addField(">stats", "Tells you how much cups and mL of water you've logged/drank.")
        .addField(">reset", "This resets your stats back to zero.")
        .addField(">ping", "Pong!", false)
        ;
    message.channel.send(embed);
}