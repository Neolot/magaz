<!DOCTYPE html>
<html>
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

    <link rel="stylesheet" href="/js/vendor/ilightbox/css/ilightbox.css" type="text/css" media="all"/>

    <link rel="mask-icon" sizes="any" href="/images/mask.svg" color="#D11825">
    <link rel="stylesheet" href="/css/bootstrap/bootstrap.min.css" type="text/css" media="all"/>
    <link rel="stylesheet" href="/css/bootstrap/bootstrap-theme.min.css" type="text/css" media="all"/>
    <link rel="stylesheet" href="/js/vendor/fancybox/jquery.fancybox.css" type="text/css" media="all"/>
    <link rel="stylesheet" href="/css/app.min.css" type="text/css" media="all"/>
    <!--[if lt IE 9]><script src="/js/vendor/html5shiv/html5shiv.min.js"></script><![endif]-->
</head>
<body <?php echo 'class="' . basename($_SERVER['SCRIPT_NAME'], '.php') . '"'; ?>>

<div class="triangle"></div>

<div class="site-wrapper">
    <header class="site-header" id="site-header">
        <div class="site-header-top" id="top">
            <div class="container">
                <div class="col-lg-4 col-lg-offset-5 col-md-6 col-md-offset-3 visible-lg visible-md">
                    <div class="searchline">
                        <form action="#">
                            <input type="text" name="s" placeholder="Поиск"/>
                        </form>
                    </div>
                </div>
                <div class="col-lg-10 col-md-8 col-sm-14">
                    <div class="phone visible-lg">Бесплатный телефон поддержки 8–800–555–55–55</div>
                    <div class="phone visible-md visible-xs visible-sm">Тел: 8–800–555–55–55</div>
                </div>
                <div class="col-lg-5 col-md-7 col-sm-10 visible-lg visible-md visible-sm">
                    <div class="lang visible-lg">
                        <a href="#" class="active">Русский</a> / <a href="#">English</a>
                    </div>
                    <div class="lang visible-md visible-sm">
                        <a href="#" class="active">Рус</a> / <a href="#">Eng</a>
                    </div>
                </div>
            </div>
            <div class="madeinrussia">Товары произведенные в России</div>
        </div>

        <?php include $_SERVER['DOCUMENT_ROOT'] . '/parts/navigation.php' ?>

        <div class="categorynav-mobile visible-xs" id="categorynav-mobile">
            <ul>
                <li class="categorynav-mobile-filters"><a href="#"></a></li>
                <li class="categorynav-mobile-view"><a href="#" data-columns="2"></a></li>
                <li class="categorynav-mobile-sort"><a href="#" ></a></li>
            </ul>
        </div>
    </header>
