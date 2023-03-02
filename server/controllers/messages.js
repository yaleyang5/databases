var models = require('../models');

module.exports = {
  get: function (req, res) {
    console.log('serving request type: GET for url ' + req.url);
    var headers = {'Content-Type': 'application/json'};
    res.writeHead(200, headers);
    var messages = models.messages.getAll();
    res.end(JSON.stringify(messages));
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    console.log('serving request type: POST for url ' + req.url);
    var headers = {'Content-Type': 'application/json'};
    res.writeHead(201, headers);
    var messages = models.messages.create();
    res.end();
  } // a function which handles posting a message to the database
};
