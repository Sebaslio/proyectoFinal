const { DataTypes, Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'root', 'rootroot', {
  host: '127.0.0.2',
  port: 3306,
  dialect: 'mysql'
});

const Movie = require('./movie');

const Genre = sequelize.define('Genre', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Genre;


