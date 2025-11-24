
const input = prompt("შეიყვანეთ მნიშვნელობა:");
const numberValue = Number(input);

if (!isNaN(numberValue)) {
  console.log(numberValue);
}
else {
  console.log("არასწორი ინფუთი");
}


const num2 = Number(prompt("შეიყვანეთ რიცხვი 0-დან 100-მდე:"));

if (num2 >= 0 & num2 <= 100) {
  const result = num2 - 10;
  if (result > 50 & result < 80) {
    console.log("Yes");
  } else {
    console.log("No");
  }
} 
else {
  console.log("რიცხვი არ არის 0-100 შუალედში");
}


let num3 = Number(prompt("შეიყვანეთ რიცხვი:"));

if (num3 >= 10 && num3 <= 50) {
  if (num3 % 5 === 0) {
    console.log("არის 5-ის გამყოფი");
  } else {
    console.log("არ არის 5-ის გამყოფი");
  }
} else {
  console.log("არ არის 5-ის გამყოფი");
}


let num = Number(prompt("შეიყვანეთ რიცხვი:"));

if (num > 0) {
  console.log("დადებითი რიცხვია");
} else if (num < 0) {
  console.log("უარყოფითი რიცხვია");
} else {
  console.log("ნულია");
}


const month = Number(prompt("შეიყვანეთ თვე 1-დან 12-მდე:"));
let season;

switch (month) {
  case 1:
  case 2:
  case 3:
    season = "ზამთარი";
    break;
  case 4:
  case 5:
  case 6:
    season = "გაზაფხული";
    break;
  case 7:
  case 8:
  case 9:
    season = "ზაფხული";
    break;
  case 10:
  case 11:
  case 12:
    season = "შემოდგომა";
    break;
  default:
    season = "არასწორი თვე";
}

console.log(season);


let teams = ['Barcelona', 'Liverpool', 'Real Madrid', 'Manchester City', 'Bayern'];

const firstTeam = teams.shift(); 
teams.push(firstTeam);           

console.log(teams);

// 7 დამავიწყდა როგორ კეთდება ვიდეოში ვერვიპოვე 
// და ახლიდან არ მომიძებნია ხვალ გკითხავთ

let myStudent = {
  name: 'Student',
  age: 27,
  hasScolarship: false,
  gpa: 2.7,
  salary: [3000]
};

if (myStudent.hasScolarship === true) {
  myStudent.salary.push(500); 
}
else {
  if (myStudent.gpa > 3) {
    myStudent.hasScolarship = true;
  } else if (myStudent.gpa < 3) {
    myStudent.salary = [];
  }
}

console.log(myStudent);

