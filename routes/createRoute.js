
const createRoute = require("express").Router();

const User = require('../models/userModel');

createRoute.post('/create', async (req, res) =>  {

     try{  
        
    const { name , email , password } = req.body;

    const userCreated = await User.create( { name, email, password } );

    res.status(200).send(`User created with : ${userCreated}`);

    }
    catch(err){

        console.error(err);
        res.status(500).send("Error creating user");
        
    }

 });

 module.exports = createRoute;