const express=require("express");
const app=express()
// const path=require('path')
// app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}))
app.use(express.json)

app.get('/tocos',(req,res)=>{
    res.send("Get/tocos response")
})
app.post('/tocos',(req,res)=>{
    const{meat,qty}=req.body;
    res.send(`OK, here are your ${qty} ${meat}`)
})
app.listen(3000,()=>{
    console.log("listening to 3000")
})