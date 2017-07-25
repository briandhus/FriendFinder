var path = require('path');
var express = require('express');
var bodyParser = require("body-parser");

var app = express();
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

var PORT = process.env.PORT;

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
})