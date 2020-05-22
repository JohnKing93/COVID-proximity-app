var db = require("../models");

module.exports = function(app) {
  
  // Post new vote record
  app.post("/api/coordinates", (req, res) => {
    db.Coordinates.create({
      lat: req.body.lat,
      long: req.body.long,
    })
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        console.log("Error:", error);
      });
  });

};
