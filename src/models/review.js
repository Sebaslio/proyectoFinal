const { DataTypes } = require('sequelize');
const db = require('../database');
const Movie = require('./movie');
const User = require('./user');

const Review = db.define('Review', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },
});

Review.belongsTo(Movie, { foreignKey: 'movieId' });
Review.belongsTo(User, { foreignKey: 'userId' });

module.exports = Review;