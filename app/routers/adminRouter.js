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

const router = express.Router();


router.get('/', /* authorisationAdmin, */ adminController.home);

router.route('/users')
    .get(/* authorisationAdmin, */ userController.getAll);

router.route('/users/:id')
    .delete(/* authorisationAdmin, */ userController.deleteProfilAdmin);

router.route('/jeux')
    .get(/* authorisationAdmin, */ gameController.getAllGamesAndThemesAndCatAndAuthor)
    .post(/* authorisationAdmin, */ gameController.addGames);

router.route('/jeux/:id')
    .patch(/* authorisationAdmin, */ gameController.updateGames)
    .delete(/* authorisationAdmin, */ gameController.deleteGames);


router.route('/editor')
    .get(/* authorisationAdmin, */ editorController.getAllEditor)
    .post(/* authorisationAdmin, */ editorController.addEditors);

router.route('/editor/:id')
    .patch(/* authorisationAdmin, */ editorController.updateEditor)
    .delete(/* authorisationAdmin, */ editorController.deleteEditor);

router.route('/theme')
    .get(/* authorisationAdmin, */ themeController.getAll)
    .post(/* authorisationAdmin, */ themeController.addTheme);

router.route('/theme/:id')
    .patch(/* authorisationAdmin, */ themeController.updateTheme)
    .delete(/* authorisationAdmin, */ themeController.deleteTheme);

router.route('/category')
    .get(/* authorisationAdmin, */categoryController.getAll)
    .post(/* authorisationAdmin, */ categoryController.addCategory);

router.route('/category/:id')
    .patch(/* authorisationAdmin, */ categoryController.updateCategory)
    .delete(/* authorisationAdmin, */ categoryController.deleteCategory);

router.route('/author')
    .get(/* authorisationAdmin, */authorController.getAll)
    .post(/* authorisationAdmin, */ authorController.addAuthor);


router.route('/author/:id')
    .patch(/* authorisationAdmin, */ authorController.updateAuthor)
    .delete(/* authorisationAdmin, */ authorController.deleteAuthor);


module.exports = router;