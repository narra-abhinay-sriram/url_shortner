const express=require("express")
const {connectiondb}=require("./connection")
const userRouter=require("./routes/url")
const {Url}=require("./models/url")
const app=express()
connectiondb("mongodb+srv://121sriramreddy:Rohith%404k@cluster0.cdne5.mongodb.net/url_shortner").then(()=>console.log("db is connected")).catch(()=>console.log("db connection error"))

app.use(express.json())
app.use("/url",userRouter)
app.get('/:shortId',async(req,res)=>{
    const shortId=req.params.shortId

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