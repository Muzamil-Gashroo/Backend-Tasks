
const mongoose = require('mongoose');

require('dotenv').config();

const URL = process.env.URL; 


const connection = async ()=>{

    try{

        await mongoose.connect(URL);
        console.log("DB connected");

    }catch(err){console.error(err);}


}

module.exports = connection;