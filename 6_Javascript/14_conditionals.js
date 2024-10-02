/* Conditionals: JS mein kuch bhi likho wo mainly do parakaar mein se kisi ek prakaar ko belong karti hai 
                
                i falsy -> 0 ,false, undefined, null, NaN, document.all
                ii. truthy values rest.

*/


/* FALSY AND TRUTHY */

if(NaN){
    console.log("hey");
}
else{
    console.log("hello");
}

/* NaN : it's a false value which execute the else value */


/* 2. SWITCH STATEMENT */
var num =4;

switch(num){
    case 1:
    console.log("rahul");
    break;

    case 2:
        console.log("ram");
        break;
    
    case 3:
        console.log("shyam");
        break;

    default:
        console.log("nothing");
        break;
}

/* FOREACH LOOP: jab loop srf array pe chalta hai matlaab ki jab bhi tumhare paas ek array ho, tab use mein kaun aata hai foreach loop */

var a=[1,2,3,4,5,6,7,8,9,10,11,12,13];

a.forEach(function(val1) {
    console.log(val1+3);    /* NOTE: foreach kabhi bhi by default aap ke array mein change nahi karta hai wo aapko changes krke deta hai array ki temporary copy par jiske wajah se array humesha same rehta hai */
});

console.log(a);

/* object par loop karne ke liye hota h forin loop */

var ob ={
    name: "rahul",
    age: 21,
    contact:9501733478
};

for(var key in ob){
   // console.log(key);  /* it will print the variable not the data */

   // console.log(ob[key]); /* it will print the value */

    console.log(key, ob[key]); /* it will print the key value pair  */
}