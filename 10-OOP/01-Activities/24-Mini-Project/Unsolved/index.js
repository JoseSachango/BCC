const inquirer = require("inquirer");
const word = require("./Word.js")

//number of guesses
var guessR;
inquirer.prompt([
    {
        name:"Letter-guess",
        message:"What is the letter you want to guess?",
        type:"input"
    }
])