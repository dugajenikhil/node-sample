var express = require('express');
var dotenv = require('dotenv').config();

var app = express();
app.get('/', function (req, res) {
  console.log('log: ', {
    fruit: "Apple",
    size: "Large",
    color: "Red"
  }
  res.send('Hello World from ' + process.env.USER + ' Application deployed on ECS');
});
app.listen(80, function () {
  console.log('Example app listening on port 80!');
});
