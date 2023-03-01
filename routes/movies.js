const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');


router.get('/', moviesController.list);  //home page, list of movies


router.get('/movies/add', moviesController.add)   // view make movie
router.post('/movies/add', moviesController.create); 


router.get('/movies/edit/:id', moviesController.edit);     //view edit movie
router.post('/movies/edit/:id', moviesController.update);

router.post('/movies/delete/:id', moviesController.delete);


router.get('/movies/:id', moviesController.detail);  // view detail 



module.exports = router;