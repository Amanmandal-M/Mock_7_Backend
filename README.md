# Food Delivey App Backend System

## About

<br>

This is Food Delivey App so user can register with valid credentials and login with valid credentials and after authentication user can see available restaurants and their menu items and they can order the food and if user wants to view the single menu items etc. they can also view and if user wants to edit anything so they can also do this.

<br>

## Clone Repository 

```
https://github.com/Amanmandal-M/Mock_7_Backend.git
```


## Installation

```
npm install
```

## Start the Backend server 

```
npm run start
```
```
node index.js
```
```
nodemon start
``` 
```
nodemon index.js
```

Note : You can use any of them 

<br>

##  MVC Structure

```
├── index.js
├── configs
|    └── db.js
├── models
|    └── userModel.js
|    └── restaurantModel.js
|    └── orderModel.js
├── routes
|    └── userRoute.js
|    └── restaurantRoute.js
|    └── orderRoute.js
├── middlewares
|    └── authenticationMiddleware.js
├──controllers
|    └── userController.js
|    └── restaurantController.js
|    └── orderController.js
```

Note: 

- Before doing anything first create `.env` file and put `PORT` , `MONGO_URL` , `NORMAL_KEY`.
- `PORT` is for listening the server.
- `MONGO_URL` is for running database and store your data in database so put your mongo link.
- `NORMAL_KEY` is for authentication jsonwebtoken so basically this is your secret key .

<br>

## Schema Design

<br>

<h3><strong>User Schema</strong><h3>

```
{
  _id: ObjectId,
  name: String,
  email: String,
  password: String,
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    zip: String
  }
}
```

<h3><strong>Restaurant Schema</strong><h3>

```
{
  _id: ObjectId,
  name: String,
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    zip: String
  },
  menu: [{
    _id: ObjectId,
    name: String,
    description: String,
    price: Number,
    image: String
  }]
}
```

<h3><strong>Order Schema</strong><h3>

```
{
	_id: ObjectId,
	user : { type: ObjectId, ref: 'User' },
	restaurant : { type: ObjectId, ref: 'Restaurant' },
    items: [{
      name: String,
      price: Number,
      quantity: Number
    }],
    totalPrice: Number,
    deliveryAddress: {
        street: String,
        city: String,
        state: String,
        country: String,
        zip: String
    },
    status: String     // e.g, "placed", "preparing", "on the way", "delivered"
}
```

## Endpoints

<table>
    <thead>
        <tr>
            <th>METHOD</th>
            <th>ENDPOINT</th>
            <th>DESCRIPTION</th>
            <th>STATUS CODE</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/api/register</td>
            <td>This endpoint should allow users to register. Hash the password on store.</td>
            <td>201</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/login</td>
            <td>This endpoint should allow users to login. Return JWT token on login.</td>
            <td>201</td>
        </tr>
        <tr>
            <td>PUT / PATCH</td>
            <td>/api/user/:id/reset</td>
            <td>This endpoint should allow users to reset the password identified by user id, providing the current password and new password in the body.</td>
            <td>204</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/restaurants</td>
            <td>This endpoint should return a list of all available restaurants.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/restaurants/:id</td>
            <td>This endpoint should return the details of a specific restaurant identified by its ID.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/restaurants/:id/menu</td>
            <td>This endpoint should return the menu of a specific restaurant identified by its ID.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>POST / PUT</td>
            <td>/api/restaurants/:id/menu</td>
            <td>This endpoint should allow the user to add a new item to a specific restaurants menu identified by it id.</td>
            <td>201</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>/api/restaurants/:id/menu/:id</td>
            <td>This endpoint should allow the user to delete a particular menu item identified by its id from a specific restaurant.</td>
            <td>202</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/orders</td>
            <td>This endpoint should allow the user to place an order.</td>
            <td>201</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/orders/:id</td>
            <td>This endpoint should return the details of a specific order identified by its ID.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>PUT / PATCH</td>
            <td>/api/orders/:id</td>
            <td>This endpoint should allow users to update the status of a specific order identified by its ID.</td>
            <td>204</td>
        </tr>
    </tbody>
</table>



