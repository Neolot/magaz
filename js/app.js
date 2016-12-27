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

        if ( $.viewport().width <= 1024 ) {
            $loop.attr('data-columns', 4);
        }
        if ( $.viewport().width <= 768) {
            $loop.attr('data-columns', 3);
        }
        if ( $.viewport().width <= media.mobileLandscape ) {
            $loop.attr('data-columns', 2);
        }

        $(window).resize(function() {
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

            if ( screen_width <= 1024 ) {
                $loop.attr('data-columns', 4);
            }
            if ( screen_width <= 768) {
                $loop.attr('data-columns', 3);
            }
            if ( screen_width <= media.mobileLandscape ) {
                $loop.attr('data-columns', 2);
            }
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
        $('.sort-dropdown input[type="radio"], #filters .filter input[type="checkbox"], .checkout-form input, .checkout-form select').styler();

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
