const mongoose=require("mongoose")

async function connectiondb(url){
//console.log("hi")
    return mongoose.connect(url)
}

module.exports={connectiondb}