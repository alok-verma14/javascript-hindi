// Classes and Constructors

class createUser{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return this.password + Math.floor(Math.random()*10)
    }
    changeUsername(){
        return this.username.toUpperCase();
    }
}

const user1 = new createUser("Alok Verma", "alok123@gmail.com", "alok@3");
// console.log(user1.encryptPassword());
// console.log(user1.changeUsername());

// behind the scenes

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
};

User.prototype.encryptPassword = function(){
    return this.password + Math.floor(Math.random()*10)
};

User.prototype.changeUsername = function(){
    return this.username.toUpperCase();
}

const user2 = new User("Mahesh Kumar", "mahesh@gmail.com", "mahesh421");
console.log(user2.encryptPassword());
console.log(user2.changeUsername());

