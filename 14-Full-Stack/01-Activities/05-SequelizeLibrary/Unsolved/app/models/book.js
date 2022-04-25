// Dependencies
// =============================================================

// Require the sequelize library

const Sequelize = require("sequelize")
// Require the connection to the database (connection.js)
const sequelize = require("../config/connection")

// Create a "Book" model with the following configuration

var Library = sequelize.define("library",{
    title: Sequelize.STRING,
    author: Sequelize.STRING,
    genre: Sequelize.STRING,
    pages: Sequelize.INTEGER
})



Library.sync();


module.exports = Library;

// 1. A title property of type STRING
// 2. An author property of type STRING
// 3. A genre property of type STRING
// 4. A pages property of type INTEGER

// Sync model with DB

// Export the book model for other files to use
