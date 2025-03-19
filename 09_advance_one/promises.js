
// Promise One 
const promiseOne = new Promise( (resolve, reject) => {
    console.log("Async is completed ");
    resolve();
});

promiseOne.then( () => {
    console.log("Promise is completed ");
    
});

// Promise Two
new Promise( (resolve, reject) => {
    console.log("Async 2 is completed");
    resolve();
}).then( () => {
    setTimeout(() => {
        console.log("Promise 2 is completed");
    }, 1000);
});

// Promise three
const promiseThree = new Promise( (resolve, reject) => {
    console.log("Async 3 is completed");
    resolve({name: "Alok Verma", email: "valok2123@gmail.com"})
});

promiseThree.then( (user) => {
    console.log(user);
});

// Promise four
const promiseFour = new Promise((resolve, reject) => {
    let error = false;
    if(!error){
        resolve({username: "alok_verma", password: "alok123"});
    }else{
        reject('ERROR, Something went wrong!')
    }
});

promiseFour
.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
    
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("The Promise is either resolved or rejected...");
});

// Promise five 
const promiseFive = new Promise((resolve, reject) => {
    let error = false;
    if(!error){
        resolve({username: "java_script", password: "js123"});
    }else{
        reject('ERROR, Javascript went wrong!')
    }
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive; 
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}

// consumePromiseFive();
               

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.log(`Error is ${error}`);
        
    }
}

// getAllUsers();

fetch('https://api.github.com/users/alok-verma14')
.then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
    
}).catch((err) => {
    console.log(err);
    
})
