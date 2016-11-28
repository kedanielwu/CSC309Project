var Listing = require('../models/listings');
var User = require('../models/users');

function searchUsers(searchText){
  User.find({
    "$text": {
      "$search": searchText,
      "caseSensitive": false
    }
  },
  function(err, users))
}