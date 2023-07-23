const database = [
    "Des rumeurs circulent selon lesquelles Facebook vendrait secrètement vos données personnelles. Êtes-vous prêt à prendre ce risque ?",
    "Facebook a été accusé de vendre vos données personnelles. Êtes-vous prêt à prendre ce risque ?",
    "Les utilisateurs de Facebook sont-ils vraiment heureux ? Une enquête révèle la face sombre de la plateforme de médias sociaux.",
    "Meta, meta maintenant, shuuuuuuut ! Facebook c'est sooooo 2020 quoi, non mais allo"
]

const usernameDatabase = [
    "__USERNAME___LovePoney",
    "xxx__USERNAME__xxx",
    "xxx__USERNAME__pro",
    "xxx__USERNAME__pro_2016",
    "__USERNAME__faitduvelo",
    "__USERNAME__faitduski",
    "__USERNAME__faitdelaquagym",
    "dansleculde__USERNAME__",
    "dansleculde__USERNAME__pro",
    "__USERNAME__-XxX-check-story",
    "__USERNAME__et__P__"
]

const prenomDatabase = [
    "Jean",
    "Pierre",
    "Paul",
    "Jacques",
    "Marie",
    "Sophie",
    "Julie",
    "Julien",
    "Luc",
    "Lucie",
    "Lucien",
    "Lucienne",
    "Lucas",
    "Emma",
    "Chloé",
    "Léa",
    "Manon",
    "Camille",
    "Sarah",
    "Laura"
]

const phraseDatabase = [
    "Je suis trop contente d'avoir retrouvé __TEXT__ sur Facebook !",
    "Saviez-vous que __TEXT__ était sur Facebook ?",
    "__TEXT__ je vient de te demander en ami sur Facebook",
    "__TEXT__ tien tien tien, un compte facebook suspect 🧐"
]

module.exports.main = async function(message, r){
    if(r < 10) {
        let username = (usernameDatabase[Math.floor(Math.random() * usernameDatabase.length)]).replace("__P__", prenomDatabase[Math.floor(Math.random() * prenomDatabase.length)]).replace("__USERNAME__", message.author.username)
        message.channel.send(phraseDatabase[Math.floor(Math.random() * phraseDatabase.length)].replace("__TEXT__", username))
    } else if(r < 30) {
        message.channel.send(database[Math.floor(Math.random() * database.length)])
    }
}


module.exports.keywords = "facebook"