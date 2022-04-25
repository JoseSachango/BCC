// when you hit the tables endpoint it should perform a get request and bring back the data stored on the server somewhere.
//when you click the tables button on another html file it sends a get request to the /tables endpoint and that serves up the table html page. When you're on the table html page a get request to the /api/formData endpoint is automatically sent.


$.get("/api/formData",function(response){

    console.log(response)

    $(".card").hide()

    for(let i in response){

        if(response[i]){

            console.log(response[i])
           
            $(`#table${i}`).show()

            var html = `
            <h4>${response[i].name}</h4>
            <h4>${response[i].phoneNumber}</h4>
            <h4>${response[i].email}</h4>
            <h4>${response[i].uniqueId}</h4>
            `

            $(`#html${i}`).html(html)

        }else{
            console.log(`table${i} is hidden`)
            $(`#table${i}`).hide()
        }

    }
   
    
})