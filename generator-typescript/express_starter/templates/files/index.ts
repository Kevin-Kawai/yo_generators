import express from "express";

const app = express();
const port = 8080;

app.set("view engine", "ejs");
// needed for ejs to work with webpack
app.engine('ejs', require('ejs').__express)

app.get("/", (req, res) => {
  res.render('index', { name: 'wahoo' })
})

app.get("/:id", (req, res) => {
  res.render('index', { name: req.params['id'] })
})

app.listen(port, () => {
  console.log(`Server started at ${port}`)
})
