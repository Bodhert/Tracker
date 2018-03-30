const express = require('express');
const passport = require('passport');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');


/* GET user profile. */
router.get('/', ensureLoggedIn, function (req, res, next) {

    User.findOne({'username' : req.user.name.givenName})
        .exec(function (error, user) {
            if (error) {
                // return next(error);
                console.log(error);
            }
            else {
                console.log("hola");
                if (user === null) {
                    var userData = {
                        username: req.user.name.givenName,
                    }
                    User.create(userData, function (error, user) {
                        if (error) {
                            // return next(error);
                        } else {
                            // res.send("cree un usuario");
                        }
                    });
                }
            }
        });

    console.log("hola2");
    res.render('user', {
        user: req.user,
        userProfile: JSON.stringify(req.user, null, '  ')
    });
});

router.get('/current_user', ensureLoggedIn, function (req, res, next) {
    res.send(req.user.name.givenName);
});


module.exports = router;
