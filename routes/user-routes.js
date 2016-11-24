var User = require('../models/users');

/**
 * Finds all the users.
 *
 * @param {object} req request object
 * @param {object} res response object
 */
exports.findAll = function(req, res) {
    console.log('findAll');
    User.find({}, function(err, allUsers) {
        if (err) throw err;
        console.log(allUsers)
        res.send(allUsers);
    });
};

