const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 3008;



app.engine("handlebars",exphbs({defaultLayout:"main"}));
app.set("view engine","handlebars");

var data;















