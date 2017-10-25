function createAnimal(name, owner) {
  return {
    name,
    owner,
    getInfo() {
      return `${this.name} is owned by ${this.owner}`
    },
    address: {
      street: '123 main st1',
      city: "Pittsburgh"
    }
  };
}


var spot = createAnimal('Spot', "Doug");

console.log(spot.getInfo());
console.log(spot.address.street);
console.log(Object.getOwnPropertyNames(spot));

// destructing

let {name, owner} = spot;
console.log(`Name : ${name}`);

let {address} = spot;
console.log(`address: ${address.street}`);

let favNums = [2.32, 6.23, 2.99];

// getting the last number of a array
let[,,chaos] = favNums;
console.log(`Chaos : ${chaos}`)

let[, ...last2] = favNums;
console.log(`2nd Num : ${[last2[0]]}`)

// switch value

let val1 = 1, val2 = 2;

[val1 , val2] = [val2, val1];
console.log(`Switch: ${val2}`);
