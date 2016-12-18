<?php include $_SERVER['DOCUMENT_ROOT'] . '/parts/header.php'; ?>

<main class="site-content" id="site-content">
    <div class="container">
        <div class="category">
            <div class="row">
                <div class="col-lg-18 col-lg-push-6 col-md-17 col-md-push-7 col-sm-15 col-sm-push-9">
                    <div class="breadcrumbs"><span xmlns:v="http://rdf.data-vocabulary.org/#"> <span typeof="v:Breadcrumb"> <a href="#" rel="v:url" property="v:title">Женское</a> / <span class="breadcrumb_last">Рубашки и блузы</span></span></span> </div>

                    <h1 class="category-title">Рубашки и блузы</h1>

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

                    <?php include $_SERVER['DOCUMENT_ROOT'] . '/parts/category/loop.php' ?>

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

                    <div class="category-description">
                        <p>РУБАШКИ И БЛУЗЫ</p>
                        <p>NNEDRE — это петербургский бренд, который занимается производством бланковой одежды. На сегодняшний день мы
выпускаем четыре коллекции базового трикотажа в год и столько же лимитированных линеек.
Главный дизайнер и основатель бренда Нелли Недре задумалась о собственном деле еще в 2011 году, работая над
университетским проектом.</p>
                    </div>
                </div>

                <div class="col-lg-6 col-lg-pull-18 col-md-7 col-md-pull-17 col-sm-9 col-sm-pull-15 sliding" id="filters_home">
                    <?php include $_SERVER['DOCUMENT_ROOT'] . '/parts/category/filters.php'; ?>
                </div>
            </div>
        </div> <!-- /.category -->
    </div>
</main>

<?php include $_SERVER['DOCUMENT_ROOT'] . '/parts/product/cart.php'; ?>

<?php include $_SERVER['DOCUMENT_ROOT'] . '/parts/footer.php'; ?>
