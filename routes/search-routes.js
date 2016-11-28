var Listing = require('../models/listings');
var User = require('../models/users');

exports.search = function(req, res){
  console.log("SEARCH request received");

  // users? and listings? query params
  if(req.query.hasOwnProperty('user')){
    res.send(searchUsers(req.query.user));
  }  
  else if (req.query.hasOwnProperty('listing')){
    res.send(searchListings(req.query.listing));
  }
  else{
    res.send(400, "ERROR: Invalid search params.");
  }
}

// Full text search for listings
function searchListings(searchText){
  results = [];

  Listing.find(
    {
      "$text": {
        "$search": searchText,
        "$caseSensitive": false
      }
    },
    {
      // Project a field to get text score value
      score: {
        "$meta": "textScore"
      }
    },
    {
      // Sort by score
      sort: {
        score: {
          "$meta": "textScore"
        }
      }
    }).toArray(function(err, results){
      // error handling
    })

  return results;
}

// Full text search for listings
function searchUsers(searchText){
  results = [];

  User.find(
  {
    "name": { //TODO: search by username
      "$regex": ".*" + searchText + ".*",
      "$options": "i" // case insensitive
    }
  }).toArray(function(err, results){
    // error handling
  })

  return results;
}
