const { DataTypes, Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'root', 'rootroot', {
  host: '127.0.0.2',
  port: 3306,
  dialect: 'mysql'
});

const Movie = require('./movie');

const Director = sequelize.define('Director', {
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