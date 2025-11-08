const score = 40
console.log(score) // js take is as number automatically

const balance = new Number(1200) // here we explicitly define it is a number
console.log(balance)

console.log(balance.toString());
console.log(balance.toString().length); // to see the length of balance which become the string
console.log(balance.toFixed(3)); // to add the decimal in balance


//++++++++++++++++++++++++++++++++++++++++++++++++++

const otherNumber = 123.5823
console.log(otherNumber.toPrecision(3)) // to roundoff the value after given precision

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // by default it take it as US standard but we can add on IND standard


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-3));
console.log(Math.round(4.5));
console.log(Math.ceil(4.2)); // roundoff to the upper value
console.log(Math.floor(4.9)); // roundoff to the below value
console.log(Math.sqrt(34));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math.random()); // random value between 0 to 1
console.log((Math.random()*10)+1); // to add value 1 in random value
console.log(Math.floor(Math.random()*10)+1); // 

const min =10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);




