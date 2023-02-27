const { DataTypes } = require('sequelize');
const db = require('../database');
const Genre = require('./genre');
const Director = require('./director');

const Movie = db.define('Movie', {
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
  releaseYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  poster: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Movie.belongsTo(Genre, { foreignKey: 'genreId' });
Movie.belongsTo(Director, { foreignKey: 'directorId' });
Movie.belongsToMany(Actor, { through: 'ActorMovie' });

Genre.hasMany(Movie);
Director.hasMany(Movie);
Actor.belongsToMany(Movie, { through: 'ActorMovie' });


module.exports = Movie;