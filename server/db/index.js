var mysql = require('mysql2');

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'

var connection = mysql.createConnection({user: 'root', password: ''});

connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Connected!');
  }
});

exports.connection = connection;
exports.connect = () => {
  connection.connect((err) => {
    if (err) {
      throw err;
    } else {
      console.log('Connected!');
    }
  });
};
