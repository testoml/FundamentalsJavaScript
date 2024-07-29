# Funtions Declarations
In JavaScript, there are several ways to declare a function. Here are the most common methods:

## Function Declaration
A function declaration defines a named function. The function can be called before it's defined in the code because of hoisting.

```JS
function greet(name) {
    return `Hello, ${name}!`;
}
```

## Function Expression
A function expression defines a function as part of a larger expression syntax (typically a variable assignment). Function expressions are *not hoisted*, so they cannot be called before they are defined.
```JS
const functionName = function(parameters) {
    // function body
};
//Example
const greet = function(name) {
    return `Hello, ${name}!`;
};

```
## Arrow Function
Arrow functions are a shorthand way to write function expressions. They do not have their own this, arguments, super, or new.target bindings. They are best suited for non-method functions.

```js
const functionName = (parameters) => {
    // function body
};
//Example

const greet = (name) => {
    return `Hello, ${name}!`;
};
```
If the function body has only one expression, you can omit the curly braces and the return statement:
```js
const greet = name => `Hello, ${name}!`;
```
## Anonymous Function
An anonymous function is a function without a name. These are typically used in situations where the function is used only once, such as in a callback or immediately invoked function expressions (IIFE).
```js
setTimeout(function() {
    console.log('This will run after 1 second');
}, 1000);
```
## IIFE:
```JS
(function() {
    console.log('This runs immediately');
})();
```

## Named Function Expression
A named function expression is similar to an anonymous function, but the function has a name. This name is only available within the function itself.

```JS
const factorial = function fact(n) {
    return n <= 1 ? 1 : n * fact(n - 1);
};
```
Each of these function declaration methods has its own use cases and advantages, depending on the requirements of the code you are writing.