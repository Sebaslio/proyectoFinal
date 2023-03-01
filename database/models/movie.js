const { DataTypes, Sequelize } = require('sequelize');
const sequelize = new Sequelize('database', 'root', 'rootroot', {
  host: '127.0.0.2',
  port: 3306,
  dialect: 'mysql'
});

const Genre = require('./genre');
const Director = require('./director');
const Actor = require('./actor');

const Movie = sequelize.define('Movie', {
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
