/* First Class Function: A language is said to have first class function when the Function in that Language are treated as Normal Values Or like Variables, You can save them, you can Pass them as Arguments To Another Functions 

*/

/* eg:1 */

setTimeout(function(){
    console.log("2 sec ke baad");
}, 2000);

/* eg:2 */

function abcd(a){
    a();
}

abcd(function(){console.log("hello rahul");
})