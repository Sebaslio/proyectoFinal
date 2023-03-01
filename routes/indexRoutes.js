const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexControllers');

router.get('/', indexController.home);
router.get('/registro', indexController.registro);
router.post('/registro', indexController.crearUsuario);
router.get('/login', indexController.login);
router.post('/login', indexController.iniciarSesion);
router.get('/logout', indexController.cerrarSesion);

module.exports = router;