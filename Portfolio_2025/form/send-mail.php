<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger y sanitizar datos
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $messageText = trim($_POST["message"]);

    // Validar campos obligatorios
    if (empty($name) || empty($email) || empty($messageText) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Por favor, completa todos los campos correctamente.";
        exit;
    }

    // Configurar destinatario y asunto
    $to = "donatella.joelle.tamayo@gmail.com";  // Cambia por tu email
    $subject = "Nuevo mensaje desde tu sitio web";

    // Construir el cuerpo del email
    $email_content = "Nombre: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Mensaje:\n$messageText\n";

    // Encabezados
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Enviar el email
    if (mail($to, $subject, $email_content, $headers)) {
        echo "¡Gracias por contactarnos, $name! Te responderemos pronto.";
    } else {
        echo "Lo siento, hubo un error al enviar el mensaje.";
    }
} else {
    echo "Error: método no permitido.";
}
?>
