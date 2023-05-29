
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

function hello(message) {
    console.log(message)
}

