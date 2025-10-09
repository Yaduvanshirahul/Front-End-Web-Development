function addNumber(...numbers) {
    let ans = 0;
    for(let i=0;i<numbers.length;i++){
        ans = ans + numbers[i];
    }
    return ans;
}

let result = addNumber(2,3,5,1,6,3);
console.log(result);

// but these not possible in arrow function
// let addNumber1 = (...numbers) => {
//     let ans = 0;
//     for(let i=0;i<numbers.length;i++){   
//         ans = ans + numbers[i];
//     }
//     return ans;
// }            
// let result1 = addNumber1(2,3,5,1,6,3);
// console.log(result1); 
// it will give error because rest parameter is not allowed in arrow function

// but we can use arguments object in arrow function
/* let addNumber1 = () => {
    let ans = 0;    
    for(let i=0;i<arguments.length;i++){   
        ans = ans + arguments[i];
    }       
    return ans;
}
let result1 = addNumber1(2,3,5,1,6,3);
console.log(result1); */

// it will give error because arguments object is not allowed in arrow function     
// so we can use rest parameter in normal function and arguments object in arrow function
// but we can use rest parameter in arrow function if we define it as variable
let addNumber2 = (...numbers) => {
    let ans = 0;    
    for(let i=0;i<numbers.length;i++){   
        ans = ans + numbers[i];
    }
    return ans;
}
let result2 = addNumber2(2,3,5,1,6,3);
console.log(result2); 
// it will work because we are using rest parameter as variable in arrow function

let mulitply = (...nums) =>{
    let ans = 1;
    for(let i=0;i<nums.length;i++){
        ans = ans * nums[i];
    }   
    return ans;
}
console.log(mulitply(2,3,4));

// we can also use for...of loop in arrow function  
let multiply1 = (...nums) =>{
    let ans = 1;        
    for(let i of nums){
        ans = ans * i;
    }   
    return ans;
}       
console.log(multiply1(2,3,4));

// we can also use for...in loop in arrow function              
let multiply2 = (...nums) =>{
    let ans = 1;    
    for(let i in nums){
        ans = ans * nums[i];
    }   
    return ans;
}
console.log(multiply2(2,3,4));