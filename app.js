var express = require('express');
var dotenv = require('dotenv').config();

var app = express();
app.get('/', function (req, res) {
  console.log({
    fruit: "Apple",
    size: "Large",
    color: "Red"
  })
  console.log({
    fruit: "Orange",
    size: "Large",
    color: "Orange"
  })
  console.log(JSON.stringify({
    fruit: "Cherry",
    size: "Medium",
    color: "Red"
  }))
  console.log(JSON.stringify({
    fruit: "Berries",
    size: "Small",
    color: "Blue"
  }))
  res.send('Hello World from ' + process.env.USER + ' Application deployed on ECS');
});
app.listen(80, function () {
  console.log('Example app listening on port 80!');
});
