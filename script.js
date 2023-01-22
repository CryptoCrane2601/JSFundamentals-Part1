//Lecture 1 - Variables
//let js = 'amazing';
//console.log(40 + 8 + 23 - 10);

//console.log('Dejan');
//console.log(23);

//Naming variables with camile case - JS is case sensitive
//let firstName = 'Dejan';
//console.log(firstName);
//console.log(firstName);
//console.log(firstName);

//let $function = '27';
//let PI = 3.1415;
//let person = 'Dejan';

//Good - Write good descriptive names for variables
//let myFirstJob = 'Programmer';
//let myCurrentJob = 'Teacher';

//Bad
//let job1 = 'Programmer';
//let job2 = 'Teacher';

//Lecture 2 - Data types
//let javascriptIsFun = true;
//console.log(javascriptIsFun);

//console.log(typeof true);
//console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Dejan');

//javascriptIsFun = 'YES!';
//console.log(typeof javascriptIsFun);

//let year;
//console.log(year);
//console.log(typeof year);

//year = 1989;
//console.log(typeof year);

//Lecture 3 - let, consts and var

//let age = 33; // let - mutable variable
//age = 34;

//const birthYear = 1989; // const - unmutable varible
//birthYear = 1990; // error

//const job; // error - cant be undifined, need initial value

//var - old way to declare variable - avoid

//Lecture 4 - Basic operators

//Math operators
//const now = 2037;
//const ageJonas = now - 1991;
//const ageSarah = now - 1996;
//console.log(ageJonas, ageSarah);

//const firstName = 'Dejan';
//const lastName = 'Kurcubic';

//console.log(firstName + ' ' + lastName);

//Assigment operators
//let x = 10 + 5;
//x += 10; // x = x + 10 = 25;
//x *= 4; // x * x * x * = 100
//x++; // x = x + 1;
//x--; // x = x -1;
//x--;
//console.log(x);

//Comperison operators
//console.log(ageJonas > ageSarah); // >, <, =>, <=
//console.log(ageSarah >= 18);
//const isFullAge = ageSarah >= 18;

//const now = 2038;
//const ageJonas = now - 1991;
//const ageSarah = now - 2018;

//console.log(now - 1991 > now - 2018);

//let x, y;
//x = y = 25 - 10 - 5; //x = y = 10
//console.log(x, y);

//const ageAverage = (ageJonas + ageSarah) / 2;
//console.log(ageAverage);

// const firstName = 'Dejan';
// const job = 'programer';
// const birthYear = 1989;
// const curentYear = 2037;
// const dejan =
//   "I'm " +
//   firstName +
//   ', a ' +
//   (curentYear - birthYear) +
//   ' year old ' +
//   job +
//   '.';
// console.log(dejan);

// const dejanNew = `I'm ${firstName}, a ${
//   curentYear - birthYear
// } year old ${job}!`;

// console.log(dejanNew);

// console.log(`String
// multi
// line`);

// const age = 15;

// if (age >= 18) {
//   console.log('Sara can start driving licence 🚗');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(
//     `Sara cant drive jet, she is too young. Wait another ${yearsLeft} years :)`
//   );
// }

// const birthYear = 1989;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// Lecture 5 - Type Conversion and Coercion

const inputYear = 1989;
console.log(inputYear + 18);
