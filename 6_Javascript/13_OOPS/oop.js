const user = {
    username: 'RAHUL',
    loginCount: 5,
    signId: true,

    getUserDetails: function(){
        console.log("Got user details from database")
        console.log(`Username: ${this.username}`);
        console.log(this); // here this show the context of current user object
        
        
    }
}

console.log(user.username)
console.log(user.getUserDetails())
console.log(this) // here this show empty as outside it has no context

/* ******************************************************* */

// const promiseOne = new Promise() // here new is the constructor function to create the new context
// const date = new Date()

function User(username, loginCount, isLoggIn){
    this.username = username // here this represt that it is variable
    this.loginCount = loginCount;
    this.isLoggIn = isLoggIn

    return this // after only used of return keyword it will console the  userOne and userTwo data but if not used return then only show userTwo data as we create empty object using new keyword

}
const userOne = User("hitesh", 22, true)
const userTwo = new User("ram", 11, false) // if we not used new keyword here then it will override the userTwo argument in userone even if we not console the userTwo
const userThree =  User("raj", 32, true)
console.log(userThree)
console.log(userOne) // here both userThree override its argument to userONE 
console.log(userTwo)