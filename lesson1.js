// function greet(name){
//   return "Hello, " + name + "!";
// }
// console.log(greet('Alice'));

// const greetExpression = function(name){
//   return "Hello, " + name + "!";
// }
// console.log(greetExpression('Bob'));

// const greetArrow = (name) => {
//   return "Hello, " + name + "!";
// }
// console.log(greetArrow`Charlie`);

// const greetShot = (name) => "Hello, " + name + "!";
// console.log(greetShot('Dave'));

// const double = (n) => n*2;
// console.log(double(5));

// const getUser = (name) => ({name: name});
// console.log(getUser('Ala'));

// Задание 1.
const calculateDiscount = (price, discountPercent) => price - ((price * discountPercent) / 100);
console.log(calculateDiscount(1000, 20));
console.log(calculateDiscount(500, 10));

// Задание 3.
const isAdult = (age) => age >= 18;

console.log(isAdult(17));
console.log(isAdult(22));

const result = isAdult(25);
if(result){
  console.log('Доступ разрешён');
}

// Задание 2.
const formatName = (firstName, lastName = "")=>{
  if(lastName){
    return firstName + " " + lastName;
  }
    return firstName;
}

console.log(formatName("Иван", "Иванов"));
console.log(formatName("Иван"));