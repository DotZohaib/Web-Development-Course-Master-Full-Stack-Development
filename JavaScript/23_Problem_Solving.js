let names = [
    "Zohaib", 
    "Ahmed", 
    "Khan"
]

let Houses = []

for (const name of names) {
    if(name.length < 4){
        Houses.push("Small House");
    }
    else if(name.length < 5){
        Houses.push("Medium House");
    }
    else{
        Houses.push("Large House");
    }
}
console.log(Houses);
