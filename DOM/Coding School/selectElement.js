
//! select document by Id
let h1 = document.getElementById("Heading");
console.log(h1);    // sometimes give only tag
console.dir(h1);    // it gives all details about tag

//! select element by class name 
let class1 = document.getElementsByClassName("heading-class");
console.dir(class1);  

//! select element by tag
let tag = document.getElementsByTagName("p");
console.dir(tag);


//! selecting By query :
//! 1 ) 
let query1 = document.querySelector("button");
console.dir(query1);

let query3 = document.querySelector("h1");
console.dir(query3);


//! 2) 
let query2 = document.querySelectorAll("h1");
console.dir(query2);
