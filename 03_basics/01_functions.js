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

console.log(loginUserMessage());
