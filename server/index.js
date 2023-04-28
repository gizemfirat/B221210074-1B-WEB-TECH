const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

app.use("/css", express.static(path.join(__dirname, "../css")));
app.use("/js", express.static(path.join(__dirname, "../js")));
app.use("/img", express.static(path.join(__dirname, "../img")));
app.use("/node_modules", express.static(path.join(__dirname, "../node_modules")));

const indexHtml = fs.readFileSync(`html/index.html`, "utf-8");

app.get("/", (req, res) => {
  res.send(indexHtml);
});


app.listen(port, () => {
  console.log(`Application started at port ${port}`);
});
