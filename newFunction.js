// default value

function getSum(num1 = 1, num2 = 1) {

  console.log(`${num1} + ${num2}  = ${num1 + num2}`);

  // very important that default value is not in arugment array

  console.log(`${arguments[0]} + ${arguments[1]}`); // 3 + undefined

}

getSum(3);

// rest Parameters

function getSumMore(...vals) {
  let sum = 0;
  for(let i = 0, len = vals.length; i < len; i++) {
    sum += vals[i];
  }
  console.log(`This is the rest Parameters ways of add ${sum}`);
}

getSumMore(1,2,3,4,5);

let vals = [1,2,3,4,5];

getSumMore(...vals);

// arrow function

let difference = (num1, num2) => num1 - num2;
console.log(difference(5,10))

let mult = (num1,num2) => {
  let product = num1 * num2;
  console.log(`This is the arrow function ${num1} * ${num2} = ${product}`)
}

mult(3,2)

// map, filter and reduce
let valArr = [1,2,3,4,5];
let sumVals = valArr.reduce((a,b) => a + b);
console.log(`This is the arrow function with reduce method ${sumVals}`)

let evens = valArr.filter((val) => val % 2 === 0)
console.log(`This is the arrow function with filter method ${evens}`)

let double = valArr.map((a) => a * 2)
  console.log(`This is the arrow function with map method ${double}`)
