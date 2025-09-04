/* Looking at non-primitive types data how to define */

const heros =["shaktiman", "naagraj", "doga"];

// here we define the array

let myobj= {
    name: "rahul",
    age: 22
}

// here we define the object

const myFunction = function(){
    console.log("hello world");
}

// here we define the function

console.log(typeof myFunction);


/* look at primitive data type method */

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id == anotherID); // here symbol used to define to different ID of variable
