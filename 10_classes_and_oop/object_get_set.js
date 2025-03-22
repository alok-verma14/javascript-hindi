// Object getter and setter
const User = {
    _email: "alok@microsoft.com",
    _password: "anv12",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        return this._email = value
    }
}

const user = Object.create(User);
console.log(user.email);
