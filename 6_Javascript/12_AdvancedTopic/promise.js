
const promiseOne = new Promise(function(resolve, reject){
    // DO an async task
    // DB Calls, cryptography, network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve() // here resolve is used to connect it with then function
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})

/* ************************************************* */

// another way to code promise

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async is completed");
})

/* ************************************************ */

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({username: "Rahul", email: "chai@example.com"})
    },1000)
})

promiseThree.then((user)=>{
console.log(user); // here user passed to resolve
})

/* ************************************************** */

const promiseFour = new Promise((resolve, reject)=>{
   setTimeout(()=>{
    let error = true
   if(!error){
      resolve({username:"ram", email:"ram@example.com"})
   }
   else{
    reject("ERROR: Something Wrong");
   }
   },1000)
})

promiseFour
.then((user1)=>{
   // console.log(user1);
    return user1.username
})
.then((username)=>{
 console.log(username)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=> console.log("the promise is either resolved or rejected"))

/* *********************************************** */

const promiseFive = new Promise((resolve, reject)=>{
   setTimeout(()=>{
    let error = false
   if(!error){
      resolve({username:"ram1", email:"ram1@example.com"})
   }
   else{
    reject("ERROR: Something Wrong");
   }
   },1000)
})

// here we control promise method using the async function 

async function consumePromiseFive() {
    try {
        const respone = await promiseFive
        console.log(respone);
        
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()

/* ******************************************************************** */

// here we fetch data from an api

/*async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    }
    catch(error){
        console.log("E:", error)
    }
    
}

getAllUsers() */

/* ********************************************* */

// Another way to fetch api

 fetch('https://jsonplaceholder.typicode.com/users')
.then((respone)=>{
    return respone.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))

