var models = require('../models');

var messageFields = ['message', 'username', 'roomname'];

module.exports = {
  get: function (req, res) {
    models.messages.getAll(function (err, results) {
      if (err) {
        throw err;
      }
      res.json(results);
    });
  },

  post: function (req, res) {
    console.log('LOOK HERE', req.body);
    var params = [
      req.body.message,
      req.body.username,
      req.body.roomname
    ];
    models.messages.create(params, function (err, results) {
      if (err) {
        res.sendStatus(500);
      }
      res.sendStatus(201);
    });
  }
};
