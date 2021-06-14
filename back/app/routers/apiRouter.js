const express = require('express');

const schemas = require('../validations/schema');
const errorController = require('../controllers/errorController');
const mainController = require('../controllers/mainController');
const gameController = require('../controllers/gameController');
const themeController = require('../controllers/themeController');
const categoryController = require('../controllers/categoryController');
const userController = require('../controllers/userController');
const validate = require('../validations/validate');

const router = express.Router();

router.route('/')
 /**
    * Route de l'acceuil
    * @route GET /
    * @returns {Game[]} 200 - La liste des jeux random
    * @returns {Error} 500 - Une erreur serveur
    */
   .get( mainController.getAllRandom);


router.route('/jeux')
/**
    * Route des jeux
    * @route GET /jeux
    * @returns {Game[]} 200 - La liste des jeux
    * @returns {Error} 500 - Une erreur serveur
    */
    .get(gameController.getAllGamesAndThemesAndCat);

router.route('/jeu/:id(\\d+)')
/**
    * Un Jeu
    * @route GET /jeu/{id}
    * @param {number} id - Identifiant du jeu
    * @returns {Game.model} 200 - Le Jeu
    * @returns {Error} 500 - Une erreur serveur
    */
   .get(gameController.getOne)


router.route('/inscription')
    /**
    * Ajouter un utilisateur
    * @route POST /inscription
    * @param {UserInput.model} User.body.required - Un objet contenant les informations d'un utilisateur
    * @returns {User} 200 - L'utilisateur créer
    * @returns {Error} 500 - Utilisateur déjà présent dans la BDD
    */
    .post(validate.body(schemas.userInsertSchema), userController.register);

router.route('/connexion')
  /**
    * Récuperer un utilisateur
    * @route POST /inscription
    * @param {UserInput.model} User.body.required - Un objet contenant les informations d'un utilisateur
    * @returns {User} 200 - L'utilisateur récupérer
    * @returns {Error} 500 - Utilisateur n'existe pas
    */
    .post(userController.login);


router.route('/profil/:id(\\d+)')
    /**
      * Récuperer un utilisateur
      * @route GET /profil/:id
      * @param {UserInput.model} User.params.required - Un objet contenant les informations de l'utilisateur
      * @returns {User} 200 - L'utilisateur récupérer
      * @returns {Error} 500 - Utilisateur n'existe pas
      */
      .get(userController.getOneProfil)


      .patch(validate.body(schemas.userUpdateSchema),userController.updateProfil)
      
      .delete(userController.deleteProfil);


/* router.route('/collection')
    .get(userController.getOneCollection); */
    

router.get('/games', gameController.getAll);
router.get('/themes', themeController.getAll);
router.get('/categories', categoryController.getAll);

router.use(errorController.ressourceNotFound);
module.exports = router;