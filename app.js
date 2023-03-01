const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const publicPath = path.join(__dirname, 'public');
const moviesRoutes = require('./routes/movies');
const path = require('path');


const methodOverride = require('method-override');
const session = require('express-session');
const bcrypt = require('bcrypt');
const usersRoutes = require('./routes/usersRoutes');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
const adminLoggedMiddleware = require('./middlewares/adminLoggedMiddleware');
const cookieParser = require('cookie-parser');


//  app.use middleWares
app.use(userLoggedMiddleware);
app.use(adminLoggedMiddleware);

//  metods Put y Delete
app.use(methodOverride('_method')); 
app.use(bodyParser.json());
// para poder recibir las peticiones post
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser());
app.use(express.json());

// app.use sesion 2minutos
app.use(
    session({
      secret: 'lioSebas',
      resave: false,
      saveUninitialized: false,
      name: 'DH movies',
      cookie: { maxAge: 120000 },
    })
  );

// routes
app.use(express.static(publicPath));


// definición rutas usuario
app.use('/', usersRoutes);
app.use('/', moviesRoutes);


app.get('/', function (req, res) {
  res.render('home', { movies: movies });
});

app.get('/register', function (req, res) {
  res.render('register');
});

// vistas ejs
app.set('view engine', 'ejs');   
    
app.listen(3000, () => { console.log('Server running on port 3000');

});
