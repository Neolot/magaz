<div class="checkout-container">
	<div class="container">
		<div class="row">
			<div class="col-lg-15 col-lg-offset-2 col-md-14 col-md-offset-2 col-sm-14">
                <div class="checkout-steps">
                    <ol>
                        <li class="done"><a href="#">Регистрация <br>/ Вход</a></li> <!-- Класс done для завершенных шагов -->
                        <li class="current"><span>Контактная информация</span></li> <!-- Класс current для текущего шага -->
                        <li><span>Доставка</span></li>
                        <li><span>Оплата</span></li>
                    </ol>
                </div>

				<div class="checkout-step checkout-step2">
                    <?php include $_SERVER['DOCUMENT_ROOT'] . '/parts/checkout/step1-selector.php'; ?>

                    <div class="checkout-form">
                        <div class="row">
                            <div class="col-lg-16">
                                <div id="checkout-form"> <!-- В этот контейнер вставлять результат переключалки -->
                                    <div class="checkout-signup-form">
                                        <form action="javascript:void(0);">
                                            <div class="wrapper"><input type="email" placeholder="Email"/></div>
                                            <div class="wrapper slim">
                                                <label><input type="checkbox"/> Подписаться на рассылку</label>
                                            </div>
                                            <div class="wrapper"><input type="tel" placeholder="Телефон"/></div>
                                            <div class="next-step">
                                                <a href="#">Перейти к выбору доставки</a>
                                            </div>
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
