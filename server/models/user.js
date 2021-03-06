// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var userSchema = mongoose.Schema({

        user         : {
        access_token  : String,
        refresh_token : String,
        id_token      : String,
    }
});

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);