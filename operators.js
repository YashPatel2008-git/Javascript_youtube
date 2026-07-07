// Operators : 
// types : arithmetic   , unary      ,   comparision     , logical     , assignment    , bitwise , ternary
//        + - * / % **     ++ --  > < >= <= == ===   And,Or<not   = += -= *= /=               ? :
//

// 1) Arithmetic Operators : + - * / % ++ -- **
// + operator has two different meanings, one is addition and the other is concatenation.

/*
let a = 5;
let b = 2;
console.log(a + b); // 7    addition
console.log(a + " " + b); // 5 2   concatenation

console.log(a - b); // 3    substraction
console.log(a * b); // 10     multiplication
console.log(a / b); // 2.5   division
console.log(a % b); // 1     modulus  remainder or shesh 
console.log(a ** b); // 25    exponentiation  5^2 = 25
*/

// 2) Comparision Operators : 
// >
// <
// >= 
// <= 
// == , !=  not strict equality operator
// === , !==  strict equality operator
/*console.log("10>'4'" ,10>"4");   // true because 10 is greater than 4 
console.log("10 > 4" ,10 > 4);     // true because 10 is greater than 4
console.log("10 < 4" ,10 < 4);     // false because 10 is not less than 4
console.log("10 >=4" ,10 >=4);    // true because 10 is greater than or equal to 4
console.log("10 <=4" ,10 <=4);    // false because 10 is not less than or equal to 4
*/

// == operator check only value not datatype
// === operator check both value and datatype
/*console.log("10  == 10" , 10  == 10);    // true because 10 is equal to 10
console.log("10 =='10'" , 10 =="10");   // true because 10 is equal to "10" in value but not in datatype
console.log("10==='10'" , 10==="10");  // false because 10 is number and "10" is string
console.log("10 === 10" , 10 === 10);   // true because 10 is equal to 10 in both value and datatype
*/

// same for != and !== operators
//. != operator check only value not datatype
//. !== operator check both value and datatype
/*console.log("10 != 10" , 10 != 10);    // false because 10 is equal to 10
console.log("10 != '10'" , 10 != "10");   // false because 10 is equal to "10" in value
console.log("10 !== '10'" , 10 !== "10");  // true because 10 is number and "10" is string
console.log("10 !== 10" , 10 !== 10);   // false because 10 is equal to 10 in both value and datatype
*/


// 3) Logical Operators :
// && logical and    ==> all conditions must be true to return true
                    //   1          2         And        or
                    //  true       true       true      true
                    //  false      true       false     true
                    //  true       false      false     true
                    //  false      false      false     false

// || logical or   ==> any one condition true then result will be true 
//. ! logical not  ==> reverse the result like false -> true   true -> false



//  4) unary operators (++ , --)
// ++ => increase 1 in the value of variable
// -- => decrease 1 in the value of variable
// there are two types of unary operators, pre-increment/decrement and post-increment/decrement
// pre-increment/decrement => first increase/decrease the value of variable then return the value
// post-increment/decrement => first return the value of variable then increase/decrease the value

/*
let a = 5;
let b = 10;
console.log("a : ", a, "b : ", b);  // 5 10
let ans = a++ + b;  // post-increment
console.log("Post-increment:","ans : ",  ans,"a : ", a, "b : ", b);  //


a=5,b=10;
console.log("a : ", a, "b : ", b);  // 5 10
ans = ++a + b;  // pre-increment
console.log("Pre-increment:","ans : ",  ans,"a : ", a, "b : ", b);  // 16 6 10


a=5,b=10;
console.log("a : ", a, "b : ", b);  // 5 10
ans = a-- + b;  // post-decrement
console.log("Post-decrement:","ans : ",  ans,"a : ", a, "b : ", b);  // 15 4 10


a=5,b=10;
console.log("a : ", a, "b : ", b);  // 5 10
ans = --a + b;  // pre-decrement
console.log("Pre-decrement:","ans : ",  ans,"a : ", a, "b : ", b);  // 14 4 10
*/

