const name = "Alok Verma   ";
const myHeroes = ["Captain America", "Thor"];
const heroesPower = {
    captainAmerica: "Shield",
    Thor: "Hammer",
    sayAmerica: function() {
        console.log(`The Power of Captain America is ${this.captainAmerica}`);
        
    }
};

Array.prototype.sayLanguage = function() {
    console.log("Javascript");
};

Object.prototype.sayLegend = function() {
    console.log("Once a legend is always a legend!");
    
};




// name.sayLegend();
// heroesPower.sayLegend()
// myHeroes.sayLanguage()

// Inheritance

// Traditional Method 

const user = {
    user: "User1",
    email: "user123@gmail.com"
};

const teacher = {
    makeVideo: true
};

const teachingSupport = {
    isAvailable: false
};

const TASupport = {
    maleAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: teachingSupport
};

teacher.__proto__ = user;

// Modern Syntax
Object.setPrototypeOf(teachingSupport, teacher);

let anotherUsername = "chai aur code      ";

String.prototype.trueLength = function(){
    // console.log(this);
    
    console.log(`The true length is ${this.trim().length}`);
};

anotherUsername.trueLength();
name.trueLength();
"Legend Alok     ".trueLength();
"alok   ".trueLength();