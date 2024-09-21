/* push, pop, shift or unshift */

var arr = [1,2,3,4,5,6,8];

arr.pop();
console.log(arr); // to remove elements from end of an array

arr.unshift(0); // to add value in starting of an array;
console.log(arr)

arr.push(12); // to add element in the end of array
console.log(arr);

arr.shift();
console.log(arr);// to remove one element from starting of an array

arr.splice(2,1);  // to remove value from particular index to till how many elements 
console.log(arr);