let myName = "Rahul"

let anotherName = "ram"

anotherName = "Raj"
console.log(myName);
console.log(anotherName);

/* here the value store in stack and in stack copy of value refer to the another variable whom assign the value of other variavle.
so change in another 2nd variable doesn't change the value of ist */

let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email= "rahul@google.com"

console.log(userOne.email);
console.log(userTwo.email);

/* in non primitive stack memory is used where one variable actual value refers to another in stack memory.
so change in one variable value also change the value of others */