/* arrays: hum ek variable mein ek value store kar paate hai job humein ek se jaada value store karni ho tab fir use hota hai array ka,matlab ki array aapko freedom deta hai ek se jaada value use karne ki 

array : groups of value which of have same similar types;

*/

var arr = [1,2,3,4,5]; /* this is not an array. this is an object */
console.log(arr[2]);
for(var i=0;i<5;i++){
    console.log(arr[i]);
}

/* array behind the scene */

var arr1 = [1,2,6,2,5];
arr1[-1]=34;


/* arr1 = {
    0:1,
    1:2,
    2:6,
    3:2,
    4:5
}
    this is actual converted into array */

    for(var i=-1;i<5;i++){
        console.log(arr1[i]);
    }