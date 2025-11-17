let a  = prompt("Enter first number")
let b = prompt("Enter second number") // here when we promt value it pass as string even it is integer so we have to convert it if it is number we use parseInt

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed") // when u try to enter string in promt then is convert it into NaN where if condition execute and throw error
}

let sum = parseInt(a) + parseInt(b)

console.log(sum)
function main(){
    try{
    console.log("The sum is ", sum*x);
    return true;
}
catch(error){

    console.log("Error aa gya bhaii"); // in try block we have not defined the x which is throw error so catch will execute
    return false;
}

finally{
    console.log("files are being closed and db connection is being closed")
console.log("hi");
    // we used finally in function case when a function return something but we also want to execture after return value so only finally can execute further code after function return
}

console.log("hi"); // here hi willnot print as function already return the value only code inside finally can execute
}

let c = main()
