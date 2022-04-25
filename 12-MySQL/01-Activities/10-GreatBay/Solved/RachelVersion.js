const inquirer = require("inquirer"); //allows me to ask
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "",
  database: "greatBay_DB"
});

connection.connect((err) => {
  if (err) throw err;

  init();
});

function init() {
  inquirer.prompt({
    name: "userChoice",
    choices: ["BID", "POST", "EXIT"],
    type: "list",
    message: "Would you like to bid or post an item?"
  })
  .then(({ userChoice })=>{
    switch(userChoice) {
      case "BID":
        return bidAuction();
      case "POST":
        return postAuction();
      default: return connection.end();
    }
  })
  .catch((err) => {
    throw err;
  });
}

function bidAuction() {
  connection.query(`SELECT * FROM auctions`, (err, result) => {
    if (err) throw err;

    inquirer.prompt([
      {
        name: "product",
        message: "Which item would you like to bid on?",
        type: "list",
        choices: result.map(row => row.item_name)
      },
      {
        name: "howMuch",
        message: "How much will you bid for this item?"
      }
    ])
    .then((answers) => {
      const currentElement = result.filter(row => row.item_name === answers.product)[0];

      if (answers.howMuch <= currentElement.highest_bid) {
        // they lose
        console.log("You are not the highest bidder.");

        init();
      } else {
        connection.query(
          `UPDATE auctions SET ? WHERE ?`,
          [{
            highest_bid: answers.howMuch
          }, {
            id: currentElement.id
          }],
          (err) => {
            if (err) throw err;

            console.log("Congratulations, you're the highest bidder!");
            init();
          }
        )
      }
    })
    .catch(err => {throw err;});
  })
}

function postAuction() {
  inquirer.prompt([
    {
      name: "product",
      message: "What is the name of the item you'd like to post?",
      type: "input"
    },
    {
      name: "category",
      message: "What category does your item belong to?"
    },
    {
      name: "startingBid",
      message: "What should your starting price be?"
    }
  ])
  .then((answers) => {
    // item_name VARCHAR(100) NOT NULL,
    // category VARCHAR(45) NOT NULL,
    // starting_bid INT default 0,
    // highest_bid
    connection.query(`INSERT INTO auctions SET ?`,
    {
      item_name: answers.product,
      category: answers.category,
      starting_bid: answers.startingBid,
      highest_bid: answers.startingBid
    },
    (err) => {
      if (err) throw err;

      init();
    })
  })
  .catch(err => {throw err});
}