const express=require("express")
const {connectiondb}=require("./connection")
const urlRouter=require("./routes/url")
const  userRouter=require("./routes/user")
const path=require('path')
const {Url}=require("./models/url")
const staticrouter=require('./routes/staticrouter')
require('dotenv').config();

const app=express()
//console.log(process.env.mongodb)
connectiondb(process.env.mongodb).then(()=>console.log("db is connected")).catch(()=>console.log("db connection error"))

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.set('view engine','ejs')
app.set('views',path.resolve('./views'))

app.use("/url",urlRouter)
app.use("/user",userRouter)

app.use('/',staticrouter)

app.get('/url/:shortId',async(req,res)=>{
    const shortId=req.params.shortId 
    console.log(shortId)
    if(!shortId){
        return
    }

  const enter=  await Url.findOneAndUpdate({shortId},{
        $push:{
            visitedcount:{
                timestamp:Date.now()
            }
        }
    }
        ) 
        res.redirect(enter.redirecturl)

})
const PORT=3000
app.listen(PORT,()=>console.log(`App is listening on PORT:${PORT}`))