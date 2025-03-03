// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
function lowQuantityProduct(inventory) {
  let minQuantity = inventory[0].quantity;
  let fruitName = inventory[0].name;
  for (let i=1; i < inventory.length; i++) {
      if (minQuantity > inventory[i].quantity) {
        minQuantity = inventory[i].quantity;
        fruitName = inventory[i].name;
      }
  }
  return `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${fruitName} ซึ่งมี ${minQuantity} ชิ้น`
}

console.log(lowQuantityProduct(inventory));