var mongoose = require('mongoose');

// Doc for Mongoose Schemas: http://mongoosejs.com/docs/guide
var Schema = mongoose.Schema;

var listingSchema = new Schema(
    {
        id: {
            type: String, required: true, unique: true
        },
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

// Create the text indexes to be searched
// https://docs.mongodb.com/v3.2/core/index-text/
// http://mongoosejs.com/docs/guide.html#indexes
listingSchema.index(
  {
    // Indexes
    title: "text",
    description: "text"
  },
  {
    // Weights
    title: 5,
    description: 1
  }
);

module.exports = mongoose.model('Listing', listingSchema);