var User = require('../models/users');
var Listing = require('../models/listings');
var bcrypt = require('bcryptjs');

exports.showEdit = function(req, res){
    console.log(req.session.user);
    User.find({"username": req.session.user}, function(err, User) {
         res.render('pages/EditProfile', {title: "Edit Your Profile", User:User[0]});
    });
}


exports.showAdminEdit = function(req, res){
    console.log(req.query.user);
    if(req.query.user){
        User.find({"username": req.query.user}, function(err, User) {
            res.render('pages/AdminEditProfile', {title: "Edit " + req.query.user + "'s Profile", User:User[0]});
        });
    }
    else{
        res.sendStatus(404);
    }
    
}

/**
 * Finds users.
 *
 * @param {object} req request object
 * @param {object} res response object
 */
exports.find = function(req, res) {
    console.log('find User' + req.session.ifAdmin);
    var listings;

    if(req.query.id){
        User.find({"_id": req.query.id}, function(err, User) {
        Listing.find({"user_id": req.query.id}, function(err, data){
            if (err || data == undefined) throw err;
                res.render('pages/profile', {User:User[0], listings:data, title: req.query.id+"'s "+"Profile"});
            });
        });
    } else if(req.query.username){
        User.find({"username": req.query.username}, function(err, User) {
            if (err  || User == undefined) throw err;

            Listing.find({"username": req.query.username}, function(err, data){
            if (err  || data == undefined) throw err;
                res.render('pages/profile', {User:User[0], listings:data,
                    title: req.query.username+"'s "+"Profile",
                    Cur:req.session.user,
                    isAdmin:req.session.ifAdmin});
            });
        });
    } else if(req.query.email){
        User.find({"email": req.query.email}, function(err, User) {
            if (err || User == undefined) {return res.send("");}
            res.send(User);
        });
    }
    else{
        User.find({}, function(err, allUsers) {
            if (err || allUsers == undefined) throw err;
            res.send(allUsers);
        });
    }
};
exports.findAPI = function(req, res){
    console.log("GET /api/user API");
    User.find({"username": req.query.username}, function(err, data){
        if (err) throw err;
        console.log(data);
        res.send(data);
    })
}


//Can also add with query if we would rather do that
exports.addUser = function(req, res) {
    console.log("adding User");
    var newUser = new User(req.body);
    newUser.password = bcrypt.hashSync(newUser.password, Math.random());
    //console.log("Password? :::  " + newUser.password);

    newUser.save(function(err, newUser) {
        if (err || User == undefined) console.log(err);
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
             if(req.body.phoneNumber){
                 User.update({"username": req.session.user},
                          { $set:{"phoneNumber": req.body.phoneNumber}}, function(err, User){});          
            }
            res.redirect("/users?username=" + req.session.user);
    }
    else{
        console.log("Error: user id given to update");
    }
};

exports.adminUpdateUser = function(req, res) {
    console.log('Update User');
    console.log(req.body);
    if(req.body.username){
            if(req.body.username){
                 User.update({"username": req.body.username},
                          { $set:{"username": req.body.username}}, function(err, User){});          
            }
            if(req.body.email){
                 User.update({"username": req.body.username},
                          { $set:{"email": req.body.email}}, function(err, User){});          
            }
            if(req.body.password && req.body.password != ''){
                 User.update({"username": req.body.username},
                          { $set:{"password": bcrypt.hashSync(req.body.password, Math.random())}}, function(err, User){});          
            }
            if(req.body.picture){
                 User.update({"username": req.body.username},
                          { $set:{"picture": req.body.picture}}, function(err, User){});          
            }
            if(req.body.description){
                 User.update({"username": req.body.username},
                          { $set:{"description": req.body.description}}, function(err, User){});          
            }
            if(req.body.userType){
                 User.update({"username": req.body.username},
                          { $set:{"userType": req.body.userType}}, function(err, User){});          
            }
            if(req.body.area){
                 User.update({"username":req.body.username},
                          { $set:{"area": req.body.area}}, function(err, User){});          
            }
            res.redirect("/users?username=" + req.body.username);
    }
    else{
        console.log("Error: user id given to update");
    }
};


exports.removeUser = function(req, res) {
    console.log('Remove User');

    if(req.query.all){ 
        User.remove({"userType": "user"}, function(err, User) { //shouldn't be removing admins
            if (err) throw err;
            console.log("All users deleted");
        });

        Listing.remove({}, function(err, Listing) {
            if (err) throw err;
            console.log("All listings deleted");
            res.send("Database wiped.");
        });
    } else if (req.query.id){
        User.remove({"_id": req.query.id}, function(err, User) {
            if (err) throw err;
            console.log(User)
            res.send(User);
        });        
    } else{
        console.log("Error: need user id")
    }
};


