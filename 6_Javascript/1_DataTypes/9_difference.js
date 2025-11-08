/* VAR LET CONST 

JS -> (i) es5 version -> var function
      (ii) es6 version -> let const both are available

NOTE: we use both.we don't have to install html and css js they are preinstalled in browser with latest version. Browser update property update

*/

/* var: var: var functionn scoped hota hai => var apne parent func main khi bhi use ho skta hai. var adds itself to window object */

function abcd(){
    for( var i=0;i<12;i++){
        console.log(i)
    }
console.log(i); /* in other language it show error as i not declare */
}

/* let & const: let braces scoped hota hai */

abcd();

function abc(){
    for(let i=0;i<12;i++){
        console.log(i);
    }
    console.log(i);  /* here it show error */
}
abc();

