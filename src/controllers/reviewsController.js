const { Review, Movie, User } = require('../models');

const reviewsController = {
  createReview: async (req, res) => {
    try {
      const { movieId } = req.params;
      const { title, content, rating } = req.body;
      const userId = 1; // Aquí deberías obtener el id del usuario autenticado
      const review = await Review.create({ title, content, rating, userId, movieId });
      res.status(201).json(review);
    } catch (error) {
      console.log(error);
      res.status(500).send('Hubo un error al crear la reseña');
    }
  },
};

module.exports = reviewsController;