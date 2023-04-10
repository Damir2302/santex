$(document).ready(function () {

    // ДЛЯ ВСЕХ(!!!!!!) ВСПЛЫВАЮЩИХ ОКОН [Если кликаем за пределы всплывающего окна, закрываем это окно]
    $("html").on("click", function (e) {
        if (
            !$(e.target).closest(".navbar").length &&
            !$(e.target).closest(".header__mobile-burger").length &&
            !$(e.target).closest(".header__search").length
        ) {
            $("body").removeClass("overflow-hidden")
            $('#page').removeClass('bg-overlay')

            $('#burger').removeClass('opened')
            $('#navbar').removeClass('opened')
            $('#submenu').slideUp()

            $('.header__search').removeClass('opened')
        }
    });

    // BURGER MENU
    $('#burger').on('click', function () {
        if ($(this).hasClass('opened')) {
            $("body").removeClass("overflow-hidden")
            $('#page').removeClass('bg-overlay')

            $('#burger').removeClass('opened')
            $('#navbar').removeClass('opened')
            $('#submenu').slideUp()
        } else {
            $("body").addClass("overflow-hidden")
            $('#page').addClass('bg-overlay')

            $(this).addClass('opened')
            $('#navbar').addClass('opened')
        }
    })

    // CATALOG MENU
    $('.header__cat-btn').on('click', function() {
        if (!$(this).hasClass('opened')) {
            $(this).addClass('opened')
            $('.header__catalog').slideDown()
        } else {
            $(this).removeClass('opened')
            $('.header__catalog').slideUp()
            $('.header__catalog-item').removeClass('opened')
        }
    })

    $('.header__catalog-item i').on('click', function() {
        if (!$(this).parent().hasClass('opened')) {
            $('.header__catalog-item').removeClass('opened')
            $('.header__catalog-subcat').slideUp()

            $(this).parent().addClass('opened')
            $(this).parent().find('.header__catalog-subcat').slideDown()
        } else {
            $(this).parent().removeClass('opened')
            $(this).parent().find('.header__catalog-subcat').slideUp()
        }
    })

    // HEADER SEARCH
    if ($(window).width() < 1024) {
        $('.header__search-icon').on('click', function() {
            $('.header__search').addClass('opened')

            $('body').addClass('overflow-hidden')
            $('#page').addClass('bg-overlay')
        })

        $('.header__search-icon-close').on('click', function() {
            $('.header__search').removeClass('opened')

            $('body').removeClass('overflow-hidden')
            $('#page').removeClass('bg-overlay')
        })
    }

});