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
        var $menu_roots = $('.menu-root > li', $navigation);
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
            fx: 'fade',
            timeout: 0,
            pager: '#product-gallery-pager',
            pagerTemplate: '<a href="javascript:void(0);"><img src="{{src}}" width="48" height="72"></a>',
            log: false
        });

        // Inputmask
        $('input[type="tel"]').mask('+7 (999) 999-99-99');

        // Sliders
        $('#site-footer .carousel, #product-sliders .carousel').flickity({
            cellSelector: '.carousel-cell',
            cellAlign: 'left',
            pageDots: false,
            contain: true,
            wrapAround: true
        });
    })
})(jQuery)
