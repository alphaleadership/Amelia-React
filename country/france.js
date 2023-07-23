const database = [
    "J'ai acheté des chocolatines, c'est trop bon",
    "C'est l'heure de parler du peuble des baguettes",
    "Des croissants, des croissants, des croissants miam miam miam",
    "J'ai croisé des français, sur 4chan, ils m'on parlé d'une secte de baguettes j'ai rien compris",
    "Liberté, égalité, fraternité, baguette, chocolatines | nop, nop, nop, ui, bien sur",
    "Baguette, fromage, gné manngggééééé (oui je regarde la serie: 'devenir français en 10 etapes')"
]

module.exports.main = async function(message, r){
    if(r < 10) {
        message.channel.send(database[Math.floor(Math.random() * database.length)])
    }
}

module.exports.keywords = "france"