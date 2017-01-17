<?php include $_SERVER['DOCUMENT_ROOT'] . '/parts/header.php'; ?>

<main class="site-content" id="site-content">
    <div class="container">
        <div class="brand-item">
            <div class="brand-item-info-container">
                <div class="row">
                    <div class="col-lg-18 col-lg-push-6 col-md-17 col-md-push-7 col-sm-17 col-sm-push-7">
                        <div class="brand-item-info">
                            <div class="row">
                                <div class="col-lg-16 col-md-15 col-sm-15 col-xs-24">
                                    <div class="breadcrumbs"><span xmlns:v="http://rdf.data-vocabulary.org/#"> <span typeof="v:Breadcrumb">  <a href="#" rel="v:url" property="v:title">Бренды</a> / <a href="#" rel="v:url" property="v:title">Дом</a> / <span class="breadcrumb_last">Fuga</span></span></span> </div>
                                    <h1 class="category-title">Посуда и декор для дома Fuga</h1>
                                    <div class="brand-item-logo"><img src="http://lorempixel.com/150/150" width="150" height="150" alt=""/></div>

                                    <div class="category-description">
                                        <p>FUGA — марка рукотворных товаров для дома. Мы придумываем и делаем кухонную утварь, посуду и предметы декора из разных материалов, в первую очередь — из дерева. FUGA производит как серийный продукт, так и большие партии предметов с учетом пожеланий заказчика. Производственная линия позволяет создавать и поставлять большие партии предметов с гарантированным качеством в срок, а ручная работа делает каждый предмет уникальным. FUGA - сочетание масштаба и индивидуальности.</p>
                                    </div>
                                </div>
                                <div class="col-lg-8 col-md-9 col-sm-9 col-sm-offset-0 col-xs-12 col-xs-offset-12 brand-item-arr next">
                                    <a href="#"><span>Следующий бренд</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-lg-pull-18 col-md-7 col-md-pull-17 col-sm-7 col-sm-pull-17 col-xs-12 brand-item-arr prev">
                        <a href="#"><span>Предыдущий бренд</span></a>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-18 col-lg-push-6 col-md-17 col-md-push-7 col-sm-15 col-sm-push-9">
                    <div class="category-tools category-tools-top">
                        <div class="row">
                            <div class="col-lg-8 col-md-10 col-sm-15">
                                <div class="items-found">
                                    <span>Всего найдено: 156</span>
                                    <a href="#" class="hidden-xs">Показать все</a>
                                </div>
                            </div>
                            <div class="col-lg-8 col-md-7 hidden-sm hidden-xs">
                                <div class="viewmode">
                                    <a href="#" class="viewmode-3col" title="Товары в 3 колонки">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </a>
                                    <a href="#" class="viewmode-4col active" title="Товары в 4 колонки">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-8 col-md-7 col-sm-9 hidden-xs">
                                <div class="sort hasdropdown" id="sort-dropdown-home">
                                    <a href="#" class="arr">Сортировать по:</a>
                                    <div class="sort-dropdown dropdown" id="sort-dropdown">
                                        <ul>
                                            <li><label><input type="radio" name="sort-mode" checked/> Цена по возростанию</label></li>
                                            <li><label><input type="radio" name="sort-mode"/> Цена по убыванию</label></li>
                                            <li><label><input type="radio" name="sort-mode"/> Новинки</label></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="mobile-pager">Предыдущая страница</a>
                    </div>

                    <div class="loop" id="loop" data-columns="4">
                        <?php include $_SERVER['DOCUMENT_ROOT'] . '/parts/category/loop.php' ?>
                    </div>

                    <div class="category-tools category-tools-bottom">
                        <div class="row">
                            <div class="col-lg-24">
                                <!-- Внизу страницы должен быть либо блок .items-found, либо .pagination, либо .mobile-pager -->

                                <!--<div class="items-found">
                                    <span>Всего найдено: 156</span>
                                    <a href="#">Показать все</a>
                                </div>-->

                                <div class="pagination">
                                     <a href="#" class="item previous">Предыдущая страница</a>
                                     <a href="#" class="item">1</a>
                                     <a href="#" class="item">2</a>
                                     <a href="#" class="item current">3</a>
                                     <a href="#" class="item">4</a>
                                     <a href="#" class="item">5</a>
                                     <span>...</span>
                                     <a href="#" class="item">34</a>
                                     <a href="#" class="item next">Следующая страница</a>
                                 </div>

                                <a href="#" class="mobile-pager">Следующая страница</a>

                                <a href="#top" class="scroll2top scroll2top-mini hidden-xs">Наверх</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-lg-pull-18 col-md-7 col-md-pull-17 col-sm-9 col-sm-pull-15 sliding" id="filters_home">
                    <?php include $_SERVER['DOCUMENT_ROOT'] . '/parts/brands/filters.php'; ?>
                </div>
            </div>
        </div> <!-- /.brand -->
    </div>
</main>

<?php include $_SERVER['DOCUMENT_ROOT'] . '/parts/product/cart.php'; ?>

<?php include $_SERVER['DOCUMENT_ROOT'] . '/parts/footer.php'; ?>
