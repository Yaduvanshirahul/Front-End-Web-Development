const accountId = 1234
let accountName = "rahul"   
var accountPassword = "1122"
accountCity = "ludhiana"

let accountState; // here the value show undefined

console.log(accountId);

console.table([accountName, accountPassword, accountCity]);

/* here we change the value of variable */

accountName="ram"
accountPassword = 112233
accountCity = "mohali"

console.table([accountName, accountPassword, accountCity, accountState])

/* Note: we don't prefer to use the var variable because the issue of block scope and functional scope */