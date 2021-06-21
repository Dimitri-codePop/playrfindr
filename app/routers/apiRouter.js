const express = require('express');

const schemas = require('../validations/schema');
const errorController = require('../controllers/errorController');
const mainController = require('../controllers/mainController');
const gameController = require('../controllers/gameController');
const themeController = require('../controllers/themeController');
const categoryController = require('../controllers/categoryController');
const eventController = require('../controllers/eventController');
const userController = require('../controllers/userController');
const departmentController = require('../controllers/departmentController');
const messageController = require('../controllers/messageController');
const authorisation = require ('../middleware/authMiddleware');
const validate = require('../validations/validate');


const router = express.Router();

router.route('/')
/**
    * Route de l'acceuil
    * @route GET /
    * @returns {{}} 200 - La liste des jeux random
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
   .get(gameController.getOne);


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
      * Récuperer d'un utilisateur
      * @route GET /profil/{id}
      * @param {number} id - Identifiant d'un utilisateur- Un objet contenant les informations de l'utilisateur
      * @returns {User{}} 200 - L'utilisateur récupérer
      * @returns {Error} 500 - Utilisateur n'existe pas
      */
      .get(authorisation,userController.getOneProfil)

      .patch(authorisation,validate.body(schemas.userUpdateSchema),userController.updateProfil)
      
      .delete(authorisation, userController.deleteProfil);


router.route('/profil/:id(\\d+)/collection')
/**
    * Route de l'acceuil
    * @route GET /profil/:id(\\d+)/collection
    * @returns {Game[]} 200 - La collection d'un utilisateur
    * @param {number} id - Identifiant de l'utilisateur
    * @returns {Error} 500 - Une erreur serveur
    */
    .get(authorisation, userController.getOneCollection);


router.route('/profil/:user_id(\\d+)/collection/:game_id(\\d+)')
    .post(authorisation, userController.addGames)
    .delete(authorisation, userController.deleteGames); 
    


router.route('/event')
/**
    * Route des evenements
    * @route GET /event
    * @returns {Event[]} 200 - La liste des evenements
    * @returns {Error} 500 - Une erreur serveur
    */
    .get(authorisation, eventController.findEvent)
    .post(authorisation, validate.body(schemas.eventInsertSchema),eventController.addEvent);

router.route('/event/:id(\\d+)')
    .post(authorisation, validate.body(schemas.eventUpdateSchema), eventController.participationEvent)
    .patch(authorisation, eventController.removeParticipant)
    .delete(authorisation,eventController.removeEvent);

router.route('/event/:id/update')
    .patch(authorisation, validate.body(schemas.eventUpdateSchema), eventController.updateEvent);
    
router.route('/messagerie')
    /**
    * Route des messages
    * @route GET /messagerie
    * @returns {message[]} 200 - La liste des messages recus
    * @returns {Error} 500 - Une erreur serveur
    */
    .get(authorisation, messageController.getAll);
    
router.route('/messagerie/:id')
    .post(authorisation, validate.body(schemas.messageInsertSchema), messageController.sendMessage); 

router.route('/message/:id')
    .delete(authorisation, messageController.deleteMessage); 


router.route('/search/user/:name')
/**
    * Route de la recherche
    * @route GET /search/user
    * @returns {User[]} 200 - Resultat de la recherche
    * @param {SearchInput.model} User.body.required - Un objet contenant les informations de la recherche
    * @returns {Error} 500 - Une erreur serveur
    */
    .get(authorisation , userController.searchUser); 



router.route('/search/game/:name')
/**
    * Route de la recherche
    * @route GET /search/game
    * @returns {Game[]} 200 - Resultat de la recherche
    * @param {SearchInput.model} Game.body.required - Un objet contenant les informations de la recherche
    * @returns {Error} 500 - Une erreur serveur
    */
    .get(authorisation , gameController.searchGame); 



router.get('/games', gameController.getAll);
router.get('/departements', departmentController.getAll);
router.get('/themes', themeController.getAll);
router.get('/categories', categoryController.getAll); 

router.use(errorController.ressourceNotFound);
module.exports = router;