const express = require('express');

const router = express.Router();


const adminController = require('../controllers/adminController');


router.route('/jeux')
    .get(adminController.getAll)

module.exports = router;