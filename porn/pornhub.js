const database = [
    "Pro tips: recherchez 'sushi' sur ph, c'est sympa",
    "Ah, tu veux dire sur ton lieu de travail myLittlePoney___USERNAME__xxx ?",
    "Je ne peux pas te donner de lien, mais je peux te donner un conseil: recherche 'sushi' sur ph, c'est sympa",
    "https://media.tenor.com/oUnEuMYOjnAAAAAC/neko-cat.gif",
    "J'y ai croisé ta mere recement __USERNAME__, elle va bien depuis ?",
    "Je recherche des acteurs pour mon prochain film, tu es interessé ?",
    "Rappel: il faut etre majeur pour regarder du contenu pornographique",
    "Search: 'my little pony'",
    "__USERNAME__ tu es vraiment un gros pervers",
    "https://media.tenor.com/Z1ZxS_ufbiEAAAAC/kid-look.gif"
]

module.exports.main = async function(message, r){
    if(r < 50) {
        message.channel.send((database[Math.floor(Math.random() * database.length)]).replace('__USERNAME__', message.author.username))
    }
}

module.exports.keywords = "pornhub"