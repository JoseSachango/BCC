//contains all the routes that deliver response.json() and all post requests
var formData = require("../data/formData")
var waitListData = require("../data/waitListData")

module.exports = function(app){



    app.post("/api/formData",function(request,response){

        console.log(request.body);
        console.log(request)
        

        formData.push(request.body);

    });


    app.get("/api/tables",function(request,response){
        response.json(formData);
    });


    app.get("/api/waitlist",function(request,response){
        response.json(waitListData);
    });

    app.get("/api/formData",function(request,response){
        response.json(formData)
        console.log(formData)
    });

}