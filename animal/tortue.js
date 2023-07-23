module.exports.main = async function(message, r){
    if(r < 25) {
        message.react("🐢")
    } else if(r < 50) {
        message.channel.send("Zelda, c'est la tortue 🐢")
    }
}

module.exports.keywords = "tortue"