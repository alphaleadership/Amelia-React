module.exports.main = async function(message, r){
    if(r < 10) {
        message.react("👀")
    } else if(r < 20) {
        message.react("👙")
    }
}

module.exports.keywords = "alice"