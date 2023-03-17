$(document).ready(function() {

    // Yandex карта page contacts


    if($("#map").length) {

        function addYaMaps() {
            var myMap;
            ymaps.ready(init);

            function init() {
                myMap = new ymaps.Map('map', {
                    center: [55.594157, 37.352406],
                    zoom: 16,
                    controls: []
                }),
                    myPlacemark = new ymaps.Placemark([55.593857, 37.351900], {
                        // balloonContentHeader: '',
                        balloonContentBody: "text",
                        // balloonContentFooter: "+7 (925) 603-78-22<br>+7 (926) 263-02-69<br>info@magixkalyan.ru",

                    }, {
                        // iconLayout: 'default#image',
                        // iconImageHref: '/local/templates/avangard/images/map-pin.svg',
                        // iconImageSize: [30, 42],
                        // iconImageOffset: [-37, -45],
                        // balloonOffset: [-25, -5]
                    });
                myMap.geoObjects.add(myPlacemark);
                ymapsTouchScroll(myMap, {preventScroll: true, preventTouch: true});
            }
        }

        addYaMaps();
    }

})

