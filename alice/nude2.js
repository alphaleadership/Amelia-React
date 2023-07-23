const database = [
    "https://media.tenor.com/_73fKmyXkVYAAAAC/fbi-fbiopenup.gif",
    "https://media.tenor.com/1AhUNYnySx4AAAAd/f-bi-raid.gif",
    "https://media.tenor.com/CKpxxXAcHt4AAAAC/chicken-fbi-skeptic-chicken.gif",
    "https://media.tenor.com/llwAThKLMFgAAAAC/fbi.gif",
    "https://media.tenor.com/RMKz605idq4AAAAd/fbi.gif",
]

module.exports.main = async function(message, r){
    if(r < 75) {
        message.channel.send(database[Math.floor(Math.random() * database.length)])
    }
}

module.exports.keywords = "nudes ?"