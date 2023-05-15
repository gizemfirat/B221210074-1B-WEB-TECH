function submitForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;

  window.location.href = "new-page.html?name=" + encodeURIComponent(name) +
                         "$email=" + encodeURIComponent(email);
}
