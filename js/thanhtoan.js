
import { getItemInLocal } from "./utils.js";

const orderItemData = getItemInLocal("products");

let containerOrderList = document.querySelector("tbody");
let arrayItem = [];
let arrayProducts = ""
let priceTotal = 0
let priceTotalProducts = 0;

let listID = []
orderItemData.forEach((item) => {
    if (listID.indexOf(item.id) === -1) {
        listID.push(item.id)
    }
})

listID.forEach(id => {
    let products = orderItemData.filter((element) => element.id === id)
    let html = `
        <tr class="product">
            <td class="product__image">
                <div class="product-thumbnail mb-3 me-3">
                    <div class="product-thumbnail__wrapper" data-tg-static="">
                        <img src=${products[0].srcImg} alt="lofi" class="product-thumbnail__image">
                    </div>
                    <span class="product-thumbnail__quantity">${products.length}</span>
                </div>
            </td>
            <th class="product__description">
                <span class="product__description__name">
                    ${products[0].name}
                </span>
                
                
            </th>
            <td class="product__quantity visually-hidden"><em>Số lượng:</em> ${products.length}</td>
            <td class="product__price">
                
                ${products[0].price * products.length}<span>.000đ</span>
                
            </td>
        </tr>
    `
    arrayProducts += html
    priceTotal += parseFloat(products[0].price) * products.length
});

containerOrderList.innerHTML = arrayProducts;

let containerPriceTotal = document.querySelector(".price-total");
let paymentPrice = document.querySelector(".payment-due__price");

if (priceTotal < 1000) {
    containerPriceTotal.innerHTML = priceTotal.toString() + ".000đ"
} else {
    containerPriceTotal.innerHTML = (priceTotal / 1000).toString() + "0.000đ"
}

paymentPrice.innerHTML = containerPriceTotal.textContent

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
