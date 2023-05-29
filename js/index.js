import { mocProductData, mocProductNewData } from "../data/data_index.js";
import { setItemInLocal, getItemInLocal, setItemsInLocal } from "./utils.js";


countItem();
function countItem() {
    let countItem = document.querySelector('.count_item_pr');
    countItem.textContent = getItemInLocal("products").length;
}

// menu
let iconMenu = document.querySelector(".header-upper-menu-mobile");
let opacityMenu = document.querySelector(".opacity_menu");
let mainMenu = document.querySelector(".header-mid");
let iconCloseMenu = document.querySelector(".close-menu");

iconMenu.addEventListener("click", (e) => {
    opacityMenu.classList.add("current");
    mainMenu.classList.add("current");

});

opacityMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    opacityMenu.classList.remove("current");
    mainMenu.classList.remove("current");
});

iconCloseMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    opacityMenu.classList.remove("current");
    mainMenu.classList.remove("current");
});


// ----------------------------------------------------------

// xuất dữ liệu 
// productSales
(function () {
    // dùng để giới hạn phạm vi hoạt động của 1 đoạn code chỉ ở trong file nào đó (dùng window.location.pathname để xác định)
    let a = window.location.pathname
    // console.log(a);

    if (a === "/index.html" || a === "/" || a === "#") {
        // console.log("đã vào đây");
        const cartProductSales = document.querySelector(".product__sale--item");

        let html = "";

        mocProductData.forEach((product) => {
            const cart = `
        <div class="flashsale__item slide-active" style="width: 350px; margin-right: 30px;">
            <div class="item__product--main">
                <div class="row">
                    <div class="col-lg-5 col-md-5 col-12 pd-right-0 ">
                        <div class="product-thumbnail sale" data-sale="${product.sale}%">
                            <a class="image_thumb" href="#" data-id=${product.id}
                                title="Ví nữ dài cầm tay 2 ngăn kéo nhiều ngăn tiện dụng"
                                style="height: 143px;">
                                <div class="product-image">
                                    <img loading="lazy" class="lazy img-responsive loaded" width="480"
                                        src=${product.srcImg}
                                        data-src="${product.srcImg}"
                                        alt="Ví nữ dài cầm tay 2 ngăn kéo nhiều ngăn tiện dụng">
                                </div>

                                <div class="product-image second-image">
                                    <img loading="lazy" class="lazy img-responsive loaded" width="480"
                                        height="480"
                                        src=${product.srcImg_2}
                                        data-src="${product.srcImg_2}"
                                        alt="Ví nữ dài cầm tay 2 ngăn kéo nhiều ngăn tiện dụng"
                                        data-was-processed="true">
                                </div>

                            </a>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-7 col-12">
                        <div class="product-info pt-0">
                            <div class="lofi-product d-flex align-items-center justify-content-sm-between">
                                <div class="product-type">
                                    ${product.title}
                                </div>
                            </div>

                            <h3 class="product-name mt-0">
                                <a href="#" data-id=${product.id}
                                    title="Ví nữ dài cầm tay 2 ngăn kéo nhiều ngăn tiện dụng">
                                    ${product.name}
                                </a>
                            </h3>

                            <div class="bottom-action position-relative">
                                <div class="price-box">
                                    <span class="price">${product.price}&#8363</span>
                                    <span class="compare-price"></span>
                                </div>
                            </div>

                        </div>
                        <div class="flashsale__bottom" style="">
                            <div class="flashsale__label">
                                <b class="flashsale__sold-qty">${product.sold}</b> 
                                sản phẩm đã bán
                            </div>


                            <div class="flashsale__progressbar  ">
                                <div class="flashsale___percent" style="width: ${product.percent}%;">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;

            html += cart;
        });

        cartProductSales.innerHTML = html;
    }
    else {
        // console.log("k vào đc");
        // return false;
    }

})();
// end productSales


// --------------------------------

// new products
let a = window.location.pathname;

if (a === "/index.html" || a === "/" || a === "#") {
    const cartProductNews = document.querySelector(".product__new--item");

    let html_new = "";

    mocProductNewData.forEach((product) => {
        let newCart = `
        <div class="product-new-slide product-action" data-id=${product.id}
        style=" width: 255px; ">
        <div class="item__product--main ">

            <div class="product-thumbnail sale " data-sale="${product.sale}%">
                <a class="image_thumb" href="./HTML/producDetails.html"
                    title="Túi xách nữ vải dù chống nước cao cấp"
                    style="height: 255px;">
                    <div class="product-image">
                        <img loading="lazy" class="lazy img-responsive loaded" width="300" height="300"
                            src=${product.srcImg}
                            data-src=${product.srcImg}
                            alt="Túi xách nữ vải dù chống nước cao cấp">
                    </div>

                    <div class="product-image second-image">
                        <img loading="lazy" class="lazy img-responsive loaded" width="300" height="300"
                            src=${product.srcImg_2}
                            data-src=${product.srcImg_2}
                            alt="Túi xách nữ vải dù chống nước cao cấp">
                    </div>

                </a>
                <div class="action-cart">
                    <a href="#" class="action btn-compare btn-views"
                        title="Thêm vào yêu thích" >
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns="http://www.w3.org/2000/svg" width="18" height="17"
                            viewBox="0 0 18 17" fill="none">
                            <path
                                d="M1.34821 8.7354C0.330209 5.77575 1.60274 2.00897 4.40225 1.2018C5.92926 0.663681 7.96523 1.20177 8.98323 2.81612C10.0012 1.20177 12.0372 0.663681 13.5642 1.2018C16.6182 2.27803 17.6363 5.77575 16.6183 8.7354C15.3458 13.3094 10.2557 16 8.98323 16C7.71073 15.7309 2.87522 13.5784 1.34821 8.7354Z"
                                stroke="#000" stroke-width="1.5px"
                                stroke-linecap="round" stroke-linejoin="round"
                                fill="none"></path>
                        </svg>
                    </a>
                    <input class="hidden" type="hidden" name="variantId"
                        value="79723741">
                    <button class="btn-add-cart btn-views" title="Mua ngay" type="button"
                        onclick="" data-id=${product.id}>
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink"
                              xmlns="http://www.w3.org/2000/svg" width="16" height="18"
                              viewBox="0 0 18 20" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M8.50001 1.75C6.98123 1.75 5.75001 2.98121 5.75001 4.5L5.75 8.83231C5.75 9.24652 5.41421 9.58231 5 9.58231C4.58579 9.58231 4.25 9.24652 4.25 8.8323L4.25001 4.49999C4.25001 2.15279 6.1528 0.25 8.50001 0.25H9.5C11.8472 0.25 13.75 2.15279 13.75 4.5V9C13.75 9.41421 13.4142 9.75 13 9.75C12.5858 9.75 12.25 9.41421 12.25 9V4.5C12.25 2.98122 11.0188 1.75 9.5 1.75H8.50001Z"
                                  fill="#000"></path>
                              <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M0.365475 9.71565C-0.271948 7.07673 2.13363 4.83729 4.68971 5.25515C7.6749 5.74315 10.2539 5.75778 13.3285 5.25915C15.8862 4.84435 18.3012 7.08619 17.6626 9.7297L15.8987 17.0323C15.5134 18.6275 14.0839 19.75 12.4423 19.75H5.58922C3.94759 19.75 2.5181 18.6275 2.13279 17.0323L0.365475 9.71565ZM4.44771 6.7355C2.82223 6.46977 1.46793 7.89121 1.82354 9.36346L3.59085 16.6801C3.81308 17.6001 4.63848 18.25 5.58922 18.25H12.4423C13.393 18.25 14.2184 17.6001 14.4407 16.6801L16.2046 9.37751C16.5607 7.90333 15.2 6.47523 13.5686 6.73981C10.3323 7.26466 7.59048 7.24926 4.44771 6.7355Z"
                                  fill="#000"></path>
                              <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M6.35724 12.9114C6.36263 12.4972 6.70276 12.1658 7.11694 12.1712L11.0098 12.2219C11.424 12.2273 11.7553 12.5674 11.7499 12.9816C11.7446 13.3958 11.4044 13.7271 10.9902 13.7217L7.09742 13.6711C6.68324 13.6657 6.35185 13.3256 6.35724 12.9114Z"
                                  fill="#000"></path>
                              <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M9.08863 10.2501C9.5028 10.2555 9.83419 10.5956 9.8288 11.0098L9.77812 14.9026C9.77273 15.3168 9.4326 15.6482 9.01843 15.6428C8.60425 15.6374 8.27286 15.2972 8.27825 14.8831L8.32893 10.9902C8.33432 10.5761 8.67445 10.2447 9.08863 10.2501Z"
                                  fill="#000"></path>
                        </svg>
                    </button>
                    <a title="Xem nhanh" href="#" class="quick-view btn-views" data-id=${product.id}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.3638 8.90944C13.0122 8.90944 12.7276 9.19411 12.7276 9.54567V11.8277L8.72278 7.82367C8.47389 7.57478 8.071 7.57478 7.82289 7.82367C7.574 8.07178 7.574 8.47467 7.82289 8.72356L11.8269 12.7283H9.54489C9.19333 12.7283 8.90867 13.013 8.90867 13.3646C8.90867 13.7161 9.19333 14.0008 9.54489 14.0008H13.363C13.7153 14 14 13.7146 14 13.3638V9.54567C14 9.19411 13.7153 8.90944 13.3638 8.90944Z"
                                fill="black"></path>
                            <path
                                d="M0.636222 5.09056C0.987778 5.09056 1.27244 4.80589 1.27244 4.45433V2.17311L5.27722 6.17711C5.40167 6.30156 5.56422 6.36378 5.72756 6.36378C5.89011 6.36378 6.05344 6.30156 6.17711 6.17711C6.426 5.929 6.426 5.52611 6.17711 5.27722L2.17311 1.27322H4.45511C4.80667 1.27322 5.09133 0.988556 5.09133 0.637C5.09056 0.284667 4.80589 0 4.45433 0H0.636222C0.284667 0 0 0.285444 0 0.636222V4.45433C0 4.80589 0.284667 5.09056 0.636222 5.09056Z"
                                fill="black"></path>
                            <path
                                d="M5.27722 7.82289L1.27244 11.8269V9.54489C1.27244 9.19333 0.987778 8.90867 0.636222 8.90867C0.284667 8.90944 0 9.19411 0 9.54567V13.3638C0 13.7153 0.285444 14 0.636222 14H4.45433C4.80589 14 5.09056 13.7153 5.09056 13.3638C5.09056 13.0122 4.80589 12.7276 4.45433 12.7276H2.17311L6.17711 8.72278C6.426 8.47389 6.426 8.071 6.17711 7.82289C5.929 7.574 5.52533 7.574 5.27722 7.82289Z"
                                fill="black"></path>
                            <path
                                d="M8.27244 6.36378C8.435 6.36378 8.59833 6.30156 8.722 6.17711L12.7268 2.17311V4.45511C12.7268 4.80667 13.0114 5.09133 13.363 5.09133C13.7153 5.09056 14 4.80589 14 4.45433V0.636222C14 0.284667 13.7146 0 13.3638 0H9.54567C9.19411 0 8.90944 0.284667 8.90944 0.636222C8.90944 0.987778 9.19411 1.27244 9.54567 1.27244H11.8277L7.82367 5.27722C7.57478 5.52611 7.57478 5.929 7.82367 6.17711C7.94733 6.30156 8.10989 6.36378 8.27244 6.36378Z"
                                fill="black"></path>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="product-info">
                <div class="lofi-product">
                    <div class="product-type">
                        ${product.title}
                    </div>
                </div>

                <h3 class="product-name">
                    <a href="#" title="${product.name}">
                        ${product.name}
                    </a>
                </h3>
                <div class="bottom-action">
                    <div class="price-box">
                        <span class="price">${product.price}&#8363</span>
                        <span class="compare-price">${product.comparePrice}</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    `;

        html_new += newCart;
    });

    cartProductNews.innerHTML = html_new;
}
// end render product

// ----------------------------------------------------------------

// add sp vào localStorage
let btnAddCarts = document.querySelectorAll(".btn-add-cart");
// console.log(btnAddCarts);

btnAddCarts.forEach((btnAddCart) => {
    btnAddCart.addEventListener("click", add);
    btnAddCart.addEventListener("click", showPopup);
    btnAddCart.addEventListener("click", hidePopup);
    btnAddCart.addEventListener("click", getDataLocal);
    btnAddCart.addEventListener("click", countItem);

});

function add(e) {
    e.preventDefault();
    // dùng closest() để fix lỗi của thẻ svg và thẻ path
    let id = e.target.closest(".btn-add-cart").dataset.id;
    let item = mocProductNewData.filter((element) => {
        if (element.id === Number(id)) {
            return element
        }
    })
    setItemInLocal('products', item[0])
    // để thêm phần tử đầu tiên trọng mảng (là 1 object) vô mảng của local
}
// end add sp

// -------------------------------------------------

// quickview-product
let quickViewProduct = document.querySelector("#quick-view-product");
let iconQuickViewClose = document.querySelector(".quickview-close");
let opacityQuickView = document.querySelector(".quickview-overlay:nth-child(1)");
let iconQuickViewOpens = document.querySelectorAll(".quick-view");

iconQuickViewOpens.forEach(function (item) {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        quickViewProduct.classList.remove("hide");
    });
});

opacityQuickView.addEventListener("click", (e) => {
    e.stopPropagation();
    quickViewProduct.classList.add("hide");
});

iconQuickViewClose.addEventListener("click", (e) => {
    e.stopPropagation();
    quickViewProduct.classList.add("hide");
});

// chi tiết sp
for (let i = 0; i < iconQuickViewOpens.length; i++) {
    let btn = iconQuickViewOpens[i];
    btn.addEventListener("click", renderDetails);
}

const modalDetail = document.querySelector(".quick-view-product .block-quickview")

function renderDetails(event) {
    event.preventDefault();
    let id = event.target.closest(".quick-view").dataset.id
    let element = mocProductNewData.find((item) => item.id === Number(id))
    let html = `
    
    <div class="row" data-id=${element.id}>
        <div class="product-left-column product-images col-xs-12 col-sm-4 col-md-4 col-lg-5 col-xl-6">
            <div class="image-block large-image col_large_default">
                <span class="view_full_size">
                    <a class="img-product" title="" href="javascript:;">
                        <img loading="lazy" src=${element.srcImg}
                            id="product-featured-image-quickview"
                            class="img-responsive product-featured-image-quickview" alt="quickview">
                    </a>
                </span>
                <div class="loading-imgquickview" style="display: none;"></div>
            </div>

            
        </div>

        <div class="product-center-column product-info product-item col-xs-12 col-sm-6 col-md-8 col-lg-7 col-xl-6 details-pro style_product style_border"
            id="product-29237797">

            <div class="head-qv group-status">
                <h3 class="qwp-name title-product"><a class="text2line"
                        href="/"
                        title="${element.name}">${element.name}</a></h3>
                <div class="vend-qv group-status">
                    <div class="left_vend">
                        <div class="first_status ">Thương hiệu:
                            <span class="vendor_ status_name">Đang cập nhật</span>
                        </div>
                        <span class="line_tt">|</span>
                        <div class="top_sku first_status">Mã sản phẩm:
                            <span class="sku_ status_name">Đang cập nhật</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="quickview-info">
                <span class="prices price-box">
                    <span class="price product-price sale-price on-sale">${element.price}</span>
                    <del class="old-price">${element.comparePrice}</del>
                </span>
            </div>

            <div class="product-description product-summary" style="display: none;">
                <div class="rte">

                </div>
            </div>

            <form action="/cart/add" method="post" enctype="multipart/form-data"
                class="quick_option variants form-ajaxtocart form-product" id="product-actions-29237797">
                <span class="price-product-detail d-none" style="opacity: 0;">
                    <span class=""></span>
                </span>
                <div class="selector-wrapper"><label>Màu sắc</label><select class="single-option-selector"
                        data-option="option1" id="product-select-29237797-option-0">
                        <option value="Đen">Đen</option>
                        <option value="Tím">Tím</option>
                    </select></div><select name="variantId" class="d-none" style="display:none"
                    id="product-select-29237797">
                    <option value="79723741">Đen</option>
                    <option value="79723743">Tím</option>
                </select>
                
                <div class="form_product_content">
                    <div class="count_btn_style quantity_wanted_p">
                        <div class=" soluong1 clearfix">
                            <span class="soluong_h">Số lượng:</span>
                            <div class="sssssscustom input_number_product">
                                <button class="btn_num num_1 button button_qty"
                                    onclick="var result = document.getElementById('quantity-detail'); var qtyqv = result.value; if( !isNaN( qtyqv ) && qtyqv > 1 ) result.value--;return false;">-</button>
                                <input type="text" id="quantity-detail" name="quantity" value="1"
                                    maxlength="2" class="form-control prd_quantity"
                                    onkeypress="if ( isNaN(this.value + String.fromCharCode(event.keyCode) )) return false;"
                                    onchange="if(this.value == 0)this.value=1;">
                                <button class="btn_num num_2 button button_qty"
                                    onclick="var result = document.getElementById('quantity-detail'); var qtyqv = result.value; if( !isNaN( qtyqv )) result.value++;return false;">+</button>
                            </div>
                        </div>
                        <div class="button_actions clearfix" data-id=${element.id}>
                            <button type="submit" data-id=${element.id}
                                class="btn-add-cart add_to_cart add_to_cart_detail">
                                <span class=" btn-content text_1" >Thêm vào giỏ hàng</span>
                            </button>
                        </div>
                    </div>
                </div>
                <input type="hidden" name="id" value="29237797">
            </form>
            <div class="product-promotion rounded-sm" id="lofi-salebox">
                <h3 class="product-promotion__heading rounded-sm d-inline-flex align-items-center">
                    <img loading="lazy" src="//bizweb.dktcdn.net/100/456/491/themes/864044/assets/icon-product-promotion.png?1679755116253"
                        data-src="//bizweb.dktcdn.net/100/456/491/themes/864044/assets/icon-product-promotion.png?1679755116253"
                        alt="lofi"
                        data-image="//bizweb.dktcdn.net/100/456/491/themes/864044/assets/icon-product-promotion.png?1679755116253"
                        width="22" height="22" class="mr-2">
                    Khuyến mại - ưu đãi
                </h3>
                <ul class="promotion-box">
                    <li>Đồng giá Ship toàn quốc 25.000đ</li>
                    <li>Hỗ trợ 10.000 phí Ship cho đơn hàng từ 200.000đ</li>
                    <li>Miễn phí Ship cho đơn hàng từ 300.000đ</li>
                    <li>Đổi trả trong 30 ngày nếu sản phẩm lỗi bất kì</li>
                </ul>
            </div>
        </div>
    </div>
    `
    modalDetail.innerHTML = html

    let iconPopupCartOpen = document.querySelector(".add_to_cart_detail");
    iconPopupCartOpen.addEventListener("click", add);
    iconPopupCartOpen.addEventListener("click", showPopup);
    iconPopupCartOpen.addEventListener("click", getDataLocal);
    iconPopupCartOpen.addEventListener("click", countItem);

    hidePopup();
    // end popup 
}
// end chi tiết sp


// ----------------------------------------------------------------

function hidePopup() {
    let popupCart = document.querySelector(".popup--cart");
    let iconPopupCartClose = document.querySelector(".cart_btn-close");
    let opacityPopupCart = document.querySelector(".popup--cart .quickview-overlay");

    opacityPopupCart.addEventListener("click", (e) => {
        e.preventDefault();
        popupCart.classList.add("hide");
    });

    iconPopupCartClose.addEventListener("click", (e) => {
        e.preventDefault();
        popupCart.classList.add("hide");
    });
}

function showPopup() {
    let popupCart = document.querySelector(".popup--cart");
    // let iconPopupCartOpens = document.querySelectorAll(".btn-add-cart");

    // e.preventDefault();
    popupCart.classList.remove("hide");
    quickViewProduct.classList.add("hide");

    // iconPopupCartOpen.addEventListener("click", (e) => {
    // e.preventDefault();
    // popupCart.classList.remove("hide");
    // quickViewProduct.classList.add("hide");
    // });
}

// ------------------------------------------------------------


// get data from local storage
function getDataLocal() {
    const orderItemData = getItemInLocal("products");

    let containerOrderList = document.querySelector("tbody");
    let arrayItem = [];
    let arrayProducts = ""
    let priceTotal = 0

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
            <input type="text" name="amountPro" id="count-${products[0].id}" value="${products.length}" maxlength="2"
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
// end get data

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


// checkout button
let checkoutbtn = document.querySelector(".cart__btn-proceed-checkout")
checkoutbtn.addEventListener("click", redirect)

function redirect() {
    let products = getItemInLocal("products")
    if (products.length > 0) {
        window.location.href = "../html/thanhtoan.html"
    }
}
// end checkout button





// btn backtop
let btnBackToTop = document.querySelector(".backtop");

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 300) {
        // sử dụng đk ( window.scrollY > 300 ) cũng tương tự
        btnBackToTop.classList.remove("hide")
    }
    else {
        btnBackToTop.classList.add("hide")
    }
});