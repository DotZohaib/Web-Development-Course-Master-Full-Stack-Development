let foreach = ["Python", "JavaScript", "Java", "C++", "C#"];

// let newData = foreach.forEach((item) => { // forEach can not have return and other variable assign
foreach.forEach((item) => {
  // console.log(item);
  // return item // forEach can not have return show undefined
});
// console.log(newData); // assign variable show undefined because forEach can not have return

let filter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// filter first method 
filter
  .filter((item) => item >= 5)
  .forEach((item) => {
    if (item == undefined) {
    //   console.log("The Array Is empty or Invalid", item);
    } else {
    //   console.log(item);
    }
  });

// filter second method

let newItem = filter.filter((item) => item >=5);
// console.log(newItem);


// filter three method 

let books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        year: 1925
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Classic",
        year: 1960
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        year: 1949
    }
]

let NewBook = books.filter((book) => book.title === "The Great Gatsby");
let NewBooks = books.filter((book) => { return book.year >= 1950});
// console.log(NewBook);
// console.log(NewBooks);





// Map method using 

let map = [1, 2, 3, 4, 5];

// map first method 
let mapData = map.map((item) => item * 2);
// console.log(mapData);

// map Second method 
map.map((num)=>{
    // console.log(num);
})

// map three method

let newMap = map.map((item)=> item + 10).map((item) => item * 2);
// console.log(newMap);



// map four method

let newUpdateMap = map.map((item)=> item + 10).map((item) => item * 2).filter((item) => item >= 25);
// console.log(newUpdateMap);



// Reducer method using

let reduce = [1, 2, 3, 4, 5];

// Reduce first method
let reducer1 = reduce.reduce((acc, item) => acc + item);
// console.log(reducer1);


// Reduce second method

let reducer2 = reduce.reduce((acc, item) => {
    return acc + item
}, 0);  // which value you include that assign in acc
// console.log(reducer2);





// reducer Real World Application

let reducerPro = [
    {
        id: 1,
        name: "Zohaib",
        age: 20,
        Salary: 50000
    },
    {
        id: 2,
        name: "Iqra",
        age: 19,
        Salary: 40000
    },
    {
        id: 3,
        name: "Aisha",
        age: 18,
        Salary: 30000
    },
    {
        id: 4,
        name: "Zainab",
        age: 17,
        Salary: "20000"
    }
];

let TotalSalary = reducerPro.reduce((acc, item) => {
    let salary = Number(item.Salary);
    if (!isNaN(salary) && salary >= 0) {
        return acc + salary;
    } else {
        return acc;
    }
}, 0);

console.log("Total Salary:", TotalSalary);