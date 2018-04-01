const mongoose = require('mongoose'),
    Location = mongoose.model('Locations');

//creates a location
exports.create_a_location = function (req, res) {
    console.log(req.body.username + " " + req.body.latitude + " " + req.body.longitude );
    var new_location = new Location(req.body);
    Location.find({
        'username': req.body.username,
        'latitude': req.body.latitude,
        'longitude': req.body.longitude
    }).exec(function (error, location) {
        if (error) {
            // return next(error);
            console.log(error);
        }
        else {
            // console.log("else location");

            // console.log(location);
            // console.log(typeof(location));    
            if (location.length == 0) {
                console.log("no existe la locacion");
                new_location.save(function (err, location) {
                    if (err)
                        res.send(err);
                    res.json(location);
                });
            } else console.log("jijij");
        }
    });

    // new_location.save(function (err, location) {
    //     if (err)
    //         res.send(err);
    //     res.json(location);
    // });
};

// brings all the locations stored in the db
exports.lists_all_locations = function (req, res) {
    Location.find({}, function (err, locations) {
        if (err) res.send(err);
        res.send(locations)
    });
};

//bring all the locations of one user
exports.bring_user_locations = function (req, res) {
    Location.find({ username: req.params.username }, function (err, locations) {
        if (err)
            res.send(err);
        res.json(locations);
    });
};

exports.send_page = function (req, res) {
    // res.render(__dirname + '/public/login_register/login_register');
    // I dont know if this is good or bad, cause is vero slow firts to charge
    res.render('../public/location.html');
    // console.log(req.session.userId);

};

exports.already_exists = function (req, res) {

};
