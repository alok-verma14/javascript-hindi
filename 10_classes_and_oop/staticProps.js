// Static Properties in classes 
class user{
    constructor(username){
        this.username = username;
    }

    staticlogMe(){
        console.log(`Username = ${this.username}`);
    }
};

class teacher extends user{
    constructor(username, email){
        super(username);
        this.email = email;
    };
};

const user1 = new teacher("alok_12", "alok123");
user1.logMe();