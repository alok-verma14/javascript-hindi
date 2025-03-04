// this keyword

const user = {
    username: "Alok14",
    price: 998,

    welcomeMessage: function() {
        console.log(`Welcome ${this.username}, your price is ${this.price}`);
    }
}

// user.welcomeMessage();
// console.log(this);

function test(){
    let username = "Alok Verma"
    console.log(this);
};

const test2 = function (){
    let username = "Alok Verma";
    console.log(this);
    
}
// test();
// test2();
const sample = () => {
    console.log(this);
    
};
// sample();

const addTwo = (num1, num2) => {
    return num1 + num2;     //Explicit Return
}

const sumTwo = (num1, num2) => (num1, num2); // Implicit Return
const returnObject = () => ({username: "Alok Verma"}); // Implicit Return of an object
console.log(returnObject());
