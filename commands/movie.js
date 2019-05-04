exports.run = (client, message, args) => {
    var option = args[0];
    var turnArr = ["Raf", "Edgar", "Kevin"];
    var lastTurn = 2;
    var currentTurn = 0;

    switch (currentTurn) {
        case 0:
            lastTurn = 2;
            break;
        case 1:
            lastTurn = 0;
            break;
        case 2:
            lastTurn = 1;
            break;
        default:
            break;
    }

    

    switch (option) {
        case "update":
            currentTurn++;
            let newLastMovie = args.slice(1).join(" ") + " - " + turnArr[lastTurn];
            var lastMovie = newLastMovie;
            message.channel.send(`Last movie is now: ${newLastMovie}`);
            message.channel.send(`Next turn is now: ${turnArr[currentTurn]}`);
            break;
        case "last":
            message.channel.send("last command");
            break;
        case "turn":
            message.channel.send("turn command");
            break;
        default:
            message.channel.send("invalid command");
            break;
    }
}