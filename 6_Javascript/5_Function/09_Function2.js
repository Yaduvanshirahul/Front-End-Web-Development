function addTwonum(num1, num2){
    console.log(num1 + num2);
}
   const result = addTwonum(3,4);
   console.log(result);  // it will give undefined because function is not returning anything   
// so we have to return something from function

/* ****************************************************************** */

function sum(a,b){
    let result1 = a+b;
    return result1;   // function will return the value of result
    //console.log("rahul"); // this line will never execute because it is after return statement
}

    // or we can directly return a+b
    console.log(sum(2,4));  // it will give 6
   const result2= sum(5,6); // here we are storing the return value of function in result2 variable
    console.log(result2); // it will give 11

/* ****************************************************************** */

function loginUserName(username){
    return `${username} just logged in`;
}

console.log(loginUserName("RAHUL"));  // it will give RAHUL just logged in
console.log(loginUserName());  // it will give undefined just logged in because we are not passing any argument

/* ****************************************************************** */
// Default Parameter 


function loginUserName1(username = "guest"){
    if(!username){ // if username is empty string or null or undefined
        console.log("please enter a valid name"); // if username is empty string or null or undefined
        return; // to exit from function
    }
    return `${username} just logged in`;
}
console.log(loginUserName1("RAHUL"));  // it will give RAHUL just logged in
console.log(loginUserName1());  // it will give guest just logged in because we are passing default value to username parameter