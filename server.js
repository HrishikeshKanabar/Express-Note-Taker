// Express JS dependency
const exp = require("express");
const path = require("path");
const dbData = require("./db/db.json");

// Start
const app = exp();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(exp.urlencoded({ extended: true }));
app.use(exp.json());
app.use(exp.static(__dirname + '/public'));

//  #####  Routes for HTML file  ########


// Route get to request for landing page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
  });


// Route get to  request for notes pages
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/notes.html"));
});



//  #####  Routes for API ctions or events  ########


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










// port test
app.listen(PORT, () => {
    console.log('API server Started on port 3001 !');
});

