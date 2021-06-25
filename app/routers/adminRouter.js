const express = require('express');


const schemas = require('../validations/schema');
const adminController = require('../controllers/adminController');
const editorController = require('../controllers/editorController');
const authorisationAdmin = require ('../middleware/authMiddlewarelv2');
const validate = require('../validations/validate');
const gameController = require('../controllers/gameController');
const themeController = require('../controllers/themeController');
const categoryController = require('../controllers/categoryController');
const userController = require('../controllers/userController');
const authorController = require('../controllers/authorController');
const eventController = require('../controllers/eventController');

const router = express.Router();

   
router.get('/', authorisationAdmin, adminController.home);

router.route('/users')
    .get(authorisationAdmin, userController.getAll);

router.route('/users/:id')
    .delete( authorisationAdmin,userController.deleteProfilAdmin);

router.route('/jeux')
    .get(authorisationAdmin,  gameController.getAllGamesAndThemesAndCatAndAuthor)
    .post( authorisationAdmin, validate.body(schemas.gameInsertSchema), gameController.addGames);

router.route('/jeux/:id')
    .patch( authorisationAdmin,  validate.body(schemas.gameUpdateSchema), gameController.updateGames)
    .delete( authorisationAdmin,  gameController.deleteGames);

router.route('/editor')
    .get( authorisationAdmin,  editorController.getAllEditor)
    .post( authorisationAdmin,validate.body(schemas.editorInsertSchema), editorController.addEditors);

router.route('/editor/:id')
    .patch( authorisationAdmin, validate.body(schemas.editorUpdateSchema), editorController.updateEditor)
    .delete( authorisationAdmin,  editorController.deleteEditor);

router.route('/theme')
    .get( authorisationAdmin,  themeController.getAll)
    .post( authorisationAdmin, validate.body(schemas.themeInsertSchema), themeController.addTheme);

router.route('/theme/:id')
    .patch( authorisationAdmin, validate.body(schemas.themeUpdateSchema), themeController.updateTheme)
    .delete( authorisationAdmin,  themeController.deleteTheme);

router.route('/category')
    .get( authorisationAdmin, categoryController.getAll)
    .post( authorisationAdmin, validate.body(schemas.categoryInsertSchema), categoryController.addCategory);

router.route('/category/:id')
    .patch( authorisationAdmin, validate.body(schemas.categoryUpdateSchema), categoryController.updateCategory)
    .delete( authorisationAdmin,  categoryController.deleteCategory);

router.route('/author')
    .get( authorisationAdmin, authorController.getAll)
    .post( authorisationAdmin, validate.body(schemas.authorInsertSchema),  authorController.addAuthor);


router.route('/author/:id')
    .patch( authorisationAdmin, validate.body(schemas.authorUpdateSchema), authorController.updateAuthor)
    .delete( authorisationAdmin,  authorController.deleteAuthor);

router.route('/event')
    .get(authorisationAdmin, eventController.getAll)
    
router.route('/event/:id')
    .delete( authorisationAdmin, eventController.deleteEvent);


module.exports = router;