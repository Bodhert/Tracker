const express = require('express'),
  path = require('path'),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  Location = require('./api/models/locationModel'),
  Usert = require('./api/models/userModel'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  methodOverride = require('method-override'),
  session = require('express-session'),
  MongoStore = require('connect-mongo')(session),
  cookieParser = require('cookie-parser');

// auth0 setUp
const dotenv = require('dotenv');
const routes = require('./api/routes/todoListRoutes'); //importing route
const user = require('./api/routes/user'); // user routes
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const flash = require('connect-flash');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');



dotenv.load();

const strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL:
      process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }
);

// const jwtCheck = jwt({
//   secret: jwks.expressJwtSecret({
//       cache: true,
//       rateLimit: true,
//       jwksRequestsPerMinute: 5,
//       jwksUri: "https://encotralo.auth0.com/.well-known/jwks.json"
//   }),
//   audience: 'https://proyecto_1_telematica_tracker',
//   issuer: "https://encotralo.auth0.com/",
//   algorithms: ['RS256']
// });

passport.use(strategy);

// you can use this section to keep a smaller payload
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

// var current_db = 'mongodb://localhost/testDb'; // for local test
var current_db = 'mongodb://bodhert:123456@ds239368.mlab.com:39368/tracker'; //for deployment
mongoose.connect(current_db);
var db = mongoose.connection;
mongoose.Promise = global.Promise;


const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.engine('html', require('ejs').renderFile);

app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: 'shhhhhhhhh',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      mongooseConnection: db
    })
  }));
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.session());
app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(bodyParser.urlencoded({ 'extended': 'true' }));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(flash());
// app.use(jwtCheck);




// configuration =================
// connect to mongoDB database localy
// testing db connection
// note: remeber always to turn on mongo localy (sudo service mongod start) on ubuntu


//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log("connection with the mongo db successful");

});



// Handle auth failure error messages
app.use(function (req, res, next) {
  if (req && req.query && req.query.error) {
    req.flash("error", req.query.error);
  }
  if (req && req.query && req.query.error_description) {
    req.flash("error_description", req.query.error_description);
  }
  next();
});

// Check logged in
app.use(function (req, res, next) {
  res.locals.loggedIn = false;
  if (req.session.passport && typeof req.session.passport.user != 'undefined') {
    res.locals.loggedIn = true;
  }
  next();
});


app.use('/', routes);
app.use('/user', user);

// app.get('/authorized', function (req, res) {
//   res.send('Secured Resource');
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(port);
console.log('todo list RESTful API server started on: ' + port);


module.exports = app;


