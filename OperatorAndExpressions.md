
# Operator and Expressions
In JavaScript, operators are used to perform operations on variables and values, and expressions combine variables and values using operators to produce new values. Here's a comprehensive overview of the different types of operators and expressions in JavaScript:

## Types of Operators
### Arithmetic Operators
Used to perform arithmetic on numbers.
```js
let a = 10;
let b = 5;
console.log(a + b); // 15 (Addition)
console.log(a - b); // 5 (Subtraction)
console.log(a * b); // 50 (Multiplication)
console.log(a / b); // 2 (Division)
console.log(a % b); // 0 (Modulus)
console.log(a ** b); // 100000 (Exponentiation)
```
### Assignment Operators
Used to assign values to variables.
```js
let x = 10;  // = (Assignment)
x += 5;     // x = x + 5 (Addition assignment)
x -= 3;     // x = x - 3 (Subtraction assignment)
x *= 2;     // x = x * 2 (Multiplication assignment)
x /= 2;     // x = x / 2 (Division assignment)
x %= 3;     // x = x % 3 (Modulus assignment)
x **= 2;    // x = x ** 2 (Exponentiation assignment)
```
### Comparison Operators
Used to compare two values and return a boolean result.

```js
let a = 10;
let b = 5;
console.log(a == b);  // false (Equal to)
console.log(a === b); // false (Strict equal to)
console.log(a != b);  // true (Not equal to)
console.log(a !== b); // true (Strict not equal to)
console.log(a > b);   // true (Greater than)
console.log(a < b);   // false (Less than)
console.log(a >= b);  // true (Greater than or equal to)
console.log(a <= b);  // false (Less than or equal to)
```

### Logical Operators
Used to combine multiple boolean expressions.
```js
let a = true;
let b = false;
console.log(a && b); // false (Logical AND)
console.log(a || b); // true (Logical OR)
console.log(!a);     // false (Logical NOT)
```

### Bitwise Operators
Perform bitwise operations on binary representations of numbers.

```js
let a = 5;  // 0101 in binary
let b = 3;  // 0011 in binary
console.log(a & b);  // 1 (Bitwise AND)
console.log(a | b);  // 7 (Bitwise OR)
console.log(a ^ b);  // 6 (Bitwise XOR)
console.log(~a);     // -6 (Bitwise NOT)
console.log(a << 1); // 10 (Left shift)
console.log(a >> 1); // 2 (Right shift)
console.log(a >>> 1);// 2 (Zero-fill right shift)
```
### String Operators
Used to concatenate strings.

```js
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // John Doe (Concatenation)
```
### Conditional (Ternary) Operator
A shorthand for the if-else statement.
Syntax: condition ? exprIfTrue : exprIfFalse
```js
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No"; // Yes
```

## Type Operators
Used to check the type of a variable or to convert one type to another.

```js
console.log(typeof 123);       // number
console.log(typeof "Hello");   // string
console.log(typeof true);      // boolean
console.log(typeof undefined); // undefined
console.log(typeof null);      // object (special case)
console.log(typeof {});        // object
console.log(typeof []);        // object
console.log(typeof function(){}); // function
```

## Expressions
Expressions are combinations of values, variables, operators, and functions that evaluate to a value. They can be classified as:

### Arithmetic Expressions
```js
let result = (5 + 3) * 2; // 16
String Expressions
```
```js
let greeting = "Hello, " + "world!"; // "Hello, world!"
```

### Logical Expressions
```js
let isAdult = (age >= 18) && (age < 60); // true or false
```

### Assignment Expressions
```js
let x = 10;
let y = x + 5; // 15
```
### Function Expressions
```js
let square = function(n) {
    return n * n;
};
let result = square(4); // 16
```

### Compound Expressions
Expressions can be combined to form more complex expressions:

```js
let x = 5;
let y = 10;
let z = (x + y) * (x - y); // -75
let isEqual = (x === y) && (typeof x === 'number'); // false
let message = "The result is: " + z; // "The result is: -75"
```
