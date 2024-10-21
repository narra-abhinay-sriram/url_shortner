const mongoose=require("mongoose")
const urlSchema=new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirecturl:{
        type:String,
        required:true,
        unique:true
    },
    visitedcount:[{timestamp:{type:Number}}]
},{timestamps:true})

const Url=mongoose.model('Url',urlSchema)
module.exports={Url}