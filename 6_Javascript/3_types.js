/*3. type in js --> primitive and reference 

    primitive --> numbers, string, null, undefined,boolean --> the value whose real valued is copied when it is copy

    reference --> [], (), {} --> any value which when copy will not really copy.only that's value reference is passed
    
*/
var a = 12;
var b = a; // share same value

console.log(b);

var c= [1,2,3,4]; // share reference value
var d = c;
d.pop();
console.log(d);
console.log(c);

/* note: how to copy real value is advanced topic. we learn in upcoming lectures */