// Express JS dependency
const exp = require("express");
const path = require("path");

// Start
const app = exp();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(exp.urlencoded({ extended: true }));
app.use(exp.json());

// route request for landing page

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
  });


// route request for notes pages
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/notes.html"));
});


// port test
app.listen(PORT, () => {
    console.log('API server Started on port 3001 !');
});