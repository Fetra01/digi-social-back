const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
const {checkUser, requireAuth} = require ('./middleware/auth.middleware');
const cookieParser = require('cookie-parser');
require("dotenv").config({path:'./config/.env'});
require('./config/db');

const app = express();

const port = process.env.PORT;

const corsOptions = {
    origin: process.env.REACT_URL,
    credentials: true,
    headers: {
        'Access-Control-Allow-Origin': process.env.REACT_URL,
    },
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}

app.use(
    cors(corsOptions),
    cookieParser(),
    //bodyParser.json(),
    //bodyParser.urlencoded({extended: true}),
    express.json()
);

//jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
    res.status(200).send(res.locals.user._id);
})


//ROUTES
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);


//SERVER
app.listen(port, () => console.log(`On est sur Le port ${port}`));