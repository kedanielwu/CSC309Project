var Listing = require('../models/listings');

/**
 * Finds all the users.
 *
 * @param {object} req request object
 * @param {object} res response object
 */
exports.addListing = function(req, res) {
	console.log("POST /listing received");
    console.log(req.body);
    var newListing = new Listing(req.body);

    newListing.save(function(err, newListing) {
        if (err) console.log(err);
        res.send('Success');
    })
};

exports.findRecent = function(req, res) {
    res.send('Success!!!!!!!!');
}

exports.find = function(req, res) {
    console.log("GET /listing received");
    if (req.query.id){
        Listing.find({"_id": req.query.id}, function(err, data){
            if (err) throw err;
            //array of one listing
            res.render('pages/listing', data[0]);
        })
    }
    else {
        Listing.find({}, function (err, data) { 
            if (err) throw err;
            //array of listings
            res.send(data);
        })
    }
};

exports.updateListing = function(req, res){
    console.log("PUT /listing received");
    if(req.body._id){
        if(req.body.title){
            Listing.update({"_id": req.query.id},
                        { $set:{"title": req.query.title}}, function(err, data){});
        }
        if(req.body.description){
                Listing.update({"_id": req.query.id},
                        { $set:{"email": req.query.description}}, function(err, data){});          
        }
        if(req.body.picture){
                Listing.update({"_id": req.query.id},
                        { $set:{"picture": req.query.picture}}, function(err, data){});          
        }
        res.send("Updated");
    } else {
        res.send(400, "Error: wrong request format")
    }
}

exports.postComment = function(req, res){
    console.log("POST /comment received");
    if (req.query.id && req.query.userID && req.query.comment){
        Listing.update({"_id": req.query.id}, 
        { $push: {"comments": {"user_id": req.query.userID, "message": req.query.comment}}});
    } else {
        res.send(400, "Error: wrong request format")
    }
}

exports.removeListing = function(req, res){
    console.log("DELETE /listing received");
    if (req.query.id){
        Listing.remove({"_id": req.query.id}, function(err, data){
            if (err) throw err;
            console.log(data);
            res.send(200, "Success");
        })
    } else {
        res.send(400, "Error: wrong request format");
    }
}

