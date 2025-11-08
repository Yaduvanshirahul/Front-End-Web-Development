/*
 First Class Function: js mein ek concept hai jiska matlb hota hai ki aap fnc ko use kar skte ho as a value
  */


 function abcd(a){
        a();
 }

 abcd(function(){console.log("hello rahul");
 })

 /* note: here we pass the argument as function. so we call these function in above function */