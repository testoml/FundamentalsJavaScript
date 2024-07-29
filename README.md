# JavaScript Documentation

## Introduction 
### Basic rules: 
- Statements: unit of instructions made up of one or more lines of code that represent an action. 
```JS
let myVariable = 4;
myVariable;
//result > 4
```
- Expressions: Unit of code that result in a value
```JS
2 + 2;
//Result > 4
```
- Weak typing: JavaScript is a weakly typed language, which means a data value doesn't need to be explicitly marked as a specific data type. Unlike a strongly typed language, JavaScript can infer the intended type from a value's context and convert the value to that type. This process is called *type coercion*.
```js
"1" + 1;
//Result > "11"
```
Data types can also be explicitly coerced. The following example coerces the numeric value 100 to a string value of "100" using JavaScript's built-in toString method:
```js
let myVariable = 100;

typeof myVariable;
//Result > "number"

myVariable = myVariable.toString();
//result > "100"

typeof myVariable;
//Result > "string"
```

- Case Sensitive
```js
console.log( "Log this." );
//Result > Log this.

console.Log( "Log this too." );
//Result > Uncaught TypeError: console.Log is not a function
```
- Whitespace: JavaScript is whitespace insensitive.
```js
                    console.log(       "Log this"  );console.log("Log this too");
//> "Log this."
//> "Log this too."
```

## Fundamentals
### Sintaxis
- [Variables](https://github.com/testoml/FundamentalsJavaScript/blob/main/variables.md)
- [Data Type](https://github.com/testoml/FundamentalsJavaScript/blob/main/dataTypes.md)
- [Operators]()
- [Controls Flows]()

### Functions

- [Functions declarations]()
- [Functions expressions]()
- [Arrow functions]()

- [Explanation between declaration and expression](https://www.youtube.com/watch?v=qz7Nq1tV7Io&ab_channel=DevMaterial)

### Objects
- [Object Literals]()
- [Object Constructors]()
- [Prototypes]()

## Leanguage Features
### DOM Manipulation
- [Selecting Elements]()
- [Modify Elements]()
- [Event Handling]()

### Asynchronous Programming
- [Promesis]()
- [Async/Await]()

### Web APIs
- [Fetch API]()
- [WebSockets]()
- [Canvas API]()


## Web Development
- [Manipulation of HTML element](https://github.com/testoml/FundamentalsJavaScript/blob/main/manipulateWebPageElements.md)




