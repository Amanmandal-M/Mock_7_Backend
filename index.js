const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
require('dotenv').config();


// Models Location
const { dbConnection } = require('./configs/db');


// Router Location
const { userRouter } = require('./routes/userRoute');
const { restaurantRouter } = require('./routes/restaurantRoute');
const { orderRouter } = require('./routes/orderRoute');
const { authentication } = require('./middlewares/authenticationMiddleware');


// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Default Routes
app.get('/', (req,res)=>{
    return res.status(200).send(`<h1 style="text-align:center;color:blue;">Welcome to Food Delivery Backend App</h1>`)
});


// Routes
app.use("/api" , userRouter);
app.use(authentication);
app.use("/api" , restaurantRouter);
app.use("/api" , orderRouter);



// Server Listening
app.listen(process.env.PORT, async ()=>{
    try {
        await dbConnection;
        console.log(`Connected to Database`);
        console.log(`Server Running on port ${process.env.PORT}`);
    } catch (error) {
        console.log(error.message);
    }
})