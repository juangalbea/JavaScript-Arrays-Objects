const students = [
    { name: "Bob", age: 17 },
    { name: "Susy", age: 18 },
    { name: "Ted", age: 18 },
    { name: "Sarah", age: 20 },
    { name: "Bill", age: 19 }
  ];

  console.log(students[3].name);
  students.push({ name: "Steve", age: 25 });

const bob = { name: "Bob", age: 21 };
students.push(bob);
console.log(students);

console.log(students[0].name);
console.log(students[3].hasOwnProperty("Sarah").age)

for (let i = 0; i < students.length; i++) {
    if (Object.values(students[i]).includes("Sarah"))
    console.log(students[i].age);
}


