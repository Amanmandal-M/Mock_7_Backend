const express = require('express');
require('dotenv').config();

const orderRouter = express.Router();

// Controller Location
const { placeOrder , getSingleOrderDetails , updateStatusOfOrder } = require('../controllers/orderController');

// This endpoint should allow the user to place an order.
orderRouter.post('/orders',placeOrder);

// This endpoint should return the details of a specific order identified by its ID.
orderRouter.get('/orders/:id',getSingleOrderDetails);

// This endpoint should allow users to update the status of a specific order identified by its ID.
orderRouter.patch('/orders/:id',updateStatusOfOrder);


module.exports = { orderRouter };