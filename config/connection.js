// // Set up MySQL connection.
// var mysql = require("mysql");
// var connection;


// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWS_URL);
// } else {
//   connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Colbert1070',
//     database: 'burgers_db'
//   });
// };


// // Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id: " + connection.threadId);
// });

// // Export connection for our ORM to use.
// module.exports = connection;
// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var mysql = require("mysql");

// we placed the connections in this source object
var source = {
  // localhost
  localhost: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Colbert1070",
    database: "burgers_db"
  },

  // jawsDB
  jawsDB: {
    host: "	ffn96u87j5ogvehy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "ybt731luevb62k87",
    password: "dtd1pp7uhcvkjvon",
    database: "arbml24pcr5btyow"
  }
};

// we use source.[name of connection] to hook into mysql
var connection = mysql.createConnection(source.localhost);

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
