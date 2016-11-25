var mongoose = require('mongoose');

// Doc for Mongoose Schemas: http://mongoosejs.com/docs/guide
var Schema = mongoose.Schema;

var listingSchema = new Schema(
    {
        user_id: {
            type: String, required: true//is this a username or just a number id?
        },
        title: {
            type: String, required: true
        },
        picture: {
            type: String //url of image
        },
        description: {
            type: String, required: true
        },
        comments: [{
            user_id: {type: String},
            message: {type: String}
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