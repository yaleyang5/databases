var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryStr = 'SELECT * FROM users';
    db.query(queryStr, function (err, results) {
      if (err) {
        throw err;
      }
      callback(null, results);
    });
  },

  create: function (params, callback) {
    var queryStr = 'INSERT INTO users (username) VALUES (?)';
    db.query(queryStr, params, (err, results) => {
      if (err) {
        throw err;
      }
      callback(null, results);
    });
  }
};
