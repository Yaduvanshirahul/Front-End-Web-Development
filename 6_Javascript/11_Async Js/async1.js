/* Settle mean resolve or reject
   resolve means promise has settled successfully
   reject means promise has not settled successfully
*/

async function getData(){
    // simulate getting data from a server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1') // here data is fetch from server
    let data = await x.json() // here data parson in json format so that read easily which is in object format or string format
    return data

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