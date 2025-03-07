// for in loop

const myobject = {
    cpp: "C++",
    java: "Java",
    c: "C",
    py: "Python"
}

for (const key in myobject) {
    // console.log(`${key} is the extension of ${myobject[key]}`);
    // console.log(typeof key);
    
    
}

const myArray = ["C++", "Java", "Python", "Swift"];

for (const key in myArray) {
    // console.log(myArray[key]);
};

const map = new Map();

map.set("icecream", "chocolate");
map.set("coldrink", "maaza");
map.set("biscuit", "coconut");
map.set("momo", "afgani momo");
map.set("desert", "pastries");

// Note -> We Cannot use map object in "for in" loop
for (const key in map) {
//    console.log(key);
   
}