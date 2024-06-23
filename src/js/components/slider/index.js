import $ from "jquery";
import Slick from 'slick-carousel'

const slider = (() => {
    const DOM = {
        slick: ".slider-container"
    };

    const slickConfig = {
        default: {
            infinite: true,
            speed: 300,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        centerMode: true,
                    }
                },
            ]
        },
        simple: {
            infinite: true,
            speed: 300,
            variableWidth: false,
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                    }
                },
            ]
        },
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
        "grid-single" : {
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 4,
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
        },
        twoItems: {
            infinite: true,
            speed: 300,
            arrows: false,
            slidesToShow: 2,
        }
    }
    const init = () => {
        document.querySelectorAll(DOM.slick).forEach( element => {
            let navigationConfig = element.dataset.config === undefined || element.dataset.config !== "default" || element.dataset.config !== "simple" ? {
                prevArrow:  $(element).parent().find('.prev'),
                nextArrow:  $(element).parent().find('.next')
            } : {};
            $(element).slick({
                ...slickConfig[`${element.dataset.config || 'default'}`],
                ...navigationConfig
            });
        });
    }

    return {
        init: init
    };
})();

export default slider;



