const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:blue;text-align:center">Welcome to Food Delivery Backend App<h1>`)
})

app.listen(process.env.PORT, ()=>{
    try {
        console.log(`Server is Running on port ${process.env.PORT}`)
    } catch (error) {
        console.log(error.message)
    }
})