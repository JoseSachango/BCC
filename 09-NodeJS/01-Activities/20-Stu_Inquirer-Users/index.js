var inquirer = require("inquirer")
console.log(inquirer)


inquirer.prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What languages do you know?:',
      name: 'password',
    },
    {
      type: 'input',
      message: 'What is youre prefered method of communication',
      name: 'confirm',
    },
  ]).then((response)=>{
      console.log(response)
  })
  

