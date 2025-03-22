// getter and setter of particular variable
class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    };

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password}67gd`
    }
    set password(value){
        this._password = value;
    }
};

const user = new User("alok@facebook.com", "alok23");
console.log(user.password);
