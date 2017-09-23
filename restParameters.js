let sum = function() {
  let sum = Array.prototype.reduce.call(arguments, (pre, curr) => {
      return pre + curr;
  });
  console.log(sum);
}

sum(2,3,4,5);


//  Rest Parameters

let sum2 = function(...arg) {
  console.log(arg)
  let sum = arg.reduce(function(pre, curr){
    return pre + curr;
  })
  console.log(sum);
}


sum2(4,5,6,7);


//

let multiply = (mul, ...numbers) => {
  return numbers.map(function(n){
    return mul * n
  })
}

let value = multiply(2,7,4,5); // 3 [2,3,4]
console.log(`map function ${value}`);
