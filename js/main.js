(function ($) {
    $(function () {
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

        // Dropdown menu
        var $navigation = $('#navigation');
        var $menu_roots = $('.nav-root > li', $navigation);

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

        // Category view mode
        var $sitecontent = $('#site-content');
        var $loop = $('#loop', $sitecontent);
        $('.viewmode-3col', $sitecontent).click(function() {
            if ( !$(this).hasClass('active') ) {
                $(this).addClass('active').siblings('a').removeClass('active');
            }
            $(this).addClass('active')
            if ( !$loop.hasClass('loop-3col') ) {
                $('> .row', $loop)
                .animate(
                    {opacity: 0},
                    300,
                    function(){
                        $('> div', this).removeClass('col-lg-6').addClass('col-lg-8');
                        $loop.removeClass('loop-4col').addClass('loop-3col');
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
            if ( !$loop.hasClass('loop-4col') ) {
                $('> .row', $loop)
                .animate(
                    {opacity: 0},
                    300,
                    function(){
                        $('> div', this).removeClass('col-lg-8').addClass('col-lg-6');
                        $loop.removeClass('loop-3col').addClass('loop-4col');
                    }
                )
                .animate(
                    {opacity: 1},
                    300
                );
            }
        });

        // Form Styler
        $('.hasdropdown input[type="radio"], #filters .filter input[type="checkbox"]').styler();

        // Dropdowns
        $('.hasdropdown a').click(function() {
            $(this).parent().toggleClass('open');
        });
        $('html').click(function() {
            $('.hasdropdown').removeClass('open');
        });
        $('.hasdropdown').click(function(event) {
            event.stopPropagation();
        });

        // Filters
        var $filters = $('#filters');
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
        responsive_actions(screen_width, media);
        $(window).resize(function() {
            screen_width = $.viewport().width;
            responsive_actions(screen_width, media);
        });
        function responsive_actions(screen_width, media) {
            if ( screen_width <= media.tabletLandscape ) {
                $('.nav-special', $navigation).detach().insertBefore('.navs', $navigation);
            } else {
                $('.nav-special', $navigation).detach().insertAfter('.navs', $navigation);
            }
        }

        $(window).click(function() {
            $navigation.removeClass('mobile-menu');
            $menu_roots.removeClass('active');
        });
        $navigation.click(function(e){
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
    })
})(jQuery)
