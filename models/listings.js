var mongoose = require('mongoose');

// Doc for Mongoose Schemas: http://mongoosejs.com/docs/guide
var Schema = mongoose.Schema;

var listingSchema = new Schema(
    {
        user_id: {
            type: String, required: true, unique: true //is this a username or just a number id?
        },
        id: {
            type: int, requried: true, unique: true
        },
        title: {
            type: String, required: true
        },
        picture: {
            type: String //url of image
        }
        description: {
            type: String
        },
        comments: [{
            user_id: {type: String, required: true},
            message: {type: String, required: true},
        }],
        status: {
            type: String
        }
    },
    {
        collection: 'listings'
    }
);

module.exports = mongoose.model('Listing', listingSchema);