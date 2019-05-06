exports.run = (client, message, args) => {
    const fs = require("fs");

    fs.readFile("./commands/counter/" + message.author.id + ".txt", "utf8", function read(err, data) {
        let ml = data * 236.588
        message.channel.send("You have drank " + data + " cups of water or " + ml + " mL of water.")
    })
}