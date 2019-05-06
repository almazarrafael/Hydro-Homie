exports.run = (client, message, args) => {
    const fs = require("fs")
    let content = args.slice(0).join(" ");

    if (!isNaN(content)) {
        fs.writeFile("./commands/hour/" + message.author.id + ".txt", content, function (err) {
            if (err) throw err;
            console.log(message.author.id + ": saved hour");
            message.channel.send("Hour interval now set to: " + content + " hours.");
        });
    }
    else {
        console.log("hour failed");
    }
    
}