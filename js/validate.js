// doi tuong 
function validator(options) {

    //hàm thực hiện validated
    function validate(inputElement, rule) {
        var errorMessage = rule.test(inputElement.value);
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = "";
            inputElement.parentElement.classList.remove('invalid');
        }
    }


    // lấy elemnt cua form cần validate

    var formElement = document.querySelector(options.form);

    if (formElement) {
        options.rules.forEach(function (rule) {

            var inputElement = formElement.querySelector(rule.selector);

            if (inputElement) {
                // xử lý trường hợp blur
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }
                // xử lý trường hợp mỗi khi người dùng nhập input
                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = "";

                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        });
    };
}

//DINH NGHIA RULE
validator.isRequired = function (selector) {

    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'vui lòng nhập trường này'

        }
    };
}
validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function (vale) {
            var isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return isEmail.test(vale) ? undefined : 'Email không hợp lệ';

        }
    };
}
validator.isNumber = function (selector) {
    return {
        selector: selector,
        test: function (vale) {
            var isNumber = /^\d{10}$/;
            return isNumber.test(vale) ? undefined : 'số điện thoại không hợp lệ';

        }
    };
}