module.exports.main = async function(message, r){
    if(r < 5) {
        message.channel.send("https://media.tenor.com/aiJIyimPKkkAAAAC/hein-melenchon.gif")
    } else if(r < 10) {
        message.channel.send("Le petit père des peuples par excellence")
    }
}

module.exports.keywords = "staline"