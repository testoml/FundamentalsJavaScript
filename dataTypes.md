# Data Types
JavaScript has several built-in data types that can be categorized into two main groups: primitive types and reference types. Here's an overview of each:

## Primitive Types
**Number**: Represents both integer and floating-point numbers. Special numeric values include Infinity, -Infinity, and NaN (Not-a-Number).
```js
let age = 25;
let price = 19.99;
let bigNumber = 1.23e6; // 1.23 * 10^6
```
**String**: Represents a sequence of characters. Strings are immutable. Can be defined using single quotes, double quotes, or backticks (template literals).
```js
let name = "Alice";
let greeting = 'Hello, world!';
let template = `Name: ${name}`;
```
**Boolean**: Represents logical entities. Can have only two values: true or false.
```js
let isAdmin = true;
let isLoggedIn = false;
```
**Undefined**: A variable that has been declared but not assigned a value has the value undefined.
```js
let x;
console.log(x); // undefined
```

**Null**: Represents the intentional absence of any object value.
```js
let y = null;
```
**Symbol**: A unique and immutable data type used as an identifier for object properties.
```js
let sym = Symbol('description');
```
**BigInt**:  Used for integers larger than the safe limit for Number (2^53 - 1). Created by appending n to the end of an integer or using BigInt constructor.
```js
let big = 1234567890123456789012345678901234567890n;
let big2 = BigInt("1234567890123456789012345678901234567890");
```
## Reference Types
**Object**: Used to store collections of data and more complex entities. Objects are mutable and can contain properties and methods.
```js
let person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello!");
    }
};
console.log(person.name); // "John"
person.greet(); // "Hello!"
```
**Array**: A special type of object used for storing ordered collections of data.
```js
let colors = ["red", "green", "blue"];
console.log(colors[0]); // "red"
```

**Function**:A special type of object designed to perform a specific task. Functions can be defined using function declarations, function expressions, or arrow functions.
```js
function add(a, b) {
    return a + b;
}
const subtract = function(a, b) {
    return a - b;
};
const multiply = (a, b) => a * b;
```
**Date**: Represents a single moment in time.
```js
let now = new Date();
console.log(now);
```
**RegExp**: Represents regular expressions, which are patterns used to match character combinations in strings.
```js
let pattern = /hello/i;
let result = pattern.test("Hello, world!");
console.log(result); // true
```
**Map**: A collection of keyed data items, similar to an object. However, keys can be of any type.
```js
let map = new Map();
map.set('name', 'John');
map.set(1, 'one');
console.log(map.get('name')); // "John"
```
**Set**: A collection of unique values.
```js
let set = new Set();
set.add(1);
set.add(2);
set.add(1); // Will not add 1 again
console.log(set.size); // 2

```
## Type Conversion
**Implicit Conversion**: JavaScript automatically converts types when performing certain operations.
```js
let result = "5" + 5; // "55" (string)
```
**Explicit Conversion**: Manually converting types using functions.

```js
let num = Number("123"); // 123 (number)
let str = String(123); // "123" (string)
let bool = Boolean(1); // true (boolean)
```
Understanding these data types and how they work is crucial for effective programming in JavaScript.
