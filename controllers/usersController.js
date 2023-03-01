const bcrypt = require('bcrypt');
const db = require('../database/models');
const { Users } = require('../database/models');



let usersController = {
  register: (req, res) => {
    res.render('register');
  },

  store: async (req, res) => {
    const { name, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const user = await db.Users.create({
        name,
        email,
        password: hashedPassword,
        rol: 0, 
      });

      res.redirect('/');
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      res.render('errorRegister', { error });
    }
  },

  login: (req, res) => {
    res.render('login');
  },

  authenticate: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await db.Users.findOne({ where: { email } });
      if (!user) {
        return res.render('errorlogin', { error: 'Credenciales inválidas' });
      }
      console.log('User', user);
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.render('errorlogin', { error: 'Credenciales inválidas' });
      }

      req.session.userLogged = {
        email: email,
        rol: user.rol
      };

      res.redirect('/');
    } catch (error) {
      console.error('Error al autenticar al usuario:', error);
      res.render('errorlogin', { error });
    }
  },
  logout: (req, res) => {
    res.clearCookie('DH movies').redirect('/');
  },
};

module.exports = usersController;
