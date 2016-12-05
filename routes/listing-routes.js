var Listing = require('../models/listings');

exports.addListing = function(req, res) {
	console.log("POST /listing received");
    console.log(req.body);
    var newListing = new Listing(req.body);

    newListing.save(function(err, newListing) {
        if (err) console.log(err);
        res.redirect('/listings?id='+newListing._id);
    })
};

exports.showEdit = function(req, res){
    Listing.find({"_id": req.query._id}, function(err, data) {
         res.render('pages/editlisting', {title: "Edit Your Listing", Listing:data[0]});
    });
}

exports.findRecent = function(req, res) {
    res.send('Success!!!!!!!!');
}

exports.find = function(req, res) {
    console.log("GET /listing received");
    if (req.query.id){
        Listing.find({"_id": req.query.id}, function(err, data){
            if (err) throw err;
            //array of one listing
            if (!data[0]){
                res.send(404, "Not found");
                return;
            }
            res.render('pages/listing', {title: data[0].title, Cur: req.session.user, Listing: data[0], isAdmin: req.session.ifAdmin});
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
    console.log(req.body);
    if(req.body.id){
        if(req.body.title){
            Listing.update({"_id": req.body.id},
                        { $set:{"title": req.body.title}}, function(err, data){});
        }
        if(req.body.description){
                Listing.update({"_id": req.body.id},
                        { $set:{"description": req.body.description}}, function(err, data){});          
        }
        if(req.body.picture){
                Listing.update({"_id": req.body.id},
                        { $set:{"picture": req.body.picture}}, function(err, data){});          
        }
        res.redirect("/listings?id=" + req.body.id);
    } else {
        res.send(400, "Error: wrong request format")
    }
}

exports.postComment = function(req, res){
    console.log("POST /comment received");
    console.log(req.body);
    if (req.body.id && req.body.user_id && req.body.message){
        Listing.find({_id: req.body.id}, function(err, data){
            if (err) throw err;
            var new_comments = data[0].comments;
            new_comments.push({user_id: req.body.user_id, message: req.body.message});
            Listing.update({_id: req.body.id}, { $set: {comments: new_comments}}, function(err, data){});
            res.redirect("/listings?id=" + req.body.id);
        })
    } else {
        res.send(400, "Error: wrong request format")
    }
}

exports.removeListing = function(req, res){
    console.log("DELETE /listing received");
    if (req.body.id){
        Listing.remove({"_id": req.body.id}, function(err, data){
            if (err) throw err;
            console.log(data);
            res.send(200, "DELETE");
        })
    } else {
        res.send(400, "Error: wrong request format");
    }
}

