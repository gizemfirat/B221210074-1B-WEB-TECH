$(() => {
  localStorage.setItem("web-tech-session", JSON.stringify({
    name:"Zeynep Gizem",
    surname:"Fırat",
    anket:"blabla"
  }))

  var session = JSON.parse(localStorage.getItem("web-tech-session"));
  console.log(session);

  $(".card").on("click", () => {
    $.get("/api/my-interests/music-genre", (data) => {
      console.log(data);
    })
  })
})
