const express=require('express');

const app=express();

const PORT= 5000;

app.get('/',(req, res)=>{
    res.send('<h1> Hii </h1>');
});

app.get('/about',(req, res)=>{
    res.send('<h1> About about </h1>');
});
app.get('/service',(req, res)=>{
    res.send('<h1> Service </h1>');
});
app.get('/contact',(req, res)=>{
    res.send('<h1> contact us </h1>');
});

app.listen(PORT, ()=> console.log(`Server started on Port ${PORT}`));