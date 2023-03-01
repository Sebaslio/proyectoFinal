const { DataTypes, Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'root', 'rootroot', {
  host: '127.0.0.2',
  port: 3306,
  dialect: 'mysql'
});

const Actor = sequelize.define('Actor', {
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
  rating: {
    type: DataTypes.DECIMAL(3, 1),
    allowNull: false,
    validate: {
      min: 0,
      max: 10,
    },
  },
});

module.exports = Actor;