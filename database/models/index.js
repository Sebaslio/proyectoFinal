const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize = require('../../database');

class User extends Model {
  async comparePassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

User.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
  }
);

module.exports = User;