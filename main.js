let fs = require('fs');

const log = require('../../utils/log.js')

module.exports = class funCommand {
    mods = null

    constructor(){
        this.mods = []
        this.loadAllModules()
        setInterval(async () => {
            await this.randomise()
        }, 1000*60*10)
        //}, 1000*3)
    }

    async loadAllModules() {
        this.mods = await this.moduleToArray(this.exploreDir('listener/fun/'));
        log.log('info', 'fun', `Loaded ${this.mods.length} fun modules`)
    }

    async moduleToArray(path){
        let mods = [];
        for(let i = 0; i < path.length; i++){
            let m = require("../../"+path[i])
            mods.push({
                name: path[i].split('/')[ path[i].split('/').length-1].split('.')[0],
                path: path[i],
                mod: m,
                keywords: m.keywords
            })
        }
        return mods;
    }

    async randomise(){
        // randomise the order of the modules
        let currentIndex = this.mods.length, randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [this.mods[currentIndex], this.mods[randomIndex]] = [this.mods[randomIndex], this.mods[currentIndex]];
        }

    }

    async execute(message){
        let k = this.mods.find(x => message.content.toLowerCase().includes(x.keywords))
        if(k){
            try { k.mod.main(message, this.randomInt(0, 100)) } catch (error) {}
        }
    }

    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    exploreDir(path){
        let files = fs.readdirSync(path);
        let outFiles = [];
        for(let i = 0; i < files.length; i++){
            let file = files[i];
            let filePath = path + file;
            let stat = fs.statSync(filePath);
            if(stat.isDirectory()){
                if(!filePath.includes('__')){
                    let tmp = this.exploreDir(filePath + '/');
                    for(let j = 0; j < tmp.length; j++){
                        outFiles.push(filePath+"/"+tmp[j]);
                    }
                }
            } else {
                if(file.endsWith('.js') && !file.includes('main.js')){
                    outFiles.push(file);
                }
            }
        }
        return outFiles
    }
}