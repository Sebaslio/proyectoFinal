let db = require('../database/models');

let moviesController = {
  list: function (req, res) {
    db.Movies.findAll().then(function (movies) {
      res.render('home.ejs', { movies: movies });
    });
  },
  
  add: function (req, res) {
    db.Genres.findAll().then(function (genres) {
      return res.render('createMovie', { genres: genres });
    });
  },
  create: function (req, res) {
    //aca creamos una nueva pelicula
    db.Movies.create({
      title: req.body.title,
      rating: req.body.rating,
      awards: req.body.awards,
      release_date: req.body.release_date,
      length: req.body.length,
      genre_id: req.body.genres,
    }).then(function () {
      res.redirect('/');
    });
  },
  edit: function (req, res) {
    // dos pedidos asincronicos, van definidos por separado
    let callMovie = db.Movies.findByPk(req.params.id); //hacemos el pedidos a peliculas
    let callGenres = db.Genres.findAll(); //hacemos el pedido a generos
    Promise.all([callMovie, callGenres]).then(function ([movie, genres]) {
      // el then se ejecuta cuando ambas promesas se cumplen
      res.render('editMovie', { movie: movie, genres: genres });
    });
  },
  update: function (req, res) {
    db.Movies.update(
      {
        title: req.body.title,
        rating: req.body.rating,
        awards: req.body.awards,
        release_date: req.body.release_date,
        length: req.body.length,
        genre_id: req.body.genres,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then(function (result) {
        // Si la actualización es exitosa, redirige a la página de detalles de la película actualizada
        res.redirect('/movies/' + req.params.id);
      })
      .catch(function (error) {
        // Si ocurre un error, manejarlo de la manera apropiada
        console.log(error);
        res.send('Error al actualizar la película');
      });
  },
  delete: function (req, res) {
    //borrado de pelicula de la DB con metodo Paranoid de sequelize activado.
    db.Movies.destroy({
      where: {
        id: req.params.id,
      },
      paranoid: true, // activar el modo paranoid
    })
      .then((deletedRowCount) => {
        if (deletedRowCount === 0) {
          return res.status(404).send({ message: 'Registro no encontrado' });
        }
        // redirigir al listado de películas.
        res.redirect('/');
      })
      .catch((error) => {
        res.status(500).send({ message: 'Error al eliminar el registro' });
      });
  },

  detail: function (req, res) {
    db.Movies.findByPk(req.params.id, {
      include: [{ association: 'genre' }, { association: 'actors' }],
    }).then(function (movie) {
      res.render('movieDetail', { movie: movie });
    });
  },
};

module.exports = moviesController;
