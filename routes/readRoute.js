
const readRoute = require("express").Router();


const User = require('../models/userModel');


readRoute.get("/read", async (req, res) => {

        const totalUsers = await User.find();

    res.send(totalUsers);

});


module.exports = readRoute;

