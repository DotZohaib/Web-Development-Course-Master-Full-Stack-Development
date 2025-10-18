

//  IIFE Syntax Advanced JavaScript   (`Immediately Invoked Function Expression`)(IIFE)

async function Car() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Car is ready");
        }, 1000);
    })
    
}

(async function main() {
    let car = await Car();
    console.log(car);
    
})()


let [x, y] = [1, 2];
console.log(x, y); // 1 2

let [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a, b, rest);

let obj = {
    name: "Zohaib", 
    age: 20
}
let {name, age} = obj;
console.log(name, age);



//  Spread Operator

let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);
// console.log(sum(...arr1));
console.log(arr1[0]+ arr1[1]+ arr1[2]);



// hoisting in JavaScript use only var  keyword in var keyword we can access variable before declaration
// but in let and const keyword we can not access variable before declaration

console.log(d);
var d = 10;
console.log(d);
