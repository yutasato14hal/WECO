<?php
session_start();
if (!isset($_SESSION['mail'], $_SESSION['pass'])) {
    $_SESSION['error'] = '不正アクセスです。';
    header('Location: cart.php');
    exit;
}
$mail = $_SESSION['mail'];
$pass = $_SESSION['pass'];
$db = "mysql:host=localhost;dbname=hew;charset=utf8mb4";
$db_user = "root";
$db_pass = "";
$sql = <<<EOS
    SELECT *
    FROM t_user
    WHERE F_userMailaddress = :mail
    AND F_userPassword = :pass
EOS;
try {
    $pdo = new PDO($db, $db_user, $db_pass);
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':mail', $mail);
    $stmt->bindParam(':pass', $pass);
    $stmt->execute();
    $member = $stmt->fetch(PDO::FETCH_ASSOC);
} catch (Exception $e) {
    echo $e->getMessage();
}
$pdo = null;
?>
<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/nomalize.css">
    <!-- <link rel="stylesheet" href="./css/style.css"> -->
    <link rel="stylesheet" href="./css/register.css">
    <link rel="icon" href="Images/facicon.ico" />
    <title>cart</title>
</head>

<body>
    <section class="cart">
        <h1 class="section-title">ショッピングカート</h1>
        <div class="containers">
            <div class="con1">
                <div class="item">
                    <h3 class="h3_title">1.受け取り場所</h3>
                    <p class="address">名前：<?php echo $member['F_userName']; ?><br>
                        住所：<?php echo $member['F_userAddress']; ?>
                    </p>

                </div>
                <div class="item">
                    <h3 class="h3_title">2.お支払い方法<span style="font-size: 13px; color: red; margin-left: 3px;">※必須</span></h3>
                    <div class="pay">
                        <input type="radio" class="input_pay" name="pay">
                        <label for="">クレジットカード</label>
                        <input type="radio" class="input_pay" name="pay">
                        <label for="">コンビニ払い</label>
                        <input type="radio" class="input_pay" name="pay">
                        <label for="">ペイデイ</label>
                    </div>

                </div>

                <h3 class="h3_title">3.注文商品確認</h3>
                <!-- <div class="item">
                    <div class="item-text">
                        <p class="item-name"></p>
                        <div class="count">
                        </div>
                        <div class="item-price">
                        </div>
                    </div>
                </div> -->


            </div>

            <div class="con2">
                <div class="form-container">
                    <a href="" href="javascript:OnLinkClick();" id=cart-login class="btn">注文を確定</a>
                    <div class="forms">
                        <label class="total" for="">ご請求額:</label>
                        <label class="total" id="total" for=""></label>



                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src=" ./js/app.js"></script>
    <script>
        document.querySelectorAll('input[name=pay]').forEach(function (radio) {
            radio.addEventListener('click',()=>{
                document.getElementById('cart-login').href = "conp.html"
            })
        })
    </script>
</body>

</html>