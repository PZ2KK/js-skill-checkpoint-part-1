// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
inventory[0].quantity = 200;
inventory.push({name: "Orange", price: 20, quantity: 300});

function sumPrice(product) {
  let totalPrice = 0;
  for (let fruit of product) {
    totalPrice += (fruit.price*fruit.quantity)
  }
  return `มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalPrice} บาท`
}

console.log(sumPrice(inventory));
