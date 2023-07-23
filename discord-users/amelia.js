module.exports.main = async function(message, r){
    if(r < 45) {
        message.react("👀")
    }
}

module.exports.keywords = "amelia"