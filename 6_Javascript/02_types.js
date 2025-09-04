/*3. type in js --> primitive and reference(non primitive) 

    primitive --> numbers => 2 to power 53,
                  bigint
                  string=> ""
                  null => standalone value
                  undefined
                  boolean => true/false
                  Symbol
    
          --> the value whose real valued is copied when it is copy

    reference --> [], (), {} --> any value which when copy will not really copy.only that's value reference is passed
    
*/

"use strict"; // treat all JS code as newwer version

// alert(3+4) we are using nodejs, not browser so it will not display


var a = 12;
var b = a; // share same value

console.log(b);

var c= [1,2,3,4]; // share reference value
var d = c;
let e = null
let f 
d.pop();
console.log(d);
console.log(c);
console.log(typeof e)
console.log(typeof f)
/* note: how to copy real value is advanced topic. we learn in upcoming lectures */