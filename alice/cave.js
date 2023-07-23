module.exports.main = async function(message, r){
    if(r < 10) {
        message.channel.send('Si jamais je poste ça ici: https://www.costockage.fr/location-cave')
    }
}

module.exports.keywords = " cave"