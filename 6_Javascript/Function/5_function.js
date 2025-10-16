/* Functions: mainly works for 3 reason

1. when you don't want to run your code immediately. you want to run it in future.
2. when you want to reuse your code.
3. when you want to run your code with different data.

*/

 function  hellobolo(){
    console.log("HELLO");
 }

 hellobolo();

 /*1. first write your code and then after run code using function */

 function oatsBanoandKhao(){
    console.log("patila chadao");
    console.log("oats dalo");
    console.log("milk dalo ");
    console.log("aur khao");
    console.log("");
 }

 oatsBanoandKhao(); // for day1
 oatsBanoandKhao(); // for day2

 /*2. to reuse the code */

 function ab(a,b,c)  //3. these are parameteres -- variable jinme value store hoti hai arguments wali
 {
    console.log(a);
    console.log(b);
 }




 ab(12,122,1222);

 //3. these are arguments --> real value jo hum dete hai func. chalate time

 function add(a, b) {
   return a + b;
}

let result = add(3, 4);
console.log(result);  // Output: 7

/*4. Return statement function:Functions can return a value using the return keyword. Once a return statement is executed, the function stops and the returned value is passed back to where the function was called.*/

function myFunction() {
   let x = 10;
   console.log(x);  // This works
}

//console.log(x);  // Error: x is not defined becz it scoped inside myfunction

/*5. Function Scope: Variables declared inside a function are local to that function and cannot be accessed outside of it.*/


let sum = (a, b) => a + b;
console.log(sum(5, 10));  // Output: 15

/*Function Type:1.Arrow Functions (ES6 in JavaScript): A more concise way to write functions. Arrow functions do not have their own this context. */


let greet = function() {
   console.log("Hello from an anonymous function!");
};

greet();  // Output: Hello from an anonymous function!

/*2. Anonymous Functions: These are functions without a name. They are often used as arguments to other functions or stored in variables.*/