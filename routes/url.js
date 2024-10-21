const express=require("express")
const router=express.Router()
const {handleCreateshorturl,handleUrlcounts}=require("../controllers/url")

router.post('/',handleCreateshorturl)
router.get('/analytics/:shortId',handleUrlcounts)



module.exports=router