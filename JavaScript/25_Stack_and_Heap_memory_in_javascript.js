/**
 * 📘 Stack [Primitive] vs Heap [Non-Primitive] Memory in JavaScript
 *
 * 🧩 Primitive vs Non-Primitive Memory in JavaScript
 * 💡 Concept Summary:
 * - Stack: Fast, small memory area used for execution context & primitive values.
 * - Heap: Large, flexible memory for objects, arrays, and functions (non-primitives).
 */

/* =========================================================
   1️⃣ Basic Idea (Simple Overview)
   ========================================================= */

// 🧩 Stack — chhoti aur fast memory hoti hai.
// Yahaan function calls aur primitive values (jaise number, boolean, string) store hote hain.
// Har function ka apna stack frame hota hai.

// 🧠 Heap — badi aur flexible memory hoti hai.
// Yahaan objects, arrays, aur functions (non-primitives) store hote hain.
// Variables ke paas inka reference hota hai (actual data nahi).



/* =========================================================
   2️⃣ Primitives (Stored in Stack — Copy by Value)
   ========================================================= */

// Primitives: undefined, null, boolean, number, bigint, string, symbol.
// Ye immutable hote hain (value change hone par nayi copy banti hai).

let a = 10;    // 'a' ke paas value 10 stack me
let b = a;     // 'b' ko 'a' ki value ki copy mili
a = 20;        // 'a' me nayi value 20 store hui

console.log(a); // 20
console.log(b); // 10  (b unaffected, kyunki independent copy mili thi)

// 🧠 Explanation:
// Stack me a aur b dono ke paas apni apni value hai.
// Dono alag memory locations hain; ek me change hone se doosra affect nahi hota.



/* =========================================================
   3️⃣ Non-Primitives (Stored in Heap — Reference by Value)
   ========================================================= */

// Objects, Arrays, aur Functions heap me store hote hain.
// Variable ke andar reference (pointer) hota hai jo heap me object tak le jata hai.

let obj1 = { name: "Ali" };  // Object heap me bana
let obj2 = obj1;             // Reference copy hua, object nahi

obj2.name = "Ahmed";         // Change via obj2 affects heap object
console.log(obj1.name);      // "Ahmed"  (dono same object dekh rahe hain)

// 🧠 Explanation:
// obj1 aur obj2 stack me hain, lekin dono ek hi heap object ko point karte hain.
// Reference copy hota hai, actual object nahi.



/* =========================================================
   4️⃣ Functions, Call Stack & Local Variables
   ========================================================= */

function foo(x) {
  let local = { v: x }; // Object heap me bana, reference stack me
  return local;
}

let r = foo(5); // foo() ka execution complete hone ke baad call stack frame pop ho gaya
// Lekin returned object ka reference 'r' me bacha hua hai

// 🧠 Explanation:
// Jab function khatam ho jata hai, uska stack frame delete ho jata hai.
// Par agar heap object ka reference kahin bacha hai (like 'r'), wo garbage collect nahi hota.



/* =========================================================
   5️⃣ Passing Values to Functions
   ========================================================= */

// 🧩 Primitive (Copy by Value)
function changeVal(x) {
  x = 99; // Local copy change hoti hai
}
let n = 1;
changeVal(n);
console.log(n); // 1 (original unaffected)

// 🧩 Non-Primitive (Reference by Value)
function changeObj(o) {
  o.a = 5; // Same heap object modify hota hai
}
let o = { a: 1 };
changeObj(o);
console.log(o.a); // 5 (original object affected)

// 🧠 Explanation:
// Primitive → Copy milti hai, asli variable unaffected.
// Object → Reference milta hai, change directly heap object me hota hai.



/* =========================================================
   6️⃣ Garbage Collection (Automatic Cleanup)
   ========================================================= */

// Jab koi heap object ke paas koi reference nahi bacha,
// JS engine (V8) usko automatically delete kar deta hai (garbage collected).

// Example:
let temp = { name: "Zohaib" };
temp = null; // Ab heap object unreachable hai, GC usse clean kar dega automatically.

// 🧠 Developer ko manually free() karne ki zarurat nahi hoti.



/* =========================================================
   7️⃣ Engine Specific Details (Advanced)
   ========================================================= */

// - Yeh conceptual model hai; actual JS engines (V8, SpiderMonkey) is model ko optimize karte hain.
// - Kabhi kabhi small objects ko stack-like memory me bhi optimize karke rakha jata hai (for speed).
// - Strings immutable hote hain, aur kuch engines string interning use karte hain (duplicate na bane).



/* =========================================================
   8️⃣ Quick Rules (Cheat Sheet)
   =========================================================
   ✅ Primitive = Copy by value (independent values)
   ✅ Non-primitive = Stored on heap; variable holds reference
   ✅ Stack = Function frames + primitive values + references
   ✅ Heap = Actual object/array/function data
   ✅ Garbage Collector = Removes unreachable heap objects
*/



/* =========================================================
   🧩 Visual Summary (Text-based)
   =========================================================

📚 CALL STACK (Execution Order)
| [ foo() context ]          ← Top (currently executing)
| [ global context ]
-------------------

🧩 HEAP MEMORY (Data Storage)
{ name: "Ali" }
{ v: 5 }
{ a: 1 }

-------------------------------------------------
Summary Line:
Stack → Execution aur primitive values
Heap  → Object/array/function data storage
-------------------------------------------------
*/
