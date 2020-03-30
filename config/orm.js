// Import the MYSQL connectoin

var connection = require("../config/connection.js");

// Helper function for SQL syntax.

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
    return arr.toString();
  }

// Methods that execute MySQL comands in the controllers (retrieves/stores database info)

var orm = {
    // display all the burgers
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        }
        )},

    // make new burger
    insertOne: function(burger_name, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        console.log(queryString);
        connection.query(queryString, [burger_name], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // devour burger
    updateOne: function(table, condition, cb){
        var queryString = "UPDATE " + table + " SET devoured = true  WHERE id = ?";
        connection.query(queryString,[condition], function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      }
    };

    // Export orm object to model
    module.exports = orm;