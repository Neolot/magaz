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
