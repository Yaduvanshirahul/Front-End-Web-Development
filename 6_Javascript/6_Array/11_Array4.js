// Some -> some function in array will check if at least one element in the array passes the test implemented by the provided function and return boolean value true or false

const evenNum = [2,4,6,8,10,12,14,16,22,240];

const result = evenNum.some(() => {
    return x%2 !== 0; // it will check if there is any odd number in the array
})
console.log(result); // false because there is no odd number in the array

const result2 = evenNum.some((x) => {
    return x>10; // it will check if there is any number greater than 10 in the array
})  
console.log(result2); // true because there are many numbers greater than 10 in the array

// Every -> every function in array will check if all the elements in the array passes the test implemented by the provided function and return boolean value true or false     

const result3 = evenNum.every((x) => {
    return x%2 === 0; // it will check if all the numbers are even in the array
})
console.log(result3); // true because all the numbers are even in the array
const result4 = evenNum.every((x) => {
    return x>10; // it will check if all the numbers are greater than 10 in the array
}   
)
console.log(result4); // false because not all the numbers are greater than 10 in the array