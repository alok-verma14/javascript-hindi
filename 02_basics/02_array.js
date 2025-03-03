// Array
const marvelHeroes = ["Spiderman", "Thor", "Ironman"];
const dcHeroes = ["Superman", "Batman", "Flash"];

const allHeroes = marvelHeroes.push(dcHeroes);
const newAllHeroes = marvelHeroes.concat(dcHeroes);
const spreadAllHeroes = [...marvelHeroes, ...dcHeroes];

// console.log(allHeroes);
// console.log(newAllHeroes);
// console.log(spreadAllHeroes);

const subArray = [1, 2, [3, 4], 5, 6, [7, [8, 9], 10]];
// console.log(subArray);
const newSubArray = subArray.flat(Infinity);
// console.log(newSubArray);

// console.log(Array.isArray("Alok"));
// console.log(Array.from("Alok"));
// console.log(Array.from({name: "Alok"})); //interesting object need to have formation of array by key or value

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
// console.log(Array.from(score1, score2, score3)); //this is not possible









