var mongoose = require('mongoose');

// Doc for Mongoose Schemas: http://mongoosejs.com/docs/guide
var Schema = mongoose.Schema;

var userSchema = new Schema(
    {
        username: {
            type: String, required: true, unique: true
        },
        email: {
            type: String, required: true, unique: true
        },
        password: {
            type: String, required: true
        },
        area: {
            type: String
        },
        phoneNumber: {
            type: String
        },
        picture: {
            type: String, default: "http://i.imgur.com/hfH9CiC.png" //url of image
        },
        description: {
            type: String
        },
        userType: {
            type: String, required: true
        }
        //TODO: Need a date-registered field
    },
    {
        collection: 'users'
    }
);

// Doc for Mongoose Models: http://mongoosejs.com/docs/models
module.exports = mongoose.model('User', userSchema);

