// An example express server implementing a REST API

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var users = require('./routes/user-routes');
var listings = require('./routes/listing-routes');
var search = require('./routes/search-routes.js');
var app = express();

// http://mongoosejs.com/docs/promises.html
//mongoose.Promise = global.Promise; //Causes Server not to run so I commented out. PLEASE FIX
// Doc for Mongoose Connections: http://mongoosejs.com/docs/connections
mongoose.connect('mongodb://localhost/database');

//app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/startbootstrap-new-age-gh-pages'));

// app.set('views', __dirname);
// app.set('view engine', 'html');
// app.engine('.html', require('ejs').__express);
app.set('view engine', 'ejs');

// The request body is received on GET or POST.
// A middleware that just simplifies things a bit.
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

/*** Routes ***/

app.get('/users', users.find);
app.post('/users', users.addUser);
app.put('/users', users.updateUser);
app.delete('/users', users.removeUser);

// app.get('/users', users.find);

//app.post('/adduser', users.addOne);
app.get('/listings', listings.find);
app.post('/listings', listings.addListing);
app.put('/listing', listings.updateListing);
app.post('/comments', listings.postComment);
app.delete('/listing', listings.removeListing);

/* Search */
// Takes params 'user' or 'listing' to search for.
app.get('/search', search.search);

// Load ejs pages

// Get the index page:
app.get('/', function(req, res) {
    //res.sendFile(__dirname + '/startbootstrap-new-age-gh-pages/index.html');
    // res.sendFile(__dirname + '/createListing.html');
    res.render('pages/index', {title: 'Index'});
});

// testing front end - for quick access
app.get('/index_view', function(req, res) {
    res.render('pages/index', {title: 'Index'});
});

app.get('/profile_view', function(req, res) {
    res.render('pages/profile', {title: 'Profile'});
});

app.get('/search_view', function(req, res) {
    res.render('pages/search', {title: 'Search Results'});
});

app.get('/signup_view', function(req, res) {
    res.render('pages/signup', {title: 'Sign Up'});
});

// Start the server
app.listen(3000);
console.log('Listening on port 3000');

