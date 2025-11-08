/* 
Spread Operator: 

*/

var a = [1,2,3,4,5];
var b = [...a]     /* ... -> here 3 dots is called spread operator which means copy the values of that variables where ever spread operator is written. not reference only copy values. so b also have 1,2,3,4,5 value*/

b.pop();     /* just remove the last element of array. it doesn't take any arguments only remove elements from ends */
console.log(b);
console.log(a);

/* it also used for the object */

var obj = { 
    name: "rahul",
    rollno: 2102228
};

var copyobj ={
    ...obj
};