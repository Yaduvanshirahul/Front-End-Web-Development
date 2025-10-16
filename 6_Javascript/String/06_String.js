const name = "hitesh"
const repoCount = 43

console.log(name + repoCount + "value")

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

// this is moderen way to concate the string called string impulatation

//+++++++++++++++++++++++++++++++++++++++++++++++++++++


const gameName = new String('hiteshRahul ') 
// another method to write the string and this string is not an array it is an object which has multiple prototype like length ...

console.log(gameName.length)
console.log(gameName.toLocaleUpperCase());


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-10,6) // start counting from end and then print from the index where it stop 
console.log(anotherString);

//++++++++++++++++++++++++++++++++++++++++++++++++++

const newStringOne = "   rahul   "
console.log(newStringOne)
console.log(newStringOne.trim());

const url= 'https://hitesh.com/hitesh%20choudhary'

console.log(url.replace('%20','-'));
console.log(url.includes('ram')) // to check whether ram is present in url or not and it will return boolean value

//+++++++++++++++++++++++++++++++++++++++++++++

const nameStr = 'my name is rahul'
console.log(nameStr.split(' '));
