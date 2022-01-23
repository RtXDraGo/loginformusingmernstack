import express from "express"
import cors from "cors"
import mongoose from "mongoose"
const app = express()
const port=8000
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
    },()=>{
        console.log("connected")
    })
const userschema = new mongoose.Schema({
  name: String,
  email:String,
  password:String,
  rpassword:String
});
const User = mongoose.model('User', userschema);
app.post('/login', (req, res) => {
  const {email,password}=req.body
  User.findOne({email:email},(err,user)=>{
    if(user){
      if(password===user.password){
        res.send({message:"Login succsesfull",user:user})
      }else{
        res.send({message:"password do not match"})
      }
    }else{
      res.send({message:"User not registered"})
    }
  })
  
})
app.post('/register', (req, res) => {
const {name,email,password}=req.body
  User.findOne({email:email},(err,user)=>{
      if(user){
          res.send({message:"Already registered",user:user})
      }
      else{
        const user=new User({
        name,
        email,
        password
    })
    user.save(err=>{
        if(err){
            res.send(err)
        }else{
            res.send({message:"Sucsessful register",user:user})
        }
    })
  }
})    
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
