
const express = require('express');

const cors = require('cors'); 

const createRoute = require('./routes/createRoute');

const readRoute = require('./routes/readRoute');

const updateRoute = require('./routes/updateRoute');

const deleteRoute = require('./routes/deleteRoute');

// --- ---

const app = express();

app.use(express.json());

app.use(cors());

app.use("/Crud/v1",createRoute);

app.use("/Crud/v1",readRoute);

app.use("/Crud/v1",updateRoute);

app.use("/Crud/v1",deleteRoute);
    

module.exports = app;


