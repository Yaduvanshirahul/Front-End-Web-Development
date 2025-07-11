/* Higher Order Function: aisa func. jo accept kar le ek aur func ya fir wo return karde ek aur func 

               or 

Higher order func are the func which accept a Function In a parameter  Or Retrun a Function Or both 

eg: ForEach Method always takes another function inside it, so ForEach is a Higher Order Function 

*/

/* FOREACH LOOP: jab loop srf array pe chalta hai matlaab ki jab bhi tumhare paas ek array ho, tab use mein kaun aata hai foreach loop */

var a=[1,2,3,4,5,6,7,8,9,10,11,12,13];

a.forEach(function(val1) {
    console.log(val1+3);    /* NOTE: foreach kabhi bhi by default aap ke array mein change nahi karta hai wo aapko changes krke deta hai array ki temporary copy par jiske wajah se array humesha same rehta hai */
});

/* 2nd method  eg:

function abcd(){

    return function(){}
}
abcd()
*/

// Higher-order function that returns a function
function createMultiplier(multiplier) {
    return function(x) {
        return x * multiplier;
    };
}

const double = createMultiplier(2);  // Returns a function that doubles a number
const triple = createMultiplier(3);  // Returns a function that triples a number

console.log(double(5));  // Output: 10
console.log(triple(5));  // Output: 15
console.log();

/* ist method eg:

function abc(val){

}

abc(functionn(){})

*/

// Higher-order function that takes a function as an argument
function calculate(a, b, operation) {
    return operation(a, b); // Calls the passed function with a and b
}

// Function to add two numbers
function add(x, y) {
    return x + y;
}

// Function to subtract two numbers
function subtract(x, y) {
    return x - y;
}

// Using the higher-order function with different operations
console.log(calculate(10, 5, add));      // Output: 15
console.log(calculate(10, 5, subtract)); // Output: 5

