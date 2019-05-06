exports.run = (client, message, args) => {
    const fs = require("fs");
    var content;

    fs.access('./commands/counter/' + message.author.id + '.txt', fs.F_OK, (err) => {
            if (err) {
                fs.writeFile("./commands/counter/" + message.author.id + ".txt", 0, function (err) {
                    if (err) throw err;
                });
            }
            fs.readFile('./commands/counter/' + message.author.id + '.txt', 'utf8', function read(err, data) {
                if (err) {
                    throw err;
                }
                content = data;
        
                console.log(message.author.id + ": read log");
        
                content++;
        
                writeFile(content);
                message.channel.send("Cups of water drank: " + content);
            
            });
    });

    fs.readFile('./commands/hour/' + message.author.id + '.txt', 'utf8', function read(err, data) {
        if (err) {
            throw err;
        }
        let hours = data;
        hours = parseInt(hours);

        fs.readFile("./commands/run/" + message.author.id + ".txt", "utf8", function read(err, data) {
            if (data === "true") {
                console.log("true");
                return;
            }
            else {
                writeFileRun("true");
                startTimer(hours);
            }
        })

        //startTimer(hours);

        console.log("test123yeet");

    });
    
    function startTimer (hours) {
        setTimeout(function () {
            message.channel.send("<@" + message.author.id + ">" + ", don't forget to drink water! Do >log again to be reminded in " + hours + " hours!" );
            writeFileRun("false");
        }, hours * 360 * 1000);
    }

    function writeFileRun (contentX) {
        fs.writeFile("./commands/run/" + message.author.id + ".txt", contentX, function (err){
            if (err) throw err;
        });
    }

    function writeFile (contentX) {
        fs.writeFile("./commands/counter/" + message.author.id + ".txt", contentX, function (err) {
            if (err) throw err;
        });
    }
}