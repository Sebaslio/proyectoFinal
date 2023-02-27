const Actor = require('../models/actor');

const actorsController = {
  getAllActors: async (req, res) => {
    try {
      const actors = await Actor.findAll();
      res.render('actors', { actors });
    } catch (error) {
      console.log(error);
    }
  },

  getActorById: async (req, res) => {
    const { id } = req.params;
    try {
      const actor = await Actor.findByPk(id);
      res.render('actor', { actor });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = actorsController;