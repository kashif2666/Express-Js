const express=require('express');
const path=require('path')
const app=express();
const Port=80;

// for serving static files
app.use('/static', express.static(__dirname +'/static'))

// set the template engine as pug
app.set('view engine', 'pug')

// set the view directory
app.set('views', path.join(__dirname, 'views'))
// our pug demo endpoint
app.get('/demo', (req, res) => {
    res.status(200).render('demo', { title: 'Hey', message: 'Hello there!' })
  })

app.get("/",(req, res)=>{
    res.send("<h1> This is my first express </h1> ")
})

app.get("/about",(req,res)=>{
    res.status(200).send("<h1> This is about </h1>")
})

app.post("/about",(req,res)=>{
    res.send("This is a post request of about")
})
app.get("/this",(req,res)=>{
    res.status(404).send(" this page is not found on website")
})
app.listen(Port,()=>{
    console.log(`This Appilication started on port ${Port}`);
})