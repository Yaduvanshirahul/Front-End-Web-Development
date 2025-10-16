// Array take any kind of data type also array into array

const marvel_Hero = ["thor", "ironman", "spiderman"];

const dc_Hero = ["superman", "batman", "flash"];

marvel_Hero.push(dc_Hero);
console.log(marvel_Hero); // ["thor", "ironman", "spiderman", ["superman", "batman", "flash"]] ooutput will be array inside array
console.log(marvel_Hero[3][1]); // batman which is in dc_Hero array

//marvel_Hero.concat(dc_Hero); // it will not change the original array
//console.log(marvel_Hero); // ["thor", "ironman", "spiderman", ["superman", "batman", "flash"]]

const all_Hero = marvel_Hero.concat(dc_Hero); // it will merge two arrays and return new array
console.log(all_Hero); // ["thor", "ironman", "spiderman", "superman", "batman", "flash"]

// Spread Operator -> it will spread the array elements and mostly used to merge two arrays in place of concat method

const all_Hero2 = [...marvel_Hero, ...dc_Hero];
console.log(all_Hero2); // ["thor", "ironman", "spiderman", "superman", "batman", "flash"]

// flatten() -> it will flatten the array inside array and return new array
const arr = [1,2,3,[4,5,6],[3,2,9 ,[0,5]], [3,5,2]];
const flatArr = arr.flat(1); // 1 is the depth of flattening
console.log(flatArr); // [ 1, 2, 3, 4, 5, 6, 3, 2, 9, [ 0, 5 ], 3, 5, 2 ]
console.log(arr.flat(2)); // [ 1, 2, 3, 4, 5, 6, 3, 2, 9, 0, 5, 3, 5, 2 ]

/* ************************************************************************************************************************* */

const arrr = ["Rahul"];Z
console.log(Array.isArray(arrr)); // true
console.log(Array.from("Rahul")); // [ 'R', 'a', 'h', 'u', 'l' ] it will convert string into array of characters
console.log(Array.from({name: "Rahul", age: 24})); // [ undefined, undefined ] it will convert object into array of values

/* ************************************************************************************************************************* */

let score = 200;
let score2 = 100;
let score3 = 500;

console.log(Array.of(score, score2, score3)); // [ 200, 100, 500 ] it will convert the arguments into array