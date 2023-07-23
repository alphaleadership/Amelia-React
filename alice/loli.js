const database = [
    "https://media.tenor.com/p28XuV3FnjIAAAAC/anime-loli.gif",
    "https://media.tenor.com/DDxw-kjcbAUAAAAC/suprise-loli-attack.gif",
    "https://media.tenor.com/kdpS33pQ4cIAAAAC/sao-silica.gif",
    "https://media.tenor.com/yir7v3CeJnIAAAAC/loli.gif",
    "https://media.tenor.com/kkqV7_35gKQAAAAd/counterside-loli.gif",
    "https://media.tenor.com/xA7G1-1rZtoAAAAC/caught-fbi.gif"
]

module.exports.main = async function(message, r){
    if(r < 60) {
        message.channel.send(database[Math.floor(Math.random() * database.length)])
    }
}

module.exports.keywords = "loli"