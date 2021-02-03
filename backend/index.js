const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
require('dotenv').config();

//routes
var api = require('./routes/registro');
// Import my test routes into the path '/test'
app.use('/api/stats/player', api);
// puerto
const port = 3001;
//listen port
app.listen(port,()=>{
    console.log('corriendo en el puerto 3001');
})