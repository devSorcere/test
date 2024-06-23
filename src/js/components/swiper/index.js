import Swiper, { Navigation } from 'swiper';
import $ from "jquery";
import Slick from 'slick-carousel'


const swiper = (() => {
    const DOM = {
        swiper: ".swiper",
        slick: ".slider-container"
    };

    const config = {
        default: {
            // configure Swiper to use modules
            modules: [Navigation],
            loop: true,
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 16,
            mousewheel: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                1024 : {
                    centeredSlides: false,
                    spaceBetween: 32,
                    slidesPerView: "auto",
                    navigation: {
                        nextEl: '.swiper-navigation-desktop .swiper-button-next',
                        prevEl: '.swiper-navigation-desktop .swiper-button-prev',
                    },
                }

            }
        },
        simple: {
            // configure Swiper to use modules
            modules: [Navigation],
            loop: true,
            slidesPerView: 1.2,
            centeredSlides: true,
            spaceBetween: 16,
            mousewheel: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                1024 : {
                    centeredSlides: false,
                    spaceBetween: 25,
                    slidesPerView: 3,
                }

            }
        },
        'nos-formations' : {
            // configure Swiper to use modules
            modules: [Navigation],
            loop: true,
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 16,
            mousewheel: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                1024 : {
                    centeredSlides: false,
                    spaceBetween: 30,
                    slidesPerView: "auto",
                    navigation: {
                        nextEl: '.swiper-navigation-desktop .swiper-button-next',
                        prevEl: '.swiper-navigation-desktop .swiper-button-prev',
                    },
                }

            }
        },
        experts: {
            // configure Swiper to use modules
            loop: true,
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 20,
            mousewheel: true,
            on: {
                afterInit: (slider)=> {
                    const isMobile = window.matchMedia('only screen and (max-width: 1023px)').matches;
                    !isMobile && slider.slideNext();
                }
            },
            breakpoints: {
                1024 : {
                    spaceBetween: 50,
                    centeredSlides: true
                }
            }
        },
        grid: {
            slidesPerView: 4,
            grid: {
                rows: 3,
                fill: 'column'
            },
            spaceBetween: 30,
        }
    }

    const slickConfig = {
        grid : {
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            rows: 3,
            variableWidth: true,
            dots: true,
            prevArrow: ".a-slider__navigation .prev",
            nextArrow: ".a-slider__navigation .next",
            appendDots: ".a-slider__pagination",
            customPaging: function(slick,index) {
                return '<a href="#" class="index">' + (index + 1) + '</a>';
            }
        },
        double: {
            infinite: true,
            speed: 300,
            arrows: false,
            centerMode: true,
            variableWidth: true
        }
    }
    const init = () => {
        // init Swiper:
        // TODO : Replace swiper with Slick
        document.querySelectorAll(DOM.swiper).forEach( element => {
            let swiper = new Swiper(element, config[`${element.dataset.config || 'default'}`]);
        });

        document.querySelectorAll(DOM.slick).forEach( element => {
            $(element).slick(slickConfig[`${element.dataset.config || 'default'}`]);
        });
    }

    return {
        init: init
    };
})();

export default swiper;



