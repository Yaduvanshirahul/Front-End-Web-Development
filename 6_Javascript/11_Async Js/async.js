/* Async Function -> A Promise is a JavaScript object that represents the eventual result of an asynchronous operation.
It can be in one of three states:

pending → operation is still running

fulfilled → operation completed successfully

rejected → operation failed

A Promise allows you to run async tasks without blocking the main thread and lets you handle the result using .then() and errors using .catch().

✔️ Promise = “I will give you the result in future.” 

async/await is a modern JavaScript feature built on top of Promises that allows you to write asynchronous code in a clean, synchronous-looking way.

A function declared with async always returns a Promise.

The await keyword pauses the function until a Promise fulfills or rejects.

✔️ async/await = cleaner, easier way to work with Promises. */

async function getData(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(455)
        }, 3500);
    })
}

async function main(){
    console.log("Loading modules")

    console.log("Do something else")

    console.log("Load Data")

    let data =  await getData() // await is always inside the async function and then after calling main function the first three line execute then wait for 3 second then further code execute if i dont use await then it will not stop it execute further code or execute async function simultaneously

    console.log(data)

    console.log("process data")

    console.log("task 2")
}

main()