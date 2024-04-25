const path= require("path");
const express = require("express");
const app = express();

// relative absolute
// console.log(__dirname); 


// console.log(path.join(__dirname, "/public")); 
const staticPath=path.join(__dirname, "/public"); 
const templatePath=path.join(__dirname, "/templates");

// built-in middleware
app.use(express.static(staticPath)); 

let PORT=8000;

// to set view engine
app.set("view engine","hbs");
app.set("views",templatePath);

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

  //  convert to JSON Object
  app.get('/temp', (req, res) => {
    res.send([{
      id:1,
      name:"kashif",
    },
    {
      id:1,
      name:"kashif",
    },
    {
      id:1,
      name:"kashif",
    }])
  });
  // 2nd Way convert to JSON Object
  app.get('/temp2', (req, res) => {
    res.json([{
      id:1,
      name:"kashif",
    },
    {
      id:1,
      name:"kashif",
    },
    {
      id:1,
      name:"kashif",
    }])
  });

app.listen(PORT,()=>{
    console.log(`Listening at port no. ${PORT}`);
});