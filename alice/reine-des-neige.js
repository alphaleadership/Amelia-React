const database = [
    "J'ai mis un mister freeze dans le cul de la reine des neiges. Elle a eu les ovaires congelés.",
    "La reine des neiges, c'est la reine des putes",
    "Libéré, délivré, -> direction gulag",
    "Blanche neige elle est plus cool. En plus dans la vrai histoire elle a 7 ans et elle est violée morte par le prince charmant 😁",
]


module.exports.main = async function(message, r){
    if(r < 50) {
        message.channel.send(database[Math.floor(Math.random() * database.length)])
    }
}

module.exports.keywords = "reine des neige"