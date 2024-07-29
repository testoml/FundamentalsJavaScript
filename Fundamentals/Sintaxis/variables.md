# Variables
In JavaScript, variables are used to store data values. Here are the basics of declaring and using variables in JavaScript:

## Declaring Variables
You can declare variables using three keywords: var, let, and const.

- `var`: This keyword is used to declare a variable that has function scope. It is hoisted to the top of its function scope.
- `let`: This keyword is used to declare a block-scoped variable. It is also hoisted but not initialized until the declaration is encountered.
- `const`: This keyword is used to declare a block-scoped variable with a constant value. The value cannot be reassigned.
```js
var x = 10;
console.log(x); // 10

let y = 20;
console.log(y); // 20

const z = 30;
console.log(z); // 30
// z = 40; // This will cause an error
```

## Variable Scope
`Global Scope`: A variable declared outside any function is in the global scope and can be accessed from anywhere in the code.

```js
var globalVar = 'I am global';
function test() {
    console.log(globalVar); // 'I am global'
}
test();
```

`Function Scope`: A variable declared inside a function using `var` is in the function scope and cannot be accessed outside the function.

```
function test() {
    var functionVar = 'I am local';
    console.log(functionVar); // 'I am local'
}
test();
// console.log(functionVar); // This will cause an error
```
`Block Scope`: Variables declared with let or const inside a block {} are limited to that block.
```
if (true) {
    let blockVar = 'I am block scoped';
    const blockConst = 'I am also block scoped';
    console.log(blockVar); // 'I am block scoped'
    console.log(blockConst); // 'I am also block scoped'
}
// console.log(blockVar); // This will cause an error
// console.log(blockConst); // This will cause an error
```

## Hoisting
Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope before code execution. This means that you can use variables and functions before they are declared.

`var` variables are hoisted but initialized with undefined.
```js
console.log(a); // undefined
var a = 5;
console.log(a); // 5
```
`let` and `const` variables are hoisted but not initialized. Accessing them before declaration results in a ReferenceError.

```
console.log(b); // ReferenceError
let b = 10;
console.log(b); // 10
```

## Best Practices
- Use let and const instead of var to avoid hoisting issues and for better block scoping.
- Use const for variables that should not be reassigned.
- Use meaningful variable names to make your code more readable and maintainable.

### Example
Here’s an example of using variables in a function:

```
function calculateArea(radius) {
    const pi = 3.14159;
    let area = pi * radius * radius;
    return area;
}

let radius = 5;
let area = calculateArea(radius);
console.log(`The area of the circle is ${area}`); // The area of the circle is 78.53975
```
This example demonstrates declaring variables with const and let, using them in calculations, and returning the result.
