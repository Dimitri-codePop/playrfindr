const express = require('express');
const mainController = require('../controllers/mainController');
const gameController = require('../controllers/gameController');

const router = express.Router();
 /**
    * Route de l'acceuil
    * @route GET /
    * @returns {Game[]} 200 - La liste des jeux random
    * @returns {Error} 500 - Une erreur serveur
    */
router.get('/', mainController.getAll);
/**
    * Route des jeux
    * @route GET /
    * @returns {Game[]} 200 - La liste des jeux
    * @returns {Error} 500 - Une erreur serveur
    */
router.get('/jeux', gameController.getAllGames);



module.exports = router;