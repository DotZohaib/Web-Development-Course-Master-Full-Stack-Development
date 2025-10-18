(function code() {
    console.log("DB connect");
    
})(); // IIFE function IIFE ek aisa function hota hai jo define hone ke turant baad automatically execute ho jata hai

// arrow function IIFE
(() =>{
    console.log("DB connect again");
    
})(); // IIFE function IIFE ek aisa function hota hai jo define hone ke turant baad automatically execute ho jata hai



// arrow function IIFE with argument
((name) =>{
    console.log(`DB connect with ${name}`);
    
})("Zohaib"); // IIFE function IIFE ek aisa function hota hai jo define hone ke turant baad automatically execute ho jata hai