const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;

const categories = require("./Data/categories.json");
app.use(cors());

app.get("/course-categories", (req, res) => {
  res.send(categories);
});
app.get("/", (req, res) => {
  res.send("Course Api Running");
});

app.listen(port, () => {
  console.log("College courses running on port", port);
});
