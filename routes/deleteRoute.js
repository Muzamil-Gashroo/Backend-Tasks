
const deleteRoute = require("express").Router();


const User = require('../models/userModel');


deleteRoute.post('/delete', async (req, res) => {

   try{
     
        const  {email}  = req.body;
        const userDeletion = await User.findOneAndDelete( {email}, {new:true} );
        res.status(200).send(`User deleted: ${email}`);
        
    }catch(err){ console.error(err); };



});

module.exports = deleteRoute;