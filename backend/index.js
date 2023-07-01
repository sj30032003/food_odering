const express = require('express');
const app= express();
const port =5000;
const mongoDB = require("./db");
mongoDB();
app.get('/',(req,res)=>{
 res.send('Hello World')
})
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://64a003b1c002911f0d8b5893--playful-mooncake-369f25.netlify.app/");
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