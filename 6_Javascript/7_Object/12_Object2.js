// Object Shorthand -> 

let name = "Rahul";
let age = 34;
let person = { name, age};
let person1 = {name, age, city:"Delhi"};
console.log(person)
console.log(person1);

/* **************************************************** */

// Destructuring 

let arr = [2,3,4,5,6]
let [a, , b, ...res]= arr

console.log(a, b,res );