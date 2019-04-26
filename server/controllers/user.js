var User = require('../models/user');


// create an expense object and persist it to database.
exports.user_create = function (req, res, next) {
  let user = new User(
    {
      name: req.body.name,
      contact: req.body.contact,
      email_id: req.body.email_id
    }
  );

  user.save(function (err, exp) {
    if (err) {
      return next(err);
    }
    res.send(exp);
  });
};

// fetch expense information for a specific expense by id.
exports.user_details = function (req, res, next) {
  User.findById(req.params.id, function (err, usr) {
    if (err) return next(err);
    res.send(usr);
  })
};


exports.user_update = function (req, res, next) {
  User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, usr) {
    if (err) return next(err);
    res.send(usr);
  });
};

exports.user_all = function (req, res, next) {
  User.find({}, function (err, all_user) {
    if (err) return next(err);
    res.send(all_user);
  });
};


exports.user_delete = function (req, res, next) {
  User.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.send({message: "Success"});
  })
};
