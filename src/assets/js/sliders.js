document.addEventListener("DOMContentLoaded", () => {
    let heroSlider = new Swiper(".hero__container ", {
        slidesPerView: 1,
        speed: 800,
        grabCursor:true,
        autoplay: {
            delay: 5000,
        },

        pagination: {
            el: '.hero__slider .swiper-pagination',

            clickable: true,
        },
        breakpoints: {
            744: {

            },

            1024: {


            },

            1280: {
                navigation: {
                    nextEl: '.hero__slider .swiper-button-next',
                    prevEl: '.hero__slider .swiper-button-prev'
                },
            }
        },


    })
    let popularSlider = new Swiper(".popular .swiper", {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 10,
        grid: {
            rows: 2,
            fill: 'row'
        },
        grabCursor: true,
        navigation: {
            nextEl: '.popular .custom-btn-next',
            prevEl: '.popular .custom-btn-prev'
        },
        pagination: {
            el: '.popular .custom-pagination',

            clickable: true,
        },
        breakpoints: {
            744: {
                grid: {
                    rows: 1,
                    fill: 'row'
                },
                slidesPerView: 3,
            },

            1024: {
                grid: {
                    rows: 1,

                },
                spaceBetween: 20,
                slidesPerView: 4,
            },

            1440: {
                spaceBetween: 30,
                slidesPerView: 6,

            }
        },


    })
    let sameSlider = new Swiper(".same-products .swiper", {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 10,
        grid: {
            rows: 2,
            fill: 'row'
        },
        grabCursor: true,
        navigation: {
            nextEl: '.same-products .custom-btn-next',
            prevEl: '.same-products .custom-btn-prev'
        },
        pagination: {
            el: '.custom-pagination',

            clickable: true,
        },
        breakpoints: {
            744: {
                grid: {
                    rows: 1,
                    fill: 'row'
                },
                slidesPerView: 3,
            },

            1024: {
                grid: {
                    rows: 1,

                },
                spaceBetween: 20,
                slidesPerView: 4,
            },

            1440: {
                spaceBetween: 30,
                slidesPerView: 6,

            }
        },


    })

    /////////////////////////////////////////////////////////////////////
    // КАРТОЧКА ТОВАРА
    ////////////////////////////////////////////////////////////////////
    let item_cart_pagination;

    item_cart_pagination = new Swiper('.product__slider-pagination .swiper', {
        slidesPerView: 5,
        spaceBetween: 10,
        watchSlidesProgress: true,

        breakpoints: {
            1024: {
                direction: 'vertical',
                slidesPerView: 'auto',
                spaceBetween: 20,
            }, 1440: {
                spaceBetween: 30,
                direction: 'vertical',
                slidesPerView: 'auto',

            }

        }
    });

    let item_cart;

    item_cart = new Swiper('.product__slider', {
        slidesPerView: "auto",
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 30,
        thumbs: {
            swiper: item_cart_pagination,
        },

        // navigation: {
        //     nextEl: '.product__item .slider-button-next',
        //     prevEl: '.product__item .slider-button-prev',
        // }
    });
    const optionsSlider = () => {
        let solutionsSliders = document.querySelectorAll('.options-slider')
        let prevArrow = document.querySelectorAll('.options .custom-btn-prev')
        let nextArrow = document.querySelectorAll('.options .custom-btn-next')
        solutionsSliders.forEach((slider, index) => {
            // this bit checks if there's more than 1 slide, if there's only 1 it won't loop
            let sliderLength = slider.children[0].children.length
            let result = (sliderLength > 1) ? true : false
            const swiper = new Swiper(slider, {
                slidesPerView: 1,
                spaceBetween: 10,
                grid: {
                    rows: 4,
                    fill: 'row'
                },
                breakpoints: {
                    744: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },

                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                        grid: {
                            rows: 1,
                        },
                    },

                    1440: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                        grid: {
                            rows: 1,
                        },

                    }
                },

                navigation: {
                    nextEl: nextArrow[index],
                    prevEl: prevArrow[index],
                }
            });
        })
    }
    window.addEventListener('load', optionsSlider)

})