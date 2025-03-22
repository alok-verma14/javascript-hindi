// getter and setter using function in a traditional way

function User(email, password){
    this._email = email;
    this_password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return `${this_password}gduy735`
        },
        set: function(value){
            this._password = value
        }
    })
};

const user = new User("alok@netflix.com", "abc123");

console.log(user.email);
console.log(user.password);

