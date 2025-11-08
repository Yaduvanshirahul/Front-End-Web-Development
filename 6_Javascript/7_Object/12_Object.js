// Object -> Object is a collection of properties

/* object: ek se jaada bande ki baat ki to hua array, ek baande ke bare mein saari baat ki to hua object
object: object hai ek bande ki details
when object created using constructor then signleton object created like Object.create()

*/
/* 1. BLANK OBJ: empty curley braces called object in js */

//var a ={};      

/* FILLED OBJ: when curley braces filled with data its also obj */  

const mySym = Symbol("key1") // here we use Symbol method

const user = {
    name: "Rahul",
    "full Name": "Rahul Yadav", // if property name has space then use quotes means it is string
    age: 21,
    [mySym]: "mykey1", // you can only access by using bracket
    city: "Ludhiana",
    email:"ry4101@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

console.log(user.age); // this is also a way to access the property of object
console.log(user["name"]); // this is also a way to access the property of object
// console.log(user.full Name); // it will give error because of space in property name
console.log(user["full Name"]);
console.log(user[mySym]); 

// to change value 

user.email = "ram@gmail.com";
// Object.freeze(user); // to freeze the object so no one can change value of it
user.email ="raju@gmail.com";// here mail value will not change

console.log(user);

/* ************************** */

user.greeting = function(){
    console.log("hello Js user");
}
console.log(user.greeting); // it will give function reference
console.log(user.greeting()); // to make the greeting function we have to first unfreeze the object line 36

/* ************************ */

user.greeting2 = function(){
    console.log(`hello Js user, ${ this["full Name"]}`);
}
 
console.log(user.greeting2());