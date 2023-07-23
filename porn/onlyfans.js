const database = [
    "Tkt __USERNAME__, je suis deja sub",
    "N'hesite pas a me sub __USERNAME__: https://onlyfans.com/sushimp4",
    "Je suis deja sub __USERNAME__",
    "Bande de perverts",
    "https://media.tenor.com/oUnEuMYOjnAAAAAC/neko-cat.gif",
    "https://media.tenor.com/Z1ZxS_ufbiEAAAAC/kid-look.gif",
]

module.exports.main = async function(message, r){
    if(r < 50) {
        message.channel.send((database[Math.floor(Math.random() * database.length)]).replace('__USERNAME__', message.author.username))
    }
}

module.exports.keywords = "onlyfan"