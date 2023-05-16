<?php

$name = $_POST['name'];
$surname = $_POST['surname'];
$gender = $_POST['gender'];
$email = $_POST['email'];
$musicgenre = $_POST['music-genre'];
$class = $_POST['class'];
$teachername = $_POST['teacher-name'];
$message = $_POST['message'];

?>

<table cellspacing="0">
  <tr>
    <td colspan="2">Formdan Gelen Bilgiler</td>
  </tr>
  <tr>
    <td>Adınız:</td>
    <td>
      <?php echo $name; ?>
    </td>
  </tr>
  <tr>
    <td>Soyadınız:</td>
    <td>
      <?php echo $surname; ?>
    </td>
  </tr>
  <tr>
    <td>Cinsiyetiniz:</td>
    <td>
      <?php echo $gender; ?>
    </td>
  </tr>
  <tr>
    <td>Aldığınız Dersler:</td>
    <td>
      <?php foreach ($class as $choice) {
        echo $choice;
        echo "<br />";
      } ?>
    </td>
  </tr>
  <tr>
    <td>Dersi Veren Öğretmen(Web Teknolojileri):</td>
    <td>
      <?php echo $teachername; ?>
    </td>
  </tr>
  <tr>
    <td>E-mail Adresiniz:</td>
    <td>
      <?php echo $email; ?>
    </td>
  </tr>
  <tr>
    <td>Tercih Ettiğiniz Müzik:</td>
    <td>
      <?php echo $musicgenre; ?>
    </td>
  </tr>
  <tr>
    <td>Mesajınız(İsteğe Bağlı):</td>
    <td>
      <?php 
        if($message == "")
        {
          echo "Bir mesajınız yok.";
        }
        else
        {
          echo $message;
        }
      ?>
    </td>
  </tr>
  <tr>
</table>