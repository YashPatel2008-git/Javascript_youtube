// Functions :::
// function : it is a block of code that perform specific task 

//! Why use function ? 
// for make code reuseble , easy to readable

//! function declararation : 
// function functionname(parameters){
//     code 
//   }

//! function calling 
// Functions are executed when they are called or invoked
//   functionname(arguments);

//! function parameters : 
// Parameters allow you to send values to a function
// Parameters are listed in parentheses in the function definition

//! function arguments : 
// Function parameters and arguments are distinct concepts
// Parameters are the names listed in the function definition
// Arguments are the values received by the function

//! function expression 
// A function expression is a function stored in a variable  
// when we assign function in variable is called function expression
/* ex :
    let name = function(parameters){
        code
    }
    
    name(argument);
*/



//! arrow function
// Arrow Functions is a short syntax for function expressions
// You can skip the function keyword
// You can skip the return keyword
// You can skip the curly brackets

//! syntax : () =>{ };

const sum = (a1,a2) => a1+a2;
console.log(sum(5,7));

let mul = x => {console.log(x*x)};
mul(5)


//! type of parameters :::::::
//! 1) Default 
function add(v1 , v2){
    console.log(va , v2);   
}

add();       // not pass argument then it conatain default value which is //! undefined 


//! 2)  spred and 