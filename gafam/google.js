const database = [
    "https://www.google.com/search?q=chuck+norris",
    "https://i.imgflip.com/7inc7z.jpg",
    "https://i.imgflip.com/7fuk01.jpg",
    "https://i.imgflip.com/6sbost.jpg",
    "https://i.imgflip.com/6g8yp6.jpg",
    "https://i.imgflip.com/4m3ygx.jpg"
]

module.exports.main = async function(message, r){
    if(r < 20) {
        message.channel.send(database[Math.floor(Math.random() * database.length)])
    }
}

module.exports.keywords = "google"