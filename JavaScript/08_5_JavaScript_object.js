let mySymb = Symbol("Dot")

let obj = {
    name: "Zohaib",
    "full name": "Ziqra Dayo",
    age: 20,
    language: "Python",
    [mySymb]: "My Symbol Value"
}

console.log(obj[mySymb]); // access symbol property using bracket notation

console.log(obj.name);
// console.log(obj.full name); // show error because space is not allowed in dot notation

console.log(obj["full name"]); // use bracket notation when key has space or special character

console.log(obj["name"]);



let server ={
    name: "Row",
    hack:{
        name: "Zohaib",
        age: {
            age1: 20,
            age2: 21,
            food:{
                breakfast: "Paratha",
                lunch: "Rice",
                dinner: "Chicken"
            }
        }
    }
}

console.log(server.hack.age.food.dinner);





const obj1 = { name: "Zohaib", age: 20, };
const obj2 = { name1: "Iqra", age1: 19,};


// ✅ Correct way: store all objects separately inside one big object
const mergedObjects = Object.assign({}, obj1, obj2);
console.log("Full merged object:");
console.log(mergedObjects);

// ✅ OR if you want spread all objects i
const source = { name1: "Iqra", age1: 19};
let mergedSpread = {...obj1, ...obj2};
console.log("Spread merged object:");
console.log(mergedSpread);

