document.addEventListener("DOMContentLoaded", () => {
    initEvents()
    // табы
    initTabs()
    initAccordion ()
    initSelect()
});

function initEvents() {
    const body = document.querySelector('body')
    let overlay = document.querySelector('.overlay')
    document.addEventListener("click", (event) => {
        if (event.target.closest(".close-btn")) {
            event.target.closest(".close-btn").parentElement.classList.remove("active");
            body.classList.remove("overflow");
        }
        if (event.target.closest(".js-catalog-menu-toggler")) {
            let filterModal = document.querySelector('.filters__column')
            filterModal.classList.toggle('active')
            body.classList.toggle("overflow-hidden");
            overlay.classList.toggle('active')
        }
        if (event.target.closest(".overlay")) {
            document.querySelectorAll('.active').forEach((el) => {
                el.classList.remove('active')
                body.classList.remove("overflow-hidden");
            })
        }
        if (event.target.closest(".show-more")) {
            let clicked = event.target.closest(".show-more")

            clicked.previousElementSibling.classList.toggle('active')
             clicked.classList.toggle('active')


        }
    });
    document.addEventListener("focus", (event) => {
        document.querySelector('.header__search').classList.add('focus')
    })
    document.addEventListener("blur", (event) => {
        document.querySelector('.header__search').classList.remove('focus')
    })

}

function initTabs() {
    document.addEventListener("click", (event) => {
        const tabsItems = document.querySelectorAll('.tabs__item');
        let clicked;
        const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
        if (event.target.closest(".tabs__nav-btn")) {
            let thisEl = event.target.closest(".tabs__nav-btn"), index = thisEl.dataset.tab,

                activeElements = document.querySelector('.tabs').querySelectorAll(".active")

            activeElements.forEach((el) => {
                el.classList.remove('active');
            })
            thisEl.classList.add('active');
            tabsItems[index].classList.add('active')
        }

    })

}
function initAccordion () {
    document.addEventListener('click',(event) => {
        let clicked
        if(clicked = event.target.closest('.js-menu-accordion__trigger')){
            clicked.nextElementSibling.classList.toggle('active')
            clicked.classList.toggle('active')
        }
    })
}


function initSelect() {

    $(".select").on("click", ".select__head", function () {
        $('.overlay').toggleClass('active')

        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).removeClass("active");
            $(this).next().removeClass("active");

        } else {
            $(".select__head").removeClass("active");
            $(".select__list").removeClass("active");
            $(this).addClass("active");
            $(this).next().addClass("active");
        }
    });

    $(".select").on("click", ".select__item", function () {
        $(".select__head").removeClass("active");
          $('.overlay').removeClass('active')
        $(this).closest(".select__list").removeClass("active");
        $(this)
            .closest(".select__container")
            .find(".select__code")
            .text($(this).data("code"));

        $(this)
            .closest(".select__container")
            .find(".select__input")
            .val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".select").length) {

            $(".select__head").removeClass("active");
            $(".select__list").removeClass("active");
        }
    });

}
    // Yandex карта на главной,
    if ($('#contacts-map').length) {

        ymaps.ready(function () {
            let contactMap = new ymaps.Map("contacts-map", {
                // Координаты центра карты.
                // Порядок по умолчнию: «широта, долгота».
                center: [58.064297, 38.811335],
                // Уровень масштабирования. Допустимые значения:
                // от 0 (весь мир) до 19.
                zoom: 13,
                // Элементы управления
                // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/controls/standard-docpage/
                controls: [],
            });
            let latitude = document.querySelector("#contacts-map").dataset.latitude;

            let longitude = document.querySelector("#contacts-map").dataset.longitude;

            // Добавление метки
            // https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/
            var myPlacemark = new ymaps.Placemark(
                [latitude, longitude],
                {
                    // Хинт показывается при наведении мышкой на иконку метки.
                    // hintContent: 'Содержимое всплывающей подсказки',
                    // Балун откроется при клике по метке.
                    // balloonContent: 'Содержимое балуна'
                    hintContent: "",
                },
                {
                    iconLayout: "default#image",
                    // Своё изображение иконки метки.

                    iconImageHref: `assets/images/map.svg`,

                    // Размеры метки.
                    iconImageSize: [45, 45],
                    iconImageOffset: [-30, -45],
                }
            );

            // После того как метка была создана, добавляем её на карту.
            contactMap.geoObjects.add(myPlacemark);
            contactMap
                .setBounds(contactMap.geoObjects.getBounds(), {checkZoomRange: true})
                .then(function () {
                    if (contactMap.getZoom() > 13) contactMap.setZoom(13);
                });
            ymapsTouchScroll(contactMap);
        });
    }

