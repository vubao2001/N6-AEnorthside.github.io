
// Đối tượng `Validator`
function Validator(options) {

    
    var selectorRules = {};
    
    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var errorMessage ;// = rule.test(inputElement.value);

        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];

        // Lặp qua từng rule và kiểm tra 
        for (var i = 0; i < rules.length; i++) {
            // errorMessage = rules[i].test(inputElement.value);
            // or
            errorMessage = rules[i](inputElement.value);

            // nếu có lỗi thì sẽ thoát khỏi vòng lặp (dừng kiểm tra)
            if (errorMessage) break;
        }

        // 
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        }
        else {
            errorElement.innerText = "";
            inputElement.parentElement.classList.remove('invalid');
        }

        // dùng để nhận biết (không lỗi -> hàm trả về false / có lỗi -> hàm trả về true)
        // dùng như này để sau này có thể set điều kiện nhận biết khi ấn submit
        return !errorMessage;
        // !! : dùng để gắn 1 biến thành giá trị boolean (true, false)
    };

    // ---------------------------------------------------------------

    // Lấy element của form cần validate và thực hiện validate
    var formElement = document.querySelector(options.form);
    if (formElement) {
        // nếu mà có formElement thì thực hiện (chạy)
        
        // Khi submit form (khi click vào nút submit)
        formElement.onsubmit = (e) => {
            e.preventDefault();

            var isFormValid = true;

            // Lặp qua từng rule và validate luôn
            options.rules.forEach((rule) => {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            // sử lý dữ liệu khi submit
            if (isFormValid) {
                window.location.href = "../HTML/camon.html"
            } 
        };


        // Lặp qua mỗi rule và sử lý ( lắng nghe sự kiện blur, input,... )
        options.rules.forEach((rule) => {

            // Lưu lại các rules để không bị ghi đè cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                // điều kiện: kiểm tra xem có phải dạng mảng hay không
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }
            

            var inputElement = formElement.querySelector(rule.selector);
            // console.log(inputElement);
            if (inputElement) {
                // Xử lý TH blur khỏi input
                inputElement.onblur = () => {
                    validate(inputElement, rule);
                };

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = () => {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);

                    errorElement.innerText = "";
                    inputElement.parentElement.classList.remove('invalid');
                };
            }
        });
    }
};

// ----------------------------------------------------

// Định nghĩa rules
Validator.isRequired = (selector, message) => {
    return {
        selector: selector,     // id của input
        test: (value) => {      // hàm kiểm tra dữ liệu trong input
            return value.trim() ? undefined : message || "Vui lòng nhập trường này";
            // .trim() : áp dụng cho chuỗi. dùng để loại bỏ dấu "cách" ở đầu của 1 chuỗi
        }
    };
};

Validator.isEmail = (selector, message) => {
    return {
        selector: selector,
        test: (value) => {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            return  regex.test(value) ? undefined : message || "Trường này phải là email";
            // 1.   Cách 1
            // regex.test(value) : hàm test() này khác hàm test() bên trên. 
            //            đây là hàm test() được định nghĩa sẵn trong regex dùng để kiểm tra giá trị chuỗi

            // 2.   Cách 2
            // value.match(regex)    : match() là hàm được định nghĩa sẵn giống như hàm test().
            //            dùng để kiểm tra giá trị value có thuộc kiểu dữ liệu như regex hay không.
        }
    };
};

Validator.minLenght = (selector, min, message) => {
    return {
        selector: selector,
        test: (value) => {
            return value.length >= min ? undefined : message || `Vui lòng nhâp tối thiểu ${min} ký tự`;
        }
    };
};

Validator.isConfirmed = (selector, getConfirmValue, message) => {
    return {
        selector: selector,
        test: (value) => {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
        },
    }
};