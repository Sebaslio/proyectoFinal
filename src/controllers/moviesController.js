const { Movie, Genre, Actor, Director, Sequelize: { Op } } = require('../models');

const index = async (req, res) => {
  try {
    const movies = await Movie.findAll({ include: Genre });
    res.render('index', { movies });
  } catch (error) {
    console.log(error);
    res.status(500).send('An error has occurred');
  }
};

const show = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByPk(id, { include: [Genre, Actor, Director] });
    res.render('movie', { movie });
  } catch (error) {
    console.log(error);
    res.status(500).send('An error has occurred');
  }
};

const createReview = async (req, res) => {
    const { title, content, rating } = req.body;
    const userId = req.user.id; // Obtiene el id del usuario autenticado a través de la sesión
  
    try {
      const review = await Review.create({
        title,
        content,
        rating,
        userId,
        movieId: req.params.id,
      });
  
      res.status(201).json(review);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const searchMovies = async (req, res) => {
    const { q } = req.query;
  
    try {
      const movies = await Movie.findAll({
        include: Genre,
        where: {
          title: {
            [Op.iLike]: `%${q}%`,
          },
        },
      });
  
      res.render('search', { movies, q });
    } catch (error) {
      console.log(error);
      res.status(500).send('An error has occurred');
    }
  };  
 
module.exports = {
  index,
  show,
  createReview,
  searchMovies,
};