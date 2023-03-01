const Genre = require('../models/genre');

const genresController = {
  getAllGenres: async (req, res) => {
    try {
      const genres = await Genre.findAll();
      res.render('genres', { genres });
    } catch (error) {
      console.log(error);
    }
  },

  getGenreById: async (req, res) => {
    const { id } = req.params;
    try {
      const genre = await Genre.findByPk(id);
      res.render('genre', { genre });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = genresController;