const data = {
  eMail: "baam@hh.com",
  password: "b221210074",
};

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // formun varsayılan davranışını engelle
  
  const formData = new FormData();
  formData.append('email', emailInput.value);
  formData.append('password', passwordInput.value);

  fetch('process-login.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    console.log(data);
    // PHP'den dönen verileri işle
  })
  .catch(error => {
    console.error(error);
  });
});