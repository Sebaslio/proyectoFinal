module.exports = (sequelize, dataTypes) => {

  let alias = 'Movies';
  let cols = {

    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoincrement: true, 
    },

    title: {
      type: dataTypes.STRING

    },
    rating:{
      type: dataTypes.INTEGER
    },
    awards: {
      type: dataTypes.STRING
    },
    release_date: {
      type: dataTypes.DATE 

    },
    length: {
      type: dataTypes.INTEGER
    },

    genre_id: {
      type: dataTypes.INTEGER
    },
    //deleted_at: {
      //type: dataTypes.DATE
    //}
  };

  let config = {
    tableName: 'movies',
    timestamps: false,
  };

  const Movie = sequelize.define(alias, cols, config);

  Movie.associate = function(models) {
    Movie.belongsTo(models.Genres, {
      as: 'genre',
      foreignKey: 'genre_id',
      
    });
    Movie.belongsToMany(models.Actors, {
      as: 'actors',
      through: 'actor_movie',
      foreignKey: 'movie_id',
      otherKey: 'actor_id',
      timestamps: false,
    });
  }

  return Movie;
}
