const jwt = require('jsonwebtoken')

const authentication = async (req,res,next) => {
    try {
        
    } catch (error) {
        res.status(500).send({
            "message":error.message
        });
        console.log(`error: ${error.message}`)
    }
}

module.exports = { authentication }