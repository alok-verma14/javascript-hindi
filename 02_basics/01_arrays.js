// Arrays

let myNumbers = [1, 2, 3, 4, 5];
let heroes = new Array("Shaktimaan", "Naagraj", "Doga");

// console.log(myNumbers);
// console.log(heroes);
heroes.push("Flying Jatt");
// console.log(heroes); 
heroes.unshift("Krrish");
// console.log(heroes);
heroes.shift()
// console.log(heroes);

heroes.pop()
// console.log(heroes);

let newHeroes = heroes.join();
console.log(newHeroes);

// Slice, Splice

let myArray = new Array(0, 1, 2, 3, 4, 5);

let myna1 = myArray.slice(2, 5);

console.log(myna1);
console.log("A ", myArray);

let myna2 = myArray.splice(2, 5);

console.log(myna2);
console.log("B ", myArray);








