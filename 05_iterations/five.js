const coding = ["js", "ruby", "java", "c++"]

// First Way
coding.forEach(function(item, index){
    // console.log(item, index);
    
});

// Second Way
coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
});

// Third Way

// Note -> we are supposed to pass the reference of function to the "forEach function of an array"
coding.forEach(printArrayDetails);

function printArrayDetails(item, index, arr){
    // console.log(`${index}: ${item} || All Array is ${arr}`);
    
};

// Array of Objects

const phones = [
    {
        company: "Motorolla",
        manufacturing: "India"
    },
    {
        company: "Samsung",
        manufacturing: "Korea"
    },
    {
        company: "Xioami",
        manufacturing: "China"
    },
    {
        company: "Lava",
        manufacturing: "India"
    },
];

phones.forEach((item) => {
    console.log(`${item.company} -> ${item.manufacturing}`);
})