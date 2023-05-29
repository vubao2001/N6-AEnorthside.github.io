const getCardsElm = document.getElementById("sectionCards")


const mockData =[
    {
        id:1,
        title:"Phụ kiện",
        description:"Ví nữ dài cầm tay 2 ngăn kéo nhiều ngăn tiện dụng",
        srcImg:"/img/imgsp1.webp",
        price: "159.000",
    },
    {
        id:2,
        title:"Phụ kiện",
        description:"Ví nữ cầm tay phong cách Hàn Quốc",
        srcImg:"./img/imgsp2.webp",
        price:"120.000",
        strike:"230.000",
    },
    {
        id:3,
        title:"Phụ kiện",
        description:"Ví nữ mini da mềm khoa vuông thời trang",
        srcImg:"./img/imgsp3.webp",
        price:"50.000",
        strike:"120.000"
    },
   
    {
        id:4,
        title:"Phụ kiện",
        description:"Túi xách đeo chéo da Pu đi dự tiệc du lịch",
        srcImg:"./img/imgsp4.webp",
        price:"300.000"
    },
    {
        id:10,
        title:"Phụ kiện",
        description:"Túi xách nữ họa tiết thời trang",
        srcImg:"./img/imgsp10.webp",
        price:"150.000",
        strike:"230.000",
    },
    {
        id:11,
        title:"Phụ kiện",
        description:"Túi xách nữ công sở",
        srcImg:"./img/imgsp11.webp",
        price:"120.000",
        strike:"200.000"
    },
    {
        id:12,
        title:"Phụ kiện",
        description:"Túi xách nữ vải dù chống nước cao cấp",
        srcImg:"./img/imgsp12.webp",
        price:"119.000",
        strike:"259.000",
    },
    {
        id:13,
        title:"Quần",
        description:"Quần short nữ kèm dây đai thanh lịch",
        srcImg:"./img/imgsp13.webp",
        price:"180.000"
    
    },
    {
        id:14,
        title:"Quần",
        description:"Quần short nữ cạp cao 4 cúc cạp chéo cách điệu",
        srcImg:"./img/imgsp14.webp",
        price:"100.000",
        strike:"165.000"
    },
    {
        id:15,
        title:"Quần",
        description:"Quần short đũi nữ",
        srcImg:"./img/imgsp15.webp",
        price:"90.000",
        strike:"160.000"
    },
    {
        id:16,
        title:"Quần",
        description:"Quần baggy kaki nữ",
        srcImg:"./img/imgsp16.webp",
        price:"90.000",
        strike:"150.000",
    },
    {
        id:17,
        title:"Quần",
        description:"Quần kaki nữ 9 tắc màu tím nhạt",
        srcImg:"./img/imgsp17.webp",
        price:"189.000",
    },
    {
        id:18,
        title:"Quần",
        description:"Quần kaki nữ co dãn cao cấp",
        srcImg:"./img/imgsp18.webp",
        price:"109.000",
        strike:"250.000"
    },
    {
        id:19,
        title:"Quần",
        description:"Quần baggy jeans nữ phong cách",
        srcImg:"./img/imgsp19.webp",
        price:0000,
    },
    {
        id:20,
        title:"Quần",
        description:"Quần jeans nữ thiêu hình chú mèo cao cấp",
        srcImg:"./img/imgsp20.webp",
        price:"400.000",
    },
    {
        id:21,
        title:"Áo",
        description:"Áo phông ,Thun nư form rộng",
        srcImg:"./img/imgsp21.webp",
        price:"109.000",
        strike:"199.000"
    },
    {
        id:22,
        title:"Áo",
        description:"Áo phông nữ màu hồng",
        srcImg:"./img/imgsp22.webp",
        price:"169.000",
    },
    {
        id:23,
        title:"Áo",
        description:"Áo phông nữ trơn",
        srcImg:"./img/imgsp23.webp",
        price:"90.000",
    },
    {
        id:24,
        title:"Áo",
        description:"Áo phông nữ cá tính in chữ",
        srcImg:"./img/imgsp24.webp",
        price:"120.000",
    },
    {
        id:25,
        title:"Áo",
        description:"Áo sơ mi nữ ngắn tay kiểu cổ lá sen",
        srcImg:"./img/imgsp25.webp",
        price:"149.000",
        strike:"250.000"
    },
    {
        id:26,
        title:"Đầm",
        description:"Đầm xuông linen tay lỡ hai túi bổ trước",
        srcImg:"./img/imgsp26.webp",
        price:"250.000",
    },
    {
        id:27,
        title:"Đầm",
        description:"Đầm suông nữ tặng kèm dây beo thắt",
        srcImg:"./img/imgsp27.webp",
        price:"129.000",
        strike:"250.000"
    },
    {
        id:28,
        title:"Đầm ",
        description:"Đầm xuông kèm dây thắt eo tà lệch",
        srcImg:"./img/imgsp28.webp",
        price:"199.000",
        strike:"350.000"
    },
    {
        id:29,
        title:"Đầm",
        description:"Đầm suông nữ sát lách dáng dài",
        srcImg:"./img/imgsp29.webp",
        price:"409.000",
        strike:"550.000"
    },
    {
        id:30,
        title:"Váy",
        description:"Chân váy ngắn chữ A thu đông",
        srcImg:"./img/imgsp30d.webp",
        price:"150.000",
        strike:"300.000"
    },
    {
        id:31,
        title:"Váy",
        description:"Đầm chữ A Kyeon Fashion cổ sơ mi",
        srcImg:"./img/imgsp31.webp",
        price:"330.000"
    },
    {
        id:32,
        title:"Váy",
        description:"Chân váy chữ A Emspo trang trí cúc",
        srcImg:"./img/imgsp32.webp",
        price:"320.000",
        strike:"0"
        
    },
    {
        id:33,
        title:"Váy",
        description:"Chân Váy A viên Trân buộc đai",
        srcImg:"./img/imgsp33.webp",
        price:"295.000",
        strike:"450.000"

    },
    {
        id:34,
        title:"Áo",
        description:"Áo kiểu nữ TonsonFashion xanh cổ tròn",
        srcImg:"./img/imgsp34.webp",
        price:"250.000",
        strike:"450.000"
    },
    {
        id:35,
        title:"Áo",
        description:"Áo kiểu nữ Quyên tay bồng nhún",
        srcImg:"./img/imgsp35.webp",
        price:"100.000",
        strike:"350.000"
    },
    {
        id:36,
        title:"Áo",
        description:"Áo sơ mi kiểu cổ tròn tay bèo rũ thời",
        srcImg:"./img/imgsp36.webp",
        price:"100.000",
        strike:"350.000",
    },


]
//Biến chung
let html = ""


// vong lap de in ra
for (let index = 0; index <10;index ++)
{
    const card = `
    <div class="d-flex flex-wrap" id="sectionCards">
    <img src=${mockData[index].srcImg} alt="...">
    <div class="">
      <h5 class="card-title">${mockData[index].title}</h5>
      <a href ="" class="text-decoration-none">
      <p class="card-text">${mockData[index].description}</p>
      </a>
      <span>
      <p class=card-strike><strike>${mockData[index].strike}</strike> <i class="fa-solid fa-dong-sign"></i></p>
      <p class="card-price">${mockData[index].price}  <i class="fa-solid fa-dong-sign"></i></p>
      </span>
  </div>
  </div>
  </div>
  
   
    `
    html += card

    
}
console.log(mockData.length)
getCardsElm.innerHTML = html
console.log('html',html)



