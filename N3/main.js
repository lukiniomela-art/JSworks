// 1
let input = prompt("შეიყვანე რიცხვი");

let count = Number(input); 
let numbers = [];

for (let i = 0; i < count; i++) {
  
  let randomNumber = Math.floor(Math.random() * 101);
  numbers.push(randomNumber);
}

console.log("შეყვანილი რიცხვი:", count);
console.log("რანდომ მასივი:", numbers);


// let academy = {
 //   name: "Digital Academy",
 // courses: ["JavaScript", "HTML", "CSS", "Angular", "React", "Python", "C#"]

//};

//let resultText = "";

//3
let randomNum = Math.floor(Math.random() * 21); 
console.log("რანდომ რიცხვი:", randomNum);

let nums = [];
let i = 0;

while (i <= randomNum) {
  if (i % 2 === 0) {
    nums.push(i);
  }
  i++;
}

console.log("ლუწი 0-დან რანდომამდე:", nums);


// 4
let uniqueNumbers = [];

while (uniqueNumbers.length < 15) {
  let num = Math.floor(Math.random() * 31); 

  if (!uniqueNumbers.includes(num)) {
    uniqueNumbers.push(num);
  }
}

console.log("უნიკალური რანდომ რიცხვები:", uniqueNumbers);



// დავალება 5
let arr = [12, 45, 26, 4, 7, 14, 19];

let min = arr[0];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  let current = arr[i];

  if (current < min) {
    min = current;
  }

  if (current > max) {
    max = current;
  }
}

console.log("უმცირესი ელემენტი:", min);
console.log("უდიდესი ელემენტი:", max);
