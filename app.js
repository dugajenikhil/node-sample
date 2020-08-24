var express = require('express');
var dotenv = require('dotenv').config();

var app = express();
app.get('/', function (req, res) {
  res.send('Hello World from ' + process.env.USER + ' Application deployed on ECS');
});
app.listen(80, function () {
  console.log('Example app listening on port 80!');
});
