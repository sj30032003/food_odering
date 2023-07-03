const express = require('express');
const app= express();
const port =5000;
const mongoDB = require("./db");
mongoDB();
app.get('/',(req,res)=>{
 res.send('Hello World')
})
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://64a2f8f1afc4983639351ce7--melodious-lollipop-d05760.netlify.app");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use(express.json());
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));
app.listen(port,()=>{
    console.log('app is started');
})