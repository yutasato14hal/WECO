<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">

    <link rel="stylesheet" href="./css/setting.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
    <link rel="icon" href="Images/facicon.ico" />
    <title>新規登録</title>
</head>

<body>
    <?php
    $cardnumber = NULL;
    $cardname = NULL;
    $cardlimit = NULL;
    try {
        $db = new PDO('mysql:dbname=hew;host=127.0.0.1;charset=utf8mb4', 'root', '');
    } catch (PDOException $e) {
        echo "error" . $e->getMessage();
    }
    $insert = $db->prepare("INSERT INTO t_user SET F_userName=:name, F_userMailaddress=:mailaddress, F_userPassword=:password, F_userAddress=:address, F_userPostcode=:postcode, F_userCardnumber=:cardnumber, F_userCardname=:cardname, F_userCardlimit=:cardlimit");
    $insert->bindParam(':name', $_POST['name']);
    $insert->bindParam(':mailaddress', $_POST['mailaddress']);
    $insert->bindParam(':password', $_POST['password']);
    $insert->bindParam(':address', $_POST['address']);
    $insert->bindParam(':postcode', $_POST['postcode'], PDO::PARAM_INT);
    if (isset($_POST['cardnumber']) && isset($_POST['cardname']) && isset($_POST['cardlimit'])) {
        $cardnumber = $_POST['cardnumber'];
        $cardname = $_POST['cardname'];
        $cardlimit = $_POST['cardlimit'];
    }
    $insert->bindParam(':cardnumber', $cardnumber);
    $insert->bindParam(':cardname', $cardname);
    $insert->bindParam(':cardlimit', $cardlimit);
    if ($insert->execute() === True) {;
        header("Location: ./cart.php");
        exit;
    } else {
        echo "<p>エラー:登録できませんでした。</p>";
        echo "<a href='entry.html'>登録画面に戻る</a>";
    }

    ?>

</body>

</html>