let a = 100; // global variable
const b = 200; // constant
if (true) {
  let a = 10; // local variable
  const b = 20; // constant
  var c = 30; // global variable
  d = 40; // global variable
  console.log("let Inner scope", a); // 10
  console.log("const Inner scope", b);  // 20
}
// console.log("let inner scope", a); // show ReferenceError: a is not defined
console.log("let global scope", a); // 100
// console.log("const inner scope", b); // show ReferenceError: b is not defined
console.log("const global scope", b); // 200
console.log("var global scope", c); // 30
console.log("global scope", d); // 40
