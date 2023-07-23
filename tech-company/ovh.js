module.exports.main = async function(message, r){
    if(r < 5) {
        message.channel.send("ovh c'est de la merde")
    } else if(r < 10) {
        message.channel.send("J'apporte les merguez, préparez le barbecue; dans des conteneurs maritimes en plus y'a de la place")
    }
}

module.exports.keywords = "ovh"