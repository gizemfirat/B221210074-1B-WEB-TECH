
<?php
  $json_data = '{"email": "b221210074@sakarya.edu.tr", "password": "b221210074"}';
  $data = json_decode($json_data, true);

  $email = $_POST['email'];
  $password = $_POST['password'];

  $form_data = array(
    "email" => $email,
    "password" => $password
  );

  if($email == "b221210074@sakarya.edu.tr" && $password == "b221210074") {
    echo "Hoşgeldin B221210074!";
  }
  else{
    echo "Giriş başarısız!";
  }
  ?>