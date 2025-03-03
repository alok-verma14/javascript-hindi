// Dates

let myDate = new Date("01-14-2023");
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toString());

let myTimeStamp = Date.now();
let myCreatedDate = new Date("08-14-2004")
// console.log(Math.ceil(myCreatedDate.getTime()/1000));

let newDate = new Date();
console.log(myCreatedDate.toLocaleString('default', {
    weekday: "long"
}));




