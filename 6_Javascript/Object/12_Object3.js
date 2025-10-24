// Destructuring Arrays and Object -> whenever we extracting value from array and object of javascript then its called as destructuring.
/* let arr = [2,4]
let [a,b] = arr

no need to this:
let a = arr[0]
let b = arr[1]
*/ 


const getUser=()=>{return "Peter"};
const user = ["Rahul", "Aman", "Sam","Ankit", getUser];
const [z1,z2,z3,z4,z5]= user; // here we can return user also
console.log(z1,z2, z5()); // Rahul Aman Peter
const [y1,y2,... y3]= user;
console.log(y1,y2);
console.log(y3); // destructing the array by writing ... 

/* ********************************************************* */

const userObj = {
    name: "Anil",
    age :25,
    city: "noida",
    getCountry:()=>{return "india"}
};

const{age, city} = userObj;
console.log(city);
const {name, getCountry, ...other} = userObj; // in this we can't declare the age and city again 
console.log(getCountry());
console.log(other);