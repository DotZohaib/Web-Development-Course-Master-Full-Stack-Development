let IsAdmin = true;
// this condition we used to check if the user is admin or not
if(2 === "2"){
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}


// this condition we not used to check

if(2 == "2"){
    console.log("Condition is true");
}
console.log("Condition is false");


let getEmail = "Zohaib@gmail.com";
if(getEmail.includes("@gmail.com")){
    console.log("Email is valid");
}
else{
    console.log("Email is not valid");
}



// falsy values in javascript
// false
// 0
// ""
// null
// undefined
// NaN
// -0
// 0n (BigInt zero)

// truthy values in javascript
// true
// 1
// "0"
// "false"
// {}
// []
// function() {}


// Objects are convert to array then used methods

let obj1 = {};
if(Object.keys(obj1).length === 0){
    console.log("Object is empty");
}
else{
    console.log("Object is not empty");
}


// function 

let myVar = "Hello World";
if(myVar){
    console.log("Variable is defined");
}
else{
    console.log("Variable is not defined");
}