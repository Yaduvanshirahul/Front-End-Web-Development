/* object: ek se jaada bande ki baat ki to hua array, ek baande ke bare mein saari baat ki to hua object

object: object hai ek bande ki details
*/

 /* 1. BLANK OBJ: empty curley braces called object in js */

//var a ={};      

/* FILLED OBJ: when curley braces filled with data its also obj */

var a = {
     age: 23,
     name:"rahul",
     email: "email@male.com",
     linkedin: "harsh",
     contact: 950183230,  /* these all are properties */
     
     run: function(){}  /* this is not property this is method */

};

/* NOTE: when we have to identiy about only one person and write about only that person */

console.log(a);
console.log(a.linkedin);

a.name= "raj"     /* here value of name will change */

/* delete object */

delete a.email;