const express=require("express")
const cors=require("cors")
const sendMail=require("./app.js")
const dotenv =require("dotenv")

const app=express()
app.use(cors({origin:"*"}))
dotenv.config({
  path:"./config.env"
})

app.get("/",(req,res)=>{
  res.status(200).send("send")
})

// app.get("/test",(req,res)=>{
//     sendMail()
//   .then((result) => {console.log('Email sent...', result);res.send(result)})
//   .catch((error) => console.log(error.message)); 
// })

app.listen(5502,()=>console.log("listning on 5502" ))

