const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes');
require("dotenv").config({path:'./config/.env'});
require('./config/db');
const app = express();

const port = process.env.PORT;

const corsOptions = {
    origin: process.env.REACT_URL,
}

app.use(
    cors(corsOptions),
    //bodyParser.json(),
    //bodyParser.urlencoded({extended: true}),
    express.json()
);

//ROUTES
app.use('/api/user', userRoutes);


//SERVER
app.listen(port, () => console.log(`On est sur Le port ${port}`));