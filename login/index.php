<?php
    $htmlDosyasi = 'index.html'; // Göstermek istediğiniz HTML dosyasının adını buraya yazın

    if(file_exists($htmlDosyasi)){
        include $htmlDosyasi;
    } else {
        echo "HTML dosyası bulunamadı!";
    }
?>
