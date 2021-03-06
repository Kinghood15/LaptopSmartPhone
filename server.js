const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Laptop Smart Phone clone application." });
});
require("./app/routes/ro.student.js")(app);
require("./app/routes/ro.score.js")(app);
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
