//39
// Instruction
// Read the above article and write JavaScript code to sort the array numerically (the sorted array should equal [1, 2, 5, 9, 10])

const array = [10, 2, 5, 1, 9];

array.sort((a, b) => a - b);
console.log("TCL: array", array);



// Write a sorting function (sometimes called a custom comparator), that sorts the array first by the name ascending alphabetically, and in cases where the names are equal sort by descending age.
const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students
  .sort((a, b) => {
    let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  })
  .sort((a, b) => {
    if (a.name === b.name) return b.age - a.age;
  });


console.log("TCL: students\n", students);