// https://blooming-shore-75254.herokuapp.com/

var express = require("express");
var app = express();
var path = require("path");

var PORT = process.env. PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});