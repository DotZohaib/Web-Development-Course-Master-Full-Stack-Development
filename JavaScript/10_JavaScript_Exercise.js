let ob1 ={
    1: "Zohaib",
    2: "Iqra",
    3: "Aisha"
}
let ob2 ={
    1: 20,
    2: 19,
    3: 18
}

let ob3 ={
    1: "Larkana",
    2: "Karachi",
    3: "Dubai"
}

let num1 = Math.floor(Math.random() * 3) + 1;
let num2 = Math.floor(Math.random() * 3) + 1;
let num3 = Math.floor(Math.random() * 3) + 1;

console.log(`My Name is: ${ob1[num1]}, My Age is: ${ob2[num2]} And I Live in: ${ob3[num3]}`);
