
const connection = require('./utils/connection');

require('dotenv').config();

const app = require('./index');


const PORT = process.env.PORT;

connection();

app.listen( PORT , () => {"server on"});