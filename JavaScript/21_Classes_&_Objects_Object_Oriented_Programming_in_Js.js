// Prototype in JavaScript

// Prototype ek object hota hai jo har function ya object ke sath automatic attach hota hai.
// Ye ek template ki tarah hota hai jisme methods aur properties rakhi ja sakti hain jo baad me banne wale objects ke sath share ho jati hain.


function Student(name, age) {
  this.name = name;
  this.age = age;
}

// prototype me method add kar diya
Student.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
};

let s1 = new Student("Zohaib", 21);
let s2 = new Student("Iqra", 19);

s1.sayHello(); // Hello, my name is Zohaib
s2.sayHello(); // Hello, my name is Iqra




// Key Points

// Prototype ka use kar ke hum methods ko baar-baar memory me banane se bacha sakte hain.

// Jo method prototype me hota hai, wo sabhi objects ke liye available hota hai jo us constructor se bane hain.

// JavaScript me har object ke pas ek hidden property hoti hai __proto__ jo uske prototype ko point karti hai.