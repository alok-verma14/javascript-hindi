const fName = "Alok";
const age = 22;

// console.log(`My name is ${fName} and I am ${age} years old`);


let gName = "alok14";
const gameName = new String("unsung-warrior-alok");

// console.log(gameName.__proto__);

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.indexOf('n'));
// console.log(gameName.charAt(3));

const newString = gameName.substring(0, 4);
// console.log(newString);
const sliceString = gameName.slice(-7, 13);
// console.log(sliceString);

let name = "   Alok Verma   "
const trimSlice = name.trim();

// console.log(name);

// console.log(trimSlice);

let url = "https:\\www.alok%20verma.com";
let newUrl = url.replace("%20", "-");
// console.log(newUrl);

let newGameName = gameName.split("-");
console.log(newGameName);





