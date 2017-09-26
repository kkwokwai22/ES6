"use strict"

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Good to go');
  }, 1000);

  // setTimeout(() => {
  //   reject('uh oh');
  // }, 500);
});

// myPromise.then((res) => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })


// multiple promises with ES6

let myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promises 2 - the promising');
  }, 1500)
})


// Array of Promise will wait for them all the resolve

Promise.all([myPromise, myPromise2])
  .then((data) => {
    console.log(data);
  });
