const express = require('express');
const  { userRouter } = require('./user/router');
const Sequelize = require('sequelize');

const sequelize = new Sequelize("sqlite:database.db");

//const cors = require('cors');

//require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/user", userRouter(sequelize));

sequelize
    .sync()
    .then(() => 
        app.listen(8000, () => console.log("On est sur le port 8000 !"))
    );