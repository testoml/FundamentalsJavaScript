# Control Flow
Control flow in JavaScript refers to the order in which the statements are executed in a program. JavaScript offers several control flow statements that allow you to conditionally execute blocks of code, iterate over data, and manage the flow of your program. Here’s an overview of the main control flow statements:

## Conditional Statements
1. if Statement
The if statement executes a block of code if a specified condition is true.

```js
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
}
```
2. if...else Statement
The if...else statement provides an alternative block of code to execute if the condition is false.

```js
let age = 16;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
```
3. else if Statement
The else if statement allows you to test multiple conditions sequentially.

```js
let age = 18;
if (age < 13) {
    console.log("You are a child.");
} else if (age < 20) {
    console.log("You are a teenager.");
} else {
    console.log("You are an adult.");
}
```
4. switch Statement
The switch statement is used to perform different actions based on different conditions.

```js
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Another day");
}

```
5. Ternary operator
JavaScript operator that uses three operands:
- A condition to be evaluated, followed by a question mark `(?)`.
- The expression to execute if the condition evaluates to `true, followed by a colon `(:)`.
- The expression to execute if the condition evaluates to false.
- This is frequently used to conditionally set or pass a value:

```JS
const myFirstResult  = true  ? "First value." : "Second value.";
const mySecondResult = false ? "First value." : "Second value.";

myFirstResult;
//> "First value."

mySecondResult;
//> "Second value."
```
## Looping Statements
1. for Loop
The for loop is used to execute a block of code a specified number of times.

```js
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}
```
2. while Loop
The while loop executes a block of code as long as a specified condition is true.

```js
let i = 0;
while (i < 5) {
    console.log(i); // 0, 1, 2, 3, 4
    i++;
}
```
3. do...while Loop
The do...while loop is similar to the while loop, but it ensures that the block of code is executed at least once before checking the condition.

```js
let i = 0;
do {
    console.log(i); // 0, 1, 2, 3, 4
    i++;
} while (i < 5);
```

4. for...in Loop
The for...in loop iterates over the enumerable properties of an object.

```js
let person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
    console.log(key + ": " + person[key]); // name: John, age: 30, city: New York
}
```
JavaScript provides built-in methods for determining whether a property is a direct property of the object rather than a property on the object's prototype chain: the modern Object.hasOwn() and legacy Object.prototype.hasOwnProperty() methods.
```js
const myPrototype = { "protoProperty" : true };
const myObject = Object.create( myPrototype, {
    myProperty: {
    value: true,
    enumerable: true
    }
});
for ( const myKey in myObject ) {
  const myValue = myObject[ myKey ];
  if ( Object.hasOwn( myObject, myKey ) ) {
    console.log( `${ myKey } : ${ myValue }` );
  }
}
```
There are also three static methods that each return an Array made up of an Object's enumerable keys `(Object.keys())`, values `(Object.values())`, or key-value pairs `(Object.entries())`:
```js
const myObject = { "myProperty" : true, "mySecondProperty" : false };
Object.keys( myObject );
// Array [ "myProperty", "mySecondProperty" ]
```

5. [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) Loop
The for...of loop iterates over iterable objects (like arrays, strings, maps, sets).

```js
console.log("for...of :  interact properties of an object")
console.log("for.. of: set example")
const iterable1 = new Set([1, 1, 2, 2, 3, 3]);

for (const value of iterable1) {
  console.log(value);
}

console.log("for.. of: array example")
const myIterable = [ true, false, true ];
for( const myElement of myIterable ) {
  console.log( myElement );
}

console.log("for.. of: map example")
const iterable = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ]);
  
  for (const entry of iterable) {
    console.log(entry);
  }


```
Interate object using of
```JS
const myPrototype = { "protoProperty" : "Non-enumerable property value." };
const myObject = Object.create( myPrototype, {
    myProperty: {
    value: "Enumerable property value.",
    enumerable: true
    }
});

for ( const propKey of Object.keys( myObject ) ) {
  console.log( propKey );
}
> "myProperty"

for ( const propValue of Object.values( myObject ) ) {
  console.log( propValue );
}
> "Enumerable property value."

for ( const [ propKey, propValue ] of Object.entries( myObject ) ) {
  console.log( `${ propKey } : ${ propValue }` );
}
> "myProperty : Enumerable property value."
```
6. array.foreach()
The forEach() methods provided by the Array, Map, Set, and NodeList constructors provide a useful shorthand for iterating over a data structure in the context of a callback function. Unlike other forms of loop, a loop created with any forEach() method can't be interrupted using break or continue.
```js
const myArray = [ true, false ];
myArray.forEach( ( myElement, i, originalArray ) => {
  console.log( i, myElement, originalArray  );
});
//> 0 true Array(3) [ true, false ]
//> 1 false Array(3) [ true, false ]
```

map.foreach
```js
const myMap = new Map([
  ['myKey', true],
  ['mySecondKey', false ],
]);
myMap.forEach( ( myValue, myKey, originalMap ) => {
    console.log( myValue, myKey, originalMap  );
});
//> true "myKey" Map { myKey → true, mySecondKey → false }
//> false "mySecondKey" Map { myKey → true, mySecondKey → false }
```
Set.forEach
```js
const mySet = new Set([ true, false ]);
mySet.forEach( ( myValue, myKey, originalSet ) => {
  console.log( myValue, myKey, originalSet  );
});
//> true true Set [ true, false ]
//> false false Set [ true, false ]
```
## Control Flow Statements
1. break Statement
The break statement exits the current loop or switch statement.
```js
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    console.log(i); // 0, 1, 2, 3, 4
}
```
2. continue Statement
The continue statement skips the current iteration of the loop and moves to the next iteration.

```js
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // Skip the iteration when i is 5
    }
    console.log(i); // 0, 1, 2, 3, 4, 6, 7, 8, 9
}
```
3. return Statement
The return statement exits a function and returns a value.

```js
function sum(a, b) {
    return a + b; // Exit the function and return the sum
}
console.log(sum(2, 3)); // 5
```
4. throw Statement
The throw statement generates an error.
```js
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero"); // Generate an error
    }
    return a / b;
}
try {
    console.log(divide(4, 0)); // This will cause an error
} catch (e) {
    console.log(e.message); // "Division by zero"
}
```
## Error Handling
1. try...catch Statement
The try...catch statement handles exceptions and executes code to handle errors.

```js
try {
    let result = riskyOperation(); // Attempt to execute risky code
} catch (error) {
    console.log("An error occurred: " + error.message); // Handle the error
} finally {
    console.log("This will always run"); // Execute code after try/catch
}
```

Understanding and using these control flow statements effectively allows you to manage the execution order and behavior of your JavaScript code, making it more robust and efficient.