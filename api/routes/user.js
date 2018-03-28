const express = require('express');
const passport = require('passport');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
const router = express.Router();


/* GET user profile. */
router.get('/', ensureLoggedIn, function (req, res, next) { // the bug is in ensuredLoggedIn
    res.render('', {
        user: req.user,
        userProfile: JSON.stringify(req.user, null, '  ')
    });
});


module.exports = router;
