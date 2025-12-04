const arr = [
  [150, 20, 10],
  [55, 11, 260, 45],
  [1, 28],
];


const sums = arr.map(innerArr =>
  innerArr.reduce((sum, num) => sum + num, 0)
);


const sum1 = sums[0]; 
const sum2 = sums[1]; 
const sum3 = sums[2]; 

const totalSum = sums.reduce((sum, num) => sum + num, 0);

console.log(sum1);    
console.log(sum2);    
console.log(sum3);    
console.log(totalSum); 

//2

const students = [
  { id: 1, name: "Ana",  grades: [85, 90, 78], isActive: true },
  { id: 2, name: "Luka", grades: [60, 75, 70], isActive: false },
  { id: 3, name: "Maya", grades: [92, 88, 95], isActive: true },
  { id: 4, name: "Gio",  grades: [40, 55, 48], isActive: true },
];

const getAverage = (grades) =>
  grades.reduce((sum, g) => sum + g, 0) / grades.length;



const upperCaseNames = students.map(student => student.name.toUpperCase());
console.log(upperCaseNames);



const activeStudents = students.filter(student => student.isActive);
console.log(activeStudents);

students.forEach(student => {
  if (student.isActive) {
    console.log(`${student.name} არის აქტიური სტუდენტი`);
  } else {
    console.log(`${student.name} არა`);
  }
});



const allAbove50 = students.every(student => getAverage(student.grades) > 50);
console.log(allAbove50); 



const someoneAbove90 = students.some(student => getAverage(student.grades) > 90);
console.log(someoneAbove90); 



const maya = students.find(student => student.name === "Maya");
console.log(maya);
