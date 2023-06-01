// Models Location
const { restaurantModel } = require("../models/restaurantModel");

const allRestaurants = async (req,res) => {
    try {
        const data = await restaurantModel.find();
        res.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            "Message":error.message
        })
    }
}


const singleRestaurantById = async (req,res) => {
    const Id = req.params.id;
    try {
        const data = await restaurantModel.findById(Id);
        res.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            "Message":error.message
        })
    }
}

const addRestaurantData = async (req,res) => {
    const restroData = req.body;
    try {
        const data = new restaurantModel(restroData);
        await data.save();

        res.status(200).send({
            "Message": "Restaurant saved successfully",
            "Data":data
        });

    } catch (error) {
        console.log(error.message)
        res.status(500).send({
            "Message":error.message
        })
    }
}

const singleRestaurantByIdOfMenu = async (req,res) => {
    const id = req.params.id
    try {
        const data = await restaurantModel.findById(Id);
        res.status(200).json(data.menu);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            "Message":error.message
        })
    }
}


const addMenuById = async (req,res) => {
    const Id   = req.params.id;
    const menuData = req.body;
    try {
        
        const data = await restaurantModel.findByIdAndUpdate({_id:Id},{menu:[...menuData]});        
        res.status(201).send({
            "Message": "Menu Updated successfully",
            "Data": data
        })

    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            "Message":error.message
        })
    }
}


const deleteMenuById = async (req,res) => {
    try {
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            "Message":error.message
        })
    }
}


module.exports = { allRestaurants , singleRestaurantById , singleRestaurantByIdOfMenu , addRestaurantData , addMenuById , deleteMenuById}