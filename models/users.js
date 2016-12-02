var mongoose = require('mongoose');

// Doc for Mongoose Schemas: http://mongoosejs.com/docs/guide
var Schema = mongoose.Schema;

var userSchema = new Schema(
    {
        name: {
            type: String, required: true //TODO: consider adding username
        },
        email: {
            type: String, required: true, unique: true
        },
        password: {
            type: String, required: true
        },
        picture: {
            type: String, default: "http://i.imgur.com/hfH9CiC.png"//url of image
        },
        description: {
            type: String
        },
        userType: {
            type: String, required: true
        }
    },
    {
        collection: 'users'
    }
);



// Doc for Mongoose Models: http://mongoosejs.com/docs/models
module.exports = mongoose.model('User', userSchema);
