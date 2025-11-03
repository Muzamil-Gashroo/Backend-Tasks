
const connection = require('./utils/connection');

const app = require('./index');

const PORT = 3000;

connection();

app.listen( PORT , () => {"server on"});