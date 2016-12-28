<div class="checkout-container">
	<div class="container">
		<div class="row">
			<div class="col-lg-15 col-lg-offset-2 col-md-14 col-md-offset-2 col-sm-14">
                <div class="checkout-steps">
                    <ol>
                        <li class="current"><a href="#">Регистрация <br>/ Вход</a></li> <!-- Класс done для завершенных шагов -->
                        <li><a href="#">Контактная информация</a></li> <!-- Класс current для текущего шага -->
                        <li><a href="#">Доставка</a></li>
                        <li><a href="#">Оплата</a></li>
                    </ol>
                </div>

				<div class="checkout-step checkout-step1">
                    <?php include $_SERVER['DOCUMENT_ROOT'] . '/parts/checkout/step1-selector.php'; ?>

                    <div class="checkout-form">
                        <div class="row">
                            <div class="col-lg-16">
                                <div id="checkout-form"> <!-- В этот контейнер вставлять результат переключалки -->
                                    <div class="checkout-signin-form">
                                        <form action="javascript:void(0);">
                                            <div class="wrapper"><input type="email" placeholder="Email"/></div>
                                            <div class="wrapper"><input type="password" placeholder="Пароль"/></div>
                                            <div class="wrapper slim">
                                                <a href="#">Забыли пароль?</a>
                                            </div>
                                            <button type="submit">Войти</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</div>
	</div>
</div> <!-- /.checkout-container -->
