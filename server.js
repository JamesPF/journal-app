var express = require('express');
var app = express();
var PORT = 3000;

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
  console.log('App is listening on port ' + PORT);
});
