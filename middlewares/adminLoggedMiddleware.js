function adminLoggedMiddleware(req, res, next) {
    res.locals.isAdmin = false;
    
    if (res.locals.isLogged && req.session.userLogged.rol === 1) {
      res.locals.isAdmin = true;
    }
    next();
  }
  
  module.exports = adminLoggedMiddleware;
  