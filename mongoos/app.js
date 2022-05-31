const express=require('express');
const app = express();
const morgan=require('morgan');
app.use(morgan('tiny'));

app.use((req,res,next)=>{
    req.reqestTime=Date.now();
    res.send("pruthvi pruthvi pruthvi")
    console.log(req.method,req.path);
    next();
})

app.get('/',(req,res)=>{
    res.send("Hey Hey Hey")
});

app.get('/dogs',(req,res)=>{
    console.log(`Request date: ${req.reqestTime}`)
    res.send('Wooofff Woofff')
})

app.use((req,res,next)=>{
    const{password}=req.query;
    if (password==='chickennnn')
    {
        next();

    }
    res.send('Sorry you need a password')
})

app.listen(3000,()=>{
    console.log("App is running on localhost:3000")
})