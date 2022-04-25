const fs = require('fs');
const inquirer = require('inquirer');



inquirer.prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your current location?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'Write a few things for your bio section:',
      name: 'bio',
    },
    {
        type: 'input',
        message: 'What is your LinkedIn URL:',
        name: 'LinkedIn',
    },
    {
        type: 'input',
        message: 'What is your Github URL?:',
        name: 'Github',
    },
  ])
  .then((response) => {
    console.log(response)

    //callback function to render html file

            

                var html = `
            
                <!DOCTYPE html>
                <html>
                    <head>
            
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
                    </head>
            
                    <body>
            
                            <div class="jumbotron">
                                <h1 class="display-4">Hello, my name is ${response.name}!</h1>
                                <p class="lead">I live in ${response.location}. A little about me: ${response.bio}.</p>
                                <hr class="my-4">
                                <p>LinkedIn: ${response.LinkedIn}</p>
                                <p>GitHub: ${response.Github}</p>
                                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                            </div>
                                
            
            
                        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
                    </body>
            
            
            
            
                </html>
            
                `

            

            fs.writeFile("index.html",html,(err)=>console.log(err))


    }   
   
  );


  



  