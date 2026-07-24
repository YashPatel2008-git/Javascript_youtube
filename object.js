const details = {
    name : 'Yash',
    mobile : 9999999999,
    surname : 'patel',
    collage : 'L.D. engi.',
    course : 'Btech',

    age : function(birthyear) {         //! here we use : insted of =
        return 2026-birthyear;
    }
    
};

console.log(details.name);
console.log(details['mobile']);      //! variable name must be string 

let n = 'name';
console.log(details[n]);
console.log(details['sur'+n]); 

let interested = prompt("What do you want to know about yash ? \n chose between name , surname , mobile , collage , course : ");
//! console.log(details.interested);  // it give undefined 

if (details[interested]){
    console.log(details[interested]);
}else{
    console.log("There are not in details : ");
}


console.log(details.age(2008));
console.log(details['age'](2008));