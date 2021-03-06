var Listing = require('../models/listings');
var User = require('../models/users');

var maxListingsPerPage = 10;

exports.search = function(req, res){
  // users? and listings? query params
  if(req.query.hasOwnProperty('user')){
    searchUsers(req.query.user, function(results){
      // sorting
      if(req.query.sort_by && req.query.order_by){
        var sortBy = req.query.sort_by.toLowerCase();
        var orderBy = (req.query.order_by.toLowerCase() == 'desc') ? -1 : 1; //asc by default
        results = sortUsers(results, sortBy, orderBy);
      }

      // get metrics
      var numTotalResults = results.length;

      // pagination
      var pageNumber = req.query.page ? req.query.page : 1;
      var numPages = Math.ceil(numTotalResults/maxListingsPerPage);

      // get first element on page 
      var first = ((pageNumber-1)*maxListingsPerPage);
      var last = ((first + maxListingsPerPage) < numTotalResults) ? first + maxListingsPerPage : results.length;
      results = results.slice(first, last);  
      
      res.render('pages/search', 
        {
          results: results, 
          key: "users", 
          searchText: req.query.user, 
          maxListingsPerPage: maxListingsPerPage, 
          pageNumber: pageNumber,
          numPages: numPages,
          first: first+1,
          last: last,
          numTotalResults: numTotalResults,
          sortBy: sortBy,
          orderBy: orderBy,
          title: "Search Results"
        });
    });
  }  
  else if (req.query.hasOwnProperty('listing')){
    searchListings(req.query.listing, function(results){
      // sorting
      if(req.query.sort_by && req.query.order_by){
        var sortBy = req.query.sort_by.toLowerCase();
        var orderByText = req.query.order_by.toLowerCase();
        var orderBy = (orderByText == 'desc') ? -1 : 1; //asc by default
        results = sortListings(results, sortBy, orderBy);
      }

      // get metrics
      var numTotalResults = results.length;

      // pagination
      var pageNumber = req.query.page ? req.query.page : 1;
      var numPages = Math.ceil(numTotalResults/maxListingsPerPage);

      // get first element on page 
      var first = ((pageNumber-1)*maxListingsPerPage);
      var last = ((first + maxListingsPerPage) < numTotalResults) ? first + maxListingsPerPage : results.length;
      results = results.slice(first, last);  
      
      res.render('pages/search', 
        {
          results: results, 
          key: "listings", 
          searchText: req.query.listing, 
          maxListingsPerPage: maxListingsPerPage,
          pageNumber: pageNumber, 
          numPages: numPages,
          first: first+1,
          last: last,
          numTotalResults: numTotalResults,
          sortBy: sortBy,
          orderBy: orderByText,
          title: "Search Results"
        });
    });  
  }
  else{
    console.log("ERROR: Invalid search params.", req.query);
    res.send(400, "ERROR: Invalid search params.");
  }
}

function sortUsers(users, sortBy, orderBy){
  if(sortBy == 'username'){
    return users.sort(function(a, b){
      return a.username.localeCompare(b.username)*orderBy;
    });
  }
  else if(sortBy == 'relevance'){
    // do nothing - sorts by relevance automatically
    return users;
  }
}

function sortListings(listings, sortBy, orderBy){
  if(sortBy == 'date'){
    return listings.sort(function(a, b){
      if (a.date.getTime() > b.date.getTime()){
        return 1*orderBy;
      } 
      else if(a.date.getTime() < b.date.getTime()){
        return -1*orderBy;
      }
      else {
        return 0;
      }
    });
  }
  else if(sortBy == 'price'){
    return listings.sort(function(a, b){
      price1 = parseInt(a.price.substring(1,a.price.length));
      price2 = parseInt(b.price.substring(1,b.price.length));
      return (price1 - price2)*orderBy;
    });

    console.log(listings);
  }
  else if(sortBy == 'relevance'){
    // do nothing - sorts by relevance automatically
    return listings;
  }
}

// Full text search for listings - sort by relevance by default
function searchListings(searchText, callback){
  results = [];

  if(searchText == ""){
    Listing.find({}, function (err, results){
      if (err || results == undefined) throw err;

      console.log("Searched for: ", searchText);

      callback(results); // only way to pass data from async callback
    });
  }
  else{
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

        callback(results); // only way to pass data from async callback
      });
  }
}

// Full text search for listings
function searchUsers(searchText, callback){
  results = [];

  if(searchText == ""){
    User.find({}, function (err, results){
      if (err || results == undefined) throw err;

      console.log("Searched for: ", searchText);

      callback(results); // only way to pass data from async callback
    });
  }
  else{
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
    });
  }
}
