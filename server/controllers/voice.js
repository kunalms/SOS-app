var request = require('request');
var querystring = require('querystring');
var History = require('../models/history');

var apiConfig = {
  url: 'https://api-voice.kaleyra.com/v1/',
  apiKey: 'Aef21f891e93f91372665a44256b27104',
  method: ['dial.click2call','dial.c2cstatus'],
  format: 'json'
};

exports.click_to_call = function (req, res) {

  console.log('here');
  var params = {
    api_key: apiConfig.apiKey,
    format: apiConfig.format,
    method: apiConfig.method[0],
    caller: req.body.caller,
    receiver: req.body.receiver
  };

  request.get(
    {
      url: apiConfig.url + "?" + querystring.stringify(params),
    }, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred and handle it
      if (error) {
        res.send(error);
      }
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

      body = JSON.parse(response.body);
      console.log(response.body);

      let history = new History({
        message: body.message,
        data: body.data,
        status: body.status,
        type: req.body.type,
        sentTo: req.body.receiver,
        sentFrom: req.body.caller,
        time: new Date()
      });

      history.save(function (err, hist) {
        if (err) {
          res.send(err);
        }
        res.send(hist);
      });
    });
};


exports.click_to_call_info = function (req, res) {

  var params = {
    api_key: apiConfig.apiKey,
    format: apiConfig.format,
    method: apiConfig.method[1],
  };

  request.get(
    {
      url: apiConfig.url + "?" + querystring.stringify(params),
    }, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred and handle it
      if (error) {
        res.send(error);
      }
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

      body = JSON.parse(response.body);
      console.log(response.body);

      let history = new History({
        message: body.message,
        data: body.data,
        status: body.status,
        time: new Date()
      });

      history.save(function (err, hist) {
        if (err) {
          res.send(err);
        }
        res.send(hist);
      });
    });
};

