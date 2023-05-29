import { getItemInLocal } from "./utils.js";

countItem();
export function countItem() {
    let countItem = document.querySelector('.count_item_pr');
    countItem.textContent = getItemInLocal("products").length;
}

// btn thêm 1 sp

// function addOne(event) {
//     var result = document.getElementById('amountPro');
//     var qtyqv = result.value;

//     if (!isNaN(qtyqv) && qtyqv > 1) {
//         let id = event.target.dataset.id
//         let items = orderItemData.filter((item) => item.id === id)
//         orderItemData.push()
//         setItemsInLocal("products", orderItemData)
//         result.innerHTML = items.length + 1;
//     };

//     return false;
// }

// function removeOne(event) {
//     var result = document.getElementById('amountPro');
//     var qtyqv = result.value;

//     if (!isNaN(qtyqv) && qtyqv > 1) {
//         let id = event.target.dataset.id
//         let items = orderItemData.filter((item) => item.id === id)
//         orderItemData.pop()
//         setItemsInLocal("products", orderItemData)
//         result.innerHTML = items.length - 1;
//     };

//     return false;
// }