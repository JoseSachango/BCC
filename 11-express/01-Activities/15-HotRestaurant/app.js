var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 3002;

//organize the request object
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



var formData = require("./data/formData")
require("./routes/apiRoutes.js")(app)
require("./routes/htmlRoutes.js")(app)




app.listen(PORT,function(){
    console.log("Server up and running.")
});