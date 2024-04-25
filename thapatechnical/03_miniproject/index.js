const path= require("path");
const express = require("express");
const app = express();

// relative absolute
// console.log(__dirname); 


// console.log(path.join(__dirname, "/public")); 
const staticPath=path.join(__dirname, "/public"); 

// built-in middleware
app.use(express.static(staticPath)); 

let PORT=8000;

// to set view engine
app.set("view engine","hbs");

// template engine route
app.get("/",(req,res)=>{
  res.render("index.hbs", {
    channelName: "Kashif",
  });
});



app.get('/', (req, res) => {
  res.send('Hello World 265')
});

app.get('/about', (req, res) => {
    res.status(200).send('Hello World About')
  });

  app.get('/contact', (req, res) => {
    res.send('Hello World Contact')
  });

  


app.listen(PORT,()=>{
    console.log(`Listening at port no. ${PORT}`);
});