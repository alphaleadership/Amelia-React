module.exports.main = async function(message, r){
    if(r < 5){
        message.channel.send("https://media.tenor.com/SgOunVSMjHMAAAAC/kekeflip-fox.gif")
    } else {
        message.react("🦊")
    }
}

module.exports.keywords = "aptura"