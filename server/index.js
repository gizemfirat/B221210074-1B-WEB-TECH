const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

app.use("/css", express.static(path.join(__dirname, "../css")));
app.use("/js", express.static(path.join(__dirname, "../js")));
app.use("/img", express.static(path.join(__dirname, "../img")));
app.use(
  "/node_modules",
  express.static(path.join(__dirname, "../node_modules"))
);

const data = {
  name: "Gizem",
  surname: "Fırat",
};

app.get("/", (req, res) => {
  const indexHtml = fs.readFileSync(`html/index.html`, "utf-8");

  res.send(indexHtml);
});

app.get("/home", (req, res) => {
  const indexHtml = fs.readFileSync(`html/index.html`, "utf-8");

  res.send(indexHtml);
});

app.get("/mycity", (req, res) => {
  const myCityHtml = fs.readFileSync(`html/myCity.html`, "utf-8");

  res.send(myCityHtml);
});

app.get("/myinsterests", (req, res) => {
  const myInterestsHtml = fs.readFileSync(`html/myInsterests.html`, "utf-8");

  res.send(myInterestsHtml);
});

app.get("/ourlegacy", (req, res) => {
  const ourLegacyHtml = fs.readFileSync(`html/ourLegacy.html`, "utf-8");

  res.send(ourLegacyHtml);
});

app.get("/mycv", (req, res) => {
  const myCVHtml = fs.readFileSync(`html/myCV.html`, "utf-8");

  var result = myCVHtml
    .replace("{NAME}", data.name)
    .replace("{SURNAME}", data.surname);

  res.send(myCVHtml);
});

app.listen(port, () => {
  console.log(`Application started at port ${port}`);
});

