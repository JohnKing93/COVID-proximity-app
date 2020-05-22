var path = require('path');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.sendFile(path.join(process.cwd() + '/index.html'));
    console.log("index");
  });
  app.get("*", function(req, res) {
    res.status(404).send("Sorry can't find that!")
  });
};
