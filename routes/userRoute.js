const express = require('express');
require('dotenv').config();

const userRouter = express.Router();

// Controller location
const { registerUser , loginUser , resetPassword } = require('../controllers/userController');


// This endpoint should allow users to register. Hash the password on store.
userRouter.post('/register',registerUser);

// This endpoint should allow users to login. Return JWT token on login.
userRouter.post('/login',loginUser);

// This endpoint should allow users to reset the password identified by user id, providing the current password and new password in the body.
userRouter.patch('/user/:id/reset',resetPassword)


module.exports = { userRouter }