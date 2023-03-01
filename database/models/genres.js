module.exports = (sequelize, dataTypes) => {

  let alias = 'Genres';
  let cols = {

    id: {

      type: dataTypes.INTEGER,
      primaryKey: true,
      autoincrement: true,

    },

    name:{
      type: dataTypes.STRING
    },

    ranking: {
      type: dataTypes.INTEGER
    },

    active: {
      type: dataTypes.INTEGER
    },
  };

  let config = {
    tableName: 'genres',
    timestamps: false,
  };

  const Genres = sequelize.define(alias, cols, config);

  Genres.associate = function(models) {
    Genres.hasMany(models.Movies, {
      as: 'movies',
      foreignKey: 'genre_id'
    });
  }
  return Genres;
}

