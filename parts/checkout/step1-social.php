<div class="checkout-container">
	<div class="container">
		<div class="row">
			<div class="col-lg-15 col-lg-offset-2 col-md-14 col-md-offset-2 col-sm-14">
                <div class="checkout-steps">
                    <ol>
                        <li class="current"><span>Регистрация <br>/ Вход</span></li> <!-- Класс done для завершенных шагов -->
                        <li><span>Контактная информация</span></li> <!-- Класс current для текущего шага -->
                        <li><span>Доставка</span></li>
                        <li><span>Оплата</span></li>
                    </ol>
                </div>

				<div class="checkout-step checkout-step1">
                    <?php include $_SERVER['DOCUMENT_ROOT'] . '/parts/checkout/step1-selector.php'; ?>

                    <div class="checkout-form">
                        <div class="row">
                            <div class="col-lg-16">
                                <div id="checkout-form"> <!-- В этот контейнер вставлять результат переключалки -->
                                    <div class="social-login">
				                        <a href="#" class="socicon-facebook"></a>
				                        <a href="#" class="socicon-vkontakte"></a>
				                        <a href="#" class="mailru"></a>
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
