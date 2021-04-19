const express = require("express");
const { modelUser } = require("./model");
const { Service } = require("./service");

const router = express.Router();

/**
 * Ce Middelware gére les erreurs et  les transformes en JSON
 */
router.use( (err, req, res, next) => {
    err ? res.status(err.status).json({error: err.massage}): next()
});

exports.userRouter = (sequelize) => {
    //Le model de la base de données
    const USER = modelUser(sequelize);

    //Le service metier
    const service = Service(USER);

    //Route pour afficher tout les Utilisateurs
    router.get("/all", (req, res) => {
        service.all(req.body)
            .then(user => res.json(user))
    });

    //Route permet de créer un ytilisateur
    router.post("/create", (req, res) => {
        service.create(req.body)
            .then(() => res.json(req.body))
    });

    return router;
}