let a = null;
let b = 345;
let c = true;
let d = BigInt("567") + BigInt("4");
let e = "Rahul";
let f = Symbol("I'm a B.tech passed student who have no knowledge of coding");
let g ;

console.log(a,b,c,d, e, f,g);

console.log(typeof g);

// now learn aout reference type which syntax is same as object in other language and it is like dictionary in python that is key value pair
let h = {
    "firstname": "Rahul",
    lastName: "Kumar",
    age: 20,
    skills: ["C", "C++", "Java", "Python", "Javascript"],
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

console.log(h);
console.log(typeof h);
console.log(h["lastName"]); //  two way to access value of key in object and that are h["keyName"] and h.keyName
console.log(h.lastName); 