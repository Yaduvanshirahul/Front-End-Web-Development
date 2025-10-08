// String and It's function

const name = "RAHUL";
const greeting = "HI , How are you?\n";
console.log(greeting + '' + name ); // concatenation

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

let html;
html = "<h1>This is heading</h1>" +
       "<p>This is paragraph</p>";
    html = html.concat('this', 'str2');
    console .log(html); // concat function

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

    console.log(html.length); // length function
    console.log(html.toLowerCase()); // toLowerCase function
    console.log(html.toUpperCase());
    console.log(html); // original string is not changed

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

console.log(html[0]); // indexing
console.log(html[4]);
console.log(html.indexOf('t')); // indexOf function
console.log(html.indexOf('heading')); // if not found then return -1

console.log(html.lastIndexOf('t')); // lastIndexOf function
console.log(html.charAt(3)); // charAt function
console.log(html.substring(1,6)); // substring function it will give characters from index 1 to 5
console.log(html.slice(0,4)); // slice function it will give characters from index 0 to 3
console.log(html.slice(-4)); // slice function it will give last 4 characters
console.log(html.split('>')); // split function it will split the string at '>' and return array of strings
console.log(html.replace('This', 'It')); // replace function it will replace first occurance of 'This' with 'It'

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

