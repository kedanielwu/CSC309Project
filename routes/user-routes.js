var User = require('../models/users');
var Listing = require('../models/listings');

/**
 * Finds users.
 *
 * @param {object} req request object
 * @param {object} res response object
 */
exports.find = function(req, res) {
    console.log('find User');

    if(req.query.id){
        User.find({"_id": req.query.id}, function(err, User) {
            if (err) {return res.send("");}
            res.render('startbootstrap-new-age-gh-pages/profile', User[0]);
        });
    } else if(req.query.username){
        User.find({"username": req.query.username}, function(err, User) {
            if (err) {return res.send("");}
            // console.log(User)
            res.send(User);
        });
    } else if(req.query.email){
        User.find({"email": req.query.email}, function(err, User) {
            if (err) {return res.send("");}
            // console.log(User)
            res.send(User);
            res.render('profile', User);
        });
    }
    else{
        User.find({}, function(err, allUsers) {
        if (err) throw err;
        // console.log(allUsers)
        res.send(allUsers);
        });
    }
};


//Can also add with query if we would rather do that
exports.addUser = function(req, res) {
    console.log("adding User");
    console.log(req.body);
    var newUser = new User(req.body);

    newUser.save(function(err, newUser) {
        if (err) console.log(err);
        res.send('Success');
    })
};


exports.updateUser = function(req, res) {
    console.log('Update User');
    console.log(req.query);
    if(req.query.id){
            if(req.query.name){
                User.update({"_id": req.query.id},
                          { $set:{"name": req.query.name}}, function(err, User){});
            }
            if(req.query.email){
                 User.update({"_id": req.query.id},
                          { $set:{"email": req.query.email}}, function(err, User){});          
            }
            if(req.query.password){
                 User.update({"_id": req.query.id},
                          { $set:{"password": req.query.password}}, function(err, User){});          
            }
            if(req.query.picture){
                 User.update({"_id": req.query.id},
                          { $set:{"picture": req.query.picture}}, function(err, User){});          
            }
            if(req.query.description){
                 User.update({"_id": req.query.id},
                          { $set:{"description": req.query.description}}, function(err, User){});          
            }
            if(req.query.userType){
                 User.update({"_id": req.query.id},
                          { $set:{"userType": req.query.userType}}, function(err, User){});          
            }
            res.send("Updated");
    }
    else{
        console.log("Error: user id given to update");
    }
};


exports.removeUser = function(req, res) {
    console.log('Remove User');

    if(req.query.id){
        User.remove({"_id": req.query.id}, function(err, User) {
            if (err) throw err;
            console.log(User)
            res.send(User);
        });
    }
    else{
      
        console.log("Error: need user id")

    }
};


