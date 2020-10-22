var express = require('express');
var dotenv = require('dotenv').config();
var app = express();

app.get('/', function (req, res) {
  require('dns').lookup(require('os').hostname(), function (err, add, fam) {
    console.log('addr: '+add);
    res.send('<h2>App running..... IP Address: '+add+'</h2>');
  })
})

app.get('/jenkins', function (req, res) {
    res.send('Jenkins deploy successful');
  })
})

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});
