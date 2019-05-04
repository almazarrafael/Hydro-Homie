exports.run = (client, message, args) => {
    var counter = 0;

    setInterval(() => {
        message.channel.send("pong " + counter)
        counter++
    }, 1000);
}