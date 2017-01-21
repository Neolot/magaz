(function ($) {
    $(function () {
        // Setup variables
        var $navigation = $('#navigation');
        var $menu_roots = $('.nav-root > li', $navigation);
        var $sitecontent = $('#site-content');
        var $loop = $('#loop', $sitecontent);
        var $filters = $('#filters');
        var $catnav = $('#categorynav-mobile');
        var $checkout_form = $('.checkout-form');

        // Responsive
        $.extend(verge);
        var screen_width = $.viewport().width;
        var media = {
            screen: 1599,
            laptopWide: 1399,
            laptop: 1199,
            tabletLandscape: 991,
            tabletPortrait: 767,
            mobileLandscape: 640,
            mobilePortrait: 480
        };
        responsive_nav(screen_width, media);
        setQuickviewWidth($('.item-thumb-wrapper'));
        function responsive_nav(screen_width, media) {
            if ( screen_width <= media.tabletLandscape ) {
                $('.nav-special', $navigation).detach().insertBefore('.navs', $navigation);
            } else {
                $('.nav-special', $navigation).detach().insertAfter('.navs', $navigation);
            }
        }

        function setQuickviewWidth($selector) {
            $selector.each(function () {
                var thumb_w = $(this)[0].getBoundingClientRect().width; // Ширина блока с дробной частью
                $('.quickview', this).width(thumb_w-4);
            });
        }

        // Move additional products
        if ( screen_width <= media.tabletLandscape ) {
            $('.product-additional', $sitecontent).detach().appendTo('.product-container', $sitecontent);
        }

        // Move filters
        if ( screen_width <= media.tabletPortrait ) {
            $filters.detach().appendTo('body');
        }

        $('.categorynav-mobile-filters a', $catnav).click(function() {
            $filters.toggleClass('open');
        });

        // Move sorting
        if ( screen_width <= media.tabletPortrait ) {
            $('#sort-dropdown').detach().appendTo('body');
        }

        $('.categorynav-mobile-sort a', $catnav).click(function() {
            $('#sort-dropdown').toggleClass('open');
        });

        $(window).on('orientationchange', function() {
            screen_width = $.viewport().width;
            responsive_nav(screen_width, media);
            setQuickviewWidth($('.item-thumb-wrapper'));

            if ( screen_width <= media.tabletPortrait ) {
                $filters.detach().appendTo('body');
            } else {
                $filters.detach().appendTo('#filters_home');
            }

            if ( screen_width <= media.tabletLandscape ) {
                $('.product-additional', $sitecontent).detach().appendTo('.product-container', $sitecontent);
            } else {
                $('.product-additional', $sitecontent).detach().appendTo('#additional_home');
            }

            calc_cartContentHeight();
        });

        $(window).click(function() {
            $navigation.removeClass('mobile-menu');
            $menu_roots.removeClass('active');
            $filters.removeClass('open');
            $('#sort-dropdown').removeClass('open');
        });
        $navigation.click(function(e){
            e.stopPropagation();
        });
        $filters.click(function(e){
            e.stopPropagation();
        });
        $('#sort-dropdown').click(function(e){
            e.stopPropagation();
        });
        $('.categorynav-mobile-filters a, .categorynav-mobile-sort a', $catnav).click(function(e){
            e.stopPropagation();
        });

        $('.menu-link', $navigation).click(function() {
            $navigation.toggleClass('mobile-menu');
        });

        $menu_roots.click(function() {
            $(this).toggleClass('active');
            $menu_roots.not($(this)).removeClass('active');
        });

        $('.searchline-nav input', $navigation).focusin(function() {
            $(this).closest('form').addClass('active');
        });
        $('.searchline-nav input', $navigation).focusout(function() {
            $(this).closest('form').removeClass('active');
        });

        $('#filters').on('click', '.filter-close', function() {
            $(this).closest('.filter').removeClass('open');
        });

        // Category view mode
        if ( screen_width <= media.tabletPortrait ) {
            $loop.attr('data-columns', 3);
        }
        if ( screen_width <= media.mobileLandscape ) {
            $loop.attr('data-columns', 2);
        }

        $('.viewmode-3col', $sitecontent).click(function() {
            if ( !$(this).hasClass('active') ) {
                $(this).addClass('active').siblings('a').removeClass('active');
            }
            if ( $loop.attr('data-columns') !== 3 ) {
                $('> .row', $loop)
                .animate(
                    {opacity: 0},
                    300,
                    function(){
                        if ( screen_width > media.laptop ) {
                            $('> div', this).removeClass('col-lg-6').addClass('col-lg-8');
                        } else if ( screen_width > media.tabletLandscape ) {
                            $('> div', this).removeClass('col-md-6').addClass('col-md-8');
                        }
                        $loop.attr('data-columns', 3);
                        setQuickviewWidth($('.item-thumb-wrapper', $loop));
                    }
                )
                .animate(
                    {opacity: 1},
                    300
                );
            }
        });
        $('.viewmode-4col', $sitecontent).click(function() {
            if ( !$(this).hasClass('active') ) {
                $(this).addClass('active').siblings('a').removeClass('active');
            }
            if ( $loop.attr('data-columns') !== 4 ) {
                $('> .row', $loop)
                .animate(
                    {opacity: 0},
                    300,
                    function(){
                        if ( screen_width > media.laptop ) {
                            $('> div', this).removeClass('col-lg-8').addClass('col-lg-6');
                        } else if ( screen_width > media.tabletLandscape ) {
                            $('> div', this).removeClass('col-md-8').addClass('col-md-6');
                        }
                        $loop.attr('data-columns', 4);
                        setQuickviewWidth($('.item-thumb-wrapper', $loop));
                    }
                )
                .animate(
                    {opacity: 1},
                    300
                );
            }
        });
        $('.categorynav-mobile-view a', $catnav).click(function() {
            if ( $(this).attr('data-columns') == 2 ) {
                $(this).attr('data-columns', 1);
            } else {
                $(this).attr('data-columns', 2);
            }
            var columns = $(this).attr('data-columns');
            $('> .row', $loop)
                .animate(
                    {opacity: 0},
                    300,
                    function(){
                        $loop.attr('data-columns', columns);
                        setQuickviewWidth($('.item-thumb-wrapper', $loop));
                    }
                )
                .animate(
                    {opacity: 1},
                    300
                );
        });

        // Cart
        $('#cart-link').click(function() {
            $('body')
                .addClass('cart-open no-scroll')
                .append('<div class="fancybox-overlay fancybox-overlay-fixed" style="display: block;"/>')
                .on('click', '.fancybox-overlay', function() {
                    $('body').removeClass('cart-open no-scroll');
                    $('.fancybox-overlay').remove();
                });
        });
        $('#cart').on('click', '.close', function() {
            $('body').removeClass('cart-open no-scroll');
            $('.fancybox-overlay').remove();
        });
        $('#cart').on('click', '.cart-title-mini', function() {
            $('body').addClass('cart-open');
        });

        var $summ_elements = $('#cart .cart-title-summ span, #cart .cart-summary-summ span');
        var $quantity_elements = $('#cart .cart-title-quantity');
        $('#cart .item').each(function() {
            var $item_qty_wrapper = $(this).find('.item-quantity');
            var item_qty = $('input', $item_qty_wrapper).val();
            $item_qty_wrapper.on('click', '.item-quantity-minus', function () {
                if ( item_qty > 1 ) {
                    item_qty--;
                    $('input', $item_qty_wrapper).val(item_qty);
                    cart_updateSumm($summ_elements);
                }
            });
            $item_qty_wrapper.on('click', '.item-quantity-plus', function () {
                item_qty++;
                $('input', $item_qty_wrapper).val(item_qty);
                cart_updateSumm($summ_elements);
            });
            $item_qty_wrapper.on('change', 'input', function() {
                item_qty = $('input', $item_qty_wrapper).val();
                cart_updateSumm($summ_elements);
            });
        }).find('.item-remove').each(function() {
            $(this).click(function () {
                $(this).closest('.item').fadeOut(function () {
                    $(this).remove();
                    cart_updateSumm($summ_elements);
                    cart_updateQuantity($quantity_elements);
                });
            })
        });
        function cart_updateSumm($el, shipment) {
            var $cart_items = $('#cart .item');
            var summ = 0;
            $cart_items.each(function () {
                console.log(this);
                var item_cost = $('input', this).attr('data-price') * $('input', this).val(); console.log(item_cost);
                summ = summ + item_cost;
            });
            if ( shipment ) summ = summ + parseInt(shipment);
            $el.text(number_format(summ, 0, ',', ' '));
        }
        function cart_updateQuantity($el) {
            var $cart_items = $('#cart .item');
            $el.text($cart_items.length);
        }

        // Cart content
        calc_cartContentHeight();
        $('#cart .cart-content').mCustomScrollbar();
        function calc_cartContentHeight() {
            var totalHeight = 0;
            $('#cart .cart-title, #cart .cart-bottom').each(function(){
                totalHeight += $(this).outerHeight(true);
            });
            $('#cart .cart-content').height($('#cart').height() - totalHeight - 20);
        }

        // Cart shipment
        var $cart_chipment = $('#cart .cart-shipment');
        $('.checkout-form select').styler({
            onFormStyled: function() {
                $('.checkout-form select[name="shipping_method"]').siblings('.jq-selectbox__dropdown').find('li').click(function () {
                    var shipment_cost = $(this).attr('data-shipment');
                    var shipment_type = $(this).attr('data-value');
                    $cart_chipment.find('.shipment span div').text(shipment_type);
                    $cart_chipment.find('.price div').text(shipment_cost);
                    $cart_chipment.addClass('active');
                    cart_updateSumm($summ_elements, shipment_cost);
                });
            }
        });

        // Cart promocode
        var $cart_promocode = $('#cart .promocode');
        $('button', $cart_promocode).click(function() {
            if ( $('input', $cart_promocode).val() != '' ) {
                $(this).find('span').text('Промокод активирован');
                $(this).attr('disabled', 'disabled');
                $cart_promocode.addClass('done');
                setTimeout(function() {
                    $cart_promocode.fadeOut(1000, function(){
                        $cart_promocode.remove();
                    });
                }, 3000);
            }
        });

        // Popups
        $('.popup').fancybox({
            padding: 0,
            tpl: {
                closeBtn: '<a title="Закрыть" class="fancybox-item fancybox-close" href="javascript:;"></a>'
            },
            beforeShow: function() {
                $('#qv-gallery').cycle({
                    fx: 'fade',
                    timeout: 0,
                    pager: '#qv-gallery-pager',
                    pagerTemplate: '<a href="javascript:void(0);"><img src="{{src}}" width="48" height="72"></a>',
                    log: false
                });
            },
            afterShow: function() {
                $('input[type="tel"]').mask('+7 (999) 999-99-99');
            }
        });

        // Product gallery
        $('#product-gallery').cycle({
            speed: 200,
            fx: 'fade',
            timeout: 0,
            swipe: true,
            swipeFx: 'scrollHorz',
            pager: '#product-gallery-pager',
            pagerTemplate: '<a href="javascript:void(0);"><img src="{{src}}" width="48" height="72"></a>',
            log: false
        });

        // View photo on hover
        $('.item-thumb-wrapper').each(function() {
            if ( $('img', this).length < 2 ) $(this).addClass('noswap');
        });

        // Inputmask
        $('input[type="tel"]').mask('+7 (999) 999-99-99');

        // Sliders
        $('#product-sliders .slider1 .carousel-wrapper').owlCarousel({
            loop: true,
            dots: false,
            navText: [],
            smartSpeed: 500,
            responsiveClass: true,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2,
                    margin: 134
                },
                990: {
                    items: 3,
                    margin: 63
                },
                1200: {
                    items: 4,
                    margin: 32
                }
            }
        });

        $('#site-footer .carousel-wrapper, #product-sliders .slider2 .carousel-wrapper').owlCarousel({
            loop: true,
            navText: [],
            smartSpeed: 500,
            responsiveClass: true,
            nav: true,
            responsive: {
                0: {
                    items: 1,
                    dots: true
                },
                640: {
                    items: 2,
                    margin: 27,
                    dots: true
                },
                768: {
                    items: 3,
                    margin: 67,
                    dots: true
                },
                990: {
                    items: 5,
                    margin: 12,
                    dots: false
                },
                1200: {
                    items: 6,
                    margin: 17,
                    dots: false
                }
            }
        });

        // Sliding product descriptions
        $('#sliding-button, #sliding-button-close').click(function() {
            $('#sliding-wrapper').toggleClass('open');
        });

        // Smoothscroll
        $('a[href^="#"]').bind('click.smoothscroll', function (e) {
            e.preventDefault();
            if ( this.hash ) {
                var target = this.hash,
                    $target = $(target);
                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top - 40
                }, 900, 'swing');
            }
        });

        // Form Styler
        $('.sort-dropdown input[type="radio"], #filters .filter input[type="checkbox"], .checkout-form input').styler();

        // Dropdowns
        $('.hasdropdown a').click(function() {
            $(this).parent().toggleClass('open');
        });
        $('html').click(function() {
            $('.hasdropdown, .hasdropdown-select').removeClass('open');
        });
        $('.hasdropdown, .hasdropdown-select').click(function(event) {
            event.stopPropagation();
        });

        $('.hasdropdown-select').each(function(index, el) {
            if ( $('.dropdown li', el).hasClass('selected') ) {
                $('> a', el).text($('.dropdown li.selected', el).text());
            }
            $('.dropdown li', el).click(function() {
                $(el).attr('data-selected', $(this).text());
                $('> a', el).text($(this).text());
                $('html').trigger('click');
            });
        });

        // Filters
        $('.filter .filter-lock', $filters).click(function() {
            $(this).parent().toggleClass('open');
        });
        $('.filter-range .filter-price-range', $filters).ionRangeSlider({
            type: 'double',
            hide_min_max: true,
            hide_from_to: true,
            onStart: function (data) {
                $('.filter-price-from', $filters).val(data.from);
                $('.filter-price-to', $filters).val(data.to);
            },
            onChange: function (data) {
                $('.filter-price-from', $filters).val(data.from);
                $('.filter-price-to', $filters).val(data.to);
            }
        });

        // Checkout
        var inputs = 'input[type="text"], input[type="email"], input[type="tel"], input[type="password"]';
        $('.wrapper', $checkout_form).each(function(index, el) {
            if ( $(inputs, el).length > 0 ) {
                var placeholder = $(inputs, el).attr('placeholder');
                $(el).append('<span class="placeholder">'+placeholder+'</span>');
                $(inputs, el)
                    .focusin(function() {
                        $(el).addClass('active').removeClass('invalid');
                        if ( $(el).find('input').val() == '' ) {
                            $(el).find('input').val('');
                        }
                    })
                    .focusout(
                        function() {
                            $(el).removeClass('active');
                            if ( $(el).find('input').val() == '' ) {
                                $(el).find('input').val('');
                            }
                        }
                    );
            }
        });

        // Tabs
        $('ul.tabs').each(function() {
            $(this).find('li').each(function(i) {
                $(this).click(function() {
                    $(this).addClass('current').siblings().removeClass('current');
                    var p = $(this).parents('div.tabs-wrapper');
                    p.find('div.box').hide();
                    p.find('div.box:eq(' + i + ')').fadeToggle('fast');
                });
            });
        });

        // Filters Fixed Sidebar
        /*if ( $('.category-container', $sitecontent).length > 0 ) {
            function setCategorySidebarHeight() {
                var cat_h = $('.category-container', $sitecontent).height();
                $('.sliding', $sitecontent).height(cat_h);
                return cat_h;
            }
            setTimeout(function() {
                var category_h = setCategorySidebarHeight();
                var $sidebar = $('.sliding', $sitecontent);
                var filters_h = $filters.outerHeight(true);
                var start_offset = $('.category-container', $sitecontent).offset().top + $filters.offset().top;
                var top_margin = 20;

                $(window).scroll(function () {
                    var top_scroll = $(window).scrollTop();
                    if ( top_scroll >= start_offset )  {
                        $sidebar.addClass('fixed');
                        $filters.css({
                            position: 'fixed',
                            top: top_margin,
                            width: $('.sliding', $sitecontent).width()
                        });
                    } else {
                        $sidebar.removeClass('fixed');
                        $filters.css({
                            position: 'static',
                            top: start_offset
                        });
                    }
                    if ( top_scroll > (category_h - filters_h - top_margin) ) {
                        $filters.css({
                            position: 'absolute',
                            top: 'auto',
                            bottom: 0
                        });
                    }
                });

                $filters.change(function () {
                    if ( $filters.height() >= $(window).height() ) {
                        $filters.css({
                            position: 'absolute',
                            top: 'auto',
                            bottom: 0
                        });
                    }
                });
            }, 500);
        }*/
    })
})(jQuery)

