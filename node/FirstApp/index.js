
// app.get('/',(req,res)=>{
//     res.render('home.ejs')
// })

// app.get("/cats",(req,res)=>{
//     const cats=['Blue','Green',"pink",'Monllli','wisdomes']
//     res.render('Cats',{cats})
// })

// app.get('/rand',(req,res)=>{
//     const num = Math.floor(Math.random() *10 )+1;
//     res.render('random',{num})
// })
// app.get('r/:subreddit',(req,res)=>
// {
//     const {subreddit}=req.params;
//     res.render('subreddit',{subreddit});
// })


// console.dir(app)

// app.use((req,res)=>{
//     console.log("We got new request");
    // res.send("we got your request,this is your responce")
//     res.send({color:'red'})

//     res.send("<h1>this is webpage</h1>")
// })



// app.get('/cats',(req,res)=>{
//     console.log("Cat RESPONDING")
//     res.send("Mewoooooow!!")
// })
// app.post('/cats',(req,res)=>
// {
//     res.send('OHH YOU POST IT')
// })

// app.get('/serach',(req,res)=>{
//     const{q}=req.query;
//     if(!q){
//         res.send('Nothing found if you nothing search')
//     }
//     res.send("OHHH YES")
// })
// app.get('*',(req,res)=>
// {
//     res.send('YES WE ARE RESPONDING')
// })
// app.get('/r/:subreddit',(req,res)=>{
//     const subreddit=req.params;
//     res.send(`<h1> Browsing the ${subreddit}manu </h1>`)
// })
// app.get('/dog',(req,res)=>{
//     res.send("BOW BOWBOW")
// })
// app.get('/',(req,res)=>{
//     res.send("YOU ARE IN HOME PAGE")
// })

// app.listen(8080,()=>{
//     console.log("LIstening on port 8080")
// })



// const express=require("express");
// const app=express()
// const path=require('path')
// app.set('view engine','ejs');

// app.use(express.urlencoded({extended:true}))
// app.get('/tocos',(req,res)=>{
//     res.send("Get/tocos response")
// })
// app.post('/tocos',(req,res)=>{
//     const{meat,qty}=req.body;
//     res.send(`OK, here are your ${qty} ${meat}`)
// })
// app.set('views',path.join(__dirname,'/views'))
// app.listen(3000,()=>{
//     console.log("listening to 3000")
// })




const express=require("express");
const app=express()
const path=require('path')


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs');

const comments = [{
    username:'Todd',
    comment:'lol that is funny '

},
{
    username:'Skyler',
    comment:'I like to go birdwatching with my dog '

},
{
    username:'SkBerBoi',
    comment:'Plz delete your account,Todd'

},
{
    username:'onlysayswoof',
    comment:'worf woorf woorf'
}
]

app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments})
})

app.get('/comments/new',(req,res)=>{
    res.render('comments/new')
})
app.post('/comments', (req,res)=>{
    // console.log(req.body)
    const {username,comment}=req.body
    comments.push({username,comment})
    res.send("It worked")
})
app.get('/tacos',(req,res)=>{
    res.send("Get/tacos response")
})
app.post('/tacos',(req,res)=>{
    const{meat,qty}=req.body;
    res.send(`OK, here are your ${qty} ${meat}`)
})
app.listen(3000,()=>{
    console.log("listening to 3000")
})
