var History = require('../models/history');

exports.fetch_all = function (req, res, next) {
  History.find({}, function (err, all_histories) {
    if (err) return next(err);
    res.send(all_histories);
  });
};