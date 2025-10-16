/* hoisting --> we can use variable and function in any line even if it declare after the uses.
 so means variable and function are hoisted which means their declaration is moved on the top of code. 
*/

    /*var a = 12;  --> var a;  declaration
                     a = 12; intialization
     */
                    
var a;
console.log(a); // here 'undefined' value of a is print in other language it show error

// var a; --> these line moves to up when variable declare after console. that's how hoisting work.


a =12;

/* 
there is difference between undefined and not-defined 
   
undefined --> which is exist but unknown.
not-defined --> which is not exist.
*/