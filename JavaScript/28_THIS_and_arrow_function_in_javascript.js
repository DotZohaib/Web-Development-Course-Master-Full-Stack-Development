// let user = {
//     username: "Zohaib",
//     Age: 21,
//     getData: function() {
//         console.log(this); // this refer to current object
//         console.log(`hello ${this.username} your age is ${this.Age}`);
// }
// }
// user.getData();
// user.username = "iqra"
// // user.username,Age = "iqra", 19 // not working this code in javaScript
// user.Age = 19
// user.getData();

// this create i own knowledge code base

// let user = {
//   username: "Zohaib",
//   Age: 21,
//   getData: function () {
//     console.log(this);
//     console.log(`My Name is ${this.username} and my Age is ${this.Age}`);
//   },
// };

// user.getData();
// console.log(this); // Node show empty object

// function Thus() {

//   let username = "Zohaib";
//   console.log(this.username); // undefined because this used for object
// }
// Thus()

// arrow function

// const getUserArrow = () =>{
//     console.log(this); // this refer to global object

// }
// getUserArrow()

// pure arrow function one

let arrow = (x, y) => { 
  return x + y; // if we use curly braces then we have to use return keyword
};
console.log(arrow(2, 3));

// pure arrow function two

let arrow2 = (x, y) => x + y; // if only one line of code then no need to use return and curly braces
console.log(arrow2(5, 3));

// pure arrow function three

let arrow3 = (x, y) => (x * y); // if you used parentheses then no need to use return and curly braces because it automatically return the value
console.log(arrow3(2, 3));


// pure arrow function four

let arrow4 = () =>(   { username: "Zohaib" }) ; // if no parameter then use empty parentheses but used parantheseses then no need to use return and curly braces because it automatically return the value and if used object then use curly braces
console.log(arrow4()); // undefined because we have to use return keyword


// Curly braces {} agar use karo to return zaroor likho warna function undefined return karega.

// Single expression likho bina {} ke — woh value automatically return ho jayegi.

// Object literal implicitly return karne ke liye: () => ({ ... }).

// Single parameter ho to parentheses optional: x => ....

// No parameters ho to () likho: () => ....

// Multi-line logic ke liye { } aur return use karo.