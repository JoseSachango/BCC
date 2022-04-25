// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");



// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
 app.get("/api/chirps",function(request,response))


  // Add a chirp
  app.post("/api/chirps",function(request,response){
    var author = request.body.author
    var body = request.body.body
    var timeCreated = request.body.created_at

    connection.query(`INSERT INTO chirps (author,chirp,time_created) VALUES (${author},${body},${timeCreated})`,function(err,data){
      if(err) throw err
      
      response.json(data)
    })

  })

};
