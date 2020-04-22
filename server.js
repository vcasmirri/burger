//This file is used to store the connection to the server
//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
 //Import routes
var routes = require('./controllers/burgers_controller.js');

// Express set up
var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// Parse application body as JSON
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//
app.use(methodOverride('_method'));

//
app.use("/", routes);

// Set Handlebars.
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');



var PORT = process.env.PORT ||8080;

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});