<?php

$json_data = '{"email": "b", "password": "1"}';
$data = json_decode($json_data, true);

$email = $_POST['email'];
$password = $_POST['password'];

$form_data = array(
  "email" => $email,
  "password" => $password
);

$json_form_data = json_encode($form_data);
if ($json_data === $json_form_data) {
  echo "Giriş Başarılı!";
} else {
  echo "Giriş Başarısız!"; //XAMPP KUR!
}

?>