
var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());



require("/routing/apiRoutes.js")(app);
require("/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});