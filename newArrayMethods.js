let array1 = Array.of(1,2,3);
let array2 = Array.from("word");
let array3 = Array.from(array1, (value) => value * 2);

console.log(array2);
for(let val of array2) console.log(`${val}`)


// SET
var randSet = new Set();
randSet.add(10);
randSet.add("Word");

console.log(`has 10 : ${randSet.has(10)} `)
console.log(`Set Size : ${randSet.size} `)
randSet.delete(10);

for(let val of randSet) console.log(`Set Val: ${val}`)


// Map

var randMap = new Map();
randMap.set("key1", "Random String");
randMap.set("key2", 10);

console.log(`key1 : ${randMap.get("key1")}`)
console.log(`key2 : ${randMap.get("key2")}`)

console.log(`Map Size : ${randMap.size}`);

randMap.forEach(function(value , key) {
  console.log(`This is what happen when you forEach a MAP ${key} : ${value}`)
})
