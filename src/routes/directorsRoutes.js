const express = require('express');
const router = express.Router();
const directorsController = require('../controllers/directorsController');

router.get('/directors', directorsController.getAllDirectors);
router.get('/directors/:id', directorsController.getDirectorById);

module.exports = router;