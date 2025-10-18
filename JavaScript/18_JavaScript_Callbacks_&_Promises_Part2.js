let promise = new Promise((resolve, reject) => {
  let obj = [
    {
      name: "Zohaib",
      age: 21,
      Marks: 40
    },
    {
      name: "Iqra",
      age: 19,
      Marks: 80
    }
  ];

  // check karte hain ki Iqra ke marks pass hain ya fail
  if (obj[0].Marks >= 50) {
    resolve({ message: "Success", data: obj });
  } else {
    reject({ message: "Failed", data: obj });
  }
});

promise
  .then((result) => {
    console.log(result.message);
    console.log(result.data);
  })
  .catch((error) => {
    console.log(error.message);
    console.log(error.data);
  });




//   let promise = new Promise((resolve, reject) => {
//   let students = [
//     {
//       name: "Zohaib",
//       age: 21,
//       Marks: 80
//     },
//     {
//       name: "Iqra",
//       age: 19,
//       Marks: 50
//     },
//     {
//       name: "Ali",
//       age: 20,
//       Marks: 60
//     }
//   ];

//   let pass = students.filter(s => s.Marks >= 50);
//   let fail = students.filter(s => s.Marks < 50);

//   if (pass.length > 0) {
//     resolve({
//       message: "Result Calculated",
//       passCount: pass.length,
//       failCount: fail.length,
//       data: students
//     });
//   } else {
//     reject({
//       message: "All students failed!",
//       passCount: 0,
//       failCount: fail.length,
//       data: students
//     });
//   }
// });

// promise
//   .then((result) => {
//     console.log(result.message);
//     console.log("✅ Pass Students:", result.passCount);
//     console.log("❌ Fail Students:", result.failCount);
//     console.log(result.data);
//   })
//   .catch((error) => {
//     console.log(error.message);
//     console.log("✅ Pass Students:", error.passCount);
//     console.log("❌ Fail Students:", error.failCount);
//     console.log(error.data);
//   });
