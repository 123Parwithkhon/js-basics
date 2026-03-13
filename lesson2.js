// const numbers = [1,2,3,4,5];
// const names = ['Alice', 'Bob', 'Charlie'];

// console.log(names[0]);
// console.log(names[2]);

// console.log(names.length);

// const prices = [100, 200, 300, 500];
// const double = prices.map((price) => price * 2);
// console.log(prices);
// console.log(double);


// const users = [
//   {id: 1, name: 'Alex', age: 25},
//   {id: 2, name: 'Maria', age: 30},
//   {id: 3, name: 'Ivan', age: 17},
// ];

// const names = users.map((user) => user.name);
// console.log(names);

// const sols = users.map((sol) => sol.age);
// console.log(sols);

// const usersWithRole = users.map((user) => ({
//   ...user,
//   role: "viewer",
// }));
// console.log(usersWithRole);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const noeven = numbers.filter((n) => n%2 !== 0);
// console.log(noeven);

// const even = numbers.filter((n) => n%2 === 0);
// console.log(even);

// const users =[
//   {id: 1, name: 'alex', age: 25, active: true},
//   {id: 2, name: 'mariya', age: 30, active: false},
//   {id: 3, name: 'ivan', age: 17, active: true},
//   {id: 4, name: 'sasha', age: 20, active: false},
// ];

// const activeUsers = users.filter((user) => user.active);
// console.log(activeUsers);

// const sover = users.filter((user) => user.age >= 18);
// console.log(sover);

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, current) => {
//   return accumulator + current;
// }, 2);
// console.log(sum);

// const cart = [
//   {name: 'Telefon', price: 500, quantity: 1},
//   {name: 'Chexol', price: 20, quantity: 2},
//   {name: 'Steklo', price: 10, quantity: 3},
// ];

// const total = cart.reduce((sum, item) => {
//   return sum + item.price * item.quantity;
// }, 0);
// console.log(total);

// const users =[
//   {id: 1, name: 'alex', age: 25, active: true},
//   {id: 2, name: 'mariya', age: 30, active: false},
//   {id: 3, name: 'ivan', age: 17, active: true},
//   {id: 4, name: 'oleg', age: 22, active: true},
// ];

// const result = users.filter((user) => user.active).filter((user) => user.age>=18)
// .map((user) => user.name);

// console.log(result);
// -------------------
const products = [
  { id: 1, name: 'Notebook', price: 1200, inStock: true},
  {id: 2, name: 'telefon', price: 800, inStock: false},
  {id: 3, name: 'planshet', price: 600, inStock: true},
  {id: 4, name: 'monitor', price: 400, inStock: true},
  {id: 5, name: 'mishka', price: 50, inStock: false },
];
// 1
// const filt = products.filter((prods) => prods.inStock);
// console.log(filt);

// // 2
// const names = products.map((name) => name.name);
// console.log(names);

// // 3
// const skid = products.map((skids) =>  ({
//   ...skids,
//   price: skids.price * 0.9,
// }));
// console.log(skid);

// // 4
// const totals = products.filter((total) => total.inStock).reduce((quantity, total) => {
//   return quantity + total.price;
// }, 0);
// console.log(totals);

// // 5
// const doroje = products.filter((dor) => dor.price > 500 && dor.inStock).map((dor) => dor.name);
// console.log(doroje);

// 6
const dopol = products
  .filter((dop) => dop.inStock)
  .map((dop) => ({
    name: products.name,
    price: dop.price * 0.9,
  }));

console.log(dopol);