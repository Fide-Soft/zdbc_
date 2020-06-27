<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];
header('Content-Type: application/json');
if ($name === ''){
print json_encode(array('message' => 'Pole Imie nie może być puste', 'code' => 0));
exit();
}
if ($email === ''){
print json_encode(array('message' => 'Pole E-mail nie może być puste', 'code' => 0));
exit();
} else {
if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
print json_encode(array('message' => 'Błędny format adresu e-mail.', 'code' => 0));
exit();
}
}
if ($subject === ''){
print json_encode(array('message' => 'Pole Temat nie może być puste', 'code' => 0));
exit();
}
if ($message === ''){
print json_encode(array('message' => 'Pole Wiadomość nie może być puste', 'code' => 0));
exit();
}
$content="Od: $name \nE-mail: $email \nWiadomość: $message";
$recipient = "contact@fide-soft.com";
$mailheader = "Od: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Błąd!");
print json_encode(array((string)('message' => 'Wiadomość została pomyślnie wysłana!', 'code' => 1)));
exit();
?>