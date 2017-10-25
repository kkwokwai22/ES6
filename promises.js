// executed later and promises

var p1 = Promise.resolve("Resolve Me");

p1.then((res) => console.log(`${res}`));

var p2 = new Promise(function(resolve, reject){
  setTimeout(() => resolve('Resolve me in setTimeout'), 2000);
})

p2.then((res) => console.log(`${res}`));


// Promise can be fullfill or reject

let randVal = 16;

var p3 = new Promise(function(resolve, reject){
  if(randVal == 6) {
    resolve('good value')
  } else {
    reject("Super bad value")
  }
})

p3.then((res) => console.log(`This is the example of reject ${res}`),
(err) => console.log(`This is the example of reject from promise ${err}`));


var p4 = new Promise((resolve, reject) => {
  if(randVal <= 17) {
    throw new Error("Can't Vote");
  } else {
    resolve("Can Vote")
  }
})

p4.then((val) => console.log(`${val}`)).catch((err) => console.log(`${err.message}`))
