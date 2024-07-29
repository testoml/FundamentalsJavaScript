/*-----------if else---------------*/ 
console.log("IF ELSE : The else if statement allows you to test multiple conditions sequentially.")
let age = 18;
if (age < 13) {
    console.log("You are a child.");
} else if (age < 20) {
    console.log("You are a teenager.");
} else {
    console.log("You are an adult.");
}
console.log("\n")
/*-----------SWITCH---------------*/ 
console.log("SWITCH: Use the switch statement to compare the value of an expression to a list of potential values defined using one or more case keywords. ")
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
console.log("\n")
/*-----------TERNARY---------------*/ 
console.log("TERNARY:  is shorthand used to conditionally execute an expression.")
const myFirstResult  = true  ? "First value." : "Second value.";
const mySecondResult = false ? "First value." : "Second value.";

console.log(myFirstResult);
//> "First value."
console.log(mySecondResult);
//> "Second value."
console.log("\n")

/*FOR of*/
console.log("for...in :  interact properties of an object")
let person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
    console.log(key + ": " + person[key]); // name: John, age: 30, city: New York
}

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