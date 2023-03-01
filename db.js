const Sequelize  = require('sequelize');

const sequelize = new Sequelize('movies_db', 'root', 'rootroot', {
  host: '127.0.0.1',
  port: 3306,
  dialect: 'mysql',
});
