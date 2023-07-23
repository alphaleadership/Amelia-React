const database = [
    "🏴‍☠️",
    "le sujet sensible 👀",
    "https://tenor.com/view/dance-russia-gif-3522163",
    "https://tenor.com/view/russia-putin-dance-gif-3522164",
    "ah bha justement, j'avais oublier la vodka",
    "j'ai plus de vodka, fu**"
]


module.exports.main = async function(message, r){
    if(r < 10) {
        message.channel.send(database[Math.floor(Math.random() * database.length)])
    }
}

module.exports.keywords = "russie"