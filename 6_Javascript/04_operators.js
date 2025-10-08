console.log("Learn about the Arithmetic Operator");

let a = 3;
let b = 2;

console.log("a+b", a+b);
console.log("a-b", a-b);
console.log("a*b", a*b);
console.log("a/b", a/b);
console.log("a**b", a**b); // exponentiation 3^2
console.log("a%b", a%b); // modulus
console.log("++a", ++a); // pre increment
console.log("--b", --b); // pre decrement
console.log("a++", a++); // post increment
console.log("a--", a--); // post decrement

console.log("Assignment Operator"); 

let c =4;

c +=3 // c = c+3
console.log(c);
c -=3 // c = c-3
console.log(c);
c *=3 // c = c*3
console.log(c);
c /=3 // c = c/3
console.log(c);
c %=3 // c = c%3
console.log(c);
c **=3 // c = c**3
console.log(c);


console.log("Learn about the Comparision Operator");
console.log(2==1)
console.log(2>1);
console.log(3<5);
console.log(3>=3);
console.log(3<=3);
console.log(3!=3);
console.log(3===3); // strict equality operator
console.log(3==="3"); //check value and datatype both
console.log(3=="3"); // check value only

/*
console.log("2">1);
console.log("02">1);

note: not a good way to compare two different datatypes
*/

/*
console.log(null>0);
console.log(null==0);
console.log(null>=0);

note: not a good idea to comparision like this

*/
console.log("2">2);

console.log("2">"12"); // lexicographical comparison

console.log("Learn about the ternary operator");

let score = 67;
let grade = score >= 90 ? "A" :
            score >= 75 ? "B" : "C";
console.log(grade);