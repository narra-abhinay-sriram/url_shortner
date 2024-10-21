const express=require("express")
const shortid=require("shortid")
const {Url}=require("../models/url")
 async function handleCreateshorturl(req,res){
    const redirecturl=req.body.url
    if(!redirecturl){
        return res.json({message:"no url"})
    }
    const shortId=shortid()
   const created= await Url.create({
        shortId:shortId,
        redirecturl:redirecturl,
        visitedcount:[]
    })
    return res.render('home',{id:shortId})
    
 }
 async function handleUrlcounts(req,res){

    const shortId=req.params.shortId
    const count=await Url.findOne({shortId})
    res.json({visitedcount:count.visitedcount.length,analytics:count.visitedcount})
 }
 module.exports={handleCreateshorturl,handleUrlcounts}