var express = require("express");
var mongoose = require("mongoose");
var compression = require("compression");

// create a reference to compression package (make sure the package is installed)


var app = express();
var PORT = process.env.PORT || 3000;

// enable compression middleware


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(compression());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/imageperformance", {
  useNewUrlParser: true
});

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});
