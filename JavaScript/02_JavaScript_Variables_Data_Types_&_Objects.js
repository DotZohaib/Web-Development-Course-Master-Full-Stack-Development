// alert("Hello world")


// console.log("Hello world");


// let a = 10
// let b = 100
// let z = "DotZohaib"

// console.log(a + b);

// print(a + b);    printing the screen


// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof z);



// let a = 10;

// {
//     let a = 100;
//     console.log(a);
// }

// console.log(a);



// premetive data types
// 1. String
// 2. Number
// 3. Boolean
// 4. undefined
// 5. null
// 6. Symbol

// let a = 10;
// let b = "Zohaib";
// let c = true;
// let d = undefined;
// let e = null;       // typeof null is object
// let f = Symbol();

// console.log(typeof a, a);
// console.log(typeof b, b);
// console.log(typeof c, c);
// console.log(typeof d, d);
// console.log(typeof e, e);
// console.log(typeof f, f);




// Reference data types
// 1. Array
// 2. Object


// let o = {
//     name: "Zohaib",
//     age: 20,
//     isStudent: true,
//     marks: undefined,
//     subjects: null

// }

// console.log(o.name);
// console.log(o.age);
// console.log(o.isStudent);
// console.log(o.marks);
// console.log(o.subjects);



// console.log(o);



const accountId = 12345;
let accountEmail = "zohaib@google.com";
var accountPassword = "12345";
accountCity = "Larkana";
let accountState;

// accountId = 123456;   // not allowed beacause const variable value can't be changed
// accountEmail = "zohaib@.com"; //  allowed
// accountPassword = "123456"; // allowed
// accountCity = "Karachi"; // allowed
// accountState = "Sindh"; // allowed
// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);
// console.log(accountState);


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);



//  Data Types in JavaScript
// 1. Primitive Data Types
//     a. String
//     b. Number
//     c. Boolean
//     d. undefined
//     e. null
//     f. Symbol

// 2. Reference Data Types
//     a. Array
//     b. Object

// 3. Special Data Types
//     a. Function
//     b. Date
//     c. RegExp
//     d. Error
//     e. Map
//     f. Set
//     g. WeakMap
//     h. WeakSet
//     i. Promise
//     j. Async/Await
//     k. Generator
//     l. Module
//     m. JSON 

 // JavaScript Object Notation
//     n. NaN  // Not a Number
//     o. Infinity
//     p. -Infinity

let num = null;
console.log(typeof(num)); // object // bug in javascript version 1.0



console.log("1" +2 + 3); // 123
console.log(1 + "2" + 3); // 123
console.log(1 + 2 + "3"); // 33




// conversion in js 

console.log("2" > 1);
console.log("02" > 1);
console.log("1" >= 1);

console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false



