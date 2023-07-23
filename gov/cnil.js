const database = [
    "Ah ! l'ogrganisme de défense des droits des citoyens, qui ne sert à rien",
    "La CNIL, c'est comme la police, ça sert à rien",
    "La CNIL ne ce respecte pas elle même",
    "La CNIL, c'est comme la police, j'en ai pas peur",
    "meme moi en temps que bot discord je les respectes pas"
]

module.exports.main = async function(message, r){
    if(r < 45) {
        message.channel.send((database[Math.floor(Math.random() * database.length)]))
    }
}

module.exports.keywords = "cnil"