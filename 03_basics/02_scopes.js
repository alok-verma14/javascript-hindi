let a = 20; // Act as block level declaration
// var b = 20; // Act as global level declaration
// const c = 30; //cannot change once it is defined
if(true){
    let a = 10;
    const b = 20;
    // console.log(`Inner: ${a}`);
}

// console.log(`Outer: ${a}`);

function one(){
    let first = 10;
    function two() {
        let website = "youtube.com"
    }
    // console.log(website);
    console.log(first);
    two();
}
// one();

if(true){
    const username = "Alok";
    if(username === "Alok"){
        const website = "instagram.com";
    }
    // console.log(website); 
}
// console.log(username);

// console.log(show(5)); //Possible
function show(num){  //this function can be called above it's declaration
    return num;
}

// console.log(show2); // Not Possible
const show2 = function(num) { // This expression function cannot be called above it's declaration and can only call after initialization
    return num;
}