// Learn about function declaration and function expression

// function declaration -> it support hoisting means we call call function before defining it

function sum(a,b){    // if i declare function as variable then it is called function expression
    return a+b;          
}

console.log(sum(2,4));

// function expression

let sum1 = function(c,d){     // function expression must be defined before calling it
    return c+d;
}

console.log(sum1(5,6));

// Arrow function -> it is always function expression

let sum2 = (e,f) => {
    return e+f;
}

console.log(sum2(4,1));

// if function have only one statement and that statement is return then we can write it in single line

let sum3 = (g,h) => g+h;   // it is same as above function

console.log(sum3(7,3));

// if function have only one parameter then we can remove paranthesis around parameter

let square = x => x*x;  // it is same as (x) => x*x
console.log(square(5));

// if function have no parameter then we have to give empty paranthesis
let greet = () => console.log("Hello World");
greet();

// if function have more than one statement then we have to use curly braces and return keyword

let sum4 = (m,n) => {
    let add = m+n;
    return add; 
}

console.log(sum4(8,2));

// we can also write function inside function
let sum5 = (p,q) => {
    let add1 = (x,y) => x+y;    
    return add1(p,q);
}   
console.log(sum5(10,20));

// we can also pass function as argument to another function
let sum6 = (r,s) => r+s;
let operate = (func,a,b) => func(a,b);   // func is function name
console.log(operate(sum6,4,5));  // here we are passing sum6 function as argument to operate function       
console.log(operate((x,y) => x*y,4,5)); // we can also pass arrow function as argument

// we can also return function from another function
let greet1 = () => {
    return () => console.log("Hello from returned function");
}
let returnedFunc = greet1();  // here returnedFunc is function
returnedFunc();               // calling returned function
greet1()();                  // we can also call it like this

// IIFE -> Immediately Invoked Function Expression
// it is function which is invoked immediately after its declaration
// it is used to create a new scope and avoid polluting global scope
(function(){
    console.log("IIFE function");
})();  // function is invoked immediately after its declaration

// we can also pass parameters to IIFE
(function(name){
    console.log("Hello " + name);
})("Sanket");
// here "Sanket" is passed as argument to IIFE