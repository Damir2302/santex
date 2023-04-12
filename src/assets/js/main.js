document.addEventListener("DOMContentLoaded", () => {
    initEvents()
    // табы
    initTabs()
    initAccordion()
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

function initAccordion() {
    document.addEventListener('click', (event) => {
        let clicked
        if (clicked = event.target.closest('.js-menu-accordion__trigger')) {
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



