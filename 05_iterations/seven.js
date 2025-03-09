// Map function
// Note -> It returns all the value 

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumbers.map((num) => { return num > 4});
const newNums2 = myNumbers.filter((num) => { return num > 4})

// Note -> filter functions returns the exact value based on conditions.
// Note -> map functions returns the boolean value based on conditions.
// console.log(newNums);

// Chaining or Function Chaining
const myNums = myNumbers.map((num) => num * 10 )
                        .map((num) => num + 1)
                        .filter((num) => num >= 40);

console.log(myNums);



