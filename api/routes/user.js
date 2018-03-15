module.exports = function (app) {
    console.log("hola");

    const express = require('express');
    const passport = require('passport');
    const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
    
    app.get('/', ensureLoggedIn, function (req, res, next) {
        res.render('user', {
            user: req.user,
            userProfile: JSON.stringify(req.user, null, '  ')
        });
    });
};