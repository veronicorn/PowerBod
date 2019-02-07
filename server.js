require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

// Add routes, both API and view
require('./routes/api-routes')(app);

// Connect to the Mongo DB // Deployed on Heroku
const mongoAddress = 'mongodb://'+
  process.env.DB_USER+':'+
  process.env.DB_PASS+'@'+
  process.env.DB_HOST;
mongoose.connect(process.env.MONGODB_URI || mongoAddress);
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/PowerBodLog");

// Redirects all routes that are not declared on backend back to the right route as user refreshes the page
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});