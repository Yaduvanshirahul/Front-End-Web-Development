const user= {
    username: "hitesh",
    price: 55,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`); // here this keyword used to refer the current contest of this user object hitesh
        console.log(this) // here it total refer the content of user
    } 
}

user.welcomeMessage()
user.username = "sam" // here username change to sam
user.welcomeMessage() // here changes made in user

 /////////////////////////////////////////////

 function chai(){
    let username1 = "rahul";
    console.log(this.username1);
 } 

chai() // undefind output
 // here the this keyword not work as it undefined inside the function

/* ****************************************************** */

// Arrow Function :

const chai1 = ()=>{
    let username2 = "ram"
    console.log(this);
}

chai1() // in arrow function it will show empty {}  braces

const addTwo = (num1, num2) =>{
 return num1+num2
}

console.log(addTwo(5, 7));

// another method

const addTwo1 = (num1 , num2) => num1 +num2  // when statement is about to one line 
 console.log(addTwo1(3,5))

 const addTwo2 =(num1, num2) => ({username: "hitesh"})  // to return object u have to use parenthesis ()

 console.log(addTwo2(2,3))