
const mongoose = require('mongoose');  

const bcrypt = require('bcrypt');  

const userSchema = new mongoose.Schema({ 

    name : { 
       
        type: String,
        required: [true, "Name"], 
    
    },
    email : {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid email address"],
        lowercase: true,

    },
    password : {

        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters long"],

    },

});

userSchema.pre('save', async function(next){

    if(!this.isModified('password'))
        return next();
    
    const security = 10;
    this.password = await bcrypt.hash(this.password, security);
    next();

});


userSchema.methods.comparePassword = async function ( enteredPassword, password ){

    return await bcrypt.compare( enteredPassword , password );

}

const User = mongoose.model('User', userSchema);

module.exports = User;

