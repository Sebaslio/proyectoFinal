const express = require('express');
const ejs = require('ejs');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//require('dotenv').config();
const path = require('path');

const sequelize = require('./database');
// Importar cada modelo
const Actor = require('./src/models/actor');
const Director = require('./src/models/director');
const Genre = require('./src/models/genre');
const Movie = require('./src/models/movie');

// Usar cada modelo
Actor.findAll().then((actors) => console.log(actors));
Director.findAll().then((directors) => console.log(directors));
Genre.findAll().then((genres) => console.log(genres));
Movie.findAll().then((movies) => console.log(movies));
//const sequelize = new Sequelize('movies_db', 'root', 'password', {
    //host: 'localhost',
   // dialect: 'mysql'
 // });

 

  sequelize.sync().then(() => {
    console.log('Database synced');
  });

const indexRoutes = require(path.join(__dirname, 'routes', 'indexRoutes'));
  app.use('/', indexRoutes);
  
  
const actorsRoutes = require('./routes/actorsRoutes');
    app.use('/', actorsRoutes);

const moviesRoutes = require('./routes/moviesRoutes');
    app.use('/', moviesRoutes);  

const directorsRoutes = require('./routes/directorsRoutes');
    app.use('/api', directorsRoutes);

const usersRoutes = require('./routes/usersRoutes');
    app.use('/api', usersRoutes);

const genresRoutes = require('./routes/genresRoutes');
    app.use('/api', genresRoutes);

const reviewsRoutes = require('./routes/reviewsRoutes');
    app.use('/api', reviewsRoutes);

//const indexRoutes = require('./routes/indexRoutes');
    //app.use('/', indexRoutes);
    
    
app.listen(3000, () => console.log('Server running on port 3000'));
