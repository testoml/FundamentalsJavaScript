# Fundamentals of Java Script

## Variables and Data types
In JavaScript, variables are used to store data that can be manipulated and referenced in a program. Variables in JavaScript are declared using the keywords var, let, or const

### Declaring Variables
```js
let num1 = 42;
let num2 = 3.14;

// String
let firstName = "John";
let lastName = 'Doe';
let fullName = `${firstName} ${lastName}`;

// Boolean
let isAvailable = true;
let isExpired = false;

// Undefined
let user;
console.log(user); // undefined

// Null
let response = null;

// Symbol
let id = Symbol('id');

// BigInt
let bigNumber = 12345678901234567890n;

// Object
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

// Array
let fruits = ["apple", "banana", "cherry"];

// Function
function add(a, b) {
    return a + b;
}

// Date
let currentDate = new Date();

// RegExp
let regex = /hello/;

// Error
let error = new Error("An error occurred");
```
