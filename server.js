const express = require('express');
const  { userRouter } = require('./user/router');
const Sequelize = require('sequelize');

const sequelize = new Sequelize("sqlite:database.db");

const cors = require('cors');

require("dotenv").config();

const app = express();

const corsOption = {
    origin: process.env.REACT_URL,
}

app.use(cors(corsOption));
app.use(express.json());

app.get("/", (req, res) => {
    res.json([{ message: "Hello word ! "}]);
});

app.use("/api", userRouter(sequelize));


const port = process.env.PORT || 8000;

sequelize
    .sync()
    .then(() => 
        app.listen(8000, () => console.log(`On est sur le port ${port} !`))
    );