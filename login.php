<?php
session_start();
$mail = $_POST['mail'];
$pass = $_POST['pass'];

$db = "mysql:host=localhost;dbname=hew;charset=utf8mb4";
$db_user = "root";
$db_pass = "";
$sql = <<<EOS
    SELECT *
    FROM t_user
    WHERE F_userMailaddress = :mail
EOS;
try {
    $pdo = new PDO($db, $db_user, $db_pass);
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(':mail', $mail);
    $stmt->execute();
    $members = $stmt->fetchALL();
    foreach ($members as $member) {
        if ($pass === $member['F_userPassword']) {
            $_SESSION['mail'] = $_POST['mail'];
            $_SESSION['pass'] = $_POST['pass'];
            header('Location: ./register.php');
            exit;
        }
    }
    $_SESSION['error'] = 'IDまたはパスワードが不正です。';
    header('Location: cart.php');
    exit;
} catch (Exception $e) {
    echo "データベースエラー" . $e->getMessage();
}
$pdo = null;
