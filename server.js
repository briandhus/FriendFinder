var path = require('path');
var express = require('express');
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


require("./app/routing/apiroutes")(app);
require("./app/routing/htmlroutes")(app);


// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
})