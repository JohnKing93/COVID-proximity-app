// Keys
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
  var syncOptions = { force: true };
}

// Dependencies
var express = require("express");
var db = require("./models");

// Initialize Express
var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Database & Routes
require("./routes/api.js")(app);

// Initialize
var syncOptions = { force: false };
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;