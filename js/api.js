
async function search() {
  fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    const user = data.results[0];
    const fullName = `${user.name.first} ${user.name.last}`;
    const email = user.email;
    const picture = user.picture.large;

    const userDiv = document.getElementById('userDiv');
    userDiv.innerHTML = `
      <img src="${picture}" alt="User Picture">
      <h2>${fullName}</h2>
      <p>Email: ${email}</p>
    `;
  });
}
