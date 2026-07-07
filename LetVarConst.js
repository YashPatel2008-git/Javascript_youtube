// var  :::: 
// when var is declared then it divided into 2 parts and the declaration part is on the top and the initialization part is on the bottom and it is called hoisting
// var => functional scoped ,  redeclarable,  can be updated

/* happens in 2 steps   
var a = undefined

consol.log(a)  // undefined
a = 10;        */
console.log(a);  // output => undefined
var a = 10;
console.log(a);  // output => 10
a=30;
console.log(a);  // output => 30


/*//// let  ::::
 when let is declared then it is not hoisted but it is not assessiable before the declaration/initialization .
 part which is above declaration/initialization of variable is called temporal dead zone(TDZ).
 let => block scoped({blocked scope}) ,  not redeclarable,  can be updated.*/

 // in tdz js is known variable is exist but it is not initialized yet so it is not accessible before initialization.

//console.log(b);  // give an errot =>  FIRST.js:21 Uncaught ReferenceError: Cannot access 'b' before initialization
let b = 20;         // above this line all part is tdz for variable b....
console.log(b);  // output => 20
b=40;
console.log(b);  // output => 40

/* const  :::: 
 when const is declared then it is not hoisted but it is not assessiable before the declaration/initialization.
 const => block scoped ,  not redeclarable,  cannot be updated. */

const c = 20;        // above this line all part is tdz for variable c....
console.log(c);  // output => 20
// c=40;            //give an error => Uncaught TypeError: Assignment to constant variable.


/// predict output of below code snippet
//1.
console.log(name2);  // output : undefined
var name2 = "Yash";

// 2.
var x = 1;
{
    var x = 2;
}
console.log(x);  // output : 2

// 3.
let y = 10;    // globle variable
{
    let y = 20;           // block variable 
    console.log("inside : " , y);  // output : 20
}
console.log("Outside : " , y);  // output : 10

// 4.
if(true){
    var d = 1;       // var only respect function not block like if-else , loops etc.
    let e = 2;       // let respect block so it is not accessible outside the block
}
console.log(d);  // output : 1
console.log(e);  // reference error => Uncaught ReferenceError: e is not defined
console.log("hello");