console.log("Learn about the Javascript let, const and var keywords");

let a = 10;
var b = 20;
var c = 32

// let a=20; // it will throw an error because we cannot re-declare a variable with let keyword

var c = 40; // it will not throw an error because we can re-declare a variable with var keyword
// but it will update the value of c to 40

a = 32; // it will not throw an error because we are not re-declaring a variable with let keyword but not updating the value of a to 32
b =34; // it will not throw an error because we are not re-declaring a variable with var keyword but not updating the value of b to 34

console.log(a, b, c);
{
    let a = 100;
    console.log(a);
}

console.log(a);