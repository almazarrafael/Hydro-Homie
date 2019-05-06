exports.run = (client, message, args) => {
    const fs = require("fs");

    fs.writeFile("./commands/counter/" + message.author.id + ".txt", 0, function (err){
        if (err) throw err;
        message.channel.send("Your stats have now been reset to zero.");
    });
}