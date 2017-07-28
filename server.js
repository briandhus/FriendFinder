var path = require('path');
var express = require('express');
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var PORT = process.env.PORT || 8080;

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
})