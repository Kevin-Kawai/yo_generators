import express from "express";
import path from "path";
import { allUser } from "./app/services/userFinder";

const app = express();
const port = 8080;

app.set('views', path.join(__dirname, '/app/views'))
app.set("view engine", "ejs");
// needed for ejs to work with webpack
app.engine('ejs', require('ejs').__express)

app.get("/", async (req, res) => {
  res.render('index', { name: JSON.stringify(await allUser()) })
})

app.listen(port, () => {
  console.log(`Server started at ${port}`)
})
