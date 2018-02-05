var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  Location = require('./api/models/locationModel'),
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;



// configuration =================
// connect to mongoDB database localy
// testing db connection
// note: remeber always to turn on mongo localy (sudo service mongod start) on ubuntu
var db = mongoose.connect('mongodb://localhost:27017/testDb', function(error)
{
    if(error) console.log(error);
    console.log("connection with the mongo db successful");
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);