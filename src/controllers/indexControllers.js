const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const sequelize = require('../models/index');
const User = require('../models/user');

const home = (req, res) => {
  res.send('Página principal');
};

const registro = (req, res) => {
  res.render('registro');
};

const crearUsuario = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.render('registro', { errors: errors.array() });
  } else {
    const { nombre, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    try {
      await User.create({ nombre, email, password: hash });
      res.redirect('/');
    } catch (error) {
      console.log(error);
      res.send('Ha ocurrido un error al crear el usuario');
    }
  }
};

const login = (req, res) => {
  res.render('login');
};

const iniciarSesion = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      req.session.user = user;
      res.redirect('/');
    } else {
      res.render('login', { error: 'Contraseña incorrecta' });
    }
  } else {
    res.render('login', { error: 'No se ha encontrado el usuario' });
  }
};

const cerrarSesion = (req, res) => {
  req.session.destroy();
  res.redirect('/login');
};

module.exports = { home, registro, crearUsuario, login, iniciarSesion, cerrarSesion };