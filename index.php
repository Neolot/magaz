<!DOCTYPE html>
<!--[if IE 8 ]> <html class="ie8"> <![endif]-->
<!--[if IE 9 ]> <html class="ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><html><![endif]-->
<head>
    <meta charset="utf-8"/>
    <title>НУМ</title>

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta name="HandheldFriendly" content="true">

    <link rel="profile" href="http://gmpg.org/xfn/11">

    <link rel="apple-touch-icon" sizes="57x57" href="/images/favicon/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/images/favicon/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/images/favicon/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/images/favicon/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/images/favicon/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/images/favicon/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/images/favicon/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/images/favicon/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/images/favicon/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png">
    <link rel="manifest" href="/images/favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#D11825">
    <meta name="msapplication-TileImage" content="/images/favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#D11825">

    <link rel="mask-icon" sizes="any" href="/images/mask.svg" color="#D11825">
    <link rel="stylesheet" href="/css/bootstrap/bootstrap.min.css" type="text/css" media="all"/>
    <link rel="stylesheet" href="/css/bootstrap/bootstrap-theme.min.css" type="text/css" media="all"/>
    <link rel="stylesheet" href="/js/vendor/fancybox/jquery.fancybox.css" type="text/css" media="all"/>
    <link rel="stylesheet" href="/css/app.min.css" type="text/css" media="all"/>
    <!--[if lt IE 9]><script src="/js/vendor/html5shiv/html5shiv.min.js"></script><![endif]-->
</head>
<body <?php echo 'class="' . basename($_SERVER['SCRIPT_NAME'], '.php') . '"'; ?>>
    <div class="container">
        <div class="row">
            <div class="col-lg-24">
                <h1>Magaz</h1>
                <ul>
                    <li><a href="home.php">Главная</a></li>
                    <li><a href="soon.php">Заглушка</a></li>
                    <li><a href="product.php">Товар</a></li>
                    <li><a href="category.php">Категория</a></li>
                    <li><a href="brand.php">Бренд</a></li>
                    <li><a href="brands.php">Бренды</a></li>
                    <br>
                    <li><a href="#">Оформление заказа</a>
                        <ul>
                            <li><a href="checkout.php?step=1&page=begin">Шаг 1 - Начало</a></li>
                            <li><a href="checkout.php?step=1&page=signup">Шаг 1 - Регистрация</a></li>
                            <li><a href="checkout.php?step=1&page=signin">Шаг 1 - Вход</a></li>
                            <li><a href="checkout.php?step=1&page=social">Шаг 1 - Социалки</a></li>
                            <br>
                            <li><a href="checkout.php?step=2&page=signup">Шаг 2 - Оформление без регистрации</a></li>
                            <li><a href="checkout.php?step=2&page=info">Шаг 2 - Информация</a></li>
                            <br>
                            <li><a href="checkout.php?step=3">Шаг 3 - Доставка</a></li>
                            <br>
                            <li><a href="checkout.php?step=4&page=payment">Шаг 4 - Оплата</a></li>
                            <li><a href="checkout.php?step=4&page=success">Шаг 4 - Profit!</a></li>
                        </ul>
                    </li>
                    <br>
                    <li><a href="error404.php">Ошибка 404</a></li>
                    <li><a href="error500.php">Ошибка 500</a></li>
                    <li><a href="news.php">Новости</a></li>
                    <li><a href="article.php">Статья</a></li>
                    <li><a href="page.php">Текстовая страница</a></li>
                    <li><a href="account.php">Личный кабинет</a></li>
                </ul>
            </div>
        </div>
    </div>
</body>
</html>
