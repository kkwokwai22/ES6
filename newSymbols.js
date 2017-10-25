// use as identifier they are immutable

let capital = Symbol("State captial");

let pennsylvania = {};
pennsylvania[capital] = 'Harrisburg';

console.log(`capital of PA : ${pennsylvania[capital]}`);

console.log(`Symbol Capital : ${capital.toString()}`);

let employNum = Symbol.for('Employee Number');

let bobSmith = {}
bobSmith[employNum] = 10;

let sallyMarks = {}
sallyMarks[employNum] = 11;

console.log(bobSmith[employNum]);
console.log(sallyMarks[employNum]);
