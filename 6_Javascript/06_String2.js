// let fruit1 = 'Orange';
// let fruit2 = 'Apple';
// let myHtml = `Hello ${name}
//               <h1> This is heading </h1>
//               <p> you kike ${fruit1} and ${fruit2}
//               `;

// document.body.innerHTML = myHtml; // document.body.innerHtml used for a way to access and manipulate the HTML content within the <body> element of an HTML document

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

let num1 = 5;
let num2 = 6;

let result = num1 + num2

console.log("the addition of " + num1 + " and " + num2 + " is " + result); // here it become difficult to remember syntax

console.log(  ` the addition of num1 and num2 is result`); // compiler doesn't know it is variable or statement 

console.log(`the addition of ${num1} and ${num2} is ${result} `); // that's how we used templates literanl

console.log("my name is \n rahul ") // here we have to used the \n for new line

console.log(`my name is 
    rahul`)