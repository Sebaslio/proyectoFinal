const { Sequelize } = require('sequelize');
const ActorModel = require('./models/actor');
const DirectorModel = require('./models/director');
const GenreModel = require('./models/genre');
const MovieModel = require('./models/movie');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
});

const Actor = ActorModel(sequelize, Sequelize);
const Director = DirectorModel(sequelize, Sequelize);
const Genre = GenreModel(sequelize, Sequelize);
const Movie = MovieModel(sequelize, Sequelize);

Genre.hasMany(Movie);
Movie.belongsTo(Genre);

Actor.belongsToMany(Movie, { through: 'movie_actor' });
Movie.belongsToMany(Actor, { through: 'movie_actor' });

Director.hasMany(Movie);
Movie.belongsTo(Director);

sequelize.sync({ force: false })
  .then(() => console.log('Database and tables created'))
  .catch((err) => console.log(err));

module.exports = {
  Actor,
  Director,
  Genre,
  Movie,
};