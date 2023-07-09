const express=require("express")
const cors=require("cors")
const sendMail=require("./app.js")

const app=express()
app.use(cors({origin:"*"}))


app.get("/test",(req,res)=>{
    sendMail()
  .then((result) => {console.log('Email sent...', result);res.send(result)})
  .catch((error) => console.log(error.message));
    
})

app.listen(5502,()=>console.log("listning on 5502" ))

