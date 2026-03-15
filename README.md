# JS Basics

JavaScript fundamentals practice — functions, arrays, objects and classes.

## Topics Covered

- **Lesson 1** — Functions, arrow functions, default parameters
- **Lesson 2** — Arrays: map, filter, reduce, chaining
- **Lesson 3** — Objects, destructuring, spread operator, Set
- **Lesson 4** — Classes, inheritance, getters, setters, static methods

## Code Examples

### Functions

```js
const calculateDiscount = (price, discountPercent) =>
  price - (price * discountPercent) / 100;
calculateDiscount(1000, 20); // 800
```

### Classes

```js
class BankAccount {
  constructor(owner, balance = 0) {
    this._owner = owner;
    this._balance = balance;
  }
  deposit(amount) {
    this._balance += amount;
    return `Deposited $${amount}. Balance: $${this._balance}`;
  }
}
```

## What I Learned

- How to write clean and readable functions
- Array methods for real data manipulation
- Object destructuring and spread patterns
- OOP principles: encapsulation, inheritance

## Author

**123Parwithkhon** — [GitHub](https://github.com/123Parwithkhon)
