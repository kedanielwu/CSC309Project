var User = require('../models/users');

exports.login = function(req, res) {
    console.log('Logging in...');

    if (!req.query.username || !req.query.password) {
        res.send('login failed');
    } else {
        User.find({"username": req.query.username}, function(err, User) {
            if (err) {return res.send("");}
            else if (User[0].password == req.query.password) {
                req.session.user = req.query.username;
                req.session.admin = true;
                res.send("login success");
            } else {
                res.send('login failed');
            }
        });
    }
};

exports.logout = function (req, res) {
    console.log("Logging out...");
    req.session.destroy();
    res.send("logout success!");  
};