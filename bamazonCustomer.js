// CREATE A DATABASE

//CREATE A TABLE "PRODUCTS"

//CREATE COLUMNS

//POPULATE DATABESE WITH 10 DIFFERENT PRODUCTS

var mysql = require("mysql");


var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

function start(){
    //Display Items(ID, NAME, Price)

    connection.query("SELECT * FROM products", function(err,rows){
        if (err) throw err;
        for(var i = 0; i < rows.length; i++){
            var row = rows[i]
            console.log(row.item_id, row.product_name, row.price)
        }
    })



}

