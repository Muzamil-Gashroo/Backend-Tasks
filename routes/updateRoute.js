
const updateRoute = require("express").Router();


const User = require('../models/userModel');


updateRoute.post('/update', async (req,res ) => {

    try{

     const { email , name } = req.body;

     const userUpdated = await User.findOneAndUpdate( 

        { email },
        { name },   
        { new: true } );

     res.status(200).send(userUpdated);

    }catch(err){ console.error(err); };

});

module.exports = updateRoute;