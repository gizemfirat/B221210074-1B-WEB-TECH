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

app.get("/masterpage", (req, res) => {
  const masterPageHtml = fs.readFileSync(`html/masterPage.html`, "utf-8");

  res.send(masterPageHtml);
});

app.get("/", (req, res) => {
  const indexHtml = fs.readFileSync(`html/index.html`, "utf-8");

  res.send(indexHtml);
});

app.get("/home", (req, res) => {
  const indexHtml = fs.readFileSync(`html/index.html`, "utf-8");

  res.send(indexHtml);
});

//app.get("/mycity", (req, res) => {
 // const myCityHtml = fs.readFileSync(`html/myCity.html`, "utf-8");

  //res.send(myCityHtml);
//});

//app.get("/myinsterests", (req, res) => {
 // const myInterestsHtml = fs.readFileSync(`html/myInsterests.html`, "utf-8");

 // res.send(myInterestsHtml);
//});

//app.get("/ourlegacy", (req, res) => {
 // const ourLegacyHtml = fs.readFileSync(`html/ourLegacy.html`, "utf-8");

 // res.send(ourLegacyHtml);
//});

app.get("/mycv", (req, res) => {
  const myCVHtml = fs.readFileSync(`html/myCV.html`, "utf-8");

  var layoutHtml = fs.readFileSync(`html/layout.html`, "utf-8");
  layoutHtml = layoutHtml.replace("{RENDER_BODY}", myCVHtml);
  layoutHtml = layoutHtml.replace("{PAGE_TITLE}", "Özgeçmiş");

  var result = layoutHtml
    .replace("{NAME}", data.name)
    .replace("{SURNAME}", data.surname);

  res.send(result);
});

app.get("/mycity", (req, res) => {
  const myCityHtml = fs.readFileSync(`html/myCity.html`, "utf-8");

  var layoutHtml = fs.readFileSync(`html/layout.html`, "utf-8");
  layoutHtml = layoutHtml.replace("{RENDER_BODY}", myCityHtml);
  layoutHtml = layoutHtml.replace("{PAGE_TITLE}", "Şehrim");

  var result = layoutHtml

  res.send(result);
});

app.get("/myinterests", (req, res) => {
  const myInterestsHtml = fs.readFileSync(`html/myInterests.html`, "utf-8");

  var layoutHtml = fs.readFileSync(`html/layout.html`, "utf-8");
  layoutHtml = layoutHtml.replace("{RENDER_BODY}", myInterestsHtml);
  layoutHtml = layoutHtml.replace("{PAGE_TITLE}", "İlgi Alanlarım");

  var result = layoutHtml

  res.send(result);
});

app.get("/ourlegacy", (req, res) => {
  const ourLegacyHtml = fs.readFileSync(`html/ourLegacy.html`, "utf-8");

  var layoutHtml = fs.readFileSync(`html/layout.html`, "utf-8");
  layoutHtml = layoutHtml.replace("{RENDER_BODY}", ourLegacyHtml);
  layoutHtml = layoutHtml.replace("{PAGE_TITLE}", "Şehrim");

  var result = layoutHtml

  res.send(result);
});

app.get("/", (req, res) => {
  const indexHtml = fs.readFileSync(`html/index.html`, "utf-8");

  var mainLayoutHtml = fs.readFileSync(`html/mainLayout.html`, "utf-8");
  mainLayoutHtml = mainLayoutHtml.replace("{RENDER_BODY}", indexHtml);
  mainLayoutHtml = mainLayoutHtml.replace("{PAGE_TITLE}", "Anasayfa");

  var result = mainLayoutHtml
  
  res.send(result);
});

app.listen(port, () => {
  console.log(`Application started at port ${port}`);
});

