// 1) JavaScript execution — basic idea (single-threaded)

// JavaScript by default single-threaded hai — iska matlab ek waqt mein sirf ek kaam CPU pe chal sakta hai.

// Lekin browser/node async APIs use karke non-blocking behavior provide karte hain (iske baare mein neechay).

// 2) Call Stack kya hai? (Simple definition)

// Call Stack ek stack data structure hai jo JS engine use karta hai taake pata rahe kaunsa function abhi chal raha hai aur kis function ko wapas jaana hai jab current function finish ho jaye.

// Stack LIFO (Last In, First Out) pe kaam karta hai — jo function sab se aakhir me call hua, pehle return karega.

// 3) Synchronous example + step-by-step (code + stack)
function a() {
  console.log("A start");
  b(); // a ke andar b call hota hai phir stack me push hota hai
  console.log("A end");
}

function b() {
  console.log("B start");
  c(); // b ke andar c call hota hai phir stack me push hota hai
  console.log("B end");
}

function c() {
  console.log("C"); // c ke andar sirf console.log hai to c execute hota hai phir stack se pop ho jata hai
}

a(); // a call hota stack ke andar




// Stack behavior (step-by-step):

// a() call hota —> push a on stack.

// a ke andar console.log("A start") execute hota.

// b() call hota —> push b on stack.

// b ke andar console.log("B start") execute hota.

// c() call hota —> push c on stack.

// c executes console.log("C"), phir pop c (c finish).

// Control wapas b pe — console.log("B end"), phir pop b.

// Control wapas a pe — console.log("A end"), phir pop a.

// Stack empty — program end.

// ASCII diagram (during c()):

// |   a   |   <- bottom (called first)
// |   b   |
// |   c   |   <- top (current)

// 4) Call stack kyun use hota hai? (Why)

// Execution context manage karne ke liye: kaun se variables, parameters aur return address ko track karna hai.

// Function return order ko maintain karne ke liye (LIFO).

// Recursion ko support karne ke liye (har call apna alag frame rakhta hai).

// Debugging ke liye — error stack traces batate hain kis function chain me problem aayi.

// 5) Stack overflow (jab galat ho jaye)

// Agar recursion bahut deep ho ya infinite recursion ho to stack fill ho jata — RangeError: Maximum call stack size exceeded aata hai.

// function recurse() {
//   recurse(); // infinite
// }
// recurse(); // => Stack overflow / RangeError

// 6) Asynchronous code kaise fit hota hai? (Event Loop ka short idea)

// JavaScript single-threaded hai, lekin browser/node async tasks (jaise setTimeout, network requests, DOM events) ko handle karne ke liye event loop use karte hain.

// Simple example:

// console.log("script start");

// setTimeout(() => {
//   console.log("setTimeout callback");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("promise then");
// });

// console.log("script end");



// Global code chal raha — ye sab synchronous instructions call stack pe run hoti hain.

// setTimeout(..., 0) call karta — browser timer API me callback daal deta (call stack se hat jaata).

// Promise.resolve().then(...) — .then ka callback microtask queue me chala jata.

// Global code finish hota — stack empty ho jata.

// Event loop pehle microtask queue (promises) ko process karta — promise then chalta.

// Phir macrotask queue (setTimeout callbacks) se setTimeout callback run hota.

// Har callback run karne se pehle wo call stack me push hota, jab khatam ho jaye to pop hota.

// Simple mental model:

// Call Stack = jo abhi chal raha hai.

// Web APIs/Node APIs = background me jobs schedule karte.

// Callback queues = jobs wait kar rahe until stack empty.

// Event loop = check karta when stack empty, phir queue se ek task stack me daalta.

// 7) Practical tips (debugging / observe)

// Browser DevTools me Sources > Call Stack aur breakpoints se dekh sakte ho.

// Error aaye to console me stack trace dekho — bata deta hai kaun si function chain me error aaya.

// console.trace() se current stack trace nikal sakte ho.

// 8) Short summary (Roman Urdu)

// JS ek waqt me ek kaam karta (single-threaded).

// Call Stack functions ko push/pop kar ke execution order manage karta hai.

// Async tasks call stack ke bahar schedule hote aur event loop unko stack khali hone par run karwata hai.

// Call stack se hum return, scope aur recursion ko manage karte hain.

// Agar chaho to main tumhare liye:

// ek animated ASCII diagram bana doon jo push/pop dikhaye, ya

// ek browser-debugger friendly example du jise tum step-by-step breakpoints ke saath dekh sako, ya

// Promises vs setTimeout ka aur detailed comparison doonga.