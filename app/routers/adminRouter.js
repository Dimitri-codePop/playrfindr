const express = require('express');

const router = express.Router();


const adminController = require('../controllers/adminController');


router.route('/jeux')
    .get(adminController.getAll);
/* router.route('/jeux/:id')
    .post(adminController.addGames); */
module.exports = router;