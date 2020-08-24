var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World from' + process.env.user + 'Application deployed on ECS');
});
app.listen(80, function () {
  console.log('Example app listening on port 80!');
});
