const { DataTypes } = require('sequelize');
const db = require('../database');
const Movie = require('./movie');

const Genre = db.define('Genre', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Genre.hasMany(Movie, { foreignKey: 'genreId' });

module.exports = Genre;