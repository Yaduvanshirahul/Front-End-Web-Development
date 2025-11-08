/* Execution Context: it is a container matlb jab bhi hum function chalaayege function apna ek khudka ek imaginary container bana lega jismeinn uski teen cheeje haogi:
 
(i).  variables
(ii). functions inside that parent function
(iii). lexical environment of that function

          or 

it is a container where the function's code is executed an it's created whenever a function is called , it contains above 3 things.

*/

function abcd(){
    var a =12;     /* here abcd() can access variable a and function def() */
    
    function def(){
        var b =6;   /* b variable is accessible to its parents functionn def(). it can't be accessible by abcd() */
        console.log(b);
    }
    def()
    console.log(a);
   
}

abcd();
def();  /* here def() show an error that def not defined. 


/* Execution Context-> in these we have 3 things one is 
                       i.   a
                       ii.  def function
                       iii. lexical environment -> it defines what are accessible or what are not. it define the control on data. where have of access
*/          