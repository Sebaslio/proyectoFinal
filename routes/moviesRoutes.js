const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const reviewsController = require('../controllers/reviewsController');

// Ruta para crear una reseña
router.post('/movies/:id/reviews', reviewsController.createReview);

// Ruta para manejar la busqueda de peliculas
router.get('/search', moviesController.searchMovies);

// Resto de rutas para películas
router.get('/movies', moviesController.getAllMovies);
router.get('/movies/:id', moviesController.getMovieById);
router.post('/movies', moviesController.createMovie);
router.put('/movies/:id', moviesController.updateMovie);
router.delete('/movies/:id', moviesController.deleteMovie);

module.exports = router;