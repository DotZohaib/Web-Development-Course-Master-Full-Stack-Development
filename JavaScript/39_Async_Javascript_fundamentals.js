console.log("Start");

async function Call() {
    let api = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await api.json();
    console.log(data);
}

Call();

console.log("End1");
console.log("End2");
console.log("End3");
console.log("End4");
console.log("End5");
// 🧠 Step-by-step inner working:
// 🪜 Step 1:
// 👉 JavaScript top se niche read karti hai.
// Sabse pehle line:

// js 
// console.log("Start");
// ➡ Ye immediately print ho jata hai:
// Output: Start

// 🪜 Step 2:
// JS next line dekhta hai:

// js 
// async function Call() { ... }
// ➡ Function define hota hai, call nahi hota abhi.
// JS sirf uska structure memory me store karti hai.
// (Abhi kuch print nahi hota.)

// 🪜 Step 3:
// Ab JS dekhta hai:

// js 
// Call();
// ➡ Function call hota hai.

// 🪜 Step 4:
// Ab function ke andar ghus kar dekho:

// js
// let api = await fetch("https://jsonplaceholder.typicode.com/posts");
// Yahan kya hota hai?

// 🔹 fetch(...) ek asynchronous API call hai.
// Yeh browser ke Web API area me chali jati hai (background me).
// Browser network se data mangta hai.

// 🔹 await bolta hai:

// "is function ke andar abhi ruk jao jab tak fetch ka result na aaye."

// ⚠ Lekin important baat:

// Sirf yeh function rukta hai, poora program nahi.

// Yani main thread free ho gaya, woh aage ka code chalata rahega.

// 🪜 Step 5:
// Next line in main program:

// js
// console.log("End");
// ➡ Abhi function Call() pause hai (await pe),
// to JS main thread aage badhta hai aur End print karta hai.

// Output:

// sql
// Start
// End
// 🪜 Step 6:
// Ab jab fetch ka data aata hai (network se response ready ho jata hai)
// to Web API ka result Microtask Queue me daal diya jata hai (Promise resolve hone ke baad).
// Event Loop check karta hai:

// “Kya main thread free hai?”
// Haan — to ab woh function resume kar deta hai await ke baad wali line se.

// 🪜 Step 7:
// Ab function resume hota hai:

// js
// let data = await api.json();
// ➡ Ye bhi ek asynchronous step hai (response ko JSON me convert karne me thoda time lagta hai).
// To function phir se pause hota hai jab tak conversion complete na ho.

// 🪜 Step 8:
// JSON convert hone ke baad:

// js
// Copy code
// console.log(data);
// ➡ Ab finally ye print hota hai — data ka array (posts) console me dikh jata hai.

// Final output order:

// sql
// Start
// End
// [ ...data from API... ]


// ⚙️ Summary (roman urdu me samjho)
// Start print hua — sync line.

// Call() function chala, lekin await fetch pe ruk gaya.

// JS bola: “Thik hai, jab tak data nahi aata, main aage chalta hoon.”

// End print hua — kyunki main thread free tha.

// Jab fetch complete hua → data aya → function resume hua → console.log(data) print hua.

// 🧩 Real-life example (for easy mind picture)
// Socho tum kitchen me ho:

// Tum keh rahe ho “Pizza order karo” (fetch).

// Tum us order ka intezaar function ke andar kar rahe ho (await).

// Lekin jab tak pizza nahi aata, tum baki kaam karte rehte ho (End print ho jata hai).

// Jab pizza aata hai, tum usko serve karte ho (data print hota hai).

// 🔥 One-line concept:
// await sirf us function ko rokta hai, poora program nahi.
// fetch background me chalta hai, aur jab complete hota hai tab result print hota hai.