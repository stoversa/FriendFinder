var express = require("express");
var bodyParser = require("body-parser");
var app = express();


var PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use express.static to serve the public folder as a static directory
app.use(express.static("./app/public"));


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);



app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});