// Inheritance in javascript

class user{
    constructor(username) {
        this.username = username;
    }
};

class teacher extends user{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password
    };

    addCourse(){
        console.log(`A new course added by ${this.username}`);
        
    }
}

const user1 = new teacher("Shanya Singhaniya", "shanya12@gmail.com", "shanya125");

user1.addCourse()

console.log(user1 instanceof teacher);
