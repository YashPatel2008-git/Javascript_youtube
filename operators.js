// Operators : 
// types : arithmetic       ,   comparision     , logical     , assignment    , bitwise , ternary
//        + - * / % ++ -- **   > < >= <= == ===   And,Or<not   = += -= *= /=               ? :
//

// 1) Arithmetic Operators : + - * / % ++ -- **
// + operator has two different meanings, one is addition and the other is concatenation.

let a = 5;
let b = 2;
console.log(a + b); // 7    addition
console.log(a + " " + b); // 5 2   concatenation

console.log(a - b); // 3    substraction
console.log(a * b); // 10     multiplication
console.log(a / b); // 2.5   division
console.log(a % b); // 1     modulus  remainder or shesh 
console.log(a ** b); // 25    exponentiation  5^2 = 25


// 2) Comparision Operators : 
// >
// <
// >= 
// <= 
// == , !=  not strict equality operator
// === , !==  strict equality operator
console.log("10>'4'" ,10>"4");   // true because 10 is greater than 4 
console.log("10 > 4" ,10 > 4);     // true because 10 is greater than 4
console.log("10 < 4" ,10 < 4);     // false because 10 is not less than 4
console.log("10 >=4" ,10 >=4);    // true because 10 is greater than or equal to 4
console.log("10 <=4" ,10 <=4);    // false because 10 is not less than or equal to 4

// == operator check only value not datatype
// === operator check both value and datatype
console.log("10  == 10" , 10  == 10);    // true because 10 is equal to 10
console.log("10 =='10'" , 10 =="10");   // true because 10 is equal to "10" in value but not in datatype
console.log("10==='10'" , 10==="10");  // false because 10 is number and "10" is string
console.log("10 === 10" , 10 === 10);   // true because 10 is equal to 10 in both value and datatype

// same for != and !== operators
//. != operator check only value not datatype
//. !== operator check both value and datatype
console.log("10 != 10" , 10 != 10);    // false because 10 is equal to 10
console.log("10 != '10'" , 10 != "10");   // false because 10 is equal to "10" in value
console.log("10 !== '10'" , 10 !== "10");  // true because 10 is number and "10" is string
console.log("10 !== 10" , 10 !== 10);   // false because 10 is equal to 10 in both value and datatype