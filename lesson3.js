// const user = {
//   name: "Alex",
//   age: 25,
//   email: "alex@mail.com",
//   isActive: true,
// };

// console.log(user.name);
// console.log(user['name']);

// user.role = "admin",
// console.log(user.role);

// delete user.isActive;
// console.log(user.isActive);

// console.log("name" in user);
// console.log("phone" in user);

// const{name, age, email} = user;
// console.log(name);
// console.log(age);
// console.log(email);

// const {name: userName, age: userAge} = user;
// console.log(userName);
// console.log(userAge);

// const getUserInfo = ({name, age}) => {
//   return name + ', ' + age + ' let';
// };

// console.log(getUserInfo(user));

const user = {name: "Alex", age: 25};

// const userCopy = {...user};
// userCopy.name = "Mariya";

// console.log(user.name);
// console.log(userCopy.name);

// const defaults = {role: 'viewer', isActive: true};
// const newUser = {name: "Ivan", age: 30};

// const fullUser = {...defaults, ...newUser};
// console.log(fullUser);

// const updatedUser = {...user, age: 123};
// console.log(updatedUser);
// console.log(user.age);

// const colors = ['red', 'green', 'blue'];
// const [first, second, third] = colors;
// console.log(first);
// console.log(second);
// console.log(third);

// const [, , last] = colors;
// console.log(last);

// const [a, b,c, d = 'yellow']= colors;
// console.log(d);

// const order = {
//   id: 1,
//   user: {
//     name: 'alex',
//     address: {
//       city: 'Moskva',
//       street: 'Lenin 3',
//     },
//   },
//   total: 1400,
// };

// console.log(order.user.address.city);

// const {user: {name, address: {city}}} = order;
// console.log(name);
// console.log(city);

// console.log(order.user?.phone?.number);

// const updatedUser = {...user, age: 30};
// console.log(user.age);
// console.log(updatedUser.age);

const orders = [
{
  id: 1,
  user: {name: "Alex", city: "Moskva"},
  items: [
    {product: "Notebook", price: 1200, quantity: 1},
    {product: "Mishka", price: 50, quantity: 2},
  ],
  isCompleted: true,
},
{
  id: 2,
  user: {name: "Mariya", city: "Piter"},
  items: [
    {product: "Telefon", price: 800, quantity: 1},
  ],
  isCompleted: false,
},
{
  id: 3,
  user: {name: "Ivan", city: "Moskva"},
  items: [
    {product: "Planshet", price: 600, quantity: 1},
    {product: "Chexol", price: 30, quantity: 3},
  ],
  isCompleted: true,
},
];

// Задание 1 — деструктуризация
// Напиши функцию getOrderInfo(order).
// Используй деструктуризацию внутри функции.
// Верни строку: "Заказ #1 — Алекс (Москва)"

console.log("Задание 1");
const getOrderInfo =  ({ id, user:{name, city} }) =>{
  return `Заказ #${id} - ${name} (${city})`;
};

console.log(getOrderInfo(orders[0]));
console.log(getOrderInfo(orders[1]));

// Задание 2 — map + деструктуризация
// Получи массив строк по всем заказам:
// ["Заказ #1 — Алекс (Москва)", "Заказ #2 — Мария (Питер)", ...]

console.log("Задание 2");
const orderInfoList = orders.map(getOrderInfo);
console.log(orderInfoList);

// Задание 3 — reduce + вложенные объекты
// Посчитай общую сумму всех заказов.
// Каждый заказ = сумма (price * quantity) по всем items.
// Ответ: 2560

console.log("Задание 3");
const totalSum = orders.reduce((sum, order) => {
  const orderSum = order.items.reduce((itemSum, item) => {
    return itemSum + item.price * item.quantity;
  }, 0);
  return sum + orderSum;
}, 0);

console.log(totalSum);

// Задание 4 — filter + spread
// Получи массив выполненных заказов (isCompleted: true),
// добавь каждому поле status: "done".
// Оригинальный массив не должен измениться.

console.log("Задание 4");
const filt = orders.filter((prods) => prods.isCompleted).map((prod) => ({...prod, status: "done"}));
console.log(filt);  

// Задание 5 — сложнее
// Получи список уникальных городов из всех заказов.
// Ответ: ["Москва", "Питер"]

console.log("Задание 5");
const cities = orders.map((order) => order.user.city);
// console.log(cities);

const unique = [...new Set(cities)];
console.log(unique);