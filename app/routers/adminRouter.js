const express = require('express');


const schemas = require('../validations/schema');
const adminController = require('../controllers/adminController');
const authorisationAdmin = require ('../middleware/authMiddlewarelv2');
const validate = require('../validations/validate');


const router = express.Router();




router.route('/jeux')
    .get(authorisationAdmin, adminController.getAllGames)
    .post( adminController.addGames);


router.route('/editor')
    .get( adminController.getAllEditor)
    .post( adminController.addEditors);


module.exports = router;