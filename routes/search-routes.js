var Listing = require('../models/listings');
var User = require('../models/users');

exports.search = function(req, res){
  console.log("SEARCH request received");

  // users? and listings? query params
  if(req.query.hasOwnProperty('user')){
    console.log("Search ?user=", req.query.user);
    res.send(searchUsers(req.query.user));
  }  
  else if (req.query.hasOwnProperty('listing')){
    console.log("Search ?listing=", req.query.listing);
    res.send(searchListings(req.query.listing));
  }
  else{
    console.log("ERROR: Invalid search params.");
    res.send(400, "ERROR: Invalid search params.");
  }
}

// Full text search for listings
function searchListings(searchText){
  results = [];

  Listing.find(
    {
      $text: {
        $search: searchText,
        $caseSensitive: false
      }
    },
    {
      // Project a field to get text score value
      score: {
        $meta: "textScore"
      }
    })
    .sort(
    {
      // Sort by score
      score: {
        $meta: "textScore"
      }
    })
    .exec(function(err, results){
      if (err) throw err;
    })

  return results;
}

// Full text search for listings
function searchUsers(searchText){
  results = [];

  User.find(
  {
    "name": { //TODO: search by username
      $regex: ".*" + searchText + ".*",
      $options: "i" // case insensitive
    }
  })
  .exec(function(err, results){
    if (err) throw err;
  })


  return results;
}
