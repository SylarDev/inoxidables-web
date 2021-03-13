<?php
    $destinatario = "inoxidablesrjs@gmail.com";
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];

    $header = 'Enviado desde contacto.html';

    mail($destinatario, $asunto, $mensaje, $email, $telefono, $header);

    echo "<script>alert('Mensaje enviado correctamente...')</script>";
    echo "<script> setTimeout(\"location.href = 'contacto.html'\",1000)</script>";



?>