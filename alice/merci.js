const database = [
    "De rien !",
    "Avec plaisir !",
    "C'est normal !",
    "Je t'en prie !",
    ":)"
]

module.exports.main = async function(message, r){
    if(r < 60) {
        message.channel.send(database[Math.floor(Math.random() * database.length)])
    }
}

module.exports.keywords = "merci"