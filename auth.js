const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

// const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
// const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(new GoogleStrategy({
  clientID: '487404819401291',
  clientSecret: '0e9717ae5a2d00a0400dfbf51653ec6c',
  callbackURL: "http://localhost:3000/facebook/callback",
  passReqToCallback: true,
  profileFields: ['id', 'email', 'gender', 'link', 'locale', 'name', 'timezone', 'updated_time', 'verified']
},
function(request, accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
