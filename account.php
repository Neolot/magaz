<?php include $_SERVER['DOCUMENT_ROOT'] . '/parts/header.php'?>

<main class="site-content" id="site-content">
	<div class="container">
		<!--<a href="/parts/popups/login.html" class="popup various fancybox.ajax" data-fancybox-type="ajax">Логин / Регистрация</a>--> <!-- Ссылка для демонстрации открытия окна логина и регистрации.-->

        <div class="account-header">
            <div class="account-title">Добро пожаловать, Катя!</div>
            <a href="#" class="account-logout">Выйти</a>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="section-title">Контактная информация</div>
                <a href="#" class="section-edit">Изменить</a>
            </div>
            <div class="section-data account-contacts" id="account-contacts"> <!-- Контейнер для вставки содержимого ajax-запроса -->
                <?php include 'parts/account/contacts-read.php'?>
                <?php //include 'parts/account/contacts-edit.php'?>
            </div>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="section-title">Привязка к социальным сетям</div>
                <a href="#" class="section-edit">Изменить</a>
            </div>
            <div class="section-data account-social" id="account-social"> <!-- Контейнер для вставки содержимого ajax-запроса -->
                <a href="#" class="socicon-facebook"></a>
                <a href="#" class="socicon-instagram"></a>
                <a href="#" class="socicon-vkontakte"></a>
            </div>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="section-title">Адрес</div>
                <a href="#" class="section-edit">Изменить</a>
            </div>
            <div class="section-data account-address" id="account-address"> <!-- Контейнер для вставки содержимого ajax-запроса -->
                <?php //include 'parts/account/address-read.php'?>
                <?php include 'parts/account/address-edit.php'?>
            </div>
        </div>

        <div class="section">
            <div class="section-header">
                <div class="section-title">Заказы</div>
            </div>
            <div class="section-data account-orders" id="account-orders"> <!-- Контейнер для вставки содержимого ajax-запроса -->
                <div class="section-table">
                    <div class="section-table-row section-table-header">
                        <div>№ заказа:</div>
                        <div>Дата:</div>
                        <div>Статус:</div>
                        <div>Детали:</div>
                    </div>
                    <div class="section-table-row">
                        <div data-title="№ заказа:">123456</div>
                        <div data-title="Дата:">10.10.2016</div>
                        <div data-title="Статус:">Выполнен</div>
                        <div data-title="Детали:">
                            <a href="javascript:void(0);" class="order-details-lock arr">Посмотреть детали заказа</a>
                            <div class="account-order-details">
                                <div class="wrapper">
                                    <div class="account-order-details-row">
                                        <div><img src="http://lorempixel.com/50/75" width="50" height="75" alt=""/></div>
                                        <div>Рубашка NNedre, Голубой, размер 42, 1 шт., 3 200 руб.</div>
                                    </div>
                                    <div class="account-order-details-row">
                                        <div><img src="http://lorempixel.com/50/75" width="50" height="75" alt=""/></div>
                                        <div>Рюкзак ZakBag–16, Серебристый, 2 500 руб.</div>
                                    </div>
                                    <a href="javascript:void(0);" class="close" title="Закрыть"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="section-table-row">
                        <div data-title="№ заказа:">123456</div>
                        <div data-title="Дата:">10.10.2016</div>
                        <div data-title="Статус:">Выполнен</div>
                        <div data-title="Детали:">
                            <a href="javascript:void(0);" class="order-details-lock arr">Посмотреть детали заказа</a>
                            <div class="account-order-details">
                                <div class="wrapper">
                                    <div class="account-order-details-row">
                                        <div><img src="http://lorempixel.com/50/75" width="50" height="75" alt=""/></div>
                                        <div>Рубашка NNedre, Голубой, размер 42, 1 шт., 3 200 руб.</div>
                                    </div>
                                    <div class="account-order-details-row">
                                        <div><img src="http://lorempixel.com/50/75" width="50" height="75" alt=""/></div>
                                        <div>Рюкзак ZakBag–16, Серебристый, 2 500 руб.</div>
                                    </div>
                                    <a href="javascript:void(0);" class="close" title="Закрыть"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
</main>

<?php include $_SERVER['DOCUMENT_ROOT'] . '/parts/product/cart.php' ?>

<?php include $_SERVER['DOCUMENT_ROOT'] . '/parts/footer.php'?>
