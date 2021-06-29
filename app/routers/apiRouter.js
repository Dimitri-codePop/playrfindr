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
    * Se connecter
    * @route POST /inscription
    * @param {UserInput.model} User.body.required - Un objet contenant les informations d'un utilisateur
    * @returns {User} 200 - L'utilisateur récupérer
    * @returns {Error} 500 - Utilisateur n'existe pas
    */
    .post(userController.login);


router.route('/profil/:id(\\d+)')
    /**
      * Recupérer le profil d'un utilisateur
      * @route GET /profil/{id}
      * @param {number} id - Identifiant d'un utilisateur- Un objet contenant les informations de l'utilisateur
      * @param {token} Token.required - Token du participant
      * @returns {User{}} 200 - L'utilisateur récupérer
      * @returns {Error} 500 - Utilisateur n'existe pas
      */
      .get(authorisation,userController.getOneProfil)
      /**
      * Update d'un utilisateur
      * @route PATCH /profil/{id}
      * @param {number} id - Identifiant d'un utilisateur- Un objet contenant les informations de l'utilisateur
      * @param {UserInput.model} User.body.required - Un objet contenant les informations d'un utilisateur a modifier
      * @param {token} Token.required - Token du participant
      * @returns {User{}} 200 - L'utilisateur récupérer
      * @returns {Error} 500 - Utilisateur n'existe pas
      */
      .patch(authorisation,validate.body(schemas.userUpdateSchema),userController.updateProfil)
      /**
      * Delete d'un utilisateur
      * @route DELETE /profil/{id}
      * @param {number} id - Identifiant d'un utilisateur- Un objet contenant les informations de l'utilisateur a supprimer
      * @param {token} Token.required - Token du participant
      * @returns {message} 200 - Profil supprimé
      * @returns {Error} 500 - Utilisateur n'existe pas
      */
      .delete(authorisation, userController.deleteProfil);


router.route('/profil/:id(\\d+)/collection')
    /**
    * Route de sa collection
    * @route GET /profil/:id/collection
    * @returns {Game[]} 200 - La collection d'un utilisateur
    * @param {number} id - Identifiant de l'utilisateur
    * @param {token} Token.required - Token du participant
    * @returns {Error} 500 - Une erreur serveur
    */
    .get(authorisation, userController.getOneCollection);


router.route('/profil/:user_id(\\d+)/collection/:game_id(\\d+)')
    /**
    * Route de l'ajout d'un jeu a sa collection
    * @route POST /profil/:user_id/collection/:game_id
    * @returns {Game[]} 200 - La collection d'un utilisateur
    * @param {number} user_id - Identifiant de l'utilisateur
    * @param {number} game_id - Identifiant du jeu
    * @param {token} Token.required - Token du participant
    * @returns {Error} 500 - Une erreur serveur
    */
    .post(authorisation, userController.addGames)
    /**
    * Route de la suppression d'un jeu a sa collection
    * @route DELETE /profil/:user_id/collection/:game_id
    * @param {number} user_id - Id de l'utilisateur
    * @param {number} game_id - Id du jeu a supprimé
    * @param {token} Token.required - Token de l'utilisateur
    * @return {message} 200 - Jeu bien supprimé
    * @returns {Error} 500 - Une erreur serveur
    */
    .delete(authorisation, userController.deleteGames); 
    
router.get('/events', authorisation, eventController.findEvents)

router.route('/event')
    /**
    * Route des evenements
    * @route GET /event
    * @returns {Event[]} 200 - La liste des evenements
    * @returns {Error} 500 - Une erreur serveur
    */
    .get(authorisation, eventController.findEvent)
    /**
    * Route de l'ajout d'un événement
    * @route POST /event
    * @param {EventInput.model} Event.body.required - Objet contenant les informations d'un événement
    * @return {Event[]} 200 - Evenement bien ajouté
    * @returns {Error} 500 - Une erreur serveur
    */
    .post(authorisation, validate.body(schemas.eventInsertSchema),eventController.addEvent);

