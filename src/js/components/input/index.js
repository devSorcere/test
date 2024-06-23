const Inputs = (() => {
    const init = () => {
        console.log(" component initialization");
            console.log(" DOMContentLoaded");
            var inputsWithBehavior = document.querySelectorAll('.input-with-behavior');
            console.log('inputsWithBehavior')
            console.log(inputsWithBehavior)
            inputsWithBehavior.forEach(function (input) {
                input.addEventListener('focus', function () {
                    input.parentNode.classList.remove('inactive');
                });

                input.addEventListener('blur', function () {
                    if (input.value === '') {
                        input.parentNode.classList.add('inactive');
                    }
                });
            });


            var showPasswordIcons = document.querySelectorAll('.show_pw');
            showPasswordIcons.forEach(function (icon) {
                icon.addEventListener('click', function () {
                    var passwordInput = icon.closest('.inp-icon').querySelector('input');
                    if (passwordInput && passwordInput.type) {
                        passwordInput.type = (passwordInput.type === 'password') ? 'text' : 'password';
                    }
                });
            });


    }
    return {
        init: init
    };
})();

export default Inputs;
