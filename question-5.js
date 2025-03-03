// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(products, promotionCode) {
  let sumPrice = 0;
  let discount = 1;
  //ราคาสินค้าทั้งหมด
  for (let value of products) {
    sumPrice += (value.price*value.quantity);
  }
  //คำนวณส่วนลด
  if (promotionCode === "SALE20") {
    discount = 0.8;
  } else if (promotionCode === "SALE50") {
    discount = 0.5;
  }
  return sumPrice*discount
}

console.log(calculateTotalPrice(products, ""))