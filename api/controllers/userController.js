const mongoose = require('mongoose'),
    User = mongoose.model('User');

const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();


exports.send_page =  function (req, res, next) {
    res.render('index');
};

exports.create_user = ensureLoggedIn, function (req, res, next) {

    res.send("hola");
    // if (req.body.email &&
    //     req.body.username) {

    //     var userData = {
    //         email: req.body.email,
    //         username: req.body.username,
    //     }

    //     User.create(userData, function (error, user) {
    //         if (error) {
    //             return next(error);
    //         } else {
    //             // res.send("cree un usuario");
    //             req.session.userId = user._id;
    //             return res.redirect('/_profile');
    //         }
    //     });
    // } else if (req.body.logemail && req.body.logpassword) {
    //     User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
    //         if (error || !user) {
    //             var err = new Error('Wrong email or password.');
    //             err.status = 401;
    //             return next(err);
    //         } else {
    //             req.session.userId = user._id;
    //             // res.send("you are loged in");
    //             return res.redirect('/_profile');
    //         }
    //     });
    // } 
};

exports._profile = function (req, res, next) {
    User.findById(req.session.userId)
        .exec(function (error, user) {
            if (error) {
                return next(error);
            }
            else {
                if (user === null) {
                    var err = new Error('Not authorized! Go back!');
                    err.status = 400;
                    return next(err);
                }
                else {
                    res.redirect('/gps')
                    // return res.send('<h1>Name: </h1>' + user.username + '<h2>Mail: </h2>' + user.email + '<br><a type="button" href="/logout">Logout</a>')
                }
            }
        });
};

exports.logout = function (req, res, next) {
    if (req.session) {
        // delete session object
        req.session.destroy(function (err) {
            if (err) {
                return next(err);
            }
            else {
                return res.redirect('/');
            }
        });
    }
};

exports.current_user = ensureLoggedIn, function (req, res, next) {
    // User.findById(req.session.userId)
    //     .exec(function (error, user) {
    //         if (error) {
    //             return next(error);
    //         }
    //         else {
    //             if (user === null) {
    //                 var err = new Error('we could not catch the user');
    //                 err.status = 400;
    //                 res.send(null);
    //                 console.log("nullo");
    //             }
    //             else {
    //                 console.log(user.username);
    //                 res.send(user.username);
    //             }
    //         }
    //     });
};
