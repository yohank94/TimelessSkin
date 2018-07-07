const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'https://www.googleapis.com/auth/userinfo.email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/failure' }),
    (req, res) => {
      res.redirect('http://localhost:3000' || '/');
    }
  );

  app.get('/failure', async (req, res) => {
    await res.send(
      'Fail to login. Automatically redirecting you to our homepage.'
    );
    setTimeout(function() {
      console.log(res);
      res.redirect('/');
    }, 3000);
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
