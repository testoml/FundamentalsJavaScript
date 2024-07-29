# Data Types
JavaScript has several built-in data types that can be categorized into two main groups: **primitive** types and **reference types**. Here's an overview of each:

## Primitive Types
 A primitive literal is a value, with no wrapper or properties of its own. Primitive literals are immutable, meaning they can't be changed to represent other values in the same way that JavaScript's more complex object-based data structures can.
**Number**: Represents both integer and floating-point numbers. Special numeric values include Infinity, -Infinity, and NaN (Not-a-Number).
```js
let age = 25;
let price = 19.99;
let bigNumber = 1.23e6; // 1.23 * 10^6
```
If a value can't be converted, as in the case of undefined or a string containing non-numeric characters, the Number function returns NaN:
```js
Number( undefined );
//> NaN

Number( "The number 3." );
//> NaN
```
**String**: Represents a sequence of characters. Strings are immutable. Can be defined using single quotes, double quotes, or backticks (template literals).Values that result in false include 0, null, undefined, NaN, an empty string (""), an omitted value, and a false boolean. All other values result in true.
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
| Although `undefined` and `null` have some functional overlap, they have different purposes. In the strictest sense, `null` represents a value intentionally defined as "blank," and `undefined` represents a lack of any assigned value.
**Symbol**: A unique and immutable data type used as an identifier for object properties.
```js
let sym = Symbol('description');
```
There are three types of symbols:
- Symbols created with Symbol()
- Shared symbols that are set and retrieved from a global Symbol registry using Symbol.for()
- "Well-known symbols" defined as static properties on the Symbol object. These symbols contain internal methods that can't be accidentally overwritten.

**BigInt**:  Used for integers larger than the safe limit for Number (2^53 - 1). Created by appending n to the end of an integer or using BigInt constructor.  Most importantly, you can't mix BigInt and Number primitives in standard arithmetic operations.
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
