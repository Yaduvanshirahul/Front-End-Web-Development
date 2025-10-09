let num = [3,4,5,6,7];

for(let i=0;i<num.length;i++){
    console.log(num[i]);
}

/* **************************************** */

// forEach loop

num.forEach((element) => {
    console.log(element * 2);
})

num.forEach((element) => {
    console.log(element * element);
})

/* **************************************** */


// Array.from

let name = "Sanket";
let arr = Array.from(name);
console.log(arr);
console.log(arr.length);

/* **************************************** */  

// for...of loop

let num1 = [2, 3, 5, 1, 6]
for( let i of num1){
    console.log(i);
}

/* **************************************** */

// for...in loop

let num2 = [2, 3, 5, 1, 6]
for(let item in num2){
    console.log(item);   // it gives index                   
    //   console.log(num2[item]); it wil give value
}  