// getOwnPropertyDescriptor

// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

const username = {
    name: "Alok Verma",
    id: "12erty35",
    isLoggedIn: false,
    showstatus: function(){
        console.log("Running State");
        
    }
};

console.log(Object.getOwnPropertyDescriptor(username, "name"));

Object.defineProperty(username, "name", {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(username, "name"));

for (let [key, value] of Object.entries(username)) {
    if (typeof value !== "function"){
        console.log(`${key}: ${value}`);
        
    }
}


