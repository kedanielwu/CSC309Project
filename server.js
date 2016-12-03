// An example express server implementing a REST API

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
	userType: "nonUser", 
	resave: true,
	saveUnintialized: true
}));

app.set('views', __dirname);
app.set('view engine', 'html');
app.engine('.html', require('ejs').__express);
app.set('view engine', 'ejs');


// The request body is received on GET or POST.
// A middleware that just simplifies things a bit.
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


//TYPES OF USERS
var user = function(req, res, next) { //any users including admins
	if (req.session && req.session.user && req.session.admin) {
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
	if (req.session && req.session.user == "admin" && req.session.admin) { //TODO
		return next();
	} else {
		return res.sendStatus(401);
	}
};

//Call to check current user
app.get('/currentUser', function(req, res) {
	res.send(req.session.user);
});

//PAGE RESTRICTIONS
app.get('/login', nonUser, function(req, res){ //login and signup links will be hidden, might not be necessary
	res.render(__dirname + '/views/login.html');
});

app.get('/admin', admin, function(req, res) {
	res.render(__dirname + '/views/admin.html'); //admin dashboard is only for admins
});

app.get('/signup', nonUser, function(req, res) {
    res.render(__dirname + '/views/signup.html');
});

// Get the index page:
app.get('/', function(req, res) {
    res.render(__dirname + '/views/index.html');
});

app.get('/loginCheck', authorize.login);
app.get('/logout', authorize.logout);

app.get('/users', users.find);
app.post('/users', users.addUser);
app.put('/users', users.updateUser);
app.delete('/users', users.removeUser);

app.get('/listings', listings.find);
app.post('/listings', listings.addListing);
app.put('/listing', listings.updateListing);
app.delete('/listing', listings.removeListing);

app.post('/comments', listings.postComment);

/* Search */
// Takes params 'user' or 'listing' to search for.
app.get('/search', search.search);

app.listen(3000);
console.log('Listening on port 3000');

