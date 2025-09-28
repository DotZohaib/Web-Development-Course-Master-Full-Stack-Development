// 1️⃣ map()

// Definition: Har element par operation karta hai aur naya array return karta hai.

// Code Example:

let map = [1, 2, 3, 4, 5];
let doubled = map.map((value) => {
    return value * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]


// ➡️ Yahaan sab numbers ko 2 se multiply karke ek new array ban gaya.

// 2️⃣ filter()

// Definition: Jo condition true hoti hai sirf wohi values naye array me aati hain.

// Code Example:

let filter = [1, 2, 3, 4, 5];
let results = filter.filter((e) => e > 2);
console.log(results); // [3, 4, 5]


// ➡️ Yahaan sirf wo numbers aayenge jo 2 se bade hain.

// 3️⃣ reduce()

// Definition: Pure array ko ek hi value me reduce kar deta hai (jaise sum, product, etc).

// Code Example:

let reduce = [1, 2, 3, 4, 5];
let result = reduce.reduce((a, b) => a * b);
console.log(result); // 120 (1*2*3*4*5)


// ➡️ Yahaan multiply karke ek single number ban gaya.

// 4️⃣ forEach()

// Definition: Har element par operation karta hai lekin kuch return nahi karta (sirf print ya action ke liye).

// Code Example:

let foreach = [1, 2, 3, 4, 5];
foreach.forEach((value) => {
    console.log(value * 3);
});


// ➡️ Yahaan numbers print hue multiply hoke, lekin koi naya array nahi bana.

// ✅ Summary easy table:

// Function	Return karta hai?	Use case
// map()	New Array	Values badalna (multiply, add etc)
// filter()	New Array	Condition ke hisaab se filter karna
// reduce()	Single Value	Total, sum, product nikalna
// forEach()	Kuch nahi	Sirf print ya action ke liye