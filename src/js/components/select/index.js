import $ from "jquery";

const select = (() => {
    const DOM = {
        select: ".select",
        options: "select__options",
        selectCountries: ".select .js-country"
    };

    const hasSomeParentTheClass = (element, classname) => {
        if (element.className?.split(' ').indexOf(classname)>=0) return true;
        return element.parentNode && hasSomeParentTheClass(element.parentNode, classname);
    }

    const init = () => {
        document.querySelectorAll(DOM.select).forEach( select => {
            select.addEventListener("click" , (event) => {
                event.stopPropagation();
                event.stopImmediatePropagation();
                let element = event.target.classList.contains(DOM.select) ? event.target : event.target.closest(DOM.select);

                if (!hasSomeParentTheClass(event.target, DOM.options)) {
                    element.classList.toggle("open");
                }

                window.addEventListener('click', function(e){
                    if (!element.contains(e.target)){
                        element.classList.remove("open");
                    }
                });
            })
        });
        document.querySelectorAll(DOM.selectCountries).forEach( li => {
            li.addEventListener("click", (event) => {
                let element = event.target.classList.contains("js-country") ? event.target : event.target.closest(".js-country");
                $(element).parents(DOM.select).find(".label").attr("data-value", $(element).data("value"));
                $(element).parents(DOM.select).find(".label").html($(element.childNodes[0]).clone());
                $(element).parents(DOM.select).removeClass("open");
            })
        })
    }

    return {
        init: init
    };
})();

export default select;



