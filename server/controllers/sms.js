var request = require('request');
var querystring = require('querystring');

var apiConfig = {
  url: 'https://api-promo.kaleyra.com/v4/',
  apiKey: 'A1ed3d9da6f32898fb43b75206085dd8b',
  method: 'sms',
  sender: 'BULKSMS',
};

// create an expense object and persist it to database.
exports.single_sms = function (req, res, next) {

  var params = {
    api_key: apiConfig.apiKey,
    sender: apiConfig.sender,
    method: apiConfig.method,

    to: req.body.contact,
    message: req.body.message
  };

  console.log(apiConfig.url+"?"+querystring.stringify(params));
  request.get(
    {
      url: apiConfig.url+"?"+querystring.stringify(params),
    }, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred and handle it
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      res.send(JSON.parse(body));
    });
};

