const {User}=require("../models/user")
import { v4 as uuidv4 } from 'uuid';


async function handlesignup(req,res){

    const {name,email,password}=req.body
    await User.create({name:name,email:email,password:password})
   return res.render("home")
}

async function handlelogin(req,res){
    const {email,password}=req.body
    const user=await User.findOne({email:email,password:password})
    if(!user)
    {
        return res.render('login',{error:"invalid username or password"})
    }
    const sessionid=uuidv4()
    return res.render('home')
}
module.exports={handlesignup,handlelogin}