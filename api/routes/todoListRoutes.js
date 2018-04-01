
    const express = require('express');
    const todoList = require('../controllers/todoListController');
    const location = require('../controllers/LocationController');
    const passport = require('passport');
    const router = express.Router();
    

    //auth0 variables
    const env = {
        AUTH0_CLIENT_ID: 'z0Zb7H0Obn3aNnPsRlCjo0mJWWNXlmfk',
        AUTH0_DOMAIN: 'encotralo.auth0.com',
        AUTH0_CALLBACK_URL: 'http://localhost:3000/callback'
    };

    // // todoList Routes
    // router.route('/tasks')
    //     .get(todoList.list_all_tasks)
    //     .post(todoList.create_a_task);


    // router.route('/tasks/:taskId')
    //     .get(todoList.read_a_task)
    //     .put(todoList.update_a_task)
    //     .delete(todoList.delete_a_task);

    // //simple test call 
    // router.get('/test1', (req, res) => {
    //     res.send('Hello World')
    // });

    router.route('/gps')
        .get(location.send_page);

    router.route('/gps/:username')
        .get(location.bring_user_locations);

    //saves the coordinates 
    router.route('/save_location')
        .post(location.create_a_location); //create location 


    // //brings all the locations
    // router.route('/bring_all_locations')
    //     .get(location.lists_all_locations); // list all the locations stored

    //get gome page
    router.get('/', function(req, res, next) {
      res.render('index');
    });

  
  router.get('/login', passport.authenticate('auth0', {
    clientID: env.AUTH0_CLIENT_ID,
    domain: env.AUTH0_DOMAIN,
    redirectUri: env.AUTH0_CALLBACK_URL,
    responseType: 'code',
    audience: 'https://' + env.AUTH0_DOMAIN + '/userinfo',
    scope: 'openid email profile'}),
    function(req, res) {
      res.redirect("/");
  });
  
  router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
  
  router.get( '/callback',
    passport.authenticate('auth0', {
      failureRedirect: '/failure'
    }),
    function(req, res) {
      res.redirect( '/user');
    }
  );
  
  router.get('/failure', function(req, res) {
    var error = req.flash("error");
    var error_description = req.flash("error_description");
    req.logout();
    res.render('failure', {
      error: error[0],
      error_description: error_description[0],
    });
  });
  
  module.exports = router;
  