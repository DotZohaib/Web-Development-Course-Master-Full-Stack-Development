// let arr = [1, 2, 3, 4, 5];

// console.log(arr);
// console.log(arr.join(" or ")); // join by character
// console.log(arr.pop()); // remove last element
// console.log(arr.push(6)); // add element at end
// console.log(arr.shift()); // remove first element
// console.log(arr.unshift(0)); // add element at start
// console.log(arr.slice(1, 4)); // from index 1 to 4 (4 not included)
// // console.log(arr.reverse());
// console.log(delete arr[2]); // delete element at index 2 but keeps the index empty and does not remove the element from the array
// console.log(arr);



//  forEach Loop

let myArr = [1, 2, 3, 4, 5];

myArr.forEach((value, index, arr) =>{
    console.log(`Value: ${value}, Index: ${index}, Array: ${arr}`);
})



//  for if Loop

let object ={
    name: "Zohaib",
    age: 20,
    city: "Larkana",
    country: "Pakistan",
    isMarried: false
}

for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
    console.log(`Key: ${key}, Value: ${element}`); 
    
    
}