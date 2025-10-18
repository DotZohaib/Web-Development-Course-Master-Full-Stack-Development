// // let a = "Dot";  // we can not add string with number
// let a = 5;
// // let b = "Zohaib"; // we can not add string with number
// let b = 10;

// // Error Handling

// if(isNaN(a) || isNaN(b)){
//     throw SyntaxError ("Invalid number");
// }

// let sum = parseInt(a) + parseInt(b);

// console.log(sum);



// finally  only used in function try catch
let x = 5;
let y = 10;
function main() {
    let z = 22
    try {
        console.log(x + y + z);
        return true;
    } catch (error) {
        console.log("The error is " + error);
        return false;
    } finally {
        console.log("I am finally block, I will execute always");
    }
}
main();