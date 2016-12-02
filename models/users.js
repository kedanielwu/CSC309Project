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
            type: String //url of image
        },
        description: {
            type: String
        },
        userType: {
            type: String, required: true
        },
    },
    {
        collection: 'users'
    }
);

// http://mongoosejs.com/docs/promises.html
mongoose.Promise = global.Promise;
// Doc for Mongoose Connections: http://mongoosejs.com/docs/connections
mongoose.connect('mongodb://localhost/database'); //TODO: move to server.js?

// Doc for Mongoose Models: http://mongoosejs.com/docs/models
module.exports = mongoose.model('User', userSchema);
