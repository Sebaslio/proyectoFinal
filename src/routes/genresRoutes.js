const express = require('express');
const genresController = require('../controllers/genresController');

const router = express.Router();

router.get('/genres', genresController.index);
router.get('/genres/:id', genresController.show);

module.exports = router;