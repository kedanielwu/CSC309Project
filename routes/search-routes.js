var Listing = require('../models/listings');
var User = require('../models/users');

exports.search = function(req, res){
  // users? and listings? query params
  if(req.query.hasOwnProperty('user')){
    searchUsers(req.query.user, function(results){

      if(req.query.sort_by){
        var sort_by = req.query.sort_by.toLowerCase();

        if(sort_by == 'username'){
          results.sort(function(a, b){
            return a.username.localeCompare(b.username);
          });
        }
        else if(sort_by == 'relevance'){
          // do nothing - sorts by relevance automatically
        }
      }
      
      res.render('pages/search', {results: results, key: "users", searchText: req.query.user, title: "Search Results"});
    });
  }  
  else if (req.query.hasOwnProperty('listing')){
    searchListings(req.query.listing, function(results){
      // sorting
      if(req.query.sort_by){
        var sort_by = req.query.sort_by.toLowerCase();

        if(sort_by == 'date'){
          results.sort(function(a, b){
            if (a.date.getTime() > b.date.getTime()){
              return 1;
            } 
            else if(a.date.getTime() < b.date.getTime()){
              return -1;
            }
            else {
              return 0;
            }
          });
        }
        else if(sort_by == 'price'){
          results.sort(function(a, b){
            return a.price - b.price;
          });
        }
        else if(sort_by == 'relevance'){
          // do nothing - sorts by relevance automatically
        }
      }
      
      res.render('pages/search', {results: results, key: "listings", searchText: req.query.listing, title: "Search Results"});
    });  
  }
  else{
    console.log("ERROR: Invalid search params.", req.query);
    res.send(400, "ERROR: Invalid search params.");
  }
}

// Full text search for listings - sort by relevance by default
function searchListings(searchText, callback){
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
      if (err || results == undefined) throw err;

      console.log("Searched for: ", searchText);
      //console.log(results);

      //return results;
      callback(results); // only way to pass data from async callback
    })

  // Listing.find(
  //   {
  //     $text: {
  //       $search: searchText,
  //       $caseSensitive: false
  //     }
  //   })
  //   .exec(function(err, results){
  //     if (err || results == undefined) throw err;

  //     console.log("Searched for: ", searchText);
  //     //console.log(results);

  //     //return results;
  //     callback(results); // only way to pass data from async callback
  //   })

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
    if (err || results == undefined) throw err;

    console.log("Searched for: ", searchText);
    //console.log(results);

    callback(results);
    //return results;
  })
}
