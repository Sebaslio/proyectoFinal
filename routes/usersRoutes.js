const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();


router.get('/register', usersController.register);         // page of register users
router.post('/register', usersController.store);          // action of register for users
router.get('/login', usersController.login);             // page of login users
router.post('/login', usersController.authenticate);    // action of login users
router.get('/logout', usersController.logout);         // action of logout of users

module.exports = router;