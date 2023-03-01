module.exports = (sequelize, dataTypes) => {
  let alias = 'Users';
  let cols = {
      id: {
          type: dataTypes.INTEGER,
          primaryKey: true, // add this option to mark the column as the primary key
          autoincrement: true,
      },
      name:{
          type: dataTypes.STRING
      },
      email: {
          type: dataTypes.STRING
      },
      password: {
          type: dataTypes.STRING
      },
      remember_token: {
          type: dataTypes.STRING
      },
      rol: {
          type: dataTypes.INTEGER
      },

  };
  let config = {
      tableName: 'users',
      timestamps: false,
  };
  const Users = sequelize.define(alias, cols, config);
  
  return Users
  }