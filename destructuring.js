"use stricts";

let person = {
  name: 'kevin',
  age: 12,
  location: 'hong kong'
}

console.log(person.name);
console.log(person['location']);

// With destructuring

let {age: personAge} = person;

console.log(personAge); // 12

let {age , location: currentLocation} = person;

console.log(currentLocation); // hong kong

// Another way to do destructuring

let key = 'age';

let {[key]: anotherAge} = person;

console.log(anotherAge);

// Real world example with Array

let numbers = [1,2,3,4];

let one = numbers[0]; // 1
let two = numbers[1]; // 2

// destructuring with Array

let [first , second] = numbers;

console.log(first);
console.log(second);

// destructuring with React

// import {Router, Route, Link} from 'react-router';
//
// var Router = require('react-router').Router
// var Route = require('react-router').Route
// var Link = require('react-router').Link
