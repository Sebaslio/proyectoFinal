const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviewsController');

// Ruta para crear una nueva reseña
router.post('/movies/:movieId/reviews', reviewsController.createReview);

module.exports = router;