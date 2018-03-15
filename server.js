var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  Location = require('./api/models/locationModel'),
  Usert = require('./api/models/userModel');
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  methodOverride = require('method-override'),
  session = require('express-session'),
  MongoStore = require('connect-mongo')(session);

// mongoose instance connection url connection

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({ 'extended': 'true' }));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

var routes = require('./api/routes/todoListRoutes'); //importing route

// auth0 setUp
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const user = require('./api/routes/user'); // user routes


// Configure Passport to use Auth0
const strategy = new Auth0Strategy(
  {
    domain: 'encotralo.auth0.com',
    clientID: 'z0Zb7H0Obn3aNnPsRlCjo0mJWWNXlmfk',
    clientSecret: 'mD3v50-F8Ex4vv888LZvC4Oz710_lSj9aKZ28ZKI5J1I1hPznEZhsXdyNj8Me-lc',
    callbackURL: 'http://localhost:3000/callback'
  },
  (accessToken, refreshToken, extraParams, profile, done) => {
    return done(null, profile);
  }
);

passport.use(strategy);

// This can be used to keep a smaller payload
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// ...
app.use(passport.initialize());
app.use(passport.session());





//calling the page that contains the script for geting latitude and longitud
// app.get('/', function (req, res) {
//   res.render(__dirname + '/public/login_register/login_register');
// });


mongoose.Promise = global.Promise;
// configuration =================
// connect to mongoDB database localy
// testing db connection
// note: remeber always to turn on mongo localy (sudo service mongod start) on ubuntu

// var current_db = 'mongodb://localhost/testDb'; // for local test
var current_db = 'mongodb://bodhert:123456@ds239368.mlab.com:39368/tracker'; //for deployment

mongoose.connect(current_db);
var db = mongoose.connection;

//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log("connection with the mongo db successful");

});


app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

// Check logged in
app.use(function(req, res, next) {
  res.locals.loggedIn = false;
  if (req.session.passport && typeof req.session.passport.user != 'undefined') {
    res.locals.loggedIn = true;
  }
  next();
});

routes(app); //register the route
user(app); // user routes

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
