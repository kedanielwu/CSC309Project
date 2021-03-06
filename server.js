// An express server implementing a REST API

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//ROUTES
var users = require('./routes/user-routes');
var listings = require('./routes/listing-routes');
var search = require('./routes/search-routes.js');
var authorize = require('./routes/auth-routes.js');

var app = express();
var session = require('express-session');





// http://mongoosejs.com/docs/promises.html
//mongoose.Promise = global.Promise; //Causes Server not to run so I commented out. PLEASE FIX
// Doc for Mongoose Connections: http://mongoosejs.com/docs/connections
mongoose.connect('mongodb://localhost/database');

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/views'));
app.use(session({
	secret: "notsosecret",
	ifAdmin: false, //true is user is an admin
	resave: true,
	saveUnintialized: true
}));

app.set('view engine', 'ejs');

// The request body is received on GET or POST.
// A middleware that just simplifies things a bit.
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

//TYPES OF USERS
var user = function(req, res, next) { //any users including admins
	if (req.session && 
		req.session.user && req.session.admin) {
		return next();
	} else {
		return res.sendStatus(401);
	}
};

var nonUser = function(req, res, next) { //users without an account
	if (req.session && req.session.user && req.session.admin) {
		return res.sendStatus(401);
	} else {
		return next();
	}
};

var admin = function(req, res, next) { //only for admins
	if (req.session && req.session.ifAdmin && 
		req.session.user && req.session.admin) {
		return next();
	} else {
		return res.sendStatus(401);
	}
};

// //Call to check current user
app.get('/currentUser', function(req, res) {
	console.log(req.session.user)
	res.send(req.session.user);
});

app.get('/currentUserType', function(req, res) {
	console.log(req.session.ifAdmin)
	res.send(req.session.ifAdmin);
});

// //PAGE RESTRICTIONS
app.get('/login', nonUser, function(req, res){ //login and signup links will be hidden, might not be necessary
	res.render('pages/login', {title: "Login"});
});

app.get('/admin', admin, function(req, res) {
	res.render('pages/admin', {title: "Admin Dashboard"}); //admin dashboard is only for admins
});

app.get('/signup', nonUser, function(req, res) {
    res.render('pages/signup', {title: "Signup"});
});

app.get('/createlisting', user, function(req,res){
	res.render('pages/createlisting', {title: "Create listing", cur: req.session.user});
})

app.get('/editprofile', user, users.showEdit);
app.get('/adminEditProfile', admin, users.showAdminEdit);
app.get('/editlisting', user, listings.showEdit);

// Get the index page:
app.get('/', function(req, res) {
    res.render('pages/index', {title: "Homepage"});
});

app.get('/loginCheck', authorize.login);
app.get('/logout', authorize.logout);

app.get('/users', users.find);
app.post('/users', users.addUser);
app.post('/updateUser', user, users.updateUser);
app.post('/adminUpdateUser', users.adminUpdateUser);
app.delete('/users', admin, users.removeUser);

//API for user
app.get('/api/users', users.findAPI);

app.get('/listings', listings.find);
app.post('/listings', user, listings.addListing);
app.post('/updateListing', user, listings.updateListing);
app.delete('/listing', user, listings.removeListing);

app.post('/comments', user, listings.postComment);

/* Search */
// Takes params 'user' or 'listing' to search for.
app.get('/search', search.search);

app.listen(3000);
console.log('Listening on port 3000');
