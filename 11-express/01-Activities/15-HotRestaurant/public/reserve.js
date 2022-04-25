
$("#submitButton").on("click",function(event){

    event.preventDefault();

    var formData = {
        name: $("#name").val().trim(),
        phoneNumber:$("#phoneNumber").val().trim(),
        email: $("#email").val().trim(),
        uniqueId: $("#uniqueId").val().trim()
    }

    $.post("/api/formData",formData).then((response)=>{
        console.log("This is the response I get from the post request: ");
        console.log(response)
    })


})