var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// model of dates to store in the db
var LocationSchema = new Schema(
    {
        username: String,
        latitude: String,
        longitude: String,
        Created_date:
            {
                type: Date,
                default: Date.now
            },
    });

module.exports = mongoose.model('Locations', LocationSchema);