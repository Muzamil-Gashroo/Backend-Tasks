
const loginAuth = require('express').Router();

const User = require('../models/userModel');

loginAuth.post('/login', async (req, res)=>{

    try{
   
        const { email, password } = req.body;

        if(!email || !password){

            return res.status(400).json({ message: 'Username and password are required' });
        };
        
        const IsUser = await User.findOne({email});

        if(!IsUser){ return res.status(404).json({ message: "User not found "}) };

        if(IsUser){
            
            const verrifyPassword = await IsUser.comparePassword(password, IsUser.password);            
          
            if(verrifyPassword){

                res.status(200).json({ message: 'Login successful', user: IsUser });

            }else{ 

                res.status(401).json({ message: "invalid password",  }) 
                
            };

        };

    }catch(err){console.error(err)};


});

module.exports = loginAuth;