// Get dependencies
var express = require('express');
var path = require('path');
var http = require('http')
var bodyParser = require('body-parser');
var passport = require('passport');
var Strategy = require('passport-twitter').Strategy;
var app=express();
// Get our API routes
const api = require('./routes/api/api');
const mypage = require('./routes/otherpages/mypage');



// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//View Engine
app.set("view engine","ejs");
//public files
app.use (express.static("public"));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.use(require('express-session')({ 
    secret: 'keyboard cat', resave: true, saveUninitialized: true
 }));

//For twitter auth with passport
passport.use(new Strategy({
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    callbackURL: '/login/twitter/return'
  },
  function(token, tokenSecret, profile, cb) {
      return cb(null, profile);
  }));
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

app.use(passport.initialize());
app.use(passport.session());
//===============================

// Set our api routes
app.use('/api', api);

app.use("/mypage",mypage);

app.get('/checkin', passport.authenticate('twitter'));

app.get('/logout',(req,res)=>{
   req.logout();
 res.redirect("/");
  
});

app.get('/login/twitter/return',
  passport.authenticate('twitter', { failureRedirect: '' }),
  function(req, res) {
    
   
    res.redirect("/");
  });

  app.get('/getuser',function(req, res) {

    res.send(req.user)
 
  
  });

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
 
});




/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */


/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port,function(){
  console.log("Server has started")
})