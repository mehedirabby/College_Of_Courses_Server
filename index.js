const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;

const course = require("./Data/course.json");

const categories = require("./Data/categories.json");
app.use(cors());

app.get("/course-categories", (req, res) => {
  res.send(categories);
});
app.get("/", (req, res) => {
  res.send("Course Api Running");
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = course.find((c) => c._id === id);
  console.log(id);
  res.send(selectedCourse);
});
app.get("/course", (req, res) => {
  res.send(course);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;

  if (id === "08") {
    res.send(course);
  } else {
    const category_course = course.filter((c) => c.category_id == id);
    res.send(category_course);
  }
});

app.listen(port, () => {
  console.log("College courses running on port", port);
});
