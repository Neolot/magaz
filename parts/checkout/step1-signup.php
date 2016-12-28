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
                                    <div class="checkout-signup-form">
                                        <form action="javascript:void(0);">
                                            <div class="wrapper valid"><input type="text" placeholder="Имя"/></div>
                                            <div class="wrapper"><input type="text" placeholder="Фамилия"/></div>
                                            <div class="wrapper invalid"><input type="email" placeholder="Email"/><span class="error">Некорректный email</span></div>
                                            <div class="wrapper slim">
                                                <label><input type="checkbox"/> Подписаться на рассылку</label>
                                            </div>
                                            <div class="wrapper"><input type="password" placeholder="Придумайте пароль"/></div>
                                            <div class="wrapper"><input type="password" placeholder="Повторите пароль"/></div>
                                            <button type="submit">Зарегистрироваться</button>
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
