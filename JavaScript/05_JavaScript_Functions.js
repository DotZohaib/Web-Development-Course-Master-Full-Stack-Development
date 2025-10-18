// function Func(a, b, c = 20) {
//   return a + b - c;
// }
// console.log(Func(10, 20));

// //  Arrow Functions

// let func = (x) => {
//   console.log("Hello " + x);
// };

// func("Zohaib");
// func("Iqra");

// function car(x) {
//     return x;
// }

// let cars = car("Toyota");
// console.log(cars);

// function Mult(a, b) {
//     return a * b;
// }
// console.log(Mult(10, 20));

// function IsLogin(username) {
// function IsLogin(username = "User") {
// //   if (username === undefined) {
//   if (!username) {
//     return "Please enter your name";
//   }
//   return `Welcome ${username} to our website!`;
// }

// console.log(IsLogin());


// function Zoh(...args) {
//     return args;
// }
// console.log(Zoh(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));



// object function 

// let user = {
//     username: "Zohaib",
//     Age: 19
// }

// function objectCall(anyobject) {
//     console.log(`hello ${anyobject.username} your age is ${anyobject.Age}`);
    
// }

// objectCall(user)


function one(x) {
    return x;
    
}
console.log(one("Zohaib"));

let two = function(y) {
    return y;
}
console.log(two("Iqra"));