const database = [
    "Hello, je me présente, je suis le bot d'Amelia, je suis là pour vous aider à etre des cybercriminels... a merde oups faut pas le dire",
    "Y'a plus de monde ici que dans les bureau de cybermalveillance.gouv.fr",
    
]

module.exports.main = async function(message, r){
    if(r < 45) {
        message.channel.send((database[Math.floor(Math.random() * database.length)]))
    }
}

module.exports.keywords = "cybermalveillance"