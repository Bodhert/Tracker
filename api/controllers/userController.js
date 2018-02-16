var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.send_page = function (req, res) {
    // res.render(__dirname + '/public/login_register/login_register');
    // I dont know if this is good or bad, cause is vero slow firts to charge
    res.render('../public/login_register/login_register');

    // console.log(path.join(__dirname + '/templateLogReg/index.html'));
};

exports.create_user = function (req, res, next) {
    // confirm that user typed same password twice
    if (req.body.password !== req.body.passwordConf) {
        var err = new Error('Passwords do not match.');
        err.status = 400;
        res.send("passwords dont match");
        return next(err);
    }
    if (req.body.email &&
        req.body.username &&
        req.body.password &&
        req.body.passwordConf) {

        var userData = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            passwordConf: req.body.passwordConf,
        }

        User.create(userData, function (error, user) {
            if (error) {
                return next(error);
            } else {
                // res.send("cree un usuario");
                req.session.userId = user._id;
                return res.redirect('/_profile');
            }
        });
    } else if (req.body.logemail && req.body.logpassword) {
        User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
            if (error || !user) {
                var err = new Error('Wrong email or password.');
                err.status = 401;
                return next(err);
            } else {
                req.session.userId = user._id;
                // res.send("you are loged in");
                return res.redirect('/_profile');
            }
        });
    } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return next(err);
    }
};

exports._profile = function (req, res, next) 
{
    User.findById(req.session.userId)
        .exec(function (error, user) {
            if (error) {
                return next(error);
            }
            else 
            {
                if (user === null) 
                {
                    var err = new Error('Not authorized! Go back!');
                    err.status = 400;
                    return next(err);
                }
                else 
                {
                    res.redirect('/gps')
                    // return res.send('<h1>Name: </h1>' + user.username + '<h2>Mail: </h2>' + user.email + '<br><a type="button" href="/logout">Logout</a>')
                }
            }
        });
};

exports.logout = function (req, res, next) {
    if (req.session) 
    {
        // delete session object
        req.session.destroy(function (err) 
        {
            if (err) 
            {
                return next(err);
            } 
            else 
            {
                return res.redirect('/');
            }
        });
    }
};

