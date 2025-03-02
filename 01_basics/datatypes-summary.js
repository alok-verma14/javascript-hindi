// Data Types in JavaScript

// Primitive Data Types (Value Types)
// 7 Types: String, Number, Boolean, BigInt, Symbol, Null, Undefined

const score = 100;
const scoreValue = 100.23;
const bigNumber = 627283628273827282n;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const newId = Symbol('123');

console.log(id == newId);


// Non-Primitive Types (Reference Types)
// Object, Array, Function

const heroes = ["Shaktimaan", "Naagraj", "doga"];

const mySelf = {
    name: "Alok Verma",
    age: 22,
    gender: "Male",
    Nationality: "Indian"
}

const show = function(){
    console.log("Hello JavaScript");  
}

console.log(typeof heroes);
console.log(typeof mySelf);
console.log(typeof show);


