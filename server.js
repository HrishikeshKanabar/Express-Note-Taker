// Express JS dependency
const exp = require("express");

// Start
const app = exp();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(exp.urlencoded({ extended: true }));
app.use(exp.json());
app.use(exp.static(__dirname + "/public"));

require("./routes/routehtml.js")(app);
require("./routes/routeapi.js")(app);


// port test
app.listen(PORT, () => {
  console.log("API server Started on port 3001 !");
});
