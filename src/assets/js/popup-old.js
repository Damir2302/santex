$(document).ready(function () {

    // ДЛЯ ВСЕХ(!!!!!!) ВСПЛЫВАЮЩИХ ОКОН [Если кликаем за пределы всплывающего окна, закрываем это окно]
    $("html").on("click", function (e) {
        if (
            !$(e.target).closest(".navbar").length &&
            !$(e.target).closest(".header__mobile-burger").length
        ) {
            $("body").removeClass("overflow-hidden")
            $('#page').removeClass('bg-overlay')

            $('#burger').removeClass('opened')
            $('#navbar').removeClass('opened')
            $('#submenu').slideUp()
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

});