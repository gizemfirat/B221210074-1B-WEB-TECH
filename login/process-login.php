<?php
$email = $_POST['email'];
$password = $_POST['password'];

$data = array(
  "eMail" => "aaaaaa@hh.com",
  "password" => "346365"
);

if ($email == $data['eMail'] && $password == $data['password']) {
  echo "Giriş başarılı!";
} else {
  echo "Giriş başarısız!";
}
?>