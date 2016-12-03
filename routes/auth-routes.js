var User = require('../models/users');

exports.login = function(req, res) {
    console.log('Logging in...');

    if (!req.query.username || !req.query.password) {
        res.send('login failed');
    } else {
        User.find({"username": req.query.username}, function(err, User) {
            if (err) {
                return res.send("");
            } else if (User[0].userType == "admin" &&
                User[0].password == req.query.password) {
                console.log(User);
                req.session.ifAdmin = true;
                req.session.user = req.query.username;
                req.session.admin = true;
                return res.send("admin login success");
            } else if (User[0].userType == "user" && 
                User[0].password == req.query.password) {
                console.log(User);
                req.session.ifAdmin = false;
                req.session.user = req.query.username;
                req.session.admin = true;
                return res.send("user login success");
            } else {
                return res.send("");
            }
        });
    }
};

exports.logout = function (req, res) {
    console.log("Logging out...");
    req.session.destroy();
    res.render('pages/index', {title: "Homepage"});
};