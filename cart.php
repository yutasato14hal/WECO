<?php
// エラーメッセージが設定されているか確認
$message = '';
session_start();
if (isset($_SESSION['error'])) {
    $message = "<p style=color:red>{$_SESSION['error']}</p>";

    unset($_SESSION['error']);
}
?>
<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/nomalize.css">
    <!-- <link rel="stylesheet" href="./css/style.css"> -->
    <link rel="stylesheet" href="./css/cart.css">

    <link rel="stylesheet" href="./css/setting.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
    <link rel="icon" href="Images/facicon.ico" />
    <title>cart</title>
</head>

<body>
    <section class="cart">
        <h1 class="section-title">ショッピングカート</h1>
        <div class="containers">
            <div class="con1">
                <!-- <template id="template">
                    <div class="item">
                        <div class="item-text">
                            <p class="item-name"></p>
                            <div class="count">
                            </div>
                            <div class="item-price">
                            </div>
                        </div>
                    </div>
                </template> -->
            </div>

            <div class="con2">
                <div class="form-container">
                    <?php echo $message; ?>
                    <p class="info-ms">ログインしてレジへ進む</p>
                    <div class="forms">
                        <form action="./login.php" method="post">
                            <input type="email" class="inputs" name="mail" id="post-mail" value="" placeholder="メールアドレス" required>
                            <input type="password" class="inputs" name="pass" id="pass" placeholder="パスワード" autofocus="" required>
                            <input type="submit" id="cart-login" class="btn" value="ログイン">
                        </form>
                        <p class="info-ms">まだIDをお持ちでない方はこちら</p>
                        <a href="entry.html" class="btn">新規登録</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src="./js/app.js"></script>
</body>

</html>