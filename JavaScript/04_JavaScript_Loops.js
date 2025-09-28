// array = [1, 2, 3, 4, 5]

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);
// }

// array = [1, 2, 3, 4, 5]

// let i = 0;
// while (i < array.length) {
//     console.log(array[i]);
//     i = i + 1;
// }

let obj = {
  name: "Zohaib",
  age: 20,
  city: "Larkana",
  country: "Pakistan",
  isMarried: false,
};

for (const key in obj) {
  if (!Obj.hasOwn(obj, key)) continue;
  const element = obj[key];
  console.log(element);
}

