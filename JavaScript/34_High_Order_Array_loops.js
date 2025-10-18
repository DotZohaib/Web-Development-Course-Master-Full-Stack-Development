// let object = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (const element of object) {
//     console.log(element);
    
// }

let obj = [
    {
        id: 1,
        name: "Zohaib",
        age: 20
    },
    {
        id: 2,
        name: "Iqra",
        age: 19
    }
]
// forEach using arrow function
obj.forEach((item)=>{
    console.log(`My name is ${item.name} and my age is ${item.age} Using forEach Method`);
})

// Map using arrow function
obj.map((items)=>{
    console.log(`My name is ${items.name} and my age is ${items.age} Using Map Method`);
    
})



let object ={
    id: 1,
    name: "Zohaib",
    age: 20
}

for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
    console.log(`${key}: ${element}`);
}


let filter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
filter.filter(item => item >= 5).forEach(item => {
    console.log(`${item} is greater than or equal to 5`);
});