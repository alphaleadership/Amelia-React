const database = [
    "mdddrrrrr, genre tu vas te coucher",
    "bonui",
    "fait de beaux rêves (n'oublie pas de rêver de moi hein)",
    "bonne nuit",
    "see you tomorrow",
    "c'est pas genre l'heure d'aller au bar là ?",
    "moi qui pensais que tu étais déjà au lit",
    "moi qui voulais te croiser en boite...",
    "t'as mis un reveil pour te reveiller demain ?",
    "imagine pendant ton sommeil tu te reveilles et tu vois un mec qui te regarde dormir",
    "t'es sur que t'as pas oublié de te brosser les dents ?",
    "hé oh, t'es sur que la porte est bien fermée a clé ?",
    "jt'embrasse pas, mon koeur est déjà pris"
]

module.exports.main = async function(message, r){
    if(r < 80){
        message.channel.send(database[Math.floor(Math.random() * database.length)])
    }
}

module.exports.keywords = "bonui"