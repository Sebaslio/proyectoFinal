const { DataTypes } = require('sequelize');
const db = require('../database');
const Movie = require('./movie');

const Director = db.define('Director', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Director.hasMany(Movie, { foreignKey: 'directorId' });

module.exports = Director;