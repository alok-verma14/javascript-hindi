function setUsername(username){
    this.username = username;
    console.log("called");
    
};

function createuser(username, emai, password){

    setUsername.call(this, username);
    this.email = emai;
    this.password = password
};

const user = new createuser("Raman", "raman123@gmail.com", "ram123");
console.log(user);
