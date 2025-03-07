// for of loop
// [], {} -> mainly used in

const numbers = [1, 2, 3 , 4, 5];

for (const num of numbers) {
    // console.log(num);
}

const name = "Alok Verma";

for (const letter of name) {
    // console.log(letter);
    
}

const map = new Map();
map.set("car", "audi");
map.set("milege", "15 km/l");
map.set("speed", "250 km/hr");
map.set("color", "vine red");

for (const key of map) {
    // console.log(key);   
}

// console.log(map);

for (const [key, value] of map) {
    // console.log(`${key} => ${value}`);
    
}

const games = {
    game1: "nfs",
    game2: "pokemon"
}

// This will show an error as it will display that games is not iterable because objects are not iterable in "for of" loop
// for (const [key, value] of games) {
//     console.log(`${key} => ${value}`);
    
// }
