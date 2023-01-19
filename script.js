// Lecture 1 - Variables
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Dejan');
console.log(23);

// Naming variables with camile case - JS is case sensitive
let firstName = 'Dejan';
console.log(firstName);
console.log(firstName);
console.log(firstName);

let $function = '27';
let PI = 3.1415;
let person = 'Dejan';

// Good - Write good descriptive names for variables
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

// Bad
let job1 = 'Programmer';
let job2 = 'Teacher';

// Lecture 2 - Data types
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Dejan');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1989;
console.log(typeof year);

// Lecture 3 - let, consts and var

let age = 33; // let - mutable variable
age = 34;

const birthYear = 1989; // const - unmutable varible
// birthYear = 1990; // error

// const job; // error - cant be undifined, need initial value

// var - old way to declare variable - avoid
