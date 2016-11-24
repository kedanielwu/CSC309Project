var mongoose = require('mongoose');

// Doc for Mongoose Schemas: http://mongoosejs.com/docs/guide
var Schema = mongoose.Schema;

var userSchema = new Schema(
    {
        id: {
            type: String, required: true, unique: true //is this a username or just a number id?
        },
        name: {
            type: String, requried: true
        },
        email: {
            type: String, required: true, unique: true
        },
        password: {
            type: String, required: true
        },
        picture: {
            type: String //url of image
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


// Doc for Mongoose Connections: http://mongoosejs.com/docs/connections
mongoose.connect('mongodb://localhost/database');

// Doc for Mongoose Models: http://mongoosejs.com/docs/models
module.exports = mongoose.model('User', userSchema);
