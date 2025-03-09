// Reduce function

const myArray = [1, 2, 3];

// let myTotal = 0;
// myArray.forEach( (item) => {
//     myTotal += item;
// })

// const myTotal = myArray.reduce( function (acc, currval){
//     console.log(`Accumulator: ${acc} || Current Value: ${currval}`);
    
//     return acc + currval;
// }, 0);

// const myTotal2 = myArray.reduce( (acc, currval) => {
//     console.log(`Accumulator: ${acc} || Current Value: ${currval}`);
    
//     return acc + currval;
// }, 0)

const myTotal3 = myArray.reduce( (acc, currval) => acc + currval, 0);
// console.log(myTotal3);

const shoppingCart = [
    {
        item: "Vivo Phones",
        price: 1499
    },
    {
        item: "Vivo Phones",
        price: 1499
    },
    {
        item: "Adidas Shoes",
        price: 3999
    },
    {
        item: "Skybags",
        price: 999
    },
    {
        item: "Fastrcack Watch",
        price: 1699
    },
];

const totalAmount = shoppingCart.reduce( (acc, currval) => acc + currval.price, 0);

console.log(`The total amount of your cart is ${totalAmount}`);

