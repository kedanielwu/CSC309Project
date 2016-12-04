var User = require('../models/users');
var Listing = require('../models/listings');
var bcrypt = require('bcryptjs');

exports.showEdit = function(req, res){
    User.find({"username": req.session.user}, function(err, User) {
         res.render('pages/EditProfile', {title: "Edit Your Profile", User:User[0]});
    });
}

/**
 * Finds users.
 *
 * @param {object} req request object
 * @param {object} res response object
 */
exports.find = function(req, res) {
    console.log('find User');
    var listings;

    if(req.query.id){
        User.find({"_id": req.query.id}, function(err, User) {
        Listing.find({"user_id": req.query.id}, function(err, data){
            if (err) throw err;
                    res.render('pages/profile', {User:User[0], listings:data, title: "profile"});
        	});
        });
    } else if(req.query.username){
        User.find({"username": req.query.username}, function(err, User) {
            Listing.find({"username": req.query.username}, function(err, data){
            if (err) throw err;
                    res.render('pages/profile', {User:User[0], listings:data, title: "profile", Cur:req.session.user});
            });
        });
    } else if(req.query.email){
        User.find({"email": req.query.email}, function(err, User) {
            if (err) {return res.send("");}
            res.send(User);
        });
    }
    else{
        User.find({}, function(err, allUsers) {
        if (err) throw err;
        res.send(allUsers);
        });
    }
};


//Can also add with query if we would rather do that
exports.addUser = function(req, res) {
    console.log("adding User");
    var newUser = new User(req.body);
    newUser.password = bcrypt.hashSync(newUser.password, Math.random());
    //console.log("Password? :::  " + newUser.password);

    newUser.save(function(err, newUser) {
        if (err) console.log(err);
        res.send('Success');
    })
};

exports.updateUser = function(req, res) {
    console.log('Update User');
    console.log(req.body);
    if(req.session.user){
            if(req.body.email){
                 User.update({"username": req.session.user},
                          { $set:{"email": req.body.email}}, function(err, User){});          
            }
            if(req.body.password && req.body.password != ''){
                 User.update({"username": req.session.user},
                          { $set:{"password": bcrypt.hashSync(req.body.password, Math.random())}}, function(err, User){});          
            }
            if(req.body.picture){
                 User.update({"username": req.session.user},
                          { $set:{"picture": req.body.picture}}, function(err, User){});          
            }
            if(req.body.description){
                 User.update({"username": req.session.user},
                          { $set:{"description": req.body.description}}, function(err, User){});          
            }
            if(req.body.userType){
                 User.update({"username": req.session.user},
                          { $set:{"userType": req.body.userType}}, function(err, User){});          
            }
            if(req.body.area){
                 User.update({"username": req.session.user},
                          { $set:{"area": req.body.area}}, function(err, User){});          
            }
            res.redirect("/users?username=" + req.session.user);
    }
    else{
        console.log("Error: user id given to update");
    }
};

exports.removeUser = function(req, res) {
    console.log('Remove User');
    console.log(JSON.stringify(req.query));

    if(req.query.id){
        if (req.query.id=="all") {
            User.remove({});
            return res.render('/admin');
        } else {
            User.remove({"_id": req.query.id}, function(err, User) {
                if (err) throw err;
                console.log(User)
                res.send(User);
            });
        }
    } else{
        console.log("Error: need user id")
    }
};
