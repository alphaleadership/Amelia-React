module.exports.main = async function(message, r){
    if(r < 10) {
        message.react("745264159603556413")
    } else if(r < 20) {
        message.channel.send("axone.exe a cessé de fonctionner")
    } else if(r < 30) {
        message.channel.send("axone.php call to undefined function")
    } else if(r < 40) {
        message.channel.send("axone ? c'est qui lui encore ?")
    }
}

module.exports.keywords = "axone"