var Listing = require('../models/listings');
var User = require('../models/users');

exports.search = function(req, res){
  console.log("SEARCH request received");

  // users? and listings? query params
  if(req.query.hasOwnProperty('user')){
    console.log("Search ?user=", req.query.user);
    searchUsers(req.query.user, function(results){
      console.log(results);
      
      res.render('pages/search', {results: results, key: "users", searchText: req.query.user, title: "Search Results"});
      //res.send(results);
    });
  }  
  else if (req.query.hasOwnProperty('listing')){
    console.log("Search ?listing=", req.query.listing);
    searchListings(req.query.listing, function(results){
      console.log(results);
      
      res.render('pages/search', {results: results, key: "listings", searchText: req.query.listing, title: "Search Results"});
      //res.send(results);
    });  
  }
  else{
    console.log("ERROR: Invalid search params.", req.query);
    res.send(400, "ERROR: Invalid search params.");
  }
}

// Full text search for listings
function searchListings(searchText, callback){
  results = [];

  Listing.find(
    {
      $text: {
        $search: searchText,
        $caseSensitive: false
      }
    })
    .exec(function(err, results){
      if (err) throw err;

      console.log("Searched for: ", searchText);
      //console.log(results);

      //return results;
      callback(results); // only way to pass data from async callback
    })

  //return results;
}

// Full text search for listings
function searchUsers(searchText, callback){
  results = [];

  User.find(
  {
    "username": { //TODO: search by username
      $regex: ".*" + searchText + ".*",
      $options: "i" // case insensitive
    }
  })
  .exec(function(err, results){
    if (err) throw err;

    console.log("Searched for: ", searchText);
    //console.log(results);

    callback(results);
    //return results;
  })
}
