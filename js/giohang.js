import { countItem } from "./functions.js";
import { setItemInLocal, getItemInLocal, setItemsInLocal } from "./utils.js";

// countItem();
// function countItem() {
//     let countItem = document.querySelector('.count_item_pr');
//     countItem.textContent = getItemInLocal("products").length;
// }

getDataLocal()
function getDataLocal() {
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
        <tr id="product-${products[0].id}">
        <td class="namepro">
          <img loading="lazy" style="width: 80px; height: 80px;" src=${products[0].srcImg} alt="lofi">
          <div>
            <a>${products[0].name}</a>
    
          </div>
        </td>
        <td style="text-align: center;" >
          <span>${products[0].price}</span><span>đ</span>
          <div style="color: red;">xoá</div>
        </td>
        <td style="text-align: center;">
          <div class="btn-amountPro" data-id=${products[0].id}>
            <button data-id=${products[0].id} class="btn-amountPro removeOne" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svg w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
            </button>
            <input type="text" name="amountPro" id="count-${products[0].id}" value=${products.length} maxlength="2"
                   onkeypress="if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;"
                   onchange="if(this.value == 0)this.value=1;">
            <button data-id=${products[0].id} class="btn-amountPro addOne" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svg w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
          </div>
        </td>
        <td id="price-${products[0].id}" class="price-total-product" style="text-align: center;">
          <span >${products[0].price * products.length}</span><span>.000đ</span>
        </td>
      </tr>
        `
        arrayProducts += html;
        priceTotal += Number(products[0].price) * products.length;

    });

    containerOrderList.innerHTML = arrayProducts;
    numberToString(priceTotal)

    // btn thêm bớt sp
    let btnsAddOne = document.querySelectorAll(".addOne");
    let btnsRemoveOne = document.querySelectorAll(".removeOne");

    for (let i = 0; i < btnsAddOne.length; i++) {
        let btn = btnsAddOne[i];
        btn.addEventListener("click", addOne);
        btn.addEventListener("click", countItem);
        
    }

    for (let i = 0; i < btnsAddOne.length; i++) {
        let btn = btnsRemoveOne[i];
        btn.addEventListener("click", removeOne);
        btn.addEventListener("click", countItem);

    }

    function addOne(event) {
        let id = event.target.closest(".addOne").dataset.id
        let items = orderItemData.filter((item) => item.id === Number(id))
        // console.log(items)
        orderItemData.push(items[0])
        setItemsInLocal("products", orderItemData)
        let total = document.getElementById(`count-${id}`);
        total.value = items.length + 1;

        let priceProduct = document.querySelector(`#price-${id}`)
        console.log(items[0].price * total.value)
        priceProduct.innerHTML = (parseInt(items[0].price) * total.value) + ".000đ";

        numberToString(priceTotal);
    }

    function removeOne(event) {
        let id = event.target.closest(".removeOne").dataset.id
        let countInput = parseInt(document.querySelector(`#count-${id}`).value);
        let items = orderItemData.filter((item) => item.id === Number(id))

        if (countInput > 0) {
            orderItemData.pop()
            setItemsInLocal("products", orderItemData)
            let total = document.getElementById(`count-${id}`)
            total.value = items.length - 1

            let priceProduct = document.querySelector(`#price-${id}`)
            console.log(items[0].price * total.value)
            priceProduct.innerHTML = (parseInt(items[0].price) * total.value) + ".000đ";
            // numberToString(priceTotal)
        }

        // numberToString(priceTotal);
    }
    // end btn thêm bớt sp
}

function numberToString(priceTotal) {
    let containerPriceTotal = document.getElementById("price-total")
    let containerPrice = document.querySelectorAll(".price-total-product");
    console.log(containerPriceTotal.textContent)

    // containerPrice.forEach( (price) => {
    //     priceTotal += Number(price.textContent);
    // })

    if (priceTotal < 1000) {
        containerPriceTotal.innerHTML = priceTotal.toString() + ".000đ"
    } else {
        containerPriceTotal.innerHTML = (priceTotal / 1000).toString() + "0.000đ"
    }
    

}

// function updatePriceTotal() {
//     let priceProduct = document.querySelector(`#price-${id}`)
//     console.log(items[0].price * total.value)
//     priceProduct.innerHTML = (parseInt(items[0].price) * total.value) + ".000đ";
// }

// checkout button
let checkoutbtn = document.querySelector(".cart__btn-proceed-checkout")
checkoutbtn.addEventListener("click", redirect)

function redirect() {
    let products = getItemInLocal("products")
    if (products.length > 0) {
        window.location.href = "../HTML/thanhtoan.html"
    }
}
// end checkout button

// function check () {
//     window.location.href = "../html/thanhtoan.html"
// }