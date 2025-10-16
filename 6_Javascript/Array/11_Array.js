// Array -> A collection of items stored at contiguous memory locations. Js arrays are dynamic mean can have any size and can hold items of different types.
// Arrays are zero indexed
// Arrays are mutable -> can be changed
// Arrays are reference types -> when we assign an array to a variable, the variable stores a reference to the array in memory, not the actual array itself.
// Arrays are objects -> have properties and methods
// Arrays can be created using array literal or array constructor
// Array Literal mean using square brackets []
// Array Constructor mean using new keyword

// Creating an array using array literal
let fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits); // ['Apple', 'Banana', 'Orange']

// Creating an array using array constructor
let numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(typeof fruits); // object
console.log(Array.isArray(fruits)); // true

// different way of creating array

const myArr = [0,1,2,3,4]; // array literal
const myHero = ["shaktiman", "Nagraj", "doga"]; 

const myArr2 = new Array(3,4,5,6,7); // array constructor
console.log(myArr2);

// Array Methods

// 1. push() -> adds one or more elements to the end of an array and returns the new length of the array.

myArr.push(5);
console.log(myArr); // [0,1,2,3,4,5]

// adding multiple elements
myArr.push(6,7,8);
console.log(myArr); // [0,1,2,3,4,5,6,7,8]

// 2. pop() -> removes the last element from an array and returns that element. This method changes the length of the array.

myArr.pop();
console.log(myArr); // [0,1,2,3,4,5,6,7]

// removing multiple elements
myArr.pop();
myArr.pop();
console.log(myArr); // [0,1,2,3,4,5]

// 3. unshift() -> adds one or more elements to the beginning of an array and returns the new length of the array.

myArr.unshift(9);
console.log(myArr); // [9,0,1,2,3,4,5]

// adding multiple elements
myArr.unshift(10,11);
console.log(myArr); // [10,11,9,0,1,2,3,4,5]

// 4. shift() -> removes the first element from an array and returns that element. This method changes the length of the array.

myArr.shift();
console.log(myArr); // [11,9,0,1,2,3,4,5]
// removing multiple elements
myArr.shift();
myArr.shift();
console.log(myArr); // [0,1,2,3,4,5]

// 5. indexOf() -> returns the first index at which a given element can be found in the array, or -1 if it is not present.

console.log(myArr.indexOf(3)); // 3
console.log(myArr.indexOf(10)); // -1

// 6. includes() -> determines whether an array includes a certain value among its entries, returning true or false as appropriate.

console.log(myArr.includes(3)); // true
console.log(myArr.includes(20)); // false

// 7. slice() -> returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
let newArr = myArr.slice(1,4);
console.log(newArr); // [1,2,3]
console.log(myArr); // [0,1,2,3,4,5]
// if we don't pass end index, it will slice till the end of the array
let newArr2 = myArr.slice(2);
console.log(newArr2); // [2,3,4,5]

// if we pass negative index, it will slice from the end of the array
let newArr3 = myArr.slice(-3);
console.log(newArr3); // [3,4,5]

// 8. join() -> joins all elements of an array into a string and returns this string. We can pass a separator as an argument, if not passed, it will use comma as default separator.

let str = myArr.join();
console.log(str); // 0,1,2,3,4,5
let str2 = myArr.join(' - ');
console.log(str2); // 0 - 1 - 2 - 3 - 4 - 5 here - is separator
let str3 = myArr.join('');
console.log(str3); // 012345 here '' is separator

// 9. splice() -> changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It returns an array containing the deleted elements. This method modifies the original array.    
// syntax: array.splice(start, deleteCount, item1, item2, ...)

// removing elements
let removedElements = myArr.splice(2,2); // from index 2, remove 2 elements
console.log(removedElements); // [2,3] removed elements
console.log(myArr); // [0,1,4,5] modified original array

