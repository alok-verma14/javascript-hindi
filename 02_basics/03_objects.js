// Objects 

// Singleton Object
// Object.create()

// Object Literals

const mySym = Symbol("keys1"); 
// console.log(typeof mySym);

const myData = {
    name: "Alok Verma",
    "mail ID": "alokverma123@gmail.com",
    [mySym]: "myKeys",
    age: 22,
    location: "Patna",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Friday"]
};

// console.log(myData.name);;
// console.log(myData["mail ID"]);
// console.log( myData[mySym]);

// Object.freeze(myData);

myData.name = "Legend Alok";
// console.log(myData);

myData.greetings = function(){
    console.log("Hello JS User");
    
};

myData.greetingsTwo = function() {
    console.log(`Hello JS User ${this.name}`);
   
}

console.log(myData.greetings());
console.log(myData.greetingsTwo());







