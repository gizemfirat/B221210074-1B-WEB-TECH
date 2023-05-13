const express = require("express");
const fs = require("fs");
const path = require("path");
const { faker } = require('@faker-js/faker');

const app = express();
const port = 3000;
const pagePath = "html/pages";
const layoutPath = "html/layouts";

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

//app.get("/", (req, res) => {
//  const indexHtml = fs.readFileSync(`${pagePath}/index.html`, "utf-8");

//  res.send(indexHtml);
//});

app.get("/mycv", (req, res) => {
  const myCVHtml = fs.readFileSync(`${pagePath}/myCV.html`, "utf-8");
  var layoutHtml = fs.readFileSync(`${layoutPath}/layout.html`, "utf-8");

  layoutHtml = layoutHtml.replace("{RENDER_BODY}", myCVHtml);
  layoutHtml = layoutHtml.replace("{PAGE_TITLE}", "Özgeçmiş");

  res.send(layoutHtml
    .replace("{NAME}", data.name)
    .replace("{SURNAME}", data.surname));
});

app.get("/login", (req, res) => {
  const loginHtml = fs.readFileSync(`${pagePath}/login.html`, "utf-8");
  var layoutHtml = fs.readFileSync(`${layoutPath}/layout.html`, "utf-8");

  layoutHtml = layoutHtml.replace("{RENDER_BODY}", loginHtml);
  layoutHtml = layoutHtml.replace("{PAGE_TITLE}", "Giriş Yap");

  res.send(layoutHtml);
});

app.get("/mycity", (req, res) => {
  const myCityHtml = fs.readFileSync(`${pagePath}/myCity.html`, "utf-8");
  var layoutHtml = fs.readFileSync(`${layoutPath}/layout.html`, "utf-8");

  layoutHtml = layoutHtml.replace("{RENDER_BODY}", myCityHtml);
  layoutHtml = layoutHtml.replace("{PAGE_TITLE}", "Şehrim");

  res.send(layoutHtml);
});

app.get("/contact", (req, res) => {
  const contactHtml = fs.readFileSync(`${pagePath}/contact.html`, "utf-8");
  var layoutHtml = fs.readFileSync(`${layoutPath}/layout.html`, "utf-8");

  layoutHtml = layoutHtml.replace("{RENDER_BODY}", contactHtml);
  layoutHtml = layoutHtml.replace("{PAGE_TITLE}", "İletişim");

  res.send(layoutHtml);
});

app.get("/myinterests", (req, res) => {
  const myInterestsHtml = fs.readFileSync(`${pagePath}/myInterests.html`, "utf-8");
  var layoutHtml = fs.readFileSync(`${layoutPath}/layout.html`, "utf-8");

  layoutHtml = layoutHtml.replace("{RENDER_BODY}", myInterestsHtml);
  layoutHtml = layoutHtml.replace("{PAGE_TITLE}", "İlgi Alanlarım");

  res.send(layoutHtml);
});

app.get("/ourlegacy", (req, res) => {
  const ourLegacyHtml = fs.readFileSync(`${pagePath}/ourLegacy.html`, "utf-8");
  var layoutHtml = fs.readFileSync(`${layoutPath}/layout.html`, "utf-8");

  layoutHtml = layoutHtml.replace("{RENDER_BODY}", ourLegacyHtml);
  layoutHtml = layoutHtml.replace("{PAGE_TITLE}", "Şehrim");

  res.send(layoutHtml);
});

app.get("/", (req, res) => {
  const indexHtml = fs.readFileSync(`${pagePath}/index.html`, "utf-8");
  var layoutHtml = fs.readFileSync(`${layoutPath}/layout.html`, "utf-8");

  layoutHtml = layoutHtml.replace("{RENDER_BODY}", indexHtml);
  layoutHtml = layoutHtml.replace("{PAGE_TITLE}", "Anasayfa");

  res.send(layoutHtml);
});

app.get("/api/my-interests/music-genre", (req, res) => {
  var data = [];
  for(var i = 0; i< 3; i++){
    data.push(faker.music.genre())
  }
  res.send(data);
})

app.listen(port, () => {
  console.log(`Application started at port ${port}`);
});

