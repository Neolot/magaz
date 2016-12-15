<div class="filters" id="filters">
	<div class="filters-selected">
		<div class="filters-selected-meta clearfix">
			<span>Вы выбрали:</span>
			<a href="javascript:void(0);">Очистить всё</a>
		</div>
		<ul>
			<li>
				<span class="filters-selected-fieldname">Пол:</span>
				<span class="filters-selected-fieldvalue">Женское</span>
				<span class="filters-selected-remove"></span>
			</li>
			<li>
				<span class="filters-selected-fieldname">Категория:</span>
				<span class="filters-selected-fieldvalue">Рубашки и блузы</span>
				<span class="filters-selected-remove"></span>
			</li>
			<li>
				<span class="filters-selected-fieldname">Цена:</span>
				<span class="filters-selected-fieldvalue">от 200 руб. до 4 200 руб.</span>
				<span class="filters-selected-remove"></span>
			</li>
			<li>
				<span class="filters-selected-fieldname">Цвет:</span>
				<span class="filters-selected-fieldvalue">Красный</span>
				<span class="filters-selected-remove"></span>
			</li>
		</ul>
	</div>

	<div class="divider"></div>

	<div class="filter filter-checkbox filter-sex open"> <!-- Класс open вместе с классом filter открывает блок -->
		<a href="javascript:void(0);" class="filter-lock">Пол:</a>
		<ul class="filter-box">
			<li><label><input type="checkbox" checked/> Женское</label></li>
			<li><label><input type="checkbox"/> Мужское</label></li>
			<li><label><input type="checkbox"/> Детское</label></li>
		</ul>
	</div>

	<div class="filter filter-checkbox filter-category">
		<a href="javascript:void(0);" class="filter-lock">Категория:</a>
		<ul class="filter-box">
			<li><label><input type="checkbox"/> Платья</label></li>
			<li><label><input type="checkbox"/> Юбки</label></li>
			<li><label><input type="checkbox" checked/> Рубашки и блузы</label></li>
		</ul>
	</div>

	<div class="filter filter-checkbox filter-size">
		<a href="javascript:void(0);" class="filter-lock">Размер:</a>
		<ul class="filter-box">
			<li><label><input type="checkbox"/> 40</label></li>
			<li><label><input type="checkbox"/> 42</label></li>
			<li><label><input type="checkbox"/> 44</label></li>
			<li><label><input type="checkbox"/> 46</label></li>
			<li><label><input type="checkbox"/> 48</label></li>
			<li><label><input type="checkbox"/> 50</label></li>
		</ul>
	</div>

	<div class="filter filter-checkbox filter-color">
		<a href="javascript:void(0);" class="filter-lock">Цвет:</a>
		<ul class="filter-box">
			<li><label><input type="checkbox" class="color-01"/></label></li>
			<li><label><input type="checkbox" class="color-02"/></label></li>
			<li><label><input type="checkbox" class="color-03"/></label></li>
			<li><label><input type="checkbox" class="color-04"/></label></li>
		</ul>
	</div>

    <div class="filter filter-range filter-price">
		<a href="javascript:void(0);" class="filter-lock">Цена:</a>
		<div class="filter-box">
            <div class="filter-price-fields">
                <div class="row">
                    <div class="col-xs-12">
                        <label><input type="number" class="filter-price-from" min="0"/> руб.</label>
                    </div>
                    <div class="col-xs-12">
                        <label><input type="number" class="filter-price-to" min="0"/> руб.</label>
                    </div>
                </div>
            </div>
            <input type="text" class="filter-price-range" data-min="0" data-max="10000" data-step="50"/>
        </div>
	</div>

	<div class="filter filter-checkbox filter-brand">
		<a href="javascript:void(0);" class="filter-lock">Бренд:</a>
		<ul class="filter-box">
			<li><label><input type="checkbox"/> Бренд #1</label></li>
			<li><label><input type="checkbox"/> Бренд #2</label></li>
			<li><label><input type="checkbox"/> Бренд #3</label></li>
		</ul>
	</div>

    <div class="filter filter-button filter-new">
		<a href="javascript:void(0);">Новинки</a>
	</div>

	<div class="filter filter-checkbox filter-discount">
		<a href="javascript:void(0);" class="filter-lock">Скидки:</a>
		<ul class="filter-box">
			<li><label><input type="checkbox"/> 5%</label></li>
			<li><label><input type="checkbox"/> 10%</label></li>
			<li><label><input type="checkbox"/> 30%</label></li>
		</ul>
	</div>

	<div class="filter filter-button filter-sale">
		<a href="javascript:void(0);">Распродажа</a>
	</div>

	<div class="filter filter-button filter-new">
		<a href="javascript:void(0);">Товар проходит по акции</a>
	</div>
</div>
