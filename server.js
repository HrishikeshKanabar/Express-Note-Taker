// Express JS dependency
const exp = require("express");

// Start
const app = exp();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(exp.urlencoded({ extended: true }));
app.use(exp.json());

app.get('/api', (req, res) => {
    res.send("Hello")
  });

app.listen(PORT, () => {
    console.log('API server Started on port 3001 !');
});