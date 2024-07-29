# Function expressions

Function expressions in JavaScript involve defining a function as part of a larger expression, typically by assigning it to a variable. Unlike function declarations, function expressions are not hoisted, meaning they cannot be called before they are defined in the code. Here are some common forms of function expressions:

## Anonymous Function Expression
An anonymous function expression is a function without a name, assigned to a variable:

```JS
const greet = function(name) {
    return `Hello, ${name}!`;
};
```

## Named Function Expression
A named function expression includes a name for the function. This name is local to the function's body and can be used for recursive calls or for debugging purposes.
```JS
const factorial = function fact(n) {
    return n <= 1 ? 1 : n * fact(n - 1);
};
```
## Arrow Function Expression
Arrow functions provide a concise syntax and do not have their own this, arguments, super, or new.target bindings. They are often used for non-method functions.
```JS
const greet = (name) => {
    return `Hello, ${name}!`;
};

// For a single expression, the curly braces and return statement can be omitted:
const greet = name => `Hello, ${name}!`;
```
## Immediately Invoked Function Expression (IIFE)
An IIFE is a function expression that is defined and immediately executed. This is useful for creating a local scope to avoid polluting the global namespace.
```JS
(function() {
    console.log('This runs immediately');
})();

(() => {
    console.log('This also runs immediately');
})();
```

Example Use Cases for Function Expressions
Callbacks: Function expressions are commonly used as callback functions for array methods, event handlers, and asynchronous operations.

javascript
Copy code
setTimeout(function() {
    console.log('This runs after 1 second');
}, 1000);

const numbers = [1, 2, 3, 4];
const squares = numbers.map(function(num) {
    return num * num;
});
Closures: Function expressions can create closures, which are functions that capture variables from their containing scope.

javascript
Copy code
function makeCounter() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
Encapsulation: IIFEs are used to encapsulate code and create a private scope.

javascript
Copy code
const module = (function() {
    const privateVar = 'I am private';
    return {
        publicMethod: function() {
            return privateVar;
        }
    };
})();

console.log(module.publicMethod()); // 'I am private'
console.log(module.privateVar); // undefined
Function expressions provide flexibility and are a powerful feature in JavaScript for managing scope, creating closures, and writing concise and expressive code.