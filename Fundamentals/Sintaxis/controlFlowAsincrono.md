# Promises
A Promise is a placeholder for a value that isn't known when the promise is created. It's a container that dictates an asynchronous operation, the terms by which the operation is considered a success or failure, the actions to be taken in either case, and the value that results.

Create a Promise instance using the new operator with the built-in Promise constructor function. This constructor accepts a function called the executor as an argument. That executor function is typically used to perform one or more asynchronous actions, then dictate the terms by which the Promise should be considered successfully fulfilled or rejected. A Promise is defined as pending while the executor function is running. After the executor finishes, a Promise is considered fulfilled (or resolved, in some sources of documentation) if the executor function and asynchronous action it performs are completed successfully, and rejected if the executor function encounters an error, or the asynchronous action being performed fails. After a Promise is fulfilled or rejected, it's considered settled.

``` JS
const myPromise = new Promise( () => { });
```
The constructor calls the executor function with two arguments. Those arguments are functions that let you manually fulfill or reject the Promise:

```js
const  myPromise = new Promise( ( fulfill, reject ) => { });
```
The functions used to fulfill or reject a Promise are called with the resulting value of the Promise as an argument (typically an error for rejection):

```js
const myPromise = new Promise( ( fulfill, reject ) => {
  const myResult = true;
  setTimeout(() => {
    if( myResult === true ) {
        fulfill( "This Promise was successful." );    
    } else {
        reject( new Error( "This Promise has been rejected." ) );
    }
  }, 10000);
});

//myPromise;
//> Promise { <state>: "pending" }

//myPromise;
//> Promise { <state>: "fulfilled", <value>: "This Promise was successful." }
```
## Promise Chaining
The resulting Promise object can be acted on using the `then()`, `catch()`, and `finally()` methods inherited from the Promise constructor. Each of these methods returns a Promise, which can immediately be acted on with then(), catch(), or finally() again, letting you chain the resulting Promises.

`then()` provides two callback functions as arguments. Use the first to fulfill the resulting Promise, and the second to reject it. Both methods accept a single argument that gives the resulting Promise its value.

```js
const myPromise = new Promise( ( fulfill, reject ) => {
  const myResult = true;
  setTimeout(() => {
    if( myResult === true ) {
        fulfill( "This Promise was fulfilled." );    
    } else {
        reject( new Error( "This Promise has been rejected." ) );
    }
  }, 100);
});

myPromise.then( successfulResult => console.log( successfulResult ), failedResult => console.error( failedResult ) );

//> "This Promise was successful."
```
You can also use then() to handle only the fulfilled state, and catch to handle the rejected state. Call catch with a single argument containing the value provided in the Promise's rejection method:

```js
const myPromise = new Promise( ( fulfill, reject ) => {
  const myResult = false;
  setTimeout(() => {
    if( myResult === true ) {
        fulfill( "This Promise was fulfilled." );    
    } else {
        reject( new Error( "This Promise has been rejected." ) );
    }
  }, 100);
});

myPromise
  .then( fulfilledResult => console.log(fulfilledResult ) )
  .catch( rejectedResult => console.log( rejectedResult ) )
  .finally( () => console.log( "The Promise has settled." ) );
//> "Error: This Promise has been rejected."
//> "The Promise has settled."
```

Unlike `then` and `catch`, which allow a handler function to run when a Promise is fulfilled or rejected, a function passed as an argument to the `finally`method is called regardless of whether the Promise was fulfilled or rejected. The handler function is called with no arguments, because it's not intended to work with the values passed from the Promise, only to execute code after the Promise is complete.

## Concurrency
The Promise constructor provides four methods for working with multiple related Promises, using an iterable containing Promise objects. These methods each return a Promise, which is fulfilled or rejected based on the state of the Promises passed to it. Promise.all(), for example, creates a Promise that is fulfilled only if every Promise passed to that method is fulfilled:

```js
const firstPromise  = new Promise( ( fulfill, reject ) => fulfill( "Successful. ") );
const secondPromise = new Promise( ( fulfill, reject ) => fulfill( "Successful. ") );
const thirdPromise  = new Promise( ( fulfill, reject ) => fulfill( "Successful. ") );
const failedPromise = new Promise( ( fulfill, reject ) => reject( "Failed.") );
const successfulPromises = [ firstPromise, secondPromise, thirdPromise ];
const oneFailedPromise = [ failedPromise, ...successfulPromises ];

Promise.all( successfulPromises )
  .then( ( allValues ) => {
    console.log( allValues );
  })
  .catch( ( failValue ) => {
    console.error( failValue );
  });
> Array(3) [ "Successful. ", "Successful. ", "Successful. " ]

Promise.all( oneFailedPromise  )
    .then( ( allValues ) => {
      console.log( allValues );
    })
    .catch( ( failValue ) => {
     console.error( failValue );
    });
> "Failed."
```
The Promise concurrency methods are as follows:

`Promise.all()`
Fulfilled only if all supplied Promises are fulfilled.
`Promise.any()`
Fulfilled if any one of the supplied Promises is fulfilled, and rejected only if all Promises are rejected.
`Promise.allSettled()`
Fulfilled when Promises have settled, regardless of their result.
`Promise.race()`
Rejected or fulfilled based on the result of the first Promise to settle, ignoring all Promises settled later.

## async/await
When you use the async keyword before a function declaration or function expression, any value that function returns is returned as a fulfilled Promise containing that value. This lets you run and manage asynchronous operations using the same workflows as synchronous development.

```js
async function myFunction() {
  return "This is my returned value.";
}

myFunction().then( myReturnedValue => console.log( myReturnedValue ) );
//> "This is my returned value."
```
The `await` expression pauses the execution of an asynchronous function while the associated Promise is settled. After the Promise is settled, the value of the await expression is the fulfilled or rejected value of the Promise.

```js
async function myFunction() {
  const myPromise  = new Promise( ( fulfill, reject ) => { setTimeout( () => fulfill( "Successful. "), 5000 ); });
  const myPromisedResult = await myPromise;
  return myPromisedResult;
}

myFunction()
  .then( myResult => console.log( myResult ) )
  .catch( myFailedResult => console.error( myFailedResult ) );
//> "Successful."
```

Any non-Promise value included in an `await` expression is returned as a fulfilled Promise:

```js
async function myFunction() {
  const myPromisedResult = await "String value.";
  return myPromisedResult;
}

myFunction()
  .then( myResult => console.log( myResult ) )
  .catch( myFailedResult => console.error( myFailedResult ) );
> "String value."
```