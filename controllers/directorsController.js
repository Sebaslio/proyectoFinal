const Director = require('../models/director');

const directorsController = {
  getAllDirectors: async (req, res) => {
    try {
      const directors = await Director.findAll();
      res.render('directors', { directors });
    } catch (error) {
      console.log(error);
    }
  },

  getDirectorById: async (req, res) => {
    const { id } = req.params;
    try {
      const director = await Director.findByPk(id);
      res.render('director', { director });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = directorsController;