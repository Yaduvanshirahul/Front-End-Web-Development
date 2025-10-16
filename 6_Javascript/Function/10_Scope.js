const username = 'Rahul'; // global scope
const userAge = 12;

function add(){ // local scope
    const x = 4;
    const y = 1;
    console.log(x+y);
    console.log(username); // it will give Rahul because it is in global scope
    console.log(userAge); // it will give 12 because it is in global scope

}

add(); // it will execute the function and give 5 but after this no execution will happen
console.log(username);// it will give Rahul because it is in global scope
// console.log(y); // it will give error because y is in local scope of add function

/* ****************************************************************** */

function a(){
    var b = 10;
    console.log(d); // it will give 23 because of lexical scoping which means function can access variable of its parent scope
    c();
    function c(){
        console.log(b); // it will give 10 because of lexical scoping
        console.log(d); // it will give 23 because of lexical scoping
    }
}

a(); // it will execute function a and give 10
// c(); // it will give error because c is in local scope of a function
// console.log(b); // it will give error because b is in local scope of a function
var d = 23;