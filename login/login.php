<html>
<body>

  <?php
  $json_data = '{"email": "bb@hh.com", "password": "1"}';
  $data = json_decode($json_data, true);

  $email = $_POST['email'];
  $password = $_POST['password'];

  $form_data = array(
    "email" => $email,
    "password" => $password
  );

  if($email == "bb@hh.com" && $password == "12345678") {
    echo "Hoşgeldin bb! Anasayfaya yönlendiriliyorsun...";
    header("Refresh: 3; URL=html/pages/main-page.html");
  }
  else {
    echo "Giriş başarısız! Giriş sayfasına yönlendiriliyorsun... ";
    header("Refresh: 3; URL=html/pages/login.html");
  }
  ?>
</body>
</html>