var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// model of dates to store in the db
var LocationSchema = new Schema(
    {
        latitude: Number,
        longitude: Number,
        Created_date:
            {
                type: Date,
                default: Date.now
            },
    });

module.exports = mongoose.model('Locations', LocationSchema);