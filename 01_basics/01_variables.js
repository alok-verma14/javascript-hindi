const accountId = 1223478;
let accountName = "Alok Verma";
var accountCity = "Patna";
accountState = "Bihar";
let accountCountry;
/*
    Prefer not use var because of issue in block scope and functional scope
*/
console.table([accountId, accountCity, accountState, accountCountry]);
