// Connect Node to MySQL

var mysql = require("mysql");

// Port/Password Stuff (password in .env, don't worry about it)

var connection = mysql.createConnection({
    PORT: 3306,
    host: "localhost",
    user: "root", 
    password: "thurisaz1020",
    database: "burgers_db"
})

// Initiate the connection

connection.connect(function(err) {
    if (err) {
        console.error("There's been an error connecting: " + err.stack);
        return;
    }
    console.log("You're connected with the ID: " + connection.threadId);
});

// Export the connection

module.exports = connection;