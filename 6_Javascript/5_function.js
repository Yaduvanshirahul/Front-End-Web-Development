/* Functions: mainly works for 3 reason

1. when you don't want to run your code immediately. you want to run it in future.
2. when you want to reuse your code.
3. when you want to run your code with different data.

*/

 function  hellobolo(){
    console.log("HELLO");
 }

 hellobolo();
 /* first write your code and then after run code using function */

 function oatsBanoandKhao(){
    console.log("patila chadao");
    console.log("oats dalo");
    console.log("milk dalo ");
    console.log("aur khao");
    console.log("");
 }

 oatsBanoandKhao(); // for day1
 oatsBanoandKhao(); // for day2

 /* to reuse the code */

 function ab(a,b,c) // these are parameteres -- variable jinme value store hoti hai arguments wali
 {
    console.log(a);
    console.log(b);
 }


 ab(12,122,1222);// these are arguments --> real value jo hum dete hai func. chalate time

