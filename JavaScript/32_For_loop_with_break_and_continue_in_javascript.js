// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop Value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`${j} * ${i} = ${j * i}`);
        
//     }
// }

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let x = 0; x < 10; x++) {
    if (x == 3) {
        console.log(`Detected 3 value`);
        continue;
    }
    if (x == 5) {
        console.log(`Detected 5 value`);
        break;
    }
    console.log(x);
}