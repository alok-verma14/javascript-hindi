// Object Literal

const user = {
    username: "alok_verma14",
    loginCount: 7,
    isLoggedIn: true,
    getUserDetails: function() {
        console.log(this.username);
        // console.log("function invoked");
        
    }
}

// console.log(user.username);

// console.log(user.getUserDetails());

// Constructor Function

function User(userName, loginCount, isLoggedIn) {
    this.username = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greetings = function(){
        console.log(`Username: ${this.username}`);
        
    }
    return this;
}


const userOne = new User("sample_1", 6, true);
const userTwo = new User("sample_2", 9, false);

console.log(userOne);
console.log(userTwo);

// New Keyword
// Step 1 -  An empty object{} is created at first which is called as "instance".
// Step 2 - A construcor function is called due to "new" keyword and packed all the arguements and give it to us.
// Step 3 - All the arguements are injected in "this" keyword
// Step 4 - We got our functions and its values. 


