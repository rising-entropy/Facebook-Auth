const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

// const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
// const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(new FacebookStrategy({
  clientID: '487404819401291',
  clientSecret: '0e9717ae5a2d00a0400dfbf51653ec6c',
  callbackURL: "https://learnpassportjs.herokuapp.com/facebook/callback",
  // passReqToCallback: true,
  // profileFields: ['id', 'email', 'gender', 'link', 'locale', 'name', 'timezone', 'updated_time', 'verified']
},
function(accessToken, refreshToken, profile, cb) {
  return cb(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
