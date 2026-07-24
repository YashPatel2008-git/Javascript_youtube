//! change the content //

let h1 = document.querySelector("h1");
console.dir(h1);
// h1.innerHTML= "<b> Yash Patel </b>";  //* Used for use Html elements  

// h1.innerText = "Jay swaminarayan";    //* Used for only text edit

// h1.textContent = "Hyy hello..."       //* Used for only text eit


//! setAttributes !//
let img = document.querySelector('img');
img.setAttribute(
    'src' , 
    'https://media.gettyimages.com/id/1250472984/photo/swaminarayan-akshardham-delhi-india.jpg?s=612x612&w=0&k=20&c=nxgn1OsZ0Hk5tP4FrAcxmN8DeprtBpDhGIQAFwbbTBw=')

let a =document.querySelector('a');
a.setAttribute('href', 'https://www.google.com');

//! getAttributes  !//

console.log(img.getAttribute('src'));
console.log(a.getAttribute('href'));