/*
 number - исходное число
 decimals - количество знаков после разделителя
 dec_point - символ разделителя
 thousands_sep - разделитель тысячных
 */
function number_format(number, decimals, dec_point, thousands_sep) {
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
            prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
            sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
            dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
            s = '',
            toFixedFix = function (n, prec) {
                var k = Math.pow(10, prec);
                return '' + (Math.round(n * k) / k)
                                .toFixed(prec);
            };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
            .split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '')
                    .length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1)
                .join('0');
    }
    return s.join(dec);
}

//  Пример 1: number_format(1234.56);
//  Результат: '1,235'

//  Пример 2: number_format(1234.56, 2, ',', ' ');
//  Результат: '1 234,56'

//  Пример 3: number_format(1234.5678, 2, '.', '');
//  Результат: '1234.57'

//  Пример 4: number_format(67, 2, ',', '.');
//  Результат: '67,00'

//  Пример 5: number_format(1000);
//  Результат: '1,000'

//  Пример 6: number_format(67.311, 2);
//  Результат: '67.31'

//  Пример 7: number_format(1000.55, 1);
//  Результат: '1,000.6'

//  Пример 8: number_format(67000, 5, ',', '.');
//  Результат: '67.000,00000'

//  Пример 9: number_format(0.9, 0);
//  Результат: '1'

//  Пример 10: number_format('1.20', 2);
//  Результат: '1.20'

//  Пример 11: number_format('1.20', 4);
//  Результат: '1.2000'

//  Пример 12: number_format('1.2000', 3);
//  Результат: '1.200'

//  Пример 13: number_format('1 000,50', 2, '.', ' ');
//  Результат: '100 050.00'

//  Пример 14: number_format(1e-8, 8, '.', '');
//  Результат: '0.00000001'
