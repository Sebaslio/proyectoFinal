const express = require('express');
const ejs = require('ejs');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const sequelize = new Sequelize('movies_db', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
  });

  sequelize.sync().then(() => {
    console.log('Database synced');
  });
  
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

const indexRoutes = require('./routes/indexRoutes');
    app.use('/', indexRoutes);
    
    
app.listen(3000, () => console.log('Server running on port 3000'));