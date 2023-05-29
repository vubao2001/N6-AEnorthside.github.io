import { mocProductNewData } from "../data/data_index.js";


const cartProductNews = document.querySelector(".product_new--item");

let html_product = "";

mocProductNewData.forEach((product) => {
  let newCart = `
        <div class="col-6 col-md-4">
        <div class="product-new-slide product-action" data-id=${product.id}
        style=" width: 255px; ">
        <div class="item__product--main ">

            <div class="product-thumbnail sale " data-sale="${product.sale}%">
                <a class="image_thumb" href="#"
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
        </div>
    `;

  html_product += newCart;
});

cartProductNews.innerHTML = html_product;

let btnAddCarts = document.querySelectorAll(".btn-add-cart");
console.log(btnAddCarts);