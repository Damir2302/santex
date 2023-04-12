document.addEventListener("DOMContentLoaded", () => {
    // Yandex карта page contacts


    if ($('#contacts-map').length) {

        ymaps.ready(function () {
            let coords = document.querySelector("#contacts-map").dataset.coord.split(',')
            let contactMap = new ymaps.Map("contacts-map", {
                // Координаты центра карты.
                // Порядок по умолчнию: «широта, долгота».
                center: [coords[0], coords[1]],
                // Уровень масштабирования. Допустимые значения:
                // от 0 (весь мир) до 19.
                zoom: 15,
                // Элементы управления
                // https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/controls/standard-docpage/
                controls: [],
            });
            let latitude = coords[0];

            let longitude = coords[1];

            // Добавление метки
            // https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/
            var myPlacemark = new ymaps.Placemark(
                [coords[0], coords[1]],
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

                    iconImageHref: `${home_dir}/images/map.svg`,


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
                    if (contactMap.getZoom() > 15) contactMap.setZoom(15);
                });
            ymapsTouchScroll(contactMap);
        });
    }

})

