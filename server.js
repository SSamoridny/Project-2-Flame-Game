require( 'dotenv' ).config()
const express = require("express");
const app = express();
const order = require( './controllers/orders_controller.js' );
const product = require( './controllers/products_controller.js' );

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 5000;

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(order);
app.use(product);

// get the unhandled rejection and throw it to another fallback handler we already have. 
process.on('uncaughtException', function (error){
  console.log( `unCaught exception: `, error )
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  console.log( `Server listening on: http://localhost:${PORT}` );
});
