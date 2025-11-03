
const mongoose = require('mongoose');

const URL = 'mongodb://127.0.0.1:27017/mongoose-crud'

const connection = async ()=>{

    try{

        await mongoose.connect(URL);
        console.log("DB connected");

    }catch(err){console.error(err);}


}

module.exports = connection;