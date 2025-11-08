// Array Methods -> forEach, map, filter, reduce, sort, reverse

const coding = ["js", "ruby", "java" , "puthon", "cpp"];
coding.forEach((item, index) => {
    console.log(item.toUpperCase(), index);
});
// JS 0
// RUBY 1
// JAVA 2
// PUTHON 3
// CPP 4
// it will not return anything means undefined because forEach method is used to iterate the array and perform some operation on each element and return nothing mean undefined

/* ************************************************************************************************************************* */

// Filter -> it will filter the array based on condition and return new array

const myNums = [1,2,3,4,5,6,7,8,9,10];

// 1st way to filter the array
const newNums = myNums.filter((num)=>{num>5}); // it will not work because we have not used return keyword
console.log(newNums); // []

const newNums2 = myNums.filter((num)=>{
    return num>5
});                                                 // it will work because we have used return keyword
console.log(newNums2); // [ 6, 7, 8, 9, 10 ]

// 2nd way to filter the array

const newNums3 = myNums.filter(num => num>5); // it will work because we haven't  used return keyword but we have used arrow function without curly braces
console.log(newNums3); // [ 6, 7, 8, 9, 10 ]

// OR

// 3rd way to filter the array -> using forEach method

const newnum = []

myNums.forEach((num) => {
    if(num>5){
       // num.push(num); // it will not work because num is a number and we are trying to push a number in a number
       // we have to push the number in an array
       newnum.push(num) // it will work

    }
})

console.log(newnum); // [ 6, 7, 8, 9, 10 ] another way to filter the array and it work but it is not a good way to filter the array because it is not efficient and it is not readable

/* ************************************************************************************************************************* */

// Map -> it will iterate the array and return new array after performing some operation on each element

const myNumers = [1,2,3,4,5,6,7,8,11,120];
    const newNumss = myNumers.map((nums)=>{
        return nums*2;
    })

console.log(newNumss); // [ 2, 4, 6, 8, 10, 12, 14, 16, 22, 240 ]

const nwNum = myNumers
                    .map(num => num*3) // it will work because we haven't  used return keyword but we have used arrow function without curly braces
                    .map(num => num+1)
                    .filter(num => num>10) // it will filter the array and return new array
                   // .map(num => num*2) // it will iterate the array and return new array after performing some operation on each element
                    // it will give [26, 32, 38, 44, 50, 62, 722] because it will multiply each element by 2


console.log(nwNum); // [13, 16, 19, 22, 25, 31, 361]
// first it will multiply each element by 3 then it will add 1 to each element then it will filter the array and return new array which is greater than 10

/* ************************************************************************************************************************* */

// Reduce -> it will reduce the array to a single value based on the condition

const number = [1,2,3,4];

const total = number.reduce(function(acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+ currval
}, 0)

console.log(total); // 10
// acc is accumulator which will accumulate the value and currval is current value of the array
// 0 is the initial value of the accumulator

//OR 


const sum = number.reduce( (acc, curr) => acc + curr, 0 ) // using arrow function
console.log(sum); // 10

/* ************************************************************************************************************************* */

const shoppinCart = [
    {
        itemName: "js course",
        price: 299
    },
     {
        itemName: "js course",
        price: 299
    },
     {
        itemName: "js course",
        price: 299
    },
     {
        itemName: "js course",
        price: 299
    }
]

const totalAmount = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(totalAmount); // 1196