// Spread and Rest Operator -> 

// Rest 

function addNumber(a,b,c, ...other){
    console.log(other);
    return a+b+c;
}

const res = addNumber(1,2,3,4,5,6,7,8)
console.log(res)

/* ****************************************************** */

// Spread 

let arr1 = [1,4,3]
let obj1 = {...arr1}
console.log(obj1);

function sum(v1, v2, v3){
    return v1+v2+v3;
}

console.log(sum(...arr1));

// ////////////////////////////////////////////////////// //

var names =["ram", "sham","dam"];
function getNames(name1,name2, name3){
    console.log(name1,name2,name3);
}

getNames(names[0],names[1],names[2])
getNames(...names) // Spread operator
getNames(names) // array form


// ////////////////////////////////////////////////////////// //


let obj2 = {
    name: "rahul",
    age: 23,
    company:"l&T"
}

console.log({...obj2, name: "john"});
console.log({name: "ram", company:"tcs", ...obj2}) // in this case no override occur this will print the obj2 value without changing the object value

