<div class="checkout-container">
	<div class="container">
		<div class="row">
			<div class="col-lg-15 col-lg-offset-2 col-md-14 col-md-offset-2 col-sm-14">
                <div class="checkout-steps">
                    <ol>
                        <li class="done"><a href="#">Регистрация <br>/ Вход</a></li> <!-- Класс done для завершенных шагов -->
                        <li class="done"><a href="#">Контактная информация</a></li> <!-- Класс current для текущего шага -->
                        <li class="current"><span>Доставка</span></li>
                        <li><span>Оплата</span></li>
                    </ol>
                </div>

				<div class="checkout-step checkout-step3">
                    <div class="checkout-form">
                        <div class="row">
                            <div class="col-lg-16">
                                <div class="tabs-wrapper">
                                    <ul class="tabs">
                                        <li class="current">Я буду получать заказ</li>
                                        <li>Заказ будет получать другой человек</li>
                                    </ul>
                                    <div class="box visible">
                                        <form action="javascript:void(0);">
                                            <div class="wrapper">
                                                <select name="city">
                                                    <option disabled selected>Город</option>
                                                    <option value="Москва">Москва</option>
                                                    <option value="Санкт-Петербург">Санкт-Петербург</option>
                                                    <option value="Новосибирск">Новосибирск</option>
                                                    <option value="Екатеринбург">Екатеринбург</option>
                                                </select>
                                            </div>
                                            <div class="wrapper">
                                                <select name="shipping_method">
                                                    <option disabled selected>Способ доставки</option>
                                                    <option value="Курьером" data-value="Курьером" data-right="300 руб." data-shipment="300">Курьером</option>
                                                    <option value="Почта России" data-value="Почта России" data-right="120 руб." data-shipment="120">Почта России</option>
                                                    <option value="Самовывоз" data-value="Самовывоз" data-right="0 руб." data-shipment="0">Самовывоз</option>
                                                </select>
                                            </div>
                                            <div class="wrapper slim">Бесплатная доставка от 5 000 руб.</div>
                                            <div class="wrapper"><input type="text" placeholder="Улица"/></div>
                                            <div class="wrapper-columns">
                                                <div class="wrapper"><input type="text" placeholder="Дом"/></div>
                                                <div class="wrapper"><input type="text" placeholder="Корпус"/></div>
                                                <div class="wrapper"><input type="text" placeholder="Строение"/></div>
                                                <div class="wrapper"><input type="text" placeholder="Квартира"/></div>
                                            </div>
                                            <div class="next-step">
                                                <a href="#">Перейти к оплате</a>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="box">
                                        <form action="javascript:void(0);">
                                            <div class="wrapper"><input type="text" placeholder="Имя получателя заказа"/></div>
                                            <div class="wrapper"><input type="text" placeholder="Фамилия получателя заказа"/></div>
                                            <div class="wrapper"><input type="tel" placeholder="Телефон получателя заказа"/></div>
                                            <div class="wrapper">
                                                <select name="city">
                                                    <option disabled selected>Город</option>
                                                    <option value="Москва">Москва</option>
                                                    <option value="Санкт-Петербург">Санкт-Петербург</option>
                                                    <option value="Новосибирск">Новосибирск</option>
                                                    <option value="Екатеринбург">Екатеринбург</option>
                                                </select>
                                            </div>
                                            <div class="wrapper">
                                                <select name="shipping_method">
                                                    <option disabled selected>Способ доставки</option>
                                                    <option value="Курьером" data-value="Курьером" data-right="300 руб." data-shipment="300">Курьером</option>
                                                    <option value="Почта России" data-value="Почта России" data-right="120 руб." data-shipment="120">Почта России</option>
                                                    <option value="Самовывоз" data-value="Самовывоз" data-right="0 руб." data-shipment="0">Самовывоз</option>
                                                </select>
                                            </div>
                                            <div class="wrapper slim">Бесплатная доставка от 5 000 руб.</div>
                                            <div class="wrapper"><input type="text" placeholder="Улица"/></div>
                                            <div class="wrapper-columns">
                                                <div class="wrapper"><input type="text" placeholder="Дом"/></div>
                                                <div class="wrapper"><input type="text" placeholder="Корпус"/></div>
                                                <div class="wrapper"><input type="text" placeholder="Строение"/></div>
                                                <div class="wrapper"><input type="text" placeholder="Квартира"/></div>
                                            </div>
                                            <div class="next-step">
                                                <a href="#">Перейти к оплате</a>
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