router.route('/event/:id(\\d+)')
    /**
    * Route de l'ajout d'un participant
    * @route POST /event/:id
    * @param {number} id - Id de l'événement
    * @param {token} Token.required - Token du participant
    * @return {User[]} 200 - Participant  bien ajouté
    * @returns {Error} 500 - Une erreur serveur
    */
    .post(authorisation, validate.body(schemas.eventUpdateSchema), eventController.participationEvent)
    /**
    * Route de l'ajout d'un participant
    * @route PATCH /event/:id
    * @param {number} id - Id de l'événement
    * @param {token} Token.required - Token du participant a retiré
    * @return {Event[]} 200 - Participant  bien retiré
    * @returns {Error} 500 - Une erreur serveur
    */
    .patch(authorisation, eventController.removeParticipant)
    /**
    * Route de l'ajout d'un participant
    * @route DELETE /event/:id
    * @param {number} id - Id de l'événement
    * @param {token} Token.required - Token du participant a retiré
    * @return {Event[]} 200 - Participant  bien retiré
    * @returns {Error} 500 - Une erreur serveur
    */
    .delete(authorisation,eventController.removeEvent);

router.route('/event/:id/update')
    /**
    * Route de l'update d'un event
    * @route PATCH /event/:id/update
    * @param {number} id - Id de l'événement
    * @param {EventInput.model} Event.body.required - Objet contenant les informations d'un événement a modifier
    * @param {token} Token.required - Token du propriétaire de l'événement
    * @return {Event[]} 200 - Participant  bien retiré
    * @returns {Error} 500 - Une erreur serveur
    */
    .patch(authorisation, validate.body(schemas.eventUpdateSchema), eventController.updateEvent);
    
router.route('/messagerie')
    /**
    * Route des messages
    * @route GET /messagerie
    * @returns {message[]} 200 - La liste des messages recus
    * @param {token} Token.required - Token de l'utilisateur qui recois les messages
    * @returns {Error} 500 - Une erreur serveur
    */
    .get(authorisation, messageController.getAllMessageReceive);
    
router.route('/messagerie/:id')
    /**
    * Route de l'ajout d'un événement
    * @route POST /messagerie/:id
    * @param {number} id - Id du destinataire
    * @param {MessageInput.model} Message.body.required - Objet contenant le contenu du message
    * @param {token} Token.required - Token de l'utilisateur qui envoie les messages
    * @return {Message[]} 200 - Message bien envoyé
    * @returns {Error} 500 - Une erreur serveur
    */
    .post(authorisation, validate.body(schemas.messageInsertSchema), messageController.sendMessage); 

router.route('/message/:id')
/**
    * Route de l'ajout d'un événement
    * @route DELETE /message/:id
    * @param {number} id - Id du message
    * @param {token} Token.required - Token du destinataire du message
    * @return {Message} 200 - Message  bien supprimé
    * @returns {Error} 500 - Une erreur serveur
    */
    .delete(authorisation, messageController.deleteMessage); 


router.route('/search/user/:name')
    /**
    * Route de la recherche
    * @route GET /search/user
    * @returns {User[]} 200 - Resultat de la recherche
    * @param {UserInput.model} User.body.required - Un objet contenant les informations de la recherche
    * @returns {Error} 500 - Une erreur serveur
    */
    .get(authorisation , userController.searchUser); 



router.route('/search/game/:name')
    /**
    * Route de la recherche
    * @route GET /search/game
    * @returns {Game[]} 200 - Resultat de la recherche
    * @param {GameInput.model} Game.body.required - Un objet contenant les informations de la recherche
    * @returns {Error} 500 - Une erreur serveur
    */
    .get(authorisation , gameController.searchGame); 

    /**
    * Route des jeux
    * @route GET /games
    * @returns {Game[]} 200 - Resultat de la recherche
    * @returns {Error} 500 - Une erreur serveur
    */
router.get('/games', gameController.getAll);

    /**
    * Route des départements
    * @route GET /departements
    * @returns {Department[]} 200 - Resultat de la recherche
    * @returns {Error} 500 - Une erreur serveur
    */
router.get('/departements', departmentController.getAll);

    /**
    * Route des themes
    * @route GET /themes
    * @returns {Theme[]} 200 - Resultat de la recherche
    * @returns {Error} 500 - Une erreur serveur
    */
router.get('/themes', themeController.getAll);

    /**
    * Route des categories
    * @route GET /categories
    * @returns {Category[]} 200 - Resultat de la recherche
    * @returns {Error} 500 - Une erreur serveur
    */
router.get('/categories', categoryController.getAll); 

router.use(errorController.ressourceNotFound);
module.exports = router;