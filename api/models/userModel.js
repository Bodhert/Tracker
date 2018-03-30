const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
    // email: {
    //     type: String,
    //     unique: true,
    //     required: true,
    //     trim: true
    // },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    }
});



const User = mongoose.model('User', UserSchema);
module.exports = User;
