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
        $menu_roots.hover(
            function(e) {
                $menu_roots.not(e).removeClass('active');
                $(this).addClass('active');
            },
            function(e) {
                $menu_roots.removeClass('active');
            }
        );

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
            dots: false,
            navText: [],
            smartSpeed: 500,
            responsiveClass: true,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2,
                    margin: 27
                },
                768: {
                    items: 3,
                    margin: 67
                },
                990: {
                    items: 5,
                    margin: 12
                },
                1200: {
                    items: 6,
                    margin: 18
                }
            }
        });

        // Sliding product descriptions
        $('#sliding-button, #sliding-button-close').click(function() {
            $('#sliding-wrapper').toggleClass('open');
        });
    })
})(jQuery)
