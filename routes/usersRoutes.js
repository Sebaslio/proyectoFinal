const express = require('express');
const usersController = require('../controllers/usersController');

const router = express.Router();

// Rutas para editar y eliminar cuentas de usuarios
router.get('/users/:id/edit', usersController.editUser);
router.put('/users/:id', usersController.updateUser);
router.delete('/users/:id', usersController.deleteUser);

// Rutas para agregar y eliminar películas de la lista de favoritos
router.post('/users/:id/favorites', usersController.addFavorite);
router.delete('/users/:id/favorites/:movieId', usersController.removeFavorite);

router.get('/signup', usersController.signup);
router.post('/signup', usersController.createUser);
router.get('/login', usersController.login);
router.post('/login', usersController.authenticateUser);
router.get('/logout', usersController.logout);

module.exports = router;