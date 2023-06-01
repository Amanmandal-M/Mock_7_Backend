const express = require('express');
require('dotenv').config();

const restaurantRouter = express.Router();

// Controller Location
const { allRestaurants , singleRestaurantById , singleRestaurantByIdOfMenu , addRestaurantData , addMenuById , deleteMenuById} = require('../controllers/restaurantController');

// This endpoint should return a list of all available restaurants.
restaurantRouter.get('/restaurants', allRestaurants);

// This endpoint should return the details of a specific restaurant identified by its ID.
restaurantRouter.get('/restaurants/:id', singleRestaurantById);

// This endpoint should return the menu of a specific restaurant identified by its ID.
restaurantRouter.get('/restaurants/:id/menu',singleRestaurantByIdOfMenu);

// This endpoint should allow the user to add a new item to a specific restaurants menu identified by it id.
restaurantRouter.post('/restaurants/:id/menu',addMenuById);

// This endpoint should allow the user to add restaurants.
restaurantRouter.post('/addRestaurant', addRestaurantData);

// This endpoint should allow the user to delete a particular menu item identified by its id from a specific restaurant.
restaurantRouter.delete('/restaurants/:rId/menu/:mId',deleteMenuById);


module.exports = { restaurantRouter }