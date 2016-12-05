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
                480: {
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
