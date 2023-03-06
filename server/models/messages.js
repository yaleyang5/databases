var db = require('../db');
var mysql = require('mysql2');

module.exports = {
  getAll: function (callback) {
    var queryStr = 'SELECT messages.text, rooms.roomname, users.username FROM messages \
                    LEFT OUTER JOIN rooms ON rooms.id = messages.room_id \
                    LEFT OUTER JOIN users ON users.id = messages.user_id \
                    ORDER BY messages.id desc';
    db.query(queryStr, function (err, results) {
      if (err) {
        throw err;
      }
      callback(null, results);
    });
  },
  create: function (params, callback) {
    console.log(params);
    var queryStr = 'INSERT INTO messages (text, user_id, room_id) \
                      VALUES (?, (SELECT id FROM users WHERE username = ? limit 1), (SELECT id FROM rooms WHERE roomname = ? limit 1))';
    db.query(queryStr, params, function (err, results) {
      if (err) {
        throw err;
      }
      callback(null, results);
    });
  }
};
