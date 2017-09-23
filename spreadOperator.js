let max = Math.max(4,6,3,8);

console.log(max)


//

let numbers = [2,3,5,6];

let max2 = Math.max.apply(null, numbers)

console.log(max2);


// spread operator

let max3 = Math.max(...numbers)

console.log(max3);


//

let number = [2,3,4,5,3,2]
let anotherNumbers = [2,3,2,52,325]

// original way

let concatArray = number.concat(anotherNumbers);
console.log(concatArray);


// new way

let anotherNumberTwo = [2,35,2,3,2]
let numberTwo = [2,3,42,3,42, ...anotherNumberTwo];

console.log(numberTwo);
