// Javascript Functions

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    return num1 + num2;
}
const result = addTwoNumbers(10, 20);

function loginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a username!");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage());
function displayAllNumbers(...num){   //Rest operator for infinite inputs
    return num;
};

let user = {
    username: "alok12",
    price: 566
}
// console.log(displayAllNumbers(200, 300, 566, 456));

function handleObject(anyObject){
    return `Your username is ${anyObject?.username} and price is ${anyObject?.price}`
}

// console.log(handleObject(user)); 

const myArray = [200, 300, 400, 500];

function returnSecondArray(getArray){
    return getArray[0];
}
console.log(returnSecondArray(myArray));
