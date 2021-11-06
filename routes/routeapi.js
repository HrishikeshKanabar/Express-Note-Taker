const dbData = require("../db/db.json");
//  #####  Routes for API actions or events  ########
module.exports = function (app) {
// Route get to display all notes in Json
app.get("/api/notes", (req, res) => {
    res.json(dbData);
  });
  
  // Route post to save notes
  
  // Route get to display all notes in Json
  app.post("/api/notes", (req, res) => {
    dbData.push(req.body);
    res.json(dbData);
  });
  
  app.delete("/api/notes/:id", (req, res) => {
    let noteTitleId = req.params.id;
    for (let data in dbData) {
      if (dbData[data].title == noteTitleId) {
        dbData.splice(data, 1);
      }
    }

    res.json(dbData);
  });
}