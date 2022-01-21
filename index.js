const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('./auth');

const app = express();

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
  // this is where we'll call in the API's beyond the user model
  // create an fetch a session ID and get the role and send it to where it needs to be
}

app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send('<a href="/auth/facebook">Authenticate with Facebook</a>');
});

app.get('/auth/facebook',
  passport.authenticate('facebook', { profileFields: ['id', 'email', 'gender', 'link', 'locale', 'name', 'timezone', 'updated_time', 'verified'] }
));

app.get( '/facebook/callback',
  passport.authenticate( 'facebook', {
    successRedirect: '/protected',
    failureRedirect: '/auth/facebook/failure'
  })
);

app.get('/protected', isLoggedIn, (req, res) => {
  console.log(req.user);
  res.send(`Hello ${req.user.displayName}`);
});

app.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  // send an API to delete the session from the Sessions Auth in backend
  res.send('Goodbye!');
});

app.get('/auth/facebook/failure', (req, res) => {
  res.send('Failed to authenticate..');
});

app.listen(process.env.PORT || 3000, ()=>{
  console.log("Server Started.");
});


//Every API henceforth shall take in session ID