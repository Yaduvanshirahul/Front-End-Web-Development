// Rest operator -> When we use ... three dot in function as argument then it called as rest operator
// it return value as array

function calculation(...num1){
    return num1
}

console.log(calculation(12,121,142,23));

///////////////////////////////////

const myNewArr = [1,2,3,4,5]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArr)) another way

console.log(returnSecondValue([20,30,40,50]));

/* **************************************************** */
// Function with object

const user = {
    username : "rahul",
    price : 199
}

function handleObject(otheruser){
    console.log(`username is ${otheruser.username} and price is ${otheruser.price}` );
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 322
})