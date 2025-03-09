// "for each" loop drawback
// this loop doesnot return any value. so, it will become very difficult to store the values 

const coding = ["js", "python", "C++", "Swift"];

let val = coding.forEach((item) => {
    return item;
});

// console.log(val); It will return undefined as it doesnot return any value

// Note -> filter function in an array returns some value which is satisfies the condition

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = nums.filter((num) => num > 4);

// Another Way of writing filter function use block scope
const newNums2 = nums.filter((num) => {
    return num;
})

// console.log(newNums);
// console.log(newNums2);

// Filter the data using " for each" loop

const myNums = [];

nums.forEach((num) => {
    if (num > 4){
        myNums.push(num);
    }
})

// console.log(myNums);
// for (const num of myNums) {
//     console.log(num);
    
// }


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks = books.filter((book) => book.genre === "Science")
//   console.log(userBooks);
  const userLatest = books.filter((book) => book.publish >= 2000)
//   console.log(userBooks);
  
  const historyBooks = books.filter((book) => book.publish >= 1995 && book.genre === "History");

  console.log(historyBooks);
  
