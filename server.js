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


var apiRoutes = require("./app/routing/apiRoutes.js")
apiRoutes.postRequest(drinks, app, path)

apiRoutes.apiGetRequest(app, drinks)

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

