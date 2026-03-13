// class User{
//   constructor(name, age, email){
//     this.name = name;
//     this.age = age;
//     this.email = email;
//   }

//   greet(){
//     return `Hello, my name is ${this.name}!`;
//   }

//   isAdult(){
//     return this.age >= 18;
//   }

//   getInfo(){
//     return `${this.name} (${this.age}) - ${this.email}`;
//   }
// }

// const alex = new User('Alex', 25, 'alex@email.com');
// const maria = new User('Mariya', 13, 'mariya@gmail.com');

// console.log(alex.greet());
// console.log(alex.isAdult());
// console.log(maria.isAdult());
// console.log(alex.getInfo());
// console.log(maria.getInfo());

// class User{
//   constructor(name){
//     this.name = name;
//   }

//   greet(){
//     return `Hello, my name is ${this.name}!`;
//   }
// }

// const alex = new User('Alex');
// const maria = new User('Mariya');

// console.log(alex.greet());
// console.log(maria.greet());



// ## 🧪 Мини-задание

// Напиши в `lesson4.js` класс `Product`:
// ```
// Поля:
//   name     — название товара
//   price    — цена
//   inStock  — есть в наличии (boolean)

// Методы:
//   getInfo()        — возвращает строку: "Ноутбук — $1200"
//   isAvailable()    — возвращает "В наличии" или "Нет в наличии"
//   applyDiscount(percent) — возвращает цену со скидкой

// Проверь так:
// const laptop = new Product("Ноутбук", 1200, true);
// const phone  = new Product("Телефон", 800, false);

// console.log(laptop.getInfo());           // Ноутбук — $1200
// console.log(laptop.isAvailable());       // В наличии
// console.log(phone.isAvailable());        // Нет в наличии
// console.log(laptop.applyDiscount(10));   // 1080

// class Product{
//   constructor(name, price, inStock){
//     this.name = name;
//     this.price = price;
//     this.inStock = inStock;
//   }

//   getInfo(){
//     return `${this.name} - $${this.price}`;
//   }

//   isAvailable(){
//     return this.inStock ? `${this.name} - в наличии` : `${this.name} - Нет в наличии`;
//   }

//   applyDiscount(percent){
//     return this.price * (1 - percent / 100);
//   }
// }

// const laptop = new Product('Laptop', 2000, true);
// const phone = new Product('Phone', 800, false);

// console.log(laptop.getInfo());
// console.log(laptop.isAvailable());
// console.log(phone.isAvailable());
// console.log(laptop.applyDiscount(20));

// class Product{
//   constructor(name, price, inStock){
//     this.name = name;
//     this.price = price;
//     this.inStock = inStock;
//   }
//   getInfo(){
//     return `${this.name} - $${this.price}`;
//   }

//   isAvailable(){
//     return this.inStock ? "В наличии" : "Нет в наличии";
//   }

//   applyDiscount(percent){
//     return this.price * (1 - percent / 100);
//   }
// }

// class PremiumProduct extends Product{
//     constructor(name, price, inStock, warranty){
//       super(name, price, inStock);
//       this.warranty = warranty;
//     }

//     getInfo(){
//       return `${this.name} - $${this.price} (Гарантия: ${this.warranty} лет)`;
//     }

//     getWarrantyInfo(){
//       return `Гарантия на ${this.name}: ${this.warranty} ${this.warranty === 1 ? "год" : "года" }`;
//     }
// }

// const laptop = new Product('Laptop', 1200, true);
// const premiumLaptop = new PremiumProduct("MacBook", 2500, true, 2);

// console.log(laptop.isAvailable());
// console.log(premiumLaptop.applyDiscount(10));

// console.log(laptop.getInfo());
// console.log(premiumLaptop.getInfo());

// console.log(premiumLaptop.getWarrantyInfo());

// class DigitalProduct extends Product{
//   constructor(name, price, inStock, downloadUrl){
//     super(name, price, inStock);
//     this.downloadUrl = downloadUrl;
//   }

//   getDownloadInfo(){
//     return `Скачать ${this.name}: ${this.downloadUrl}`;
//   }

//   isAvailable(){
//     return this.inStock ? "Доступно для скачивания" : "Недоступно для скачивания";
//   }
// }

// class PhysicalProduct  extends Product{
//   constructor(name, price, inStock, weight ){
//     super(name, price, inStock);
//     this.weight = weight;
//   }
//   getShippingCost(){
//     if(this.weight <= 1) return "$5";
//     if(this.weight <= 5) return "$10";
//     return "$20";
//   }
// }

// const photoshop = new DigitalProduct("Photoshot", 55, true, "https://adobe.com/download");
// const tv = new PhysicalProduct("Телевизор", 800, true, 12);
// const book = new PhysicalProduct("Книга", 15, true, 0.5);

// console.log(photoshop.getInfo());
// console.log(photoshop.isAvailable());
// console.log(photoshop.getDownloadInfo());

// console.log(tv.getInfo());
// console.log(tv.getShippingCost());
// console.log(book.getShippingCost());

class Product{
  constructor(name, price){
    this.name = name;
    this._price = price;
  }
  
  get price(){
    return `$${this._price}`;
  }

  set price(value){
    if(value < 0){
      console.log("Ошибка: цена не может быть отрицательной");
      return;
    }
    this._price = value;
  }
}

const laptop = new Product("Ноутбук", 1200);

console.log(laptop.price);
laptop.price = 1500;
laptop.price = -500;
console.log(laptop.price);

class MathHelper{
  static add(a, b){
    return a + b;
  }

  static percentage(value, percent){
    return value * (percent / 100);
  }
}

console.log(MathHelper.add(10, 5));
console.log(MathHelper.percentage(1200, 10));

class BankAccount{
  constructor(owner, balance = 0){
    this._owner = owner;
    this._balance = balance;
  }

  get balance(){
    return `$${this._balance}`;
  }

  get formattedOwner(){
    return this.owner.toUpperCase();
  }

  get owner(){
    return this._owner;
  }

  set owner(value){
    
    if(typeof value !== "string" || value.trim() === ""){
      console.log("Ошибка: имя не может быть пустым");
      return;
    }
    this._owner = value;
  }

  set balance(value){
    if (value < 0){
      console.log("Ошибка: баланс не может быть отрицательным");
      return;
    }
    this._balance = value;
  }

  deposit(amount){
    this._balance += amount;
    return `${this.owner} Пополнено на $${amount}. Баланс: ${this.balance}`;
  }

  withdraw(amount){
    if(amount > this._balance){
      return "Недостаточно средств";
    }
    this._balance -= amount;
    return `${this.owner} Снято $${amount}. Баланс: ${this.balance}`;
  }

  getInfo(){
    return `${this.owner}: ${this.balance}`;
  }

  static compareBalances(account1, account2){
    if(account1._balance > account2._balance){
      return `${account1.owner} богаче`;
    }
    if(account2._balance > account1._balance){
      return `${account2.owner} богаче`;
    }
    return "Балансы равны";
  }

  static createSavingsAccount(owner){
    return new BankAccount(owner, 100);
  }
}

const alex = new BankAccount("Alex", 1000);
const mariya = new BankAccount("Mariya", 500);

console.log(alex.deposit(200));     
console.log(alex.withdraw(300));   
console.log(alex.withdraw(2000)); 
console.log(alex.getInfo());      
console.log(BankAccount.compareBalances(alex, mariya));

const ivan = BankAccount.createSavingsAccount("Ivan");
console.log(ivan.getInfo());
console.log(ivan.formattedOwner);

ivan.owner = "";
ivan.owner = "Иван Иванов";
console.log(ivan.formattedOwner);