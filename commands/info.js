exports.run = (client, message, args) => {
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
        .setColor(3447003)
        .setTitle("drink")
        .setDescription("water")
        .addField("bro", "test", true)
        .addField("test2", "test3", false)
        .addField("test4", "test5", false);

    message.channel.send(embed);
}