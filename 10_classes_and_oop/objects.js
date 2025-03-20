// String -> Object -> null
// Array -> Object -> null
// Function -> Object -> null

function multiplyBy5(num) {
    return num * 5;
}

multiplyBy5.power = 2;

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function createUser(username, score) {
    this.username = username;
    this.score = score
};

createUser.prototype.increment = function() {
    this.score++;
};

createUser.prototype.printMe = function(){
    console.log(`Welcome ${this.username}`);
};

const alok =  new createUser("Biscuits", 10);
const legend = new createUser("Maaza", 25);

alok.printMe();
legend.increment();
console.log(legend);




