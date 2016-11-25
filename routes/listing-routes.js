var Listing = require('../models/listings');

/**
 * Finds all the users.
 *
 * @param {object} req request object
 * @param {object} res response object
 */
exports.addListing = function(req, res) {
	console.log("adding Listing");
    console.log(req.body);
    var newListing = new Listing(req.body);

    newListing.save(function(err, newListing) {
        if (err) console.log(err);
        res.send('Success');
    })
};


exports.findAll = function(req, res) {
    console.log('findAll');
    Listing.find({}, function(err, allListings) {
        console.log(allListings)
        res.send(allListings);
    });
};

