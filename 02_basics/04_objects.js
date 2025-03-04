// Singleton Objects

const tinderUser = new Object();

tinderUser.id = "alok12";
tinderUser.email = "akv321@gmail.com";
// Object.freeze(tinderUser);
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    fullname: {
        username: {
            fname:  "Alok",
            lname: "Verma"
        }
    }
}

// console.log(regularUser.fullname?.username.fname);
// console.log(regularUser);

const obj1 = {
    1: "a", 
    2: "b"
};
const obj2 = {
    3: "c",
    4: "d"
};
const obj3 = {
    4: "e",
    5: "f"
}
// const allObj = {obj1, obj2, obj3};
// const allObj = Object.assign({}, obj1, obj2, obj3);
// console.log(allObj);
const allObj = {...obj1, ...obj2, ...obj3};
// console.log(allObj);

const users = [
    {
        id: "1",
        email: "akverma123@gmail.com"
    },
    {
        id: "2",
        email: "legendAlok123@gmail.com"
    }
];

// console.log(users[0].email);
// console.log(Object.entries(tinderUser));
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// Destructuring
const course = {
    courseName: "javascript foundation",
    price: "2499",
    courseInstructor: "Alok Verma"
};

const {courseInstructor: instructor} = course;
console.log(instructor);









