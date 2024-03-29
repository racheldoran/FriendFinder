var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

require("./FriendFinder/routing/apiRoutes.js")(app);
require("./FriendFinder/routing/htmlRoutes.js")(app);


app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});