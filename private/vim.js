module.exports.main = async function(message, r){
    if(r < 20) {
        message.react("Seul les élus ont réussit à s'échapper de vim et peuvent utiliser nano")
    }
}

module.exports.keywords = "vim"