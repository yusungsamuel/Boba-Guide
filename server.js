var express = require("express");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"))


var getRequest = require("./app/routing/htmlRoutes.js")
getRequest(app, path)

var drinks = require("./app/data/boba.js")


var postRequest = require("./app/routing/apiRoutes.js")
postRequest(drinks, app, path)

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

