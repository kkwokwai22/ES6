// var will be able to access the var outside of the function
// let will only be avavible only in a block

if(true) {
  var x = 10;
  console.log(x);
}

console.log(x);


if(true) {
  let y = 15;
  console.log(y);
}

console.log(y); // error since y is only avavible in a block


var z = 10;
if(true) {
  let z = 20;
  console.log(z);
}

// const is a value that can not be change
const PI = 3.14
if(true) {
  const PI = 2.34
  document.write('PI = ' + PI)
}

document.write('PI = ' + PI)
