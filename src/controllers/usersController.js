const User = require('../models/user');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const saltRounds = 10;

exports.signup = (req, res) => {
  res.render('signup');
};

exports.createUser = async (req, res) => {
  const { email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).render('signup', { errors: errors.array() });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    await User.create({ email, password: hashedPassword });
    res.redirect('/login');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.login = (req, res) => {
  res.render('login');
};

exports.authenticateUser = async (req, res) => {
  const { email, password } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).render('login', { errors: errors.array() });
  }

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).render('login', { message: 'Email o contraseña incorrectos' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).render('login', { message: 'Email o contraseña incorrectos' });
    }

    req.session.user = user;
    res.redirect('/dashboard');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Agrega una película a la lista de favoritos del usuario
exports.addFavorite = async (req, res) => {
    try {
      const userId = req.params.id;
      const movieId = req.body.movieId;
      const user = await User.findByPk(userId);
  
      if (!user) {
        return res.status(404).send({ message: 'Usuario no encontrado' });
      }
  
      const movie = await Movie.findByPk(movieId);
      if (!movie) {
        return res.status(404).send({ message: 'Película no encontrada' });
      }
  
      await user.addFavorite(movie);
      res.send({ message: 'Película agregada a favoritos' });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };
  
  // Elimina una película de la lista de favoritos del usuario
  exports.removeFavorite = async (req, res) => {
    try {
      const userId = req.params.id;
      const movieId = req.params.movieId;
      const user = await User.findByPk(userId);
  
      if (!user) {
        return res.status(404).send({ message: 'Usuario no encontrado' });
      }
  
      const movie = await Movie.findByPk(movieId);
      if (!movie) {
        return res.status(404).send({ message: 'Película no encontrada' });
      }
  
      await user.removeFavorite(movie);
      res.send({ message: 'Película eliminada de favoritos' });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};