var mongoose = require('mongoose'),
    Location = mongoose.model('Locations');

//creates a location
exports.create_a_location = function (req, res) {
    var new_location = new Location(req.body);
    new_location.save(function (err, location) {
        if (err)
            res.send(err);
        res.json(location);
    });
};