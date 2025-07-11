/* 
IIFE: Immediately invoked function expression. iife hai function ko turant chalane ki kala, is tareeke se ki hum log koi private variable bana paaye 
*/

var ans = (function(){
  var privateval =12; /* we can't access these a variable */

  return {
     getter: function(){
        console.log(privateval); // ans.getter()
     },

     setter: function(val){
        privateval=val;    // ans.setter(24)
     }
  }
})()