// Models Location
const { orderModel } = require('../models/orderModel');


const placeOrder = async (req,res) => {
    const payload = req.body;
    try {
        const orderData = new orderModel(payload);
        await orderData.save();

        res.status(201).send({
            "Message": "Order created successfully",
            "Order": orderData
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            "Message":error.message
        })
    }    
};

const getSingleOrderDetails = async (req,res) => {
    const Id = req.params.id;
    try {
        const singleOrder = await orderModel.findById({"_id":Id}).populate('user').populate('restaurant');
        res.status(200).json(singleOrder)
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            "Message":error.message
        })
    }    
};

const updateStatusOfOrder = async (req,res) => {
    const Id = req.params.id;
    const orderData = req.body;
    try {
        const updateData = await orderModel.findByIdAndUpdate({_id : Id}, orderData);
        
        res.status(204).send({
            "Message":"Order Updated successfully",
            "data": updateData
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            "Message":error.message
        })
    }    
};


module.exports = { placeOrder , getSingleOrderDetails , updateStatusOfOrder };