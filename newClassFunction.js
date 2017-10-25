class Mammal {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;

  }
  set name(name){
    this._name = name;
  }

  static makeMammal(name) {
    return new Mammal(name);
  }

  getInfo(){
    return `${this.name} is a mammal`;
  }
}


let monkey = new Mammal('Fred');

monkey.name = 'Mark';

console.log(`Mammal : ${monkey.name}`)

let chipmunk = Mammal.makeMammal("Chipper");

console.log(`Mammal 2: ${chipmunk.name}`);


//inherrent

class Marsupial extends Mammal {
  constructor(name, hasPouch) {
    super(name);
    this._hasPouch = hasPouch;
  }

  get hasPouch() {
    return this._hasPouch;
  }

  set hasPouch(hasPouch) {
    this._hasPouch = hasPouch;
  }

  getInfo() {
    return `${this.name} is a marsupial`;
  }
}

let kangaroo = new Marsupial("Paul", true);
console.log(`It is ${kangaroo.hasPouch} that ${kangaroo.name} has pouch`)

console.log(chipmunk.getInfo())
console.log(kangaroo.getInfo())


function getClass(classType) {
  if(classType == 1) {
    return Mammal;
  } else {
    return Marsupial;
  }
}


class Koala extends getClass(2) {
  constructor(name) {
    super(name)
  }
};

let carl = new Koala('Carl');
console.log(carl.getInfo())
