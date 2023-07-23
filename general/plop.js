const database = [
    "plip",
    "plip plop",
    "salut salut",
    "plip plap ploup",
    "*plop* le bruit de ton cadavre quand jte balance dans la rivière",
    "plop plop plop",
    "pom pom pom",
    "Plop ? non mais t'es sérieux ?",
    "et plop, un de plus",
    "gna gna gna, tellement pas d'inspi que t'as pas d'autre mot que plop",
]

module.exports.main = async function(message, r){
    if(r < 45){
        message.channel.send(database[Math.floor(Math.random() * database.length)])
    }
}

module.exports.keywords = "plop"