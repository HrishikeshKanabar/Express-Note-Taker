const path = require("path");


//  #####  Routes for HTML file  ########
module.exports = function (app) {
// Route get to request for landing page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
  });
  
  // Route get to  request for notes pages
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/notes.html"));
  });
}