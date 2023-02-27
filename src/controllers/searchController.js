const { Op } = require('sequelize');
const { Movie, Actor, Director } = require('../models');

const searchController = {
  search: async (req, res) => {
    const { term } = req.query;
    try {
      const movies = await Movie.findAll({
        where: {
          title: { [Op.iLike]: `%${term}%` },
        },
        include: [Actor, Director],
      });
      res.render('search', { movies, term });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = searchController;