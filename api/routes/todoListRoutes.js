module.exports = function (app) {
    var todoList = require('../controllers/todoListController');
    var location = require('../controllers/LocationController');
    var user = require('../controllers/userController');
    const passport = require('passport');
    const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
    

    //auth0 variables
    const env = {
        AUTH0_CLIENT_ID: 'z0Zb7H0Obn3aNnPsRlCjo0mJWWNXlmfk',
        AUTH0_DOMAIN: 'encotralo.auth0.com',
        AUTH0_CALLBACK_URL: 'http://localhost:3000/callback'
    };

    // todoList Routes
    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);


    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);

    //simple test call 
    app.get('/test1', (req, res) => {
        res.send('Hello World')
    });

    app.route('/gps')
        .get(location.send_page);

    app.route('/gps/:username')
        .get(location.bring_user_locations);

    //saves the coordinates 
    app.route('/save_location')
        .post(location.create_a_location); //create location 


    //brings all the locations
    app.route('/bring_all_locations')
        .get(location.lists_all_locations); // list all the locations stored

    //creates users or log them in , otherwise fails
    app.route('/')
        .get(user.send_page)
        .post(user.create_user);

    //gets the profile of the user
    app.route('/_profile')
        .get(user._profile);

    //log you out of the session
    // app.route('/logout')
    //     .get(user.logout);

    //brings the name of the current user
    app.route('/current_user')
        .get(user.current_user);

    //auth0 stuff
    app.get('/login',
        passport.authenticate('auth0', {
            clientID: env.AUTH0_CLIENT_ID,
            domain: env.AUTH0_DOMAIN,
            redirectUri: env.AUTH0_CALLBACK_URL,
            audience: 'https://' + env.AUTH0_DOMAIN + '/userinfo',
            responseType: 'code',
            scope: 'openid profile'
        }),
        function (req, res) {
            res.redirect('/');
        }
    );

    app.get(
        '/callback',
        passport.authenticate('auth0', {
            failureRedirect: '/'
        }),
        function (req, res) {
            res.redirect(req.session.returnTo || '/user');
        }
    );

    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });


    app.get('/failure', function (req, res) {
        var error = req.flash("error");
        var error_description = req.flash("error_description");
        req.logout();
        res.render('failure', {
            error: error[0],
            error_description: error_description[0],
        });
    });
};